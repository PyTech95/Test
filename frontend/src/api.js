import axios from "axios";

const API = axios.create({
  baseURL: "api.jaipurfurniturecrm.online/api/users",
});

export default API;
