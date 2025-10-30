import { zodResolver } from '@hookform/resolvers/zod';
import { OnboardingStack } from '@ui/screens/Onboarding/OnboardingStack';
import { theme } from '@ui/styles/theme';
import { FormProvider, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { OnboardingHeader } from './components/onboardingHeader';
import { OnboardingProvider } from './context/OnboardingProvider';
import { onboardingSchema } from './schema';

const Onboarding = () => {
  const form  = useForm({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      birthDate: new Date(),
      height: '',
      weight: '',
      account: {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
      },
    },
  });

  return (
   <FormProvider {...form}>
     <OnboardingProvider>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: theme.colors.white }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <OnboardingHeader />
        <OnboardingStack />
      </KeyboardAvoidingView>
    </OnboardingProvider>
   </FormProvider>
  );
};

export default Onboarding;
