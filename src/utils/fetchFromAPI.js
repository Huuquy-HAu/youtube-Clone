import axios from "axios";

const URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '2935879071mshb8f7f7422227d65p15d90djsn31c97495b540',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const res =  await axios.get(`${URL}/${url}`,options)
    return res
}