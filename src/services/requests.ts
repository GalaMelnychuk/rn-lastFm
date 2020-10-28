import axios from 'axios';

const API_KEY = '01f99863c9dc028a8a5a3d52f0c5a6ae';
const BASE_URL = `http://ws.audioscrobbler.com/2.0`;

export const requests = {
  getPopularTracks: async () => {
    try {
      const data = await axios({
        url: `${BASE_URL}/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`,
        method: 'get',
      });
      return data;
    } catch (error) {
      console.log('error', error);
    }
  },

  getArtistInfo: async (artistName: string) => {
    try {
      const data = await axios({
        url: `${BASE_URL}/?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`,
        method: 'get',
      });
      return data;
    } catch (error) {
      console.log('error', error);
    }
  },

  trackSearch: async (trackTittle: string) => {
    console.log('trackTittle!!!!', trackTittle);
    try {
      const data = await axios({
        url: `${BASE_URL}/?method=track.search&track=${trackTittle}&api_key=${API_KEY}&format=json`,
        method: 'get',
      });
      return data;
    } catch (error) {
      console.log('error', error);
    }
  },
};
