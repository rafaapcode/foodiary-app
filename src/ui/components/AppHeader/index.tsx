import { useNavigation } from '@react-navigation/native';
import { theme } from '@ui/styles/theme';
import { ChevronLeftIcon } from 'lucide-react-native';
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { AppText } from '../AppText';
import { Button } from '../Button';
import { styles } from './style';

interface IAppHeaderProps {
  title: string;
  rightAction?: ReactNode;
}

const AppHeader = ({ title, rightAction }: IAppHeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Button onPress={goBack} size="icon" variant="ghost">
        <ChevronLeftIcon size={20} color={theme.colors.black[700]} />
      </Button>
      <AppText size="sm" weight="medium" align='center' style={styles.title}>
        {title}
      </AppText>

      <View style={styles.rightAction}>
        {rightAction}
      </View>
    </View>
  );
};

export default AppHeader;
