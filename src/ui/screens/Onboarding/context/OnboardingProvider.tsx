import { ReactNode } from 'react';
import { OnboardingContext } from '.';

export function OnboardingProvider({ children }: {children: ReactNode}) {
  return <OnboardingContext.Provider value={{}}>
    {children}
  </OnboardingContext.Provider>;
}
