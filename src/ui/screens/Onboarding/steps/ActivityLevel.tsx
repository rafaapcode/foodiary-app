import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { OnboardingStackScreenProps } from '@ui/screens/Onboarding/OnboardingStack';
import { View } from 'react-native';

export function ActivityLevelStep({ navigation }: OnboardingStackScreenProps<'ActivityLevel'>) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <AppText size='3xl'>ActivityLevel Step</AppText>
      <Button onPress={() => navigation.navigate('Goal')}>Proximo</Button>
    </View>
  );
}
