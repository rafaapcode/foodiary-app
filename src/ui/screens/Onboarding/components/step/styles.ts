import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  header: {
    gap: 8,
  },
  title: {
    letterSpacing: -0.32,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    paddingBottom: 34,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
