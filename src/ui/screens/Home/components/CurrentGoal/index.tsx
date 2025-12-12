import { useAccount } from '@app/hooks/queries/useAccount';
import GoalStats from '@ui/components/GoalStats';
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const CurrentGoal = () => {
  const { account } = useAccount();

  return (
    <View style={styles.container}>
      <GoalStats
        calories={{ goal: account!.goal.calories }}
        proteins={{ goal: account!.goal.proteins }}
        carbohydrates={{ goal: account!.goal.carbohydrates }}
        fats={{ goal: account!.goal.fats }}
      />
    </View>
  );
};

export default CurrentGoal;
