import { XIcon } from 'lucide-react-native';
import React from 'react';
import { Modal, View } from 'react-native';
import { Button } from '../Button';
import { styles } from './styles';

interface IAudioModalProps {
  visible?: boolean;
  onClose: () => void;
}

const AudioModal = ({ visible, onClose }: IAudioModalProps) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      statusBarTranslucent
      animationType='slide'
    >
      <View style={styles.container}>
        <Button onPress={onClose}>
          <XIcon />
        </Button>
      </View>
    </Modal>
  );
};

export default AudioModal;
