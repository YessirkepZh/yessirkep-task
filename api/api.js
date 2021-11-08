import Axios from 'axios';
import * as Sentry from '@sentry/browser';

const api = Axios.create({
  baseURL: process.env.NUXT_APP_API,
  timeout: 30000,
});
api.defaults.headers.common['Content-Type'] = 'application/json';
api.interceptors.request.use(
  (conf) => {
    // eslint-disable-next-line no-param-reassign
    // conf.headers.Authorization = `Bearer ${token}`; //Add token
    // eslint-disable-next-line no-param-reassign
    conf.headers['Content-Type'] = 'application/json';
    return conf;
  },
  (error) => Promise.reject(error),
);
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const path = error.config.url;
    Sentry.captureMessage(
      new Error(`🤬 ${error.config.method} ${path} 🤯`),
      {
        extra: {
          path: error.config.url,
          method: error.config.method,
          body: error.config.data,
        },
        fingerprint: ['{{ default }}', error.config.url],
      },
    );
  },
);

export const testRequest = () => api.get('/todos');
