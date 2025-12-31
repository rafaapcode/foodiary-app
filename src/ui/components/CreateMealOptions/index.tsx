import { theme } from '@ui/styles/theme';
import { CameraIcon, LucideIcon, MicIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { Platform, Pressable, View } from 'react-native';
import { AppText } from '../AppText';
import AudioModal from '../AudioModal';
import PictureModal from '../PictureModal';
import { styles } from './styles';

interface ICreateMealOptionsProps {
  disabled?: boolean;
  onCreate?: () => void;
}

const CreateMealOptions = ({ disabled = false,  onCreate }: ICreateMealOptionsProps) => {
  const [currentVisibleModal, setCurrentVisibleModal] = useState<'audio' | 'picture' | null>(null);

  function handleOpenModal(modal: 'audio' | 'picture') {
    setCurrentVisibleModal(modal);
  }

  function handleCloseModal() {
    setCurrentVisibleModal(null);
  }

  return (
    <View style={styles.container}>
      <AudioModal onCreate={onCreate} visible={currentVisibleModal ===  'audio'} onClose={handleCloseModal}/>
      <PictureModal onCreate={onCreate} visible={currentVisibleModal ===  'picture'} onClose={handleCloseModal}/>

      <OptionButton icon={MicIcon} label="Áudio" disabled={disabled} onPress={() => handleOpenModal('audio')} />
      <OptionButton icon={CameraIcon} label="Foto" disabled={disabled} onPress={() => handleOpenModal('picture')} />
    </View>
  );
};

export default CreateMealOptions;

interface IOpttionButtonProps {
  icon: LucideIcon;
  label: string;
  disabled?: boolean;
  onPress: () => void;
}

export function OptionButton({ icon: Icon, label, disabled, onPress }: IOpttionButtonProps) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        disabled={disabled}
        android_ripple={{ color: 'rgba(0,0,0,0.1)', foreground: true }}
        style={({ pressed }) => [
          styles.button,
          (disabled || (pressed && Platform.OS === 'ios')) && { opacity: 0.5 },
        ]}
        onPress={onPress}
      >
        <View style={styles.icon}>
          <Icon color={theme.colors.black[700]} size={24} />
        </View>

        <AppText weight="semiBold" style={styles.buttonLabel}>
          {label}
        </AppText>
      </Pressable>
    </View>
  );
}
