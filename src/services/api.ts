import axios from "axios";

export const getAccessToken = async () => {
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  const params = new URLSearchParams();

  params.append("grant_type", "client_credentials");
  params.append("client_id", CLIENT_ID);
  params.append("client_secret", CLIENT_SECRET);

  const { data } = await axios.post(
    "https://accounts.spotify.com/api/token",
    params
  );

  return data;
};

export const searchDataSpotify = async (
  accessToken: string,
  searchPayload: string
) => {
  const { data } = await axios.get(
    `https://api.spotify.com/v1/search?query=${searchPayload}&type=artist,album,track`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
};
