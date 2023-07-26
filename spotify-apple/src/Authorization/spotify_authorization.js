
import { generateRandomString } from "../../helperFunctions/helperFunctions.js";
export const spotifyLoginUrl = () => {
  const clientId = "af551c71f0694e188a49f3241d74bdb8";
  const redirectUrl = "http://127.0.0.1:5173/";
  const state = generateRandomString(16);
  const scope = "playlist-read-private playlist-modify-private playlist-modify-public";
  const authorizationUrl = "https://accounts.spotify.com/authorize?";
  const queryParams = {
    response_type: "token",
    client_id:clientId,
    scope: scope,
    redirect_uri:redirectUrl,
    state: state,
  };
  const queryUrlFormat = new URLSearchParams(queryParams).toString();
  return authorizationUrl + queryUrlFormat;
};

