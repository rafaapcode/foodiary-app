import { useAccount } from '@app/hooks/queries/useAccount';
import GoalStats from '@ui/components/GoalStats';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useHomeContext } from '../../context/useHomeContext';
import { styles } from './styles';

const CurrentGoal = () => {
  const { account } = useAccount();
  const { meals, isLoading } = useHomeContext();

  const summary = useMemo(
    () =>
      meals
        .flatMap((meal) => meal.foods)
        .reduce(
          (acc, food) => {
            const proteinCalories = food.proteins * 4;
            const carbCalories = food.carbohydrates * 4;
            const fatCalories = food.fats * 9;
            const totalCalories = Math.round(
              proteinCalories + carbCalories + fatCalories,
            );

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
    [meals],
  );
  return (
    <View style={[styles.container, { opacity: isLoading ? 0.5 : 1 }]}>
      <GoalStats
        calories={{ goal: account!.goal.calories, current: summary.calories }}
        proteins={{ goal: account!.goal.proteins, current: summary.proteins }}
        carbohydrates={{
          goal: account!.goal.carbohydrates,
          current: summary.carbohydrates,
        }}
        fats={{ goal: account!.goal.fats, current: summary.fats }}
      />
    </View>
  );
};

export default CurrentGoal;
