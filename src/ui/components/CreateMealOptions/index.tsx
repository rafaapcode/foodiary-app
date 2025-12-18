import { theme } from '@ui/styles/theme';
import { CameraIcon, LucideIcon, MicIcon } from 'lucide-react-native';
import React from 'react';
import { Platform, Pressable, View } from 'react-native';
import { AppText } from '../AppText';
import { styles } from './styles';

interface ICreateMealOptionsProps {
  disabled?: boolean;
}

const CreateMealOptions = ({ disabled = false }: ICreateMealOptionsProps) => {
  return (
    <View style={styles.container}>
      <OptionButton icon={MicIcon} label="Áudio" disabled={disabled}/>
      <OptionButton icon={CameraIcon} label="Foto" disabled={disabled}/>
    </View>
  );
};

export default CreateMealOptions;

interface IOpttionButtonProps {
  icon: LucideIcon;
  label: string;
  disabled?: boolean;
}

export function OptionButton({ icon: Icon, label, disabled }: IOpttionButtonProps) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        disabled={disabled}
        android_ripple={{ color: 'rgba(0,0,0,0.1)', foreground: true }}
        style={({ pressed }) => [
          styles.button,
          (disabled || (pressed && Platform.OS === 'ios')) && { opacity: 0.5 },
        ]}
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
