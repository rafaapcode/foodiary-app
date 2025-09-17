import greetingsBg from '@ui/assets/greetings-bg/image.png';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { Logo } from '@ui/components/Logo';
import { SignInBottomSheet } from '@ui/components/SignInBottomSheet';
import { ISignInBottomSheet } from '@ui/components/SignInBottomSheet/ISignInBottomSheet';
import { theme } from '@ui/styles/theme';
import React, { useRef } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const Greetings = () => {
  const signInBottomSheetRef = useRef<ISignInBottomSheet>(null);

  return (
    <>
      <ImageBackground
        source={greetingsBg}
        resizeMode="cover"
        style={styles.container}
      >
        <SafeAreaView style={styles.content}>
          <Logo />
          <View style={styles.ctaContainer}>
            <AppText
              color={theme.colors.white}
              weight="semiBold"
              size="3xl"
              style={styles.heading}
            >
              Controle sua dieta de forma simples
            </AppText>
            <View style={styles.ctaContent}>
              <Button>Criar conta</Button>
              <View style={styles.signInContainer}>
                <AppText color={theme.colors.white}>Já tem uma conta?</AppText>
                <TouchableOpacity onPress={() => signInBottomSheetRef.current?.open()}>
                  <AppText color={theme.colors.lime[500]} weight="medium">
                    Acesse sua conta
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>

      <SignInBottomSheet ref={signInBottomSheetRef} />
    </>
  );
};

export default Greetings;
