import axios from "axios";

const API_KEY = '87700d8da90e406ca7961641243107';
const BASE_URL = 'http://api.weatherapi.com/v1';

export const getWeather = async () => {
  const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=London&aqi=no`);
  return response.data;
  console.log(response.data);
};

export const searchWeather = async (query) => {
  const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${query}&aqi=no`);
  return response.data;
};
