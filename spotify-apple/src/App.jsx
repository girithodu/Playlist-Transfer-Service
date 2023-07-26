import { useState, useEffect } from "react";
import { spotifyLoginUrl} from "./Authorization/spotify_authorization.js";
import axios from "axios";
import {getUserInfo, getPlaylistsForUser } from '../helperFunctions/helperFunctions.js';
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
        const { images, id} = data;
        setUserData({id, images})
        return getPlaylistsForUser(accessToken, id);
      })
      .then((results) => {
        console.log(results);
        setPlaylistData(results);
      })
      .catch((err) => console.log(err));
    }
  }, []);

  const onLoginHandler = () => {
    const url = spotifyLoginUrl();
    window.open(url, "_blank");
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
      </>
    );
  }
}

export default App;
