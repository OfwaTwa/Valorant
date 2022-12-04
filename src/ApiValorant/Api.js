import axios from "axios";

export const axiosValorant = async () => {
    const url = "https://valorant-api.com/v1/";
    const link = await axios.get(url);
    return link;
};