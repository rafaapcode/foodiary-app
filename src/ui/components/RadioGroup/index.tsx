import { theme } from '@ui/styles/theme';
import { createContext, ReactNode, use, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AppText } from '../AppText';
import { styles } from './style';

interface IRadioGroupContextValue {
  value: string | null;
  setValue: (value: string | null) => void;
}

const RadioGroupContext = createContext({} as IRadioGroupContextValue);

const RadioGroupItemContext = createContext({ isSelected: false });

interface IRadioGroupProps {
  children: ReactNode;
  initialValue?: string;
}

const RadioGroup = ({ children, initialValue }: IRadioGroupProps) => {
  const [value, setValue] = useState<string | null>(initialValue ?? null);

  return (
    <RadioGroupContext.Provider value={{ value, setValue }}>
      <View style={styles.container}>
        {children}
      </View>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;

interface IRadioGroupItemProps {
  children: ReactNode;
  value: string;
}

export function RadioGroupItem({ children, value }:IRadioGroupItemProps) {
  const { value: selectedValue, setValue } = use(RadioGroupContext);

  const isSelected = selectedValue === value;

  return (
    <RadioGroupItemContext.Provider value={{ isSelected }}>
      <TouchableOpacity style={[styles.item, isSelected && styles.selectedItem]} onPress={() => setValue(value)}>
        {children}
      </TouchableOpacity>
    </RadioGroupItemContext.Provider>
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
  const { isSelected } = use(RadioGroupItemContext);

  return (
    <View style={[styles.icon, isSelected && styles.selectedIcon]}>
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
