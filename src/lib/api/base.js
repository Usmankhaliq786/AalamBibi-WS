import axios from "axios";   
export const axiosInstance = axios.create({
  baseURL: baseURL || "https://stgapi.crunchcraft.com"
});
