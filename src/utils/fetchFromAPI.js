import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'd94dc7b8bfmshdd7f6b536095b0fp115a5fjsnb3fc71ab10ac',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

try {
	const response = await axios.get(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    
    return data;
} 