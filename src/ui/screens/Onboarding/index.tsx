import { AppText } from '@ui/components/AppText';
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <AppText size='3xl'>Onboading</AppText>
    </View>
  );
};

export default Onboarding;
