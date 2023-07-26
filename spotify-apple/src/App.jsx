import { useState, useEffect } from "react";
import { spotifyLoginUrl } from "./Authorization/spotify_authorization.js";
import PlaylistComponent from "./Playlist/PlaylistComponent.jsx";
import {
  getUserInfo,
  getPlaylistsForUser,
} from "../helperFunctions/helperFunctions.js";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [playlistData, setPlaylistData] = useState(null);
  useEffect(() => {
    const currentUrl = window.location.href;
    const hashFragment = currentUrl.split("#")[1];
    const accessToken = new URLSearchParams(hashFragment).get("access_token");
    if (accessToken) {
      setToken(accessToken);
      console.log(accessToken);
      getUserInfo(accessToken)
        .then((data) => {
          const { images, id } = data;
          setUserData({ id, images });
          console.log("token recieved");
          return getPlaylistsForUser(accessToken, id);
        })
        .then((results) => {
          setPlaylistData(results);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const onLoginHandler = () => {
    const url = spotifyLoginUrl();
    window.open(url, "_blank");
  };
  const onNextHandler = (direction) => {
    getPlaylistsForUser(token, userData.id, playlistData[direction])
      .then((results) => {
        setPlaylistData(results);
      })
      .catch((err) => {
        console.log(err, "Err in next button");
      });
  };
  if (!playlistData) {
    return (
      <>
        <button onClick={onLoginHandler}>Login In With Spotify</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Playlists</h1>
        <PlaylistComponent
          playlistData={playlistData}
          onNextHandler={onNextHandler}
        />
      </>
    );
  }
}

export default App;
