import { theme } from '@ui/styles/theme';
import { formatSeconds } from '@ui/utils/formatSeconds';
import { MicIcon, SquareIcon } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { AppText } from '../AppText';
import { Button } from '../Button';
import AudioPlayer from './AudioPlayer';
import { styles } from './styles';

interface IActionsProps {
  state: 'idle' | 'recording' | 'recorded';
  onStartRecording?: () => void;
  onStopRecording?: () => void;
}

const Actions = ({ state, onStartRecording, onStopRecording }: IActionsProps) => {
  const [recordTimeInSeconds, setRecordTimeInSeconds] = useState(0);

  useEffect(() => {
    if(state !== 'recording') {
      return;
    }

    const intervalId = setInterval(() => {
      setRecordTimeInSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [state]);

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
    return  <>
        <Button onPress={onStopRecording} size="icon" variant="neutral" rippleStyle="light">
          <SquareIcon size={20} color={theme.colors.lime[600]} fill={theme.colors.lime[600]} />
        </Button>

        <AppText align='center' style={styles.actionLabel} color={theme.colors.gray[500]}>
          {formatSeconds(recordTimeInSeconds)}
        </AppText>
      </>;
  }

  if (state === 'recorded') {
    return <AudioPlayer duration={recordTimeInSeconds}/>;
  }

  return null;
};

export default Actions;
