

import { instance, SnackbarUtilities } from '@/utilities';


export const AxiosInterceptor = () => {


  instance.interceptors.response.use(
    (response) => {
      console.log('response', response);
      SnackbarUtilities.success('Success');
      return response;
    },
    (error) => {
      console.log('SS',error);
      SnackbarUtilities.error(error.response.data.error);
      return Promise.reject(error);
    }
  );
};