import { Gender } from '@app/types/Gender';
import { Service } from './Service';

export class ProfileService extends Service {
  static async updateProfile(payload: ProfileService.UpdateProfilePayload) {
    await this.client.put('/profile', payload);
  }
}

export namespace ProfileService {
  export type UpdateProfilePayload = {
    name: string;
    birthDate: Date;
    height: number;
    weight: number;
    gender: Gender;
  };
}
