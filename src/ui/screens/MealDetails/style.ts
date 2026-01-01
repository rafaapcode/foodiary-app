import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  food: {
    marginHorizontal: 20,
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[400],
  },
});
