import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
//환경변수이므로(숨기기) .env 파일을 만들어서 거기서 세팅해줘서 가져온다

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default api;