import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { ArrowRightIcon } from 'lucide-react-native';
import Step, { StepContent, StepFooter, StepHeader, StepSubTitle, StepTitle } from '../components/step';
import { useOnboarding } from '../context/useOnboarding';

export default function GoalStep() {
  const { nextStep } = useOnboarding();

  return (
    <Step>
      <StepHeader>
        <StepTitle>Qual é seu objetivo ?</StepTitle>
        <StepSubTitle>O que deseja alcançar com a dieta  ?</StepSubTitle>
      </StepHeader>

      <StepContent>
        <AppText>Testando</AppText>
      </StepContent>

      <StepFooter>
        <Button size='icon' onPress={nextStep}>
          <ArrowRightIcon size={20} color={theme.colors.black[700]}/>
        </Button>
      </StepFooter>
    </Step>
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
