import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Greetings from '@ui/screens/Greetings';
import Onboarding from '@ui/screens/Onboarding';

const Stack = createNativeStackNavigator();

export function AuthsStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Greetings" component={Greetings} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
}
