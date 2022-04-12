import axios from "axios";
import { SERVER_URL } from "../config/default";

const baseURL = process.env.NODE_ENV === "production" ? "" : SERVER_URL;

export const serverAxios = axios.create({
  baseURL,
});
