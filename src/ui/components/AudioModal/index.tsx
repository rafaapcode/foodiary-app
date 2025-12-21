import { theme } from '@ui/styles/theme';
import { XIcon } from 'lucide-react-native';
import React from 'react';
import { Modal, StatusBar, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../AppText';
import { Button } from '../Button';
import { styles } from './styles';

interface IAudioModalProps {
  visible?: boolean;
  onClose: () => void;
}

const AudioModal = ({ visible, onClose }: IAudioModalProps) => {
  const isRecording = false;

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      statusBarTranslucent
      animationType="slide"
    >
      <StatusBar animated translucent barStyle="light-content" />
      <View style={styles.container}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.content}>
            <View style={styles.header}>
              <Button
                onPress={onClose}
                size="icon"
                variant="neutral"
                rippleStyle="light"
              >
                <XIcon size={20} color={theme.colors.gray[500]} />
              </Button>
            </View>

            <View style={styles.body}>
              <View style={[styles.circle1, isRecording && styles.circle1Recording]}>
                <View style={[styles.circle2, isRecording && styles.circle2Recording]}>
                  <View style={[styles.circle3, isRecording && styles.circle3Recording]} />
                </View>
              </View>

              <AppText color={theme.colors.gray[500]} style={styles.instructionsLabel} align='center'>
                tente dizer algo como: 100g de Arroz, 2 Ovos e 100g de Salada
              </AppText>
            </View>

            <View style={styles.footer}>
              <Button>
                teste
              </Button>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
    </Modal>
  );
};

export default AudioModal;
