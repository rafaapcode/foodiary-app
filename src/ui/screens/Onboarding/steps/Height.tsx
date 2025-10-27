import { Button } from '@ui/components/Button';
import { FormGroup } from '@ui/components/FormGroup';
import { Input } from '@ui/components/input';
import { theme } from '@ui/styles/theme';
import { ArrowRightIcon } from 'lucide-react-native';
import Step, { StepContent, StepFooter, StepHeader, StepSubTitle, StepTitle } from '../components/step';
import { useOnboarding } from '../context/useOnboarding';

export default function HeightStep() {
  const { nextStep } = useOnboarding();
  return (
    <Step>
      <StepHeader>
        <StepTitle>Qual é seu gênero ?</StepTitle>
        <StepSubTitle>Seu gênero influencia no tipo de dieta</StepSubTitle>
      </StepHeader>

      <StepContent position="center">
        <FormGroup label='Altura' style={{ width: '100%' }}>
          <Input placeholder='175' keyboardType='numeric'/>
        </FormGroup>
      </StepContent>

      <StepFooter>
        <Button size="icon" onPress={nextStep}>
          <ArrowRightIcon size={20} color={theme.colors.black[700]} />
        </Button>
      </StepFooter>
    </Step>
  );
}
