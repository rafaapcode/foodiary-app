import { theme } from '@ui/styles/theme';
import { formatSeconds } from '@ui/utils/formatSeconds';
import { CheckIcon, PlayIcon, Trash2Icon } from 'lucide-react-native';
import React from 'react';
import { View } from 'react-native';
import { AppText } from '../AppText';
import { Button } from '../Button';
import { styles } from './styles';

interface IAudioPlayerProps {
  duration: number;
}

const AudioPlayer = ({ duration }: IAudioPlayerProps) => {
  return (
    <>
      <View style={styles.actionsGroup}>
        <Button size="icon" variant="neutral" rippleStyle="light">
          <Trash2Icon size={20} color={theme.colors.gray[500]} />
        </Button>
        <Button size="icon" variant="neutral" rippleStyle="light">
          <PlayIcon
            size={20}
            color={theme.colors.lime[600]}
            fill={theme.colors.lime[600]}
          />
        </Button>
        <Button size="icon">
          <CheckIcon size={20} color={theme.colors.black[700]} />
        </Button>
      </View>
      <AppText
        align="center"
        style={styles.actionLabel}
        color={theme.colors.gray[500]}
      >
        {formatSeconds(0)} / {formatSeconds(duration)}
      </AppText>
    </>
  );
};

export default AudioPlayer;
