import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';

export type AudioModalState =  'idle' | 'recording' | 'recorded';

export function usePictureModalController() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

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

  function handleConfirm() {
    alert('enviar para api');
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
