import AsyncStorage from '@react-native-async-storage/async-storage';

export class AuthTokenManager {
  private static KEY = '@foodiary:auth-tokens';

  static async save(tokens: AuthTokenManager.Tokens) {
    await AsyncStorage.setItem(this.KEY, JSON.stringify(tokens));
  }

  static async load(): Promise<AuthTokenManager.Tokens | null> {
    try {
      const json = await AsyncStorage.getItem(this.KEY);
      return json ? JSON.parse(json) : null;
    } catch {
      return null;
    }
  }

  static async clear() {
    await AsyncStorage.removeItem(this.KEY);
  }
}

export namespace AuthTokenManager {
  export type Tokens = {
    accessToken: string;
    refreshToken: string;
  }
}
