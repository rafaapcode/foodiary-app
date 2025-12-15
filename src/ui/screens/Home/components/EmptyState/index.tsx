import { AppText } from '@ui/components/AppText';
import CreateMealOptions from '@ui/components/CreateMealOptions';
import { theme } from '@ui/styles/theme';
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <AppText color={theme.colors.gray[700]}>Cadastre sua primeira refeição através de uma das opções abaixo: </AppText>

      <CreateMealOptions />
    </View>
  );
};

export default EmptyState;
