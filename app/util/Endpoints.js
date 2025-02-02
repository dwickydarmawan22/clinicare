export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_ONGKIR_URL = process.env.NEXT_PUBLIC_ONGKIR_API_URL;

export const API_ENDPOINTS = {
  GetClinicList: `/api/clinics`,
  GetClinicDetail: (id) => `/api/clinics/${id}`,
  GetCategories: "/api/categories",
};
