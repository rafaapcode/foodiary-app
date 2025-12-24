import { useCreateMeal } from '@app/hooks/mutations/useCreateMeal';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Alert } from 'react-native';

export type AudioModalState =  'idle' | 'recording' | 'recorded';

export function usePictureModalController() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const { createMeal } = useCreateMeal();

  async function handleTakePicture() {
    if(!cameraRef.current) {
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
    if(!photoUri) {
      return;
    }
    try {
      await createMeal(photoUri);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Could not create meal. Please try again.');
    }
  }

  return {
    handleConfirm,
    handleTryAgain,
    isLoading: false,
    permission,
    requestPermission,
    handleTakePicture,
    cameraRef,
    photoUri,
  };
}
