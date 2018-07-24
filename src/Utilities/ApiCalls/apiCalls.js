import { setListKey } from '../../apiKeys.js';
import { CleanSet } from './../SetCleaner/setCleaner';

export const getSetInfo = async (query) => {
  const url = `https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/search/setlists?artistName=${query}&p=1`;
  const options = {
    method: 'GET',
    headers: {
    "x-api-key": "88dd80a6-bb67-45e1-ba54-295a69f20317",
    'Accept': 'application/json'
    }
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return CleanSet(data);
}

export default getSetInfo;