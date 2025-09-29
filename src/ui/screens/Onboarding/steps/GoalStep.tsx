import { AppText } from '@ui/components/AppText';
import { View } from 'react-native';

export function GoalStep() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <AppText size='3xl'>Goal Step</AppText>
    </View>
  );
}
