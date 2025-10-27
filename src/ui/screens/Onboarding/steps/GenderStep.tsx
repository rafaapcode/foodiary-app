import { Button } from '@ui/components/Button';
import RadioGroup, { RadioGroupIcon, RadioGroupItem, RadioGroupLabel } from '@ui/components/RadioGroup';
import { theme } from '@ui/styles/theme';
import { ArrowRightIcon } from 'lucide-react-native';
import Step, { StepContent, StepFooter, StepHeader, StepSubTitle, StepTitle } from '../components/step';
import { useOnboarding } from '../context/useOnboarding';

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
  }

export default function GenderStep() {
  const { nextStep } = useOnboarding();

  return (
    <Step>
      <StepHeader>
        <StepTitle>Qual é seu gênero ?</StepTitle>
        <StepSubTitle>Seu gênero influencia no tipo de dieta</StepSubTitle>
      </StepHeader>

      <StepContent>
        <RadioGroup  orientation='horizontal'>
          <RadioGroupItem value={Gender.MALE}>
            <RadioGroupIcon>👨</RadioGroupIcon>
            <RadioGroupLabel>Masculino</RadioGroupLabel>
          </RadioGroupItem>
          <RadioGroupItem value={Gender.FEMALE}>
            <RadioGroupIcon>👩</RadioGroupIcon>
            <RadioGroupLabel>Feminino</RadioGroupLabel>
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
