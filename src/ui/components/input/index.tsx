import { theme } from '@ui/styles/theme';
import { ComponentProps, ComponentType, Ref, useState } from 'react';
import {
  BlurEvent,
  FocusEvent,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { AppText } from '../AppText';
import { inputStyles, styles } from './styles';

type BaseTextInputProps = Omit<ComponentProps<typeof TextInput>, 'readonly'>;

interface IInputProps extends BaseTextInputProps {
  error?: boolean;
  disabled?: boolean;
  InputComponent?: ComponentType<TextInputProps>;
  ref?: Ref<TextInput>;
  formatter?: (value: string) => string;
  suffix?: string;
}

export function Input({
  style,
  onFocus,
  onBlur,
  error,
  disabled,
  formatter,
  onChangeText,
  InputComponent = TextInput,
  suffix,
  ...props
}: IInputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = (e: FocusEvent) => {
    setIsFocused(true);
    onFocus?.(e);
  };
  const handleBlur = (e: BlurEvent) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleChangeText = (value: string) => {
    const formatedValue = formatter?.(value) ?? value;
    onChangeText?.(formatedValue);
  };

  const input = (
    <InputComponent
      style={[
        inputStyles({
          status: error ? 'error' : isFocused ? 'focus' : 'default',
          disabled: disabled ? 'true' : 'false',
          hasSuffix: suffix ? 'true' : 'false',
        }),
        style,
      ]}
      placeholderTextColor={theme.colors.gray[700]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      readOnly={disabled}
      onChangeText={handleChangeText}
      {...props}
    />
  );

  if (suffix) {
    <View style={styles.inputWithSuffix}>
      {input}
      <View style={styles.suffix}>
        <AppText color={theme.colors.gray[700]}>{suffix}</AppText>
      </View>
    </View>;
  }

  return input;
}
