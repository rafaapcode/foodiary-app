import { env } from '@app/config/env';
import axios, { isAxiosError } from 'axios';

export abstract class Service {
  private static refreshTokenInterceptorId: number | undefined;

  protected static client =  axios.create({
    baseURL: env.api.url,
  });

  static setAccessToken(token: string) {
    this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  static removeAccessToken() {
    this.client.defaults.headers.common.Authorization = undefined;
  }

  static removeRefreshTokenHandler() {
    if(this.refreshTokenInterceptorId !== undefined) {
      this.client.interceptors.response.eject(this.refreshTokenInterceptorId);
      this.refreshTokenInterceptorId = undefined;
    }
  }

  static setRefreshTokenHandler(token: string) {
    this.removeRefreshTokenHandler();

    this.refreshTokenInterceptorId = this.client.interceptors.response.use(
      response => response,
      (error) => {
        if(!isAxiosError(error) || error.response?.status !== 401) {
          return Promise.reject(error);
        }

      },
    );
  }
}
