import { OnboardingStack } from '@ui/screens/Onboarding/OnboardingStack';
import { theme } from '@ui/styles/theme';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { OnboardingHeader } from './components/onboardingHeader';
import { OnboardingProvider } from './context/OnboardingProvider';

const Onboarding = () => {
  return (
    <OnboardingProvider>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: theme.colors.white }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <OnboardingHeader />
        <OnboardingStack />
      </KeyboardAvoidingView>
    </OnboardingProvider>
  );
};

export default Onboarding;
