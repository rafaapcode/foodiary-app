import { theme } from '@ui/styles/theme';
import { MicIcon } from 'lucide-react-native';
import React from 'react';
import { AppText } from '../AppText';
import { Button } from '../Button';
import { styles } from './styles';

interface IActionsProps {
  state: 'idle' | 'recording' | 'recorded';
  onStartRecording?: () => void;
}

const Actions = ({ state, onStartRecording }: IActionsProps) => {
  if (state === 'idle') {
    return (
      <>
        <Button onPress={onStartRecording} size="icon" variant="neutral" rippleStyle="light">
          <MicIcon size={20} color={theme.colors.lime[600]} />
        </Button>

        <AppText align='center' style={styles.actionLabel} color={theme.colors.gray[500]}>
          Clique no microfone para começar a gravar.
        </AppText>
      </>
    );
  }

  if (state === 'recording') {
    return <AppText color="white">Gravando</AppText>;
  }

  if (state === 'recorded') {
    return <AppText color="white">Gravado</AppText>;
  }

  return null;
};

export default Actions;
