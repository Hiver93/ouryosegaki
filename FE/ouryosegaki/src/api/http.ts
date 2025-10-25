import axios from "axios";
import type { AxiosRequestConfig } from "axios";

// axios 객체 생성
// localServer 통신
function localServer() {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: "http://43.207.181.178:8080/", // 직접 URL 지정
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  return axios.create(axiosConfig);
}


export { localServer };
