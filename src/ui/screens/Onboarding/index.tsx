import { AppText } from '@ui/components/AppText';
import { OnboardingStack } from '@ui/screens/Onboarding/OnboardingStack';
import React from 'react';
import { View } from 'react-native';
import { OnboardingProvider } from './context/OnboardingProvider';

const Onboarding = () => {
  return (
    <OnboardingProvider>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 32,
        }}
      >
        <AppText size="3xl">Onboading</AppText>
        <OnboardingStack />
      </View>
    </OnboardingProvider>
  );
};

export default Onboarding;
