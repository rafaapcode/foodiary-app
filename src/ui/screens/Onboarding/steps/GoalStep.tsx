import { Button } from '@ui/components/Button';
import RadioGroup, { RadioGroupIcon, RadioGroupItem, RadioGroupLabel } from '@ui/components/RadioGroup';
import { theme } from '@ui/styles/theme';
import { ArrowRightIcon } from 'lucide-react-native';
import Step, { StepContent, StepFooter, StepHeader, StepSubTitle, StepTitle } from '../components/step';
import { useOnboarding } from '../context/useOnboarding';

export enum Goal {
    MANTAIN = 'MANTAIN',
    GAIN = 'GAIN',
    LOSE = 'LOSE',
  }

export default function GoalStep() {
  const { nextStep } = useOnboarding();

  return (
    <Step>
      <StepHeader>
        <StepTitle>Qual é seu objetivo ?</StepTitle>
        <StepSubTitle>O que deseja alcançar com a dieta  ?</StepSubTitle>
      </StepHeader>

      <StepContent>
        <RadioGroup>
          <RadioGroupItem value={Goal.LOSE}>
            <RadioGroupIcon>🥦</RadioGroupIcon>
            <RadioGroupLabel>Perder peso</RadioGroupLabel>
          </RadioGroupItem>
          <RadioGroupItem value={Goal.MANTAIN}>
            <RadioGroupIcon>🍍</RadioGroupIcon>
            <RadioGroupLabel>Manter o peso</RadioGroupLabel>
          </RadioGroupItem>
          <RadioGroupItem value={Goal.GAIN}>
            <RadioGroupIcon>🥩</RadioGroupIcon>
            <RadioGroupLabel>Ganhar peso</RadioGroupLabel>
          </RadioGroupItem>
        </RadioGroup>
      </StepContent>

      <StepFooter>
        <Button size='icon' onPress={nextStep}>
          <ArrowRightIcon size={20} color={theme.colors.black[700]}/>
        </Button>
      </StepFooter>
    </Step>
  );
}
