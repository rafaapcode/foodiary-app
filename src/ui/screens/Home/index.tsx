import { AppText } from '@ui/components/AppText';
import WelcomeModal from '@ui/components/WelcomeModal';
import { FlatList, View } from 'react-native';
import Header from './components/header';
import { styles } from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <WelcomeModal />
      <FlatList
        data={[1,2,3,4,5,6]}
        keyExtractor={item => String(item)}
        ListHeaderComponent={Header}
        renderItem={() => (
          <AppText>Item</AppText>
        )}
      />
    </View>
  );
};

export default Home;
