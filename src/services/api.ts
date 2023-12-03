import axios, {AxiosInstance } from 'axios';
import { BACKEND_URL, TIMEOUT } from '../consts';
//import { StatusCodes } from 'http-status-codes';


// const StatusCodeMapping: Record<number, boolean> = {
//   [StatusCodes.BAD_REQUEST]: true,
//   [StatusCodes.UNAUTHORIZED]: true,
//   [StatusCodes.NOT_FOUND]: true
// };


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
  });

  return api;
};


