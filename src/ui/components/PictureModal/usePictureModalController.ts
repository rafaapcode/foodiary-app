import { useCameraPermissions } from 'expo-camera';

export type AudioModalState =  'idle' | 'recording' | 'recorded';

export function usePictureModalController() {
  const [permission, requestPermission] = useCameraPermissions();

  function handleTryAgain() {
    // setState('idle');
    alert('try again');
  }

  function handleConfirm() {
    alert('confirm');
  }

  return {
    handleConfirm,
    handleTryAgain,
    isLoading: false,
    permission,
    requestPermission,
  };
}
