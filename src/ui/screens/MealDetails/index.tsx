import { AppStackRouteProps } from '@app/navigation/AppStack';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

const MealDetails = () => {
  const { params } =  useRoute<AppStackRouteProps<'MealDetails'>>();
  // const { goBack } =  useNavigation();

  return (
    <View style={styles.container}>
      <Text>Meal: {params.mealId}</Text>
    </View>
  );
};

export default MealDetails;
