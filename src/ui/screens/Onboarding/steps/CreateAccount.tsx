import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { View } from 'react-native';
import { useOnboarding } from '../context/useOnboarding';

export default function CreateAccountStep() {
  const { currentStepIndex, nextStep } = useOnboarding();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AppText size="3xl">CreateAccount Step</AppText>
      <AppText size="3xl">{currentStepIndex}</AppText>
      <Button onPress={nextStep}>Avançar</Button>
    </View>
  );
}
