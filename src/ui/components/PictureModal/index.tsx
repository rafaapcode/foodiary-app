import { theme } from '@ui/styles/theme';
import { CameraView } from 'expo-camera';
import { CameraIcon, UnlockIcon, XIcon } from 'lucide-react-native';
import React from 'react';
import { Modal, StatusBar, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../AppText';
import { Button } from '../Button';
import CreateMealLoader from '../CreateMealLoader';
import { styles } from './styles';
import { usePictureModalController } from './usePictureModalController';

interface IPictureModalProps {
  visible?: boolean;
  onClose: () => void;
}

const PictureModal = ({ visible, onClose }: IPictureModalProps) => {
  const { isLoading, permission, requestPermission } =
    usePictureModalController();

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      statusBarTranslucent
      animationType="slide"
    >
      <StatusBar animated translucent barStyle="light-content" />

      {isLoading && <CreateMealLoader type="picture" />}
      {!isLoading && permission && (
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
              {!permission.granted && (
                <View style={styles.body}>
                  <View style={styles.permissionContainer}>
                    <CameraIcon size={32} color={theme.colors.gray[500]} />
                    <AppText
                      color={theme.colors.gray[500]}
                      align="center"
                      style={styles.permissionLabel}
                    >
                      Para registrar sua refeição com uma foto, precisamos de
                      acesso à câmera do seu dispositivo.
                    </AppText>
                  </View>
                  <Button onPress={requestPermission} LeftIcon={UnlockIcon}>
                    Conceder acesso
                  </Button>
                </View>
              )}
              {permission.granted && (
                <>
                  <View style={styles.body}>
                    <CameraView style={styles.camera} facing="back" />
                  </View>

                  <View style={styles.footer}>
                    <View style={styles.actionsContainer}>
                      <Button>Tirar foto</Button>
                    </View>
                  </View>
                </>
              )}
            </SafeAreaView>
          </SafeAreaProvider>
        </View>
      )}
    </Modal>
  );
};

export default PictureModal;
