import axios, { AxiosRequestConfig } from "axios";

export async function netWrapper(url: string, options?: AxiosRequestConfig) {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  if (!options) {
    options = {};
  }

  if (!options.method) {
    options.method = "GET";
  }

  options.headers = {
    ...options.headers,
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    "Content-Type": "application/json",
  };

  const fullUrl = baseUrl + url;

  try {
    const response = await axios(fullUrl, options);
    return response;
  } catch (error) {
    throw error;
  }
}
