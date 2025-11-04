import { AuthService } from '@app/services/AuthService';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { zodResolver } from '@hookform/resolvers/zod';
import { isAxiosError } from 'axios';
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

  const handleSubmit = form.handleSubmit(async (data) => {
    try{
      const response = await AuthService.signIn(data);
      console.log('Sign-in response:', response);
    }catch(error){
      if(isAxiosError(error)) {
        console.log('Axios error details:', error);
      }
    }
  });

  return {
    form,
    bootomSheetModalRef,
    bottom,
    passwordInputRef,
    handleSubmit,
  };
}
