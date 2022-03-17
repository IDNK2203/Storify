import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1";
const TOKEN =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, cupiditate.";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
