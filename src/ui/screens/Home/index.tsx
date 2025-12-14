import { AppText } from '@ui/components/AppText';
import WelcomeModal from '@ui/components/WelcomeModal';
import { theme } from '@ui/styles/theme';
import { useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from './components/header';
import { styles } from './styles';

const Home = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { top } = useSafeAreaInsets();

  async function handleRefresh() {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRefreshing(false);
  }

  return (
    <View style={[styles.container, { paddingTop: top + 20 }]}>
      <WelcomeModal />
      <FlatList
        data={[1,2,3,4,5,6]}
        keyExtractor={item => String(item)}
        ListHeaderComponent={Header}
        contentContainerStyle={styles.content}
        refreshControl={(
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            tintColor={theme.colors.lime[900]}
            colors={[theme.colors.lime[700]]}
          />
        )}
        renderItem={() => (
          <AppText>Item</AppText>
        )}
      />
    </View>
  );
};

export default Home;
