import { useState, useEffect } from "react";
import { spotifyLoginUrl } from "./Authorization/spotify_authorization.js";
import "./App.css";


//window.open(URL, name, specs, replace)

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const currentUrl = window.location.href;
    const hashFragment = currentUrl.split("#")[1];
    const accessToken = new URLSearchParams(hashFragment).get("access_token");
    if(accessToken) {
      setToken(accessToken);
    }
  }, []);

  const onLoginHandler = () => {
    const url = spotifyLoginUrl();
    window.open(url, "_blank");
  };

  if (!token) {
    return (
      <>
        <button onClick={onLoginHandler}>Login In With Spotify</button>
      </>
    );
  } else {
    return(
      <>
      <h1>Playlists</h1>
      </>
    );
  }
}

export default App;
