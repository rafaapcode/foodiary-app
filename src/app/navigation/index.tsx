import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { AuthsStack } from './AuthStack';

export function Navigation() {

  return (
    <NavigationContainer>
      <AuthsStack />
      <AppStack />
    </NavigationContainer>
  );
}
