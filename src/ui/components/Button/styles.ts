import { theme } from '@ui/styles/theme';
import { createVariants } from '@ui/styles/utils/createVariants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  button: {
    borderRadius: 12,
  },
});

createVariants({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: theme.colors.lime[500],
      },
      secondary: {
        backgroundColor: theme.colors.gray[300],
      },
    },
    size: {
      default: {
        paddingHorizontal: 24,
        paddingVertical: 14,
      },
      icon: {
        width: 48,
        height: 48,
      },
    },
  },
  defaultVariants: {

  },
});
