import { default as axios } from "axios";

const clientHttp = (baseURL) => {
  const instance = axios.create({
    baseURL: baseURL,
  });

  return instance;
};

export default clientHttp;
