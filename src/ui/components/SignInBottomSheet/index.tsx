import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Ref } from 'react';
import { View } from 'react-native';
import { AppText } from '../AppText';
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
        <BottomSheetView style={{ paddingBottom: bottom }}>
          <AppText size="3xl" weight="semiBold" style={styles.head}>
            Acesse sua conta
          </AppText>
          <View style={styles.form}>
            <FormGroup label="E-mail">
              <Input />
            </FormGroup>
            <FormGroup label="Senha">
              <Input />
            </FormGroup>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
