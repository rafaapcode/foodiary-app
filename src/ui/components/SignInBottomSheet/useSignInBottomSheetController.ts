import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Ref, useImperativeHandle, useRef } from 'react';
import { TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ISignInBottomSheet } from './ISignInBottomSheet';

export function useSignInBottomSheetController(ref: Ref<ISignInBottomSheet>) {
  const bootomSheetModalRef = useRef<BottomSheetModal>(null);
  const { bottom } = useSafeAreaInsets();
  const passwordInputRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    open: () => bootomSheetModalRef.current?.present(),
  }), []);

  const handleSubmit = () => {
    console.log('submit');
  };

  return {
    bootomSheetModalRef,
    bottom,
    passwordInputRef,
    handleSubmit,
  };
}
