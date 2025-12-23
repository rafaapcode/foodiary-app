import { AudioModule, RecordingPresets, setAudioModeAsync, useAudioRecorder } from 'expo-audio';
import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

export type AudioModalState =  'idle' | 'recording' | 'recorded';

export function useAudioModalController() {
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const [state, setState] = useState<AudioModalState>('idle');
  const audioRecorder = useAudioRecorder(RecordingPresets.LOW_QUALITY);

  useEffect(() => {
    async function load() {
      const status = await AudioModule.requestRecordingPermissionsAsync();

      if (!status.granted) {
        Alert.alert('Permissão negada', 'Não foi possível obter permissão para gravar áudio.');
      }

      setAudioModeAsync({
        playsInSilentMode: true,
        allowsRecording: true,
      });
    }
    load();
  }, []);

  async function handleStartRecording() {
    await audioRecorder.prepareToRecordAsync();
    audioRecorder.record();
    setState('recording');
  }

  const handleStopRecording = useCallback(async () => {
    await audioRecorder.stop();
    setAudioUri(audioRecorder.uri);
    setState('recorded');
  }, []);

  function handleTryAgain() {
    setState('idle');
  }

  function handleConfirm() {
    alert('confirm');
  }

  return {
    state,
    handleStartRecording,
    handleStopRecording,
    isLoading: false,
    audioUri,
    handleConfirm,
    handleTryAgain,
  };
}
