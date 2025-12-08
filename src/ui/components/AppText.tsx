import { theme } from '@ui/styles/theme';
import { ComponentProps } from 'react';
import { Text, TextStyle } from 'react-native';

interface IAppTextProps extends ComponentProps<typeof Text> {
  size?: keyof typeof theme.fontSize;
  family?: keyof typeof theme.fontFamily;
  weight?: keyof typeof theme.fontFamily.sans;
  align?: TextStyle['textAlign'];
  color?: string;
}

export function AppText({
  size = 'base',
  family = 'sans',
  weight = 'regular',
  color = theme.colors.black[700],
  style,
  align = 'left',
  ...props
}: IAppTextProps) {
  return (
    <Text
      style={[
        {
          fontFamily: theme.fontFamily[family][weight],
          fontSize: theme.fontSize[size],
          color: color,
          textAlign: align,
        },
        style,
      ]}
      {...props}
    />
  );
}
