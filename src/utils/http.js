import axios from "axios";

export const apiAuth = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL + "auth/admin/",
    headers: {
        Accept: "application/json",
    },
});