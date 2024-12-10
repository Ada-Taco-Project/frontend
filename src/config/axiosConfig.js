import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://172.28.15.102:8080", // 백엔드 IP 주소
  headers: {
    "Content-Type": "application/json",
  },
});

// http://172.28.15.102:8080

export default axiosInstance;
