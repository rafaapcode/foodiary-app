import { theme } from '@ui/styles/theme';
import { useVideoPlayer, VideoView } from 'expo-video';
import React from 'react';
import { View } from 'react-native';
import { AppText } from '../AppText';
import { Logo } from '../Logo';
import video from './loading_video.mp4';
import { styles } from './style';

interface ICreateMealLoaderProps {
  type: 'audio' | 'picture';
}

const CreateMealLoader = ({ type }: ICreateMealLoaderProps) => {
  const player = useVideoPlayer(video, player => {
    player.loop = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView player={player} style={styles.video} nativeControls={false}/>

      <View style={styles.content}>
        <Logo width={75} height={24} />
        <AppText color={theme.colors.gray[300]} align='center'>
          {type === 'audio'
            ? 'Estou ouvindo seu áudio...'
            : 'Estou analisando sua foto...'}
        </AppText>
      </View>
    </View>
  );
};

export default CreateMealLoader;
