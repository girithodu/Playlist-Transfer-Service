import axios from "axios";
export const generateRandomString = (length) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const getUserInfo = async (accessToken) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const results = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const { data } = results;
    return data;
  } catch (err) {
    throw err;
  }
};

export const getPlaylistsForUser = async (accessToken, id, url) => {
  let urlToUse = url || `https://api.spotify.com/v1/users/${id}/playlists`
  // eslint-disable-next-line no-useless-catch
  try {
    const results = await axios.get(
      `${urlToUse}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const { data } = results;
    return data;
  } catch (err) {
    throw err;
  }
};
