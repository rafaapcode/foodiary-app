import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { ArrowRightIcon } from 'lucide-react-native';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Platform, TouchableWithoutFeedback } from 'react-native';
import Step, {
  StepContent,
  StepFooter,
  StepHeader,
  StepSubTitle,
  StepTitle,
} from '../components/step';
import { useOnboarding } from '../context/useOnboarding';
import { OnboardingSchema } from '../schema';

export default function BirthDateStep() {
  const { nextStep } = useOnboarding();
  const [isDatePickerVisible, setDatePickerVisibible] = useState(true);
  const form = useFormContext<OnboardingSchema>();

  function handleSelectDate(_event: DateTimePickerEvent, newDate?: Date) {
    if (!newDate) {
      return;
    }
    form.setValue('birthDate',newDate);
    if (Platform.OS === 'android') {
      setDatePickerVisibible(false);
    }
  }

  async function handleNextStep() {
    const isValid = await form.trigger('birthDate');
    if (isValid) {
      nextStep();
    }
  }

  return (
    <Step>
      <StepHeader>
        <StepTitle>Que dia você nasceu ?</StepTitle>
        <StepSubTitle>Cada faixa etária responde de forma única</StepSubTitle>
      </StepHeader>

      <StepContent position="center">
        <Controller
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <>
              {isDatePickerVisible && (
                <DateTimePicker
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                  value={field.value}
                  onChange={handleSelectDate}
                />
              )}
              {Platform.OS === 'android' && (
                <TouchableWithoutFeedback
                  onPress={() => setDatePickerVisibible(true)}
                >
                  <AppText
                    weight="semiBold"
                    size="3xl"
                    color={theme.colors.gray[700]}
                  >
                    {formatDate(field.value)}
                  </AppText>
                </TouchableWithoutFeedback>
              )}
            </>
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

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}
