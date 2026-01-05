import { useMeal } from '@app/hooks/queries/useMeal';
import { AppStackRouteProps } from '@app/navigation/AppStack';
import { useRoute } from '@react-navigation/native';
import { AppText } from '@ui/components/AppText';
import { theme } from '@ui/styles/theme';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Header from './components/Header';
import { styles } from './style';

export default function MealDetails() {
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
             <ActivityIndicator color={theme.colors.gray[400]}/>
          )
        }
        data={meal?.foods || []}
      />
    </View>
  );
}
