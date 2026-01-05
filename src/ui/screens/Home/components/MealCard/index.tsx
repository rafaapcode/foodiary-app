import { AppStackNavigationProps } from '@app/navigation/AppStack';
import { SimplifiedMeal } from '@app/types/Meals';
import { useNavigation } from '@react-navigation/native';
import { AppText } from '@ui/components/AppText';
import { theme } from '@ui/styles/theme';
import React, { useMemo } from 'react';
import { Platform, Pressable, View } from 'react-native';
import { useHomeContext } from '../../context/useHomeContext';
import { styles } from './styles';

interface IMealCardProps {
  meal: SimplifiedMeal;
}

const MealCard = ({ meal }: IMealCardProps) => {
  const { isLoading } = useHomeContext();
  const { navigate } = useNavigation<AppStackNavigationProps>();

  const formattedFoods = useMemo(
    () => meal.foods.map((food) => food.name).join(', '),
    [meal.foods],
  );

  const summary = useMemo(
    () =>
      (meal?.foods || []).reduce(
        (acc, food) => {
         const proteinCalories = food.proteins * 4;
          const carbCalories = food.carbohydrates * 4;
          const fatCalories = food.fats * 9;
          const totalCalories = Math.round(proteinCalories + carbCalories + fatCalories);

          return {
            calories: Math.round(acc.calories + totalCalories),
            proteins: Math.round(acc.proteins + food.proteins),
            carbohydrates: Math.round(acc.carbohydrates + food.carbohydrates),
            fats: Math.round(acc.fats + food.fats),
          };
        },
        {
          calories: 0,
          proteins: 0,
          carbohydrates: 0,
          fats: 0,
        },
      ),
    [meal?.foods],
  );

  return (
    <View style={[styles.container, { opacity: isLoading ? 0.5 : 1 }]}>
      <AppText color={theme.colors.gray[700]}>
        {formatTime(meal.createdAt)}
      </AppText>

      <View style={styles.wrapper}>
        <Pressable
          onPress={() => navigate('MealDetails', { mealId: meal.id })}
          disabled={isLoading}
          android_ripple={{ color: 'rgba(0,0,0,0.1)', foreground: true }}
          style={({ pressed }) => [
            styles.card,
            pressed && Platform.OS === 'ios' && { opacity: 0.5 },
          ]}
        >
          <View style={styles.header}>
            <View style={styles.icon}>
              <AppText>{meal.icon}</AppText>
            </View>
            <View style={styles.mealDetails}>
              <AppText
                numberOfLines={1}
                color={theme.colors.gray[700]}
                size="sm"
              >
                {meal.name}
              </AppText>
              <AppText numberOfLines={1} weight="medium">
                {formattedFoods}
              </AppText>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.mealsStatsRow}>
              <View style={styles.mealStat}>
                <AppText color={theme.colors.support.tomato} weight="medium">
                  {summary.calories}
                </AppText>
                <AppText color={theme.colors.gray[700]}>Kcal</AppText>
              </View>

              <View style={styles.mealStat}>
                <AppText color={theme.colors.support.teal} weight="medium">
                  {summary.proteins}g
                </AppText>
                <AppText color={theme.colors.gray[700]}>Proteína</AppText>
              </View>
            </View>

            <View style={styles.mealsStatsRow}>
              <View style={styles.mealStat}>
                <AppText color={theme.colors.support.yellow} weight="medium">
                  {summary.carbohydrates}g
                </AppText>
                <AppText color={theme.colors.gray[700]}>Carboidratos</AppText>
              </View>

              <View style={styles.mealStat}>
                <AppText color={theme.colors.support.orange} weight="medium">
                  {summary.fats}g
                </AppText>
                <AppText color={theme.colors.gray[700]}>Gordura</AppText>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default MealCard;

function formatTime(date: Date): string {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}h${minutes}`;
}
