import axios from 'axios';

axios.interceptors.request.use((config) => {
    config.params = {
      ...config.params,
    }
    return config;
  }, (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(function (response) {
  if (response.data) {
    if (response.data.buserviceErrorCode === 'USER_HAS_NOT_PERMISSION') {
      window.location.href = response.data.buserviceErrorMsg;
    }
  }
  return response.data;
});

export const APIBase = 'http://api.douban.com/v2';