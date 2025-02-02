import clientHttp from "../../util/ApiConfig";
import { API_BASE_URL, API_ENDPOINTS } from "../../util/Endpoints";

export const GetClinicList = (data) => {
  return clientHttp(API_BASE_URL)
    .get(API_ENDPOINTS.GetClinicList, {
      params: data,
    })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      throw err.response?.data;
    });
};
