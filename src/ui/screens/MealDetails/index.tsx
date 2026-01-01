import { useMeal } from '@app/hooks/queries/useMeal';
import { AppStackRouteProps } from '@app/navigation/AppStack';
import { useRoute } from '@react-navigation/native';
import { AppText } from '@ui/components/AppText';
import { Skeleton } from 'moti/skeleton';
import React from 'react';
import { FlatList, View } from 'react-native';
import Header from './components/Header';
import { styles } from './style';

const MealDetails = () => {
  const { params } = useRoute<AppStackRouteProps<'MealDetails'>>();
  const { meal, isLoading } = useMeal(params.mealId);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header meal={meal} isLoading={isLoading} />}
        renderItem={({ item: food }) => (
          <View style={styles.food}>
            <AppText>
              {food.quantity} {food.name}
            </AppText>
          </View>
        )}
        ListEmptyComponent={
          !isLoading ? <AppText align='center'>Nenhum item encontrado para essa refeição</AppText> : (
            <View style={styles.food}>
              <Skeleton width="100%" height={24} colorMode="light" />
              <Skeleton width="100%" height={24} colorMode="light" />
              <Skeleton width="100%" height={24} colorMode="light" />
            </View>
          )
        }
        data={meal?.foods || []}
      />
    </View>
  );
};

export default MealDetails;
