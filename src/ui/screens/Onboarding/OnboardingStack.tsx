import {
  createNavigationContainerRef,
  NavigationContainer,
  NavigationIndependentTree,
  RouteProp,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import ActivityLevelStep from '@ui/screens/Onboarding/steps/ActivityLevel';
import BirthDateStep from '@ui/screens/Onboarding/steps/BirthDate';
import CreateAccountStep from '@ui/screens/Onboarding/steps/CreateAccount';
import GenderStep from '@ui/screens/Onboarding/steps/GenderStep';
import GoalStep from '@ui/screens/Onboarding/steps/GoalStep';
import HeightStep from '@ui/screens/Onboarding/steps/Height';
import WeigthStep from '@ui/screens/Onboarding/steps/Weigth';

export type OnboardingStackParamList = {
  Goal: undefined;
  Gender: undefined;
  BirthDate: undefined;
  Height: undefined;
  Weight: undefined;
  ActivityLevel: undefined;
  CreateAccount: undefined;
};

export type OnboardingStackNavigationProps =
  NativeStackNavigationProp<OnboardingStackParamList>;
export type OnboardingStackScreenProps<
  TRouteName extends keyof OnboardingStackParamList
> = NativeStackScreenProps<OnboardingStackParamList, TRouteName>;
export type OnboardingStackRouteProps<
  TRouteName extends keyof OnboardingStackParamList
> = RouteProp<OnboardingStackParamList, TRouteName>;

const Stack = createNativeStackNavigator<OnboardingStackParamList>();
export const onboardingNavigation =
  createNavigationContainerRef<OnboardingStackParamList>();

export function OnboardingStack() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer ref={onboardingNavigation}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Goal"
        >
          <Stack.Screen name="Goal" component={GoalStep} />
          <Stack.Screen name="Gender" component={GenderStep} />
          <Stack.Screen name="BirthDate" component={BirthDateStep} />
          <Stack.Screen name="Height" component={HeightStep} />
          <Stack.Screen name="Weight" component={WeigthStep} />
          <Stack.Screen name="ActivityLevel" component={ActivityLevelStep} />
          <Stack.Screen name="CreateAccount" component={CreateAccountStep} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
