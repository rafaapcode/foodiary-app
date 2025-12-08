import { theme } from '@ui/styles/theme';
import React from 'react';
import { Modal, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../AppText';
import { Button } from '../Button';
import { styles } from './style';

const WelcomeModal = () => {
  return (
    <Modal visible transparent statusBarTranslucent animationType="fade">
      <StatusBar barStyle="light-content" animated />
      <View style={styles.container}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.wrapper}>
            <View style={styles.content}>
              <View style={styles.header}>
                <View style={styles.icon}>
                  <AppText>🥬</AppText>
                </View>

                <View style={styles.headerContent}>
                  <AppText size='3xl' weight='semiBold' style={styles.title} color={theme.colors.gray[100]} align='center'>
                    Seu plano de dieta para <Text style={styles.titleHighlight}>Perder Peso</Text> está pronto!
                  </AppText>
                  <AppText color={theme.colors.gray[600]} align='center'>
                    Essa é a recomendação diária para o seu plano. Fique
                    tranquilo, você poderia editar depois acaso deseje.
                  </AppText>
                </View>
              </View>
            </View>

            <View style={styles.footer}>
              <Button>Começar meu plano</Button>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
    </Modal>
  );
};

export default WelcomeModal;
