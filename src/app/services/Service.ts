import { env } from '@app/config/env';
import axios, { isAxiosError } from 'axios';
import base64 from 'react-native-base64';

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

  static setRefreshTokenHandler(refreshHandler: () => Promise<void>) {
    this.removeRefreshTokenHandler();

    this.refreshTokenInterceptorId = this.client.interceptors.response.use(
      response => response,
      async (error) => {
        if(!isAxiosError(error) || error.response?.status !== 401 || !error.config || error.config.url === '/auth/refresh-token') {
          return Promise.reject(error);
        }

        await refreshHandler();
        return this.client(error.config);
      },
    );
  }

  static async uploadPresignedPOST({ uploadSignature, file }: Service.UploadPresignedPostParams) {
    const decodedSignature = base64.decode(uploadSignature);
    const { url, fields } = JSON.parse(decodedSignature) as Service.DecodedUploadSignature;

    const form = new FormData();

    for (const [key, value] of Object.entries(fields)) {
      form.append(key, value);
    }

    form.append('file', file as any);

    await axios.post(url,  form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export namespace Service {
  export type UploadPresignedPostParams = {
    uploadSignature: string;
    file: {
      name: string;
      type: string;
      uri: string;
    };
  };
  export type DecodedUploadSignature = {url: string; fields: Record<string, string>};
}
