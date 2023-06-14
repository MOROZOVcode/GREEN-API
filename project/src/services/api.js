import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { BACKEND_URL, REQUEST_TIMEOUT } from '../const';
import { toast } from 'react-toastify';

export const StatusCodeMapping = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response) => !!StatusCodeMapping[response.status];

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn(error.response.data.error);
      }
      throw error;
    }
  );

  return api;
};
