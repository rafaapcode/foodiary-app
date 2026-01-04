import { useUpdateProfile } from '@app/hooks/mutations/useUpdateProfile';
import { useAccount } from '@app/hooks/queries/useAccount';
import { Gender } from '@app/types/Gender';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EditProfileFormData, editProfileSchema } from './schema';

export function useEditProfileController() {
  const { top, bottom } = useSafeAreaInsets();
  const { goBack } = useNavigation();
  const { account } = useAccount();
  const { updateProfile, isLoading } = useUpdateProfile();

  const form = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: account?.profile.name || '',
      birthDate: account?.profile.birthDate || new Date(),
      height: account?.profile.height.toString() || '',
      weight: account?.profile.weight.toString() || '',
      gender: account?.profile.gender || Gender.MALE,
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const payload = {
        name: data.name,
        birthDate: data.birthDate,
        height: Number(data.height),
        weight: Number(data.weight),
        gender: data.gender,
      };

      await updateProfile(payload);
    } catch (error) {
      console.log(error);
    }
  });

  return {
    account,
    top,
    bottom,
    goBack,
    form,
    handleSubmit,
    isSubmitting: form.formState.isSubmitting || isLoading,
  };
}
