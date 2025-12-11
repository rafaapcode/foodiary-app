import { Gender } from '@app/types/Gender';
import { Goal } from '@app/types/Goal';
import { Service } from './Service';

export class AccountService extends Service {
  static async getMe(): Promise<AccountService.GetMeResponse> {
    const { data } = await this.client.get<AccountService.GetMeResponse>('/me');
    return {
      ...data,
      profile: {
        ...data.profile,
        birthDate: new Date(data.profile.birthDate),
      },
    };
  }
}

export namespace AccountService {
  export type GetMeResponse = {
    profile: {
      name: string;
      birthDate: Date;
      gender: Gender;
      height: number;
      weight: number;
      goal: Goal;
    };
    goal: {
      calories: number;
      proteins: number;
      carbohydrates: number;
      fats: number;
    };
  };
}
