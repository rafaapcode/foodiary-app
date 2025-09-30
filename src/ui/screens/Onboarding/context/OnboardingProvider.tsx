import { AuthStackNavigationProps } from '@app/navigation/AuthStack';
import { useNavigation } from '@react-navigation/native';
import { ReactNode, useCallback, useState } from 'react';
import { OnboardingContext } from '.';
import { onboardingNavigation } from '../OnboardingStack';
import { orderedSteps } from '../steps';

export function OnboardingProvider({ children }: {children: ReactNode}) {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const { goBack } = useNavigation<AuthStackNavigationProps>();

  const nextStep = useCallback(() => {
    const nextStepIndex = currentStepIndex + 1;
    const nextStep = orderedSteps[nextStepIndex];

    if(!nextStep){
      return;
    }

    onboardingNavigation.navigate(nextStep);
    setCurrentStepIndex(nextStepIndex);
  }, [currentStepIndex]);

  const prevStep = useCallback(() => {
    const prevStepIndex = currentStepIndex - 1;

    if(!onboardingNavigation.canGoBack()){
      goBack();
      return;
    }
    onboardingNavigation.goBack();
    setCurrentStepIndex(prevStepIndex);
  }, [currentStepIndex, goBack]);

  return <OnboardingContext.Provider value={{
    currentStepIndex,
    nextStep,
    prevStep,
  }}>
    {children}
  </OnboardingContext.Provider>;
}
