import { AppText } from '@ui/components/AppText';
import CreateMealOptions from '@ui/components/CreateMealOptions';
import { theme } from '@ui/styles/theme';
import React from 'react';
import { View } from 'react-native';
import { useHomeContext } from '../../context/useHomeContext';
import { styles } from './styles';

const EmptyState = () => {
  const { isLoading } = useHomeContext();
  return (
    <View style={[styles.container, { opacity: isLoading ? 0.5 : 1 }]}>
      <AppText color={theme.colors.gray[700]}>
        Cadastre sua primeira refeição através de uma das opções abaixo:{' '}
      </AppText>

      <CreateMealOptions disabled={isLoading}/>
    </View>
  );
};

export default EmptyState;
