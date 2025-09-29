import { createContext } from 'react';

interface IOnboardingContextValue {}

export const OnboardingContext = createContext<IOnboardingContextValue>({} as IOnboardingContextValue);

