import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { View } from 'react-native';
import { useOnboarding } from '../context/useOnboarding';

export default function GoalStep() {
  const {
    currentStepIndex,

    nextStep,
    prevStep,
  } = useOnboarding();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AppText size="3xl">Goal Step</AppText>
      <Button onPress={prevStep}>Voltar</Button>
      <AppText size="3xl">{currentStepIndex}</AppText>
      <Button onPress={nextStep}>Avançar</Button>
    </View>
  );
}
