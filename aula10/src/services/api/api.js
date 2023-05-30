import axios from "axios";

export const getApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api/"
})