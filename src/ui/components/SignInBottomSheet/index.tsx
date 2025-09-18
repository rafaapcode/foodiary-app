import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Ref } from 'react';
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
  const { bootomSheetModalRef, bottom } = useSignInBottomSheetController(ref);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal ref={bootomSheetModalRef}>
        <BottomSheetView style={[styles.container, { paddingBottom: bottom }]}>
          <AppText size="3xl" weight="semiBold" style={styles.head}>
            Acesse sua conta
          </AppText>
          <View style={styles.form}>
            <FormGroup label="E-mail">
              <Input  InputComponent={BottomSheetTextInput}/>
            </FormGroup>
            <FormGroup label="Senha">
              <Input  InputComponent={BottomSheetTextInput}/>
            </FormGroup>
            <Button>Entrar</Button>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
