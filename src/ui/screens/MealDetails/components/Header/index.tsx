import { useNavigation } from '@react-navigation/native';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { ChevronLeftIcon } from 'lucide-react-native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './style';

const Header = () => {
  const { top } = useSafeAreaInsets();
  const { goBack } = useNavigation();

  return (
    <>
      <StatusBar animated translucent barStyle="light-content" />
      <View style={[styles.container, { paddingTop: top }]}>
        <View style={styles.content}>
          <View style={styles.pageTitleContainer}>
            <Button onPress={goBack} variant='ghost' size='icon'>
              <ChevronLeftIcon size={20} color={theme.colors.white} />
            </Button>
            <AppText weight='medium' color={theme.colors.gray[300]}>Refeição</AppText>
          </View>

          <View style={styles.caloriesContainer}>
            <AppText color={theme.colors.gray[300]}>Calorias</AppText>
            <AppText color={theme.colors.white} weight='medium'>650kcal</AppText>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
