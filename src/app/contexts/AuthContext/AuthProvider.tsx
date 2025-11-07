import { useAccount } from '@app/hooks/queries/useAccount';
import { AuthTokenManager } from '@app/lib/AuthTokensManager';
import { AuthService } from '@app/services/AuthService';
import { Service } from '@app/services/Service';
import { ReactNode, useCallback, useLayoutEffect, useState } from 'react';
import { AuthContext } from '.';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);

  const { account, loadAccount } = useAccount({ enabled: false });

  useLayoutEffect(() => {
    async function loadTokens() {
      const tokens = await AuthTokenManager.load();
      if(!tokens){
        setSignedIn(false);
        return;
      }
      Service.setAccessToken(tokens.accessToken);
      await loadAccount();
      setSignedIn(true);
    }
    loadTokens();
  }, []);

  const signIn = useCallback(async (payload: AuthService.SignInPayload) => {
    const tokens = await AuthService.signIn(payload);
    await AuthTokenManager.save(tokens);
    setSignedIn(true);
  }, []);

  const signUp = useCallback(async (payload: AuthService.SignUpPayload) => {
    const tokens = await AuthService.signUp(payload);
    await AuthTokenManager.save(tokens);
    setSignedIn(true);
  }, []);

  const signOut = useCallback(async () => {
    setSignedIn(false);
    await AuthTokenManager.clear();
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
