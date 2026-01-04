import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    paddingTop: 24,
    flex: 1,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  form: {
    gap: 24,
    marginBottom: 32,
    flex: 1,
    paddingHorizontal: 20,
  },
  inputWithUnit: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputWrapper: {
    flex: 1,
  },
  unit: {
    fontFamily: theme.fontFamily.sans.regular,
    fontSize: theme.fontSize.base,
    color: theme.colors.gray[600],
  },
  footer: {
    padding: 20,
    paddingTop: 16,
  },
});
