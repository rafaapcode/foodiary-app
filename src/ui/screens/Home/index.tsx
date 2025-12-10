import { AppText } from '@ui/components/AppText';
import WelcomeModal from '@ui/components/WelcomeModal';
import { View } from 'react-native';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <WelcomeModal />
      <AppText>Home</AppText>
    </View>
  );
};

export default Home;
