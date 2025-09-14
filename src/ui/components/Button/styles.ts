import { theme } from '@ui/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: theme.colors.lime[500],
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
