import { useNavigation } from '@react-navigation/native';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeftIcon } from 'lucide-react-native';
import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './style';

const Header = () => {
  const { top } = useSafeAreaInsets();
  const { goBack } = useNavigation();

  const isImageInput = true;

  return (
    <>
      <StatusBar animated translucent barStyle="light-content" />

      <View style={[styles.container]}>
        {isImageInput && (
          <ImageBackground
            style={styles.image}
            source={{
              uri: 'https://i0.wp.com/pat.feldman.com.br/wp-content/uploads/2012/01/comida-caseira.jpg?resize=800%2C540&ssl=1',
            }}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0)']}
              style={styles.overlay}
              start={{ y: 0.5, x: 0 }}
              end={{ y: 1, x: 0 }}
            />
          </ImageBackground>
        )}
        <View style={[styles.content, { marginTop: !isImageInput ? top : 0 }]}>
          <View style={styles.pageTitleContainer}>
            <Button onPress={goBack} variant="ghost" size="icon">
              <ChevronLeftIcon size={20} color={theme.colors.white} />
            </Button>
            <AppText weight="medium" color={theme.colors.gray[300]}>
              Refeição
            </AppText>
          </View>

          <View style={styles.caloriesContainer}>
            <AppText color={theme.colors.gray[300]}>Calorias</AppText>
            <AppText color={theme.colors.white} weight="medium">
              650kcal
            </AppText>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
