import { View } from 'lucide-react-native';
import React from 'react';
import { Modal, StatusBar } from 'react-native';
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
              <AppText>conteúdo</AppText>
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
