import { theme } from '@ui/styles/theme';
import { createContext, ReactNode, use } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AppText } from '../AppText';
import { styles } from './style';

interface IRadioGroupContextValue {
  value: string | null;
  setValue: (value: string) => void;
  isHorizontal?: boolean;
  error: boolean;
}

const RadioGroupContext = createContext({} as IRadioGroupContextValue);

const RadioGroupItemContext = createContext({ isSelected: false });

interface IRadioGroupProps {
  children: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  value: string | null;
  onChangeValue: (value: string) => void;
  error?: boolean;
}

const RadioGroup = ({
  children,
  orientation = 'vertical',
  value,
  onChangeValue,
  error = false,
}: IRadioGroupProps) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <RadioGroupContext.Provider
      value={{ value, setValue: onChangeValue, isHorizontal, error }}
    >
      <View
        style={[styles.container, isHorizontal && styles.containerHorizontal]}
      >
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

export function RadioGroupItem({ children, value }: IRadioGroupItemProps) {
  const {
    value: selectedValue,
    setValue,
    isHorizontal,
    error,
  } = use(RadioGroupContext);

  const isSelected = selectedValue === value;

  return (
    <RadioGroupItemContext.Provider value={{ isSelected }}>
      <TouchableOpacity
        style={[
          styles.item,
          isSelected && styles.selectedItem,
          isHorizontal && styles.horizontalItem,
          error && styles.errorItem,
        ]}
        onPress={() => setValue(value)}
      >
        {children}
      </TouchableOpacity>
    </RadioGroupItemContext.Provider>
  );
}

export function RadioGroupItemInfo({ children }: { children: ReactNode }) {
  return <View style={styles.itemInfo}>{children}</View>;
}

export function RadioGroupIcon({ children }: { children: string }) {
  const { error } = use(RadioGroupContext);
  const { isSelected } = use(RadioGroupItemContext);

  return (
    <View style={[styles.icon, (isSelected || error) && styles.whiteIconBg]}>
      <AppText>{children}</AppText>
    </View>
  );
}

export function RadioGroupLabel({ children }: { children: string }) {
  const { isHorizontal } = use(RadioGroupContext);

  return (
    <AppText
      weight="semiBold"
      style={[styles.label, isHorizontal && styles.textCenter]}
    >
      {children}
    </AppText>
  );
}

export function RadioGroupDescription({ children }: { children: string }) {
  const { isHorizontal } = use(RadioGroupContext);
  return (
    <AppText
      size="sm"
      color={theme.colors.gray[700]}
      style={[isHorizontal && styles.textCenter]}
    >
      {children}
    </AppText>
  );
}
