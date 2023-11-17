import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_URL } from 'env';
import { enqueueSnackbar } from 'notistack';
import { signOut } from 'reducers/profileSlice';
import { store } from 'reducers/store';

const beforeRequest = (config: InternalAxiosRequestConfig) => {
  const { isLoggedIn, accessToken }: ProfileType = store.getState().profile;
  if (isLoggedIn) {
    Object.assign(config.headers as any, {
      Authorization: `Bearer ${accessToken}`,
    });
  }
  try {
    if (config.data instanceof FormData) {
      Object.assign(config.headers as any, { 'Content-Type': 'multipart/form-data' });
    }
  } catch {}
  return config;
};

const onResponse = ({ data }: AxiosResponse) => {
  return data;
};

const onError = async (error: AxiosError<ErrorResponse>) => {
  const { response } = error;
  if (response) {
    const { data, status } = response;
    enqueueSnackbar(data.message);
    if (status === 401) {
      store.dispatch(signOut());
    }
  }
  return Promise.reject(error);
};

const client = axios.create({ baseURL: API_URL });
client.interceptors.request.use(beforeRequest);
client.interceptors.response.use(onResponse, onError);

export { client };
