import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lime[900],
    flex: 1,
  },
  content: {
    flex: 1,
  },
  footer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  wrapper: {
    flex: 1,
  },
});
