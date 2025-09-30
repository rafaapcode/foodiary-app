import { AppText } from '@ui/components/AppText';
import { View } from 'react-native';

export default function GenderStep() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <AppText size='3xl'>Gender Step</AppText>
    </View>
  );
}
