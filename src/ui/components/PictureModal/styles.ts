import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black[900],
  },
  header: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingHorizontal: 20,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    gap: 32,
    marginTop: 16,
    justifyContent: 'center',
  },
  footer: {
    height: 112,
    marginBottom: 32,
    marginTop: 24,
  },
  content: {
    flex: 1,
  },
  actionsContainer: {
    gap: 16,
    alignItems: 'center',
  },
  actionLabel: {
    maxWidth: 180,
  },
  actionsGroup: {
    flexDirection: 'row',
    gap: 32,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  permissionLabel: {
    maxWidth: 270,
  },
  permissionContainer: {
    alignItems: 'center',
    gap: 8,
  },
  picture: {
    flex: 1,
    width: '100%',
  },
});
