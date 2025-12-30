import { useCreateMeal } from '@app/hooks/mutations/useCreateMeal';
import { useMeal } from '@app/hooks/queries/useMeal';
import { AppStackNavigationProps } from '@app/navigation/AppStack';
import { MealStatus } from '@app/types/Meals';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import {
  AudioModule,
  RecordingPresets,
  setAudioModeAsync,
  useAudioRecorder,
} from 'expo-audio';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';

export type AudioModalState = 'idle' | 'recording' | 'recorded';

interface IUseAudioModalControllerParams {
  onClose: () => void;
  onCreate?: () => void;
}

export function useAudioModalController({
  onClose,
  onCreate,
}: IUseAudioModalControllerParams) {
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const [state, setState] = useState<AudioModalState>('idle');
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

  const { navigate } = useNavigation<AppStackNavigationProps>();

  const queryClient = useQueryClient();

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

  useEffect(() => {
    if (meal?.status === MealStatus.FAILED) {
      Alert.alert(
        'Oops !',
        'Ocorreu um erro ao processar a sua refeição. Tente novamente.',
      );
    }
    if (meal?.status === MealStatus.SUCCESS) {
      memoizedOnClose.current();
      memoizedOnCreate.current?.();
      queryClient.invalidateQueries({ queryKey: ['meals'] });
      navigate('MealDetails', { mealId: meal.id });
    }
  }, [meal?.status, navigate]);

  useEffect(() => {
    async function load() {
      const status = await AudioModule.requestRecordingPermissionsAsync();

      if (!status.granted) {
        Alert.alert(
          'Permissão negada',
          'Não foi possível obter permissão para gravar áudio.',
        );
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

  async function handleConfirm() {
    if (!audioUri) {
      return;
    }
    try {
      await createMeal(audioUri);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      Alert.alert('Error', 'Could not create meal. Please try again.');
    }
  }

  return {
    state,
    handleStartRecording,
    handleStopRecording,
    audioUri,
    handleConfirm,
    handleTryAgain,
    isLoading: isCreatingMeal || isLoadingMeal || isProcessingMeal,
  };
}
