import WelcomeModal from '@ui/components/WelcomeModal';
import { View } from 'react-native';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <WelcomeModal />
    </View>
  );
};

export default Home;
