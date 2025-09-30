import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { ChevronLeftIcon } from 'lucide-react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useOnboarding } from '../../context/useOnboarding';
import { styles } from './styles';

export function OnboardingHeader() {
  const { top } = useSafeAreaInsets();
  const { prevStep } = useOnboarding();

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <Button variant='ghost' size="icon" onPress={prevStep}>
        <ChevronLeftIcon size={20} color={theme.colors.black[700]}/>
      </Button>

      <View style={styles.progressBarBackground}>
        <View style={styles.progressBarForeground} />
      </View>

      <View style={styles.rightActionPlaceholder} />
    </View>
  );
}
