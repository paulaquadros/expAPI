import axios from "axios";

const axiosApp = axios.create({
  baseURL: "http://localhost:3366/v1",
});

export default axiosApp;
