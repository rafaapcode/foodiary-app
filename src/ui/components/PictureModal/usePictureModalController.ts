import { useCreateMeal } from '@app/hooks/mutations/useCreateMeal';
import { useMeal } from '@app/hooks/queries/useMeal';
import { AppStackNavigationProps } from '@app/navigation/AppStack';
import { MealStatus } from '@app/types/Meals';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';

export type AudioModalState = 'idle' | 'recording' | 'recorded';

interface IUsePictureModalControllerParams {
  onClose: () => void;
  onCreate?: () => void;
}

export function usePictureModalController({ onClose,  onCreate }: IUsePictureModalControllerParams) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const { navigate } = useNavigation<AppStackNavigationProps>();

  const queryClient  = useQueryClient();

  const memoizedOnClose = useRef(onClose);
  memoizedOnClose.current = onClose;

  const memoizedOnCreate = useRef(onCreate);
  memoizedOnCreate.current = onCreate;

  const {
    createMeal,
    isLoading: isCreatingMeal,
    createdMealId,
  } = useCreateMeal();

  const {
    meal,
    isLoading: isLoadingMeal,
    isProcessing: isProcessingMeal,
  } = useMeal(createdMealId);

  async function handleTakePicture() {
    if (!cameraRef.current) {
      return;
    }

    const picture = await cameraRef.current.takePictureAsync({
      imageType: 'jpg',
    });
    setPhotoUri(picture.uri);
  }

  function handleTryAgain() {
    setPhotoUri(null);
  }

  async function handleConfirm() {
    if (!photoUri) {
      return;
    }
    try {
      await createMeal(photoUri);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      Alert.alert('Error', 'Could not create meal. Please try again.');
    }
  }

  useEffect(() => {
    if(meal?.status === MealStatus.FAILED) {
      Alert.alert('Oops !', 'Ocorreu um erro ao processar a sua refeição. Tente novamente.');
    }
    if(meal?.status === MealStatus.SUCCESS) {
      memoizedOnClose.current();
      memoizedOnCreate.current?.();
      queryClient.invalidateQueries({ queryKey: ['meals'] });
      navigate('MealDetails', { mealId: meal.id });
    }

  }, [meal?.status, navigate]);
  return {
    handleConfirm,
    handleTryAgain,
    permission,
    requestPermission,
    handleTakePicture,
    cameraRef,
    photoUri,
    isLoading: isCreatingMeal || isLoadingMeal || isProcessingMeal,
  };
}
