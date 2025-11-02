import { Button } from '@ui/components/Button';
import { FormGroup } from '@ui/components/FormGroup';
import { Input } from '@ui/components/input';
import { useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextInput, View } from 'react-native';
import Step, {
  StepContent,
  StepFooter,
  StepHeader,
  StepSubTitle,
  StepTitle,
} from '../components/step';
import { OnboardingSchema } from '../schema';

export default function CreateAccountStep() {
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const form = useFormContext<OnboardingSchema>();

  const handleSubmit = form.handleSubmit((formdata) => {
    console.log(formdata, null, 2);
  });

  return (
    <Step>
      <StepHeader>
        <StepTitle>Crie sua conta</StepTitle>
        <StepSubTitle>Para poder visualizar seu progresso</StepSubTitle>
      </StepHeader>

      <StepContent>
        <View style={{ gap: 16 }}>
          <Controller
            name="account.name"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormGroup label="Nome" error={fieldState.error?.message}>
                <Input
                  autoFocus
                  autoCapitalize="words"
                  autoCorrect={false}
                  autoComplete="name"
                  returnKeyType="next"
                  value={field.value}
                  onChangeText={field.onChange}
                  onSubmitEditing={() => emailInputRef.current?.focus()}
                />
              </FormGroup>
            )}
          />
          <Controller
            name="account.email"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormGroup label="E-mail" error={fieldState.error?.message}>
                <Input
                  ref={emailInputRef}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="email"
                  returnKeyType="next"
                  value={field.value}
                  onChangeText={field.onChange}
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                />
              </FormGroup>
            )}
          />
          <Controller
            name="account.password"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormGroup label="Senha" error={fieldState.error?.message}>
                <Input
                  ref={passwordInputRef}
                  placeholder="Mínimo de 8 caracteres"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  autoComplete="new-password"
                  returnKeyType="next"
                  value={field.value}
                  onChangeText={field.onChange}
                  onSubmitEditing={() =>
                    confirmPasswordInputRef.current?.focus()
                  }
                />
              </FormGroup>
            )}
          />
          <Controller
            name="account.confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormGroup
                label="Confirmar Senha"
                error={fieldState.error?.message}
              >
                <Input
                  ref={confirmPasswordInputRef}
                  placeholder="Mínimo de 8 caracteres"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="new-password"
                  secureTextEntry
                  returnKeyType="done"
                  value={field.value}
                  onChangeText={field.onChange}
                  onSubmitEditing={() => handleSubmit()}
                />
              </FormGroup>
            )}
          />
        </View>
      </StepContent>

      <StepFooter align="start">
        <Button onPress={handleSubmit} style={{ width: '100%' }}>
          Criar conta
        </Button>
      </StepFooter>
    </Step>
  );
}
