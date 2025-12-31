import { AppStackRouteProps } from '@app/navigation/AppStack';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import { styles } from './style';

const MealDetails = () => {
  const { params } =  useRoute<AppStackRouteProps<'MealDetails'>>();

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default MealDetails;
