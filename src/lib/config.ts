import axios, {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const handleImage = (data?: string) => {
  if(!data) return null
  if (data?.startsWith("http")) {
    return data;
  } else {

    console.log("ddadca",data)
    return `${process.env.NEXT_PUBLIC_IMAGE_VIDEO_URL}/${data}`;
  }
}; 
export const withoutAuthAxios = (): AxiosInstance => {
  return axios.create({
    baseURL: `${BASE_URL}/api/public`,
    withCredentials: true,
  });
};