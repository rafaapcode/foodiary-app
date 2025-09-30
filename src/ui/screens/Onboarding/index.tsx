import { OnboardingStack } from '@ui/screens/Onboarding/OnboardingStack';
import { theme } from '@ui/styles/theme';
import { View } from 'react-native';
import { OnboardingHeader } from './components/onboardingHeader';
import { OnboardingProvider } from './context/OnboardingProvider';

const Onboarding = () => {
  return (
    <OnboardingProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.white,
        }}
      >
        <OnboardingHeader />
        <OnboardingStack />
      </View>
    </OnboardingProvider>
  );
};

export default Onboarding;
