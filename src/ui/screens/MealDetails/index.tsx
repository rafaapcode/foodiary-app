import { useMeal } from '@app/hooks/queries/useMeal';
import { AppStackRouteProps } from '@app/navigation/AppStack';
import { useRoute } from '@react-navigation/native';
import { AppText } from '@ui/components/AppText';
import React from 'react';
import { FlatList, View } from 'react-native';
import Header from './components/Header';
import { styles } from './style';

const MealDetails = () => {
  const { params } =  useRoute<AppStackRouteProps<'MealDetails'>>();
  const { meal } = useMeal(params.mealId);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header meal={meal} />}
        renderItem={({ item: food }) =>  (
          <View style={styles.food}>
            <AppText>{food.quantity} {food.name}</AppText>
          </View>
        )}
        data={meal?.foods || []}
      />
    </View>
  );
};

export default MealDetails;
