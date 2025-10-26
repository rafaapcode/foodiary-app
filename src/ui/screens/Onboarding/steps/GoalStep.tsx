import Step from '../components/step';
import { useOnboarding } from '../context/useOnboarding';

export default function GoalStep() {
  const { currentStepIndex, nextStep } = useOnboarding();

  return (
    <Step />
  );
}

{/* <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AppText size="3xl">Goal Step</AppText>
      <AppText size="3xl">{currentStepIndex}</AppText>
      <Button onPress={nextStep}>Avançar</Button>
    </View> */}
