import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import { Ref } from 'react';
import { AppText } from '../AppText';
import { ISignInBottomSheet } from './ISignInBottomSheet';
import { useSignInBottomSheetController } from './useSignInBottomSheetController';

interface ISignInBottomSheetProps {
  ref: Ref<ISignInBottomSheet>;
}

export function SignInBottomSheet({ ref }: ISignInBottomSheetProps) {
  const{
    bootomSheetModalRef,
    bottom,
  } = useSignInBottomSheetController(ref);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal ref={bootomSheetModalRef}>
        <BottomSheetView style={{ paddingBottom: bottom }}>
          <AppText>Acesse sua conta</AppText>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
