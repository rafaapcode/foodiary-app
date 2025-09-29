import { AppText } from '@ui/components/AppText';
import { OnboardingStack } from '@ui/screens/Onboarding/OnboardingStack';
import React from 'react';
import { View } from 'react-native';

const Onboarding = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 32,
    }}>
      <AppText size='3xl'>Onboading</AppText>
      <OnboardingStack />
    </View>
  );
};

export default Onboarding;
