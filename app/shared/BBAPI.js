import axios from "axios";

const baseUrl = "https://www.breakingbadapi.com/api/";

export const getCharacters = () => {
  return axios.get(baseUrl + "characters?category=Breaking+Bad");
};

export default getCharacters;
