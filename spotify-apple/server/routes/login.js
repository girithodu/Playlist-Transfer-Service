import express from "express";
import "dotenv/config";
import {generateRandomString} from '../../helperFunctions/helperFunctions.js';
import querystring from 'querystring';
export const loginRouter = express.Router();

loginRouter.get("/spotify", (req, res) => {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
  querystring.stringify({
    response_type: 'code',
    client_id: process.env.VITE_SPOTIFY_CLIENT_ID,
    scope: scope,
    redirect_uri: process.env.VITE_REDIRECT_URL,
    state: state
  }))
});
