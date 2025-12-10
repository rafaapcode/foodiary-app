import { useForceRender } from '@app/hooks/app/useForceRerender';
import { useAccount } from '@app/hooks/queries/useAccount';
import { AuthTokenManager } from '@app/lib/AuthTokensManager';
import { AuthService } from '@app/services/AuthService';
import { Service } from '@app/services/Service';
import { useQueryClient } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import { ReactNode, useCallback, useLayoutEffect, useState } from 'react';
import { AuthContext } from '.';

SplashScreen.preventAutoHideAsync();

interface ISetupAuthParams {
  accessToken: string;
  refreshToken: string;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [signedUp, setSignedUp] = useState(true);

  const { account, loadAccount } = useAccount({ enabled: false });
  const queryClient = useQueryClient();
  const forceRender = useForceRender();

  const signOut = useCallback(async () => {
    Service.removeAccessToken();
    Service.removeRefreshTokenHandler();

    queryClient.clear();
    forceRender();

    await AuthTokenManager.clear();
  }, [queryClient]);

  const setupAuth = useCallback(
    async (tokens: ISetupAuthParams) => {
      Service.setAccessToken(tokens.accessToken);
      Service.setRefreshTokenHandler(async () => {
        try {
          const storedTokens = await AuthTokenManager.load();
          if (!storedTokens) {
            throw new Error('No refresh token available');
          }
          const newTokens = await AuthService.refresh({
            refreshToken: storedTokens.refreshToken,
          });

          Service.setAccessToken(newTokens.accessToken);
          await AuthTokenManager.save(newTokens);
        } catch {
          signOut();
        }
      });

      await loadAccount();

      SplashScreen.hideAsync();
      setIsReady(true);
    },
    [signOut],
  );

  useLayoutEffect(() => {
    async function loadTokens() {
      const tokens = await AuthTokenManager.load();
      if (!tokens) {
        setIsReady(true);
        SplashScreen.hideAsync();
        return;
      }

      await setupAuth(tokens);
    }
    loadTokens();
  }, [loadAccount]);

  const signIn = useCallback(async (payload: AuthService.SignInPayload) => {
    const tokens = await AuthService.signIn(payload);
    await AuthTokenManager.save(tokens);
    await setupAuth(tokens);
  }, []);

  const signUp = useCallback(async (payload: AuthService.SignUpPayload) => {
    const tokens = await AuthService.signUp(payload);
    setSignedUp(true);
    await AuthTokenManager.save(tokens);
    await setupAuth(tokens);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{ signedIn: !!account, signedUp, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
