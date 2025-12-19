import WelcomeModal from '@ui/components/WelcomeModal';
import { theme } from '@ui/styles/theme';
import { FlatList, RefreshControl, View } from 'react-native';
import EmptyState from './components/EmptyState';
import Fab from './components/Fab';
import FullScreenLoader from './components/FullScreenLoader';
import Header from './components/header';
import ItemSeparatorComponent from './components/ItemSeparatorComponent';
import MealCard from './components/MealCard';
import { HomeProvider } from './context';
import { styles } from './styles';
import { useHomeController } from './useHomeController';

const Home = () => {
  const {
    bottom,
    isInitialLoading,
    isRefreshing,
    meals,
    handleRefresh,
    top,
    date,
    handleNextDay,
    handlePreviousDay,
    isToday,
    isLoading,
  } = useHomeController();

  if (isInitialLoading) {
    return <FullScreenLoader />;
  }

  return (
    <View style={[styles.container, { paddingTop: top + 20 }]}>
      <WelcomeModal />
      <HomeProvider
        date={date}
        meals={meals}
        nextDay={handleNextDay}
        previousDay={handlePreviousDay}
        isToday={isToday}
        isLoading={isLoading}
      >
        <FlatList
          data={meals}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={Header}
          contentContainerStyle={[
            styles.content,
            { paddingBottom: bottom + 20 },
          ]}
          ListEmptyComponent={EmptyState}
          ItemSeparatorComponent={ItemSeparatorComponent}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor={theme.colors.lime[900]}
              colors={[theme.colors.lime[700]]}
            />
          }
          renderItem={({ item: meal }) => <MealCard meal={meal} />}
        />
      </HomeProvider>
      {meals.length > 0 && <Fab />}
    </View>
  );
};

export default Home;
