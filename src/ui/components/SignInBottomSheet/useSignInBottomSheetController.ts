import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { zodResolver } from '@hookform/resolvers/zod';
import { Ref, useImperativeHandle, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ISignInBottomSheet } from './ISignInBottomSheet';
import { signInSchema } from './schema';

export function useSignInBottomSheetController(ref: Ref<ISignInBottomSheet>) {
  const bootomSheetModalRef = useRef<BottomSheetModal>(null);
  const { bottom } = useSafeAreaInsets();
  const passwordInputRef = useRef<TextInput>(null);

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useImperativeHandle(ref, () => ({
    open: () => bootomSheetModalRef.current?.present(),
  }), []);

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return {
    form,
    bootomSheetModalRef,
    bottom,
    passwordInputRef,
    handleSubmit,
  };
}
