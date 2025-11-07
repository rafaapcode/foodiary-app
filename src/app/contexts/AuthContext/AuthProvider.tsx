import { AuthTokenManager } from '@app/lib/AuthTokensManager';
import { AuthService } from '@app/services/AuthService';
import { ReactNode, useCallback, useLayoutEffect, useState } from 'react';
import { AuthContext } from '.';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);

  useLayoutEffect(() => {
    async function loadTokens() {
      const tokens = await AuthTokenManager.load();
      setSignedIn(!!tokens);
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
