import { theme } from '@ui/theme';
import { ComponentProps } from 'react';
import { Text } from 'react-native';

interface IAppTextProps extends ComponentProps<typeof Text> {
  size?: keyof typeof theme.fontSize;
  family?: keyof typeof theme.fontFamily;
  weight?: keyof typeof theme.fontFamily.sans;
  color?: string;
}

export function AppText({
  size = 'base',
  family = 'sans',
  weight = 'regular',
  color = theme.colors.black[700],
  style,
  ...props
}: IAppTextProps) {
  return (
    <Text
      style={[
        {
          fontFamily: theme.fontFamily[family][weight],
          fontSize: theme.fontSize[size],
          color: color,
        },
        style,
      ]}
      {...props}
    />
  );
}
