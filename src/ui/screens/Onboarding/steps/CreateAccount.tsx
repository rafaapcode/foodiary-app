import { Button } from '@ui/components/Button';
import { FormGroup } from '@ui/components/FormGroup';
import { Input } from '@ui/components/input';
import { useRef } from 'react';
import { TextInput, View } from 'react-native';
import Step, {
  StepContent,
  StepFooter,
  StepHeader,
  StepSubTitle,
  StepTitle,
} from '../components/step';
import { useOnboarding } from '../context/useOnboarding';

export default function CreateAccountStep() {
  const { nextStep } = useOnboarding();
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  function handleSubmit() {
    alert('Enviar');
  }

  return (
    <Step>
      <StepHeader>
        <StepTitle>Crie sua conta</StepTitle>
        <StepSubTitle>Para poder visualizar seu progresso</StepSubTitle>
      </StepHeader>

      <StepContent>
        <View style={{ gap: 16 }}>
          <FormGroup label="E-mail">
            <Input
              keyboardType="email-address"
              autoFocus
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />
          </FormGroup>
          <FormGroup label="Senha">
            <Input
              ref={passwordInputRef}
              placeholder='Mínimo de 8 caracteres'
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              autoComplete="new-password"
              returnKeyType="done"
              onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
            />
          </FormGroup>
          <FormGroup label="Confirmar Senha">
            <Input
              ref={confirmPasswordInputRef}
              placeholder='Mínimo de 8 caracteres'
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="new-password"
              secureTextEntry
              returnKeyType="done"
              onSubmitEditing={() => handleSubmit()}
            />
          </FormGroup>
        </View>
      </StepContent>

      <StepFooter align='start'>
        <Button onPress={nextStep} style={{ width: '100%' }}>
          Criar conta
        </Button>
      </StepFooter>
    </Step>
  );
}
