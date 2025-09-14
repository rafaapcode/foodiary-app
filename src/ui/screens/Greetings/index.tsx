import greetingsBg from '@ui/assets/greetings-bg/image.png';
import { Logo } from '@ui/components/Logo';
import React from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const Greetings = () => {
  return (
    <ImageBackground source={greetingsBg} resizeMode='cover' style={styles.container}>
      <SafeAreaView>
        <Logo />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Greetings;
