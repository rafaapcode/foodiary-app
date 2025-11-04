import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Ref } from 'react';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { AppText } from '../AppText';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../input';
import { ISignInBottomSheet } from './ISignInBottomSheet';
import { styles } from './styles';
import { useSignInBottomSheetController } from './useSignInBottomSheetController';

interface ISignInBottomSheetProps {
  ref: Ref<ISignInBottomSheet>;
}

export function SignInBottomSheet({ ref }: ISignInBottomSheetProps) {
  const { bootomSheetModalRef, bottom, passwordInputRef, handleSubmit, form } =
    useSignInBottomSheetController(ref);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal ref={bootomSheetModalRef}>
        <BottomSheetView style={[styles.container, { paddingBottom: bottom }]}>
          <AppText size="3xl" weight="semiBold" style={styles.head}>
            Acesse sua conta
          </AppText>
          <View style={styles.form}>
            <Controller
              control={form.control}
              name="email"
              render={({ fieldState, field }) => (
                <FormGroup label="E-mail" error={fieldState.error?.message}>
                  <Input
                    InputComponent={BottomSheetTextInput}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete="email"
                    returnKeyType="next"
                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                    value={field.value}
                    onChangeText={field.onChange}
                    disabled={form.formState.isSubmitting}
                  />
                </FormGroup>
              )}
            />

            <Controller
              control={form.control}
              name="password"
              render={({ fieldState, field }) => (
                <FormGroup label="Senha" error={fieldState.error?.message}>
                  <Input
                    ref={passwordInputRef}
                    InputComponent={BottomSheetTextInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    autoComplete="current-password"
                    returnKeyType="done"
                    onSubmitEditing={() => handleSubmit}
                    value={field.value}
                    onChangeText={field.onChange}
                    disabled={form.formState.isSubmitting}
                  />
                </FormGroup>
              )}
            />

            <Button
              onPress={handleSubmit}
              isLoading={form.formState.isSubmitting}
            >
              Entrar
            </Button>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
