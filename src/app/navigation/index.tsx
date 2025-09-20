import { NavigationContainer } from '@react-navigation/native';
import { AuthsStack } from './AuthStack';

export function Navigation() {
  return (
    <NavigationContainer>
      <AuthsStack />
    </NavigationContainer>
  );
}
