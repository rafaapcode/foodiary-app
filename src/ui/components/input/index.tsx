import { theme } from '@ui/styles/theme';
import { ComponentProps, ComponentType, Ref, useState } from 'react';
import { BlurEvent, FocusEvent, TextInput, TextInputProps } from 'react-native';
import { inputStyles } from './styles';

type BaseTextInputProps = Omit<ComponentProps<typeof TextInput>, 'readonly'>;

interface IInputProps extends BaseTextInputProps {
  error?: boolean;
  disabled?: boolean;
  InputComponent?: ComponentType<TextInputProps>;
  ref?: Ref<TextInput>;
  formatter?: (value: string) => string;
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

  return (
    <InputComponent
      style={[
        inputStyles({
          status: error ? 'error' : isFocused ? 'focus' : 'default',
          disabled: disabled ? 'true' : 'false',
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
}
