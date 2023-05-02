import axios from "axios";
 const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


// const api_key = 'a8d6277cbemsh363024606d4c092p1e9688jsn43f04d918680';
const api_key = 'cd130c9bccmsh49d273c735206acp1ef10ajsnd331283e1efa';

const options = {
    params: {
        maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': api_key,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };



export const fetchFromAPI = async (url) => {
    // console.log(`${BASE_URL}/${url}`)
    const data  = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(api_key);
    return data;
};
