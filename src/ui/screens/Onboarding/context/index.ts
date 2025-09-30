import { createContext } from 'react';

interface IOnboardingContextValue {
  currentStepIndex: number;
  nextStep: () => void;
  prevStep: () => void;
}

export const OnboardingContext = createContext<IOnboardingContextValue>({} as IOnboardingContextValue);

