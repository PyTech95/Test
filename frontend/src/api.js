import axios from "axios";

const API = axios.create({
  baseURL: "http://api.jaipurfurniturecrm.online/api/users",
});

export default API;
