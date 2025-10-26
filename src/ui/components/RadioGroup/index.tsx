import { theme } from '@ui/styles/theme';
import { ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AppText } from '../AppText';
import { styles } from './style';

const RadioGroup = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default RadioGroup;

interface IRadioGroupItemProps {
  children: ReactNode;
  value: string;
}

export function RadioGroupItem({ children, value }:IRadioGroupItemProps) {
  return (
    <TouchableOpacity style={styles.item}>
      {children}
    </TouchableOpacity>
  );
};

export function RadioGroupItemInfo({ children }:{children: ReactNode}) {
  return (
    <View style={styles.itemInfo}>
      {children}
    </View>
  );
};

export function RadioGroupIcon({ children }:{children: string}) {
  return (
    <View style={styles.icon}>
      <AppText>{children}</AppText>
    </View>
  );
};

export function RadioGroupLabel({ children }:{children: string}) {
  return <AppText weight='semiBold' style={styles.label}>{children}</AppText>;
};

export function RadioGroupDescription({ children }:{children: string}) {
  return <AppText size='sm' color={theme.colors.gray[700]}>{children}</AppText>;
};
