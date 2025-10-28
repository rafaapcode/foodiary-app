import { Button } from '@ui/components/Button';
import RadioGroup, {
  RadioGroupDescription,
  RadioGroupIcon,
  RadioGroupItem,
  RadioGroupItemInfo,
  RadioGroupLabel,
} from '@ui/components/RadioGroup';
import { theme } from '@ui/styles/theme';
import { ArrowRightIcon } from 'lucide-react-native';
import Step, {
  StepContent,
  StepFooter,
  StepHeader,
  StepSubTitle,
  StepTitle,
} from '../components/step';
import { useOnboarding } from '../context/useOnboarding';

export enum ActivityLevel {
  SEDENTARY = 'SEDENTARY',
  LIGHT = 'LIGHT',
  MODERATE = 'MODERATE',
  HEAVY = 'HEAVY',
  ATHLETE = 'ATHLETE',
}

export default function ActivityLevelStep() {
  const { nextStep } = useOnboarding();
  return (
    <Step>
      <StepHeader>
        <StepTitle>Que dia você nasceu ?</StepTitle>
        <StepSubTitle>Cada faixa etária responde de forma única</StepSubTitle>
      </StepHeader>

      <StepContent position="center">
        <RadioGroup>
          <RadioGroupItem value={ActivityLevel.SEDENTARY}>
            <RadioGroupIcon>🛏️</RadioGroupIcon>
            <RadioGroupItemInfo>
              <RadioGroupLabel>Sedentário</RadioGroupLabel>
              <RadioGroupDescription>Pouco ou nenhum exercício</RadioGroupDescription>
            </RadioGroupItemInfo>
          </RadioGroupItem>
          <RadioGroupItem value={ActivityLevel.LIGHT}>
            <RadioGroupIcon>🥬</RadioGroupIcon>
            <RadioGroupItemInfo>
              <RadioGroupLabel>Leve</RadioGroupLabel>
              <RadioGroupDescription>Exercício leve 1-2x por semana</RadioGroupDescription>
            </RadioGroupItemInfo>
          </RadioGroupItem>
          <RadioGroupItem value={ActivityLevel.MODERATE}>
            <RadioGroupIcon>☀️</RadioGroupIcon>
            <RadioGroupItemInfo>
              <RadioGroupLabel>Moderado</RadioGroupLabel>
              <RadioGroupDescription>Exercício moderado 3-5x por semana</RadioGroupDescription>
            </RadioGroupItemInfo>
          </RadioGroupItem>
          <RadioGroupItem value={ActivityLevel.HEAVY}>
            <RadioGroupIcon>🔥</RadioGroupIcon>
            <RadioGroupItemInfo>
              <RadioGroupLabel>Pesado</RadioGroupLabel>
              <RadioGroupDescription>Exercício pesado 6-7x por semana</RadioGroupDescription>
            </RadioGroupItemInfo>
          </RadioGroupItem>
          <RadioGroupItem value={ActivityLevel.ATHLETE}>
            <RadioGroupIcon>⛹️</RadioGroupIcon>
            <RadioGroupItemInfo>
              <RadioGroupLabel>Atleta</RadioGroupLabel>
              <RadioGroupDescription>Treino profissional diário</RadioGroupDescription>
            </RadioGroupItemInfo>
          </RadioGroupItem>
        </RadioGroup>
      </StepContent>

      <StepFooter>
        <Button size="icon" onPress={nextStep}>
          <ArrowRightIcon size={20} color={theme.colors.black[700]} />
        </Button>
      </StepFooter>
    </Step>
  );
}
