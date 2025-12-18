import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { PlusIcon } from 'lucide-react-native';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

const Fab = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { bottom: bottom + 16 }]}>
      <Button size='icon'>
        <PlusIcon size={20} color={theme.colors.black[700]}/>
      </Button>
    </View>
  );
};

export default Fab;
