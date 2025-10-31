import { Gender } from '@app/types/Gender';
import { Button } from '@ui/components/Button';
import RadioGroup, {
  RadioGroupIcon,
  RadioGroupItem,
  RadioGroupLabel,
} from '@ui/components/RadioGroup';
import { theme } from '@ui/styles/theme';
import { ArrowRightIcon } from 'lucide-react-native';
import { Controller, useFormContext } from 'react-hook-form';
import Step, {
  StepContent,
  StepFooter,
  StepHeader,
  StepSubTitle,
  StepTitle,
} from '../components/step';
import { useOnboarding } from '../context/useOnboarding';
import { OnboardingSchema } from '../schema';

export default function GenderStep() {
  const { nextStep } = useOnboarding();
  const form = useFormContext<OnboardingSchema>();

  async function handleNextStep() {
    const isValid = await form.trigger('gender');
    if (isValid) {
      nextStep();
    }
  }

  return (
    <Step>
      <StepHeader>
        <StepTitle>Qual é seu gênero ?</StepTitle>
        <StepSubTitle>Seu gênero influencia no tipo de dieta</StepSubTitle>
      </StepHeader>

      <StepContent>
        <Controller
          control={form.control}
          name="gender"
          render={({ field, fieldState }) => (
            <RadioGroup
              value={field.value}
              onChangeValue={(value) => {
                field.onChange(value);
                form.trigger('gender');
              }}
              error={!!fieldState.error}
              orientation="horizontal"
            >
              <RadioGroupItem value={Gender.MALE}>
                <RadioGroupIcon>👨</RadioGroupIcon>
                <RadioGroupLabel>Masculino</RadioGroupLabel>
              </RadioGroupItem>
              <RadioGroupItem value={Gender.FEMALE}>
                <RadioGroupIcon>👩</RadioGroupIcon>
                <RadioGroupLabel>Feminino</RadioGroupLabel>
              </RadioGroupItem>
            </RadioGroup>
          )}
        />
      </StepContent>

      <StepFooter>
        <Button size="icon" onPress={handleNextStep}>
          <ArrowRightIcon size={20} color={theme.colors.black[700]} />
        </Button>
      </StepFooter>
    </Step>
  );
}
