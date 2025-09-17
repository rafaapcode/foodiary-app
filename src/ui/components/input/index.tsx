import { theme } from '@ui/styles/theme';
import { ComponentProps, useState } from 'react';
import { BlurEvent, FocusEvent, TextInput } from 'react-native';
import { inputStyles } from './styles';

type BaseTextInputProps = Omit<ComponentProps<typeof TextInput>, 'readonly'>;

interface IInputProps extends BaseTextInputProps {
  error?: boolean;
  disabled?: boolean;
}

export function Input({
  style,
  onFocus,
  onBlur,
  error,
  disabled,
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

  return (
    <TextInput
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
      {...props}
    />
  );
}
