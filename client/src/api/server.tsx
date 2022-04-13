import axios from "axios";
import { SOCKET_URL } from "../config/default";

const baseURL = process.env.NODE_ENV === "production" ? "" : SOCKET_URL;

export const serverAxios = axios.create({
  baseURL,
});
