import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default instance;
