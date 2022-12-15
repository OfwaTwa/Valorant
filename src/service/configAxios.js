import axios from "axios";
const axiosInstance = axios.create({ baseURL: "https://valorant-api.com/v1/" });

export default axiosInstance;