import { AppText } from '@ui/components/AppText';
import { View } from 'react-native';

export function BirthDateStep() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <AppText size='3xl'>BirthDate Step</AppText>
    </View>
  );
}
