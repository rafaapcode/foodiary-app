import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

const Step = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginBottom: bottom }]}>
      <View style={styles.header}>
        <AppText size='3xl' weight='semiBold' style={styles.title}>Qual é o seu objetivo ?</AppText>
        <AppText style={styles.subtitle} color={theme.colors.gray[700]}>O que você pretende alcançar com a dieta ?</AppText>
      </View>

      <View style={styles.content}></View>

      <View style={styles.footer}>
        <Button>Footer</Button>
      </View>
    </View>
  );
};

export default Step;
