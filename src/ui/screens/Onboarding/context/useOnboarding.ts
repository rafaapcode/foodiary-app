import { useContext } from 'react';
import { OnboardingContext } from '.';

export function useOnboarding () {
  const ctx = useContext(OnboardingContext);

  if(!ctx)  {
    throw new Error('`useOnboarding` must be used only inside `<OnboardingProvider />>`');
  }

  return ctx;
};
