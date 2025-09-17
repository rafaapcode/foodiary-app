import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Ref, useImperativeHandle, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ISignInBottomSheet } from './ISignInBottomSheet';

export function useSignInBottomSheetController(ref: Ref<ISignInBottomSheet>) {
   const bootomSheetModalRef = useRef<BottomSheetModal>(null);
  const { bottom } = useSafeAreaInsets();

  useImperativeHandle(ref, () => ({
    open: () => bootomSheetModalRef.current?.present(),
  }), []);

  return {
    bootomSheetModalRef,
    bottom,
  };
}
