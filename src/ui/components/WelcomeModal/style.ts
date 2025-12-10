import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lime[900],
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 36,
  },
  footer: {
    paddingHorizontal: 24,
  },
  wrapper: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    gap: 24,
  },
  icon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.gray[200],
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContent: {
    gap: 8,
    alignItems: 'center',
    maxWidth: 327,
  },
  titleHighlight: {
    color: theme.colors.lime[500],
  },
  title: {
    maxWidth: 300,
    textAlign: 'center',
    letterSpacing: -0.32,
  },
  body: {
    alignItems: 'center',

  },
});
