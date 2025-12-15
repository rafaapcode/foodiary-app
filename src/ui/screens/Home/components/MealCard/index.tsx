import { AppText } from '@ui/components/AppText';
import { theme } from '@ui/styles/theme';
import React from 'react';
import { Platform, Pressable, View } from 'react-native';
import { styles } from './styles';

const MealCard = () => {
  return (
    <View style={styles.container}>
      <AppText color={theme.colors.gray[700]}>12h15</AppText>

      <View style={styles.wrapper}>
        <Pressable
          android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
          style={({ pressed }) => [
            styles.card,
            pressed && Platform.OS === 'ios' && { opacity: 0.5 },
          ]}
        >
          <View style={styles.header}>
            <View style={styles.icon}>
              <AppText>🍞</AppText>
            </View>
            <View style={styles.mealDetails}>
              <AppText numberOfLines={1} color={theme.colors.gray[700]} size='sm'>Café da manhã</AppText>
              <AppText numberOfLines={2} weight='medium'>Pão, manteiga e groselha</AppText>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.mealsStatsRow}>

              <View style={styles.mealStat}>
                <AppText color={theme.colors.support.tomato} weight='medium'>200</AppText>
                <AppText color={theme.colors.gray[700]}>Kcal</AppText>
              </View>

              <View style={styles.mealStat}>
                <AppText color={theme.colors.support.teal} weight='medium'>5g</AppText>
                <AppText color={theme.colors.gray[700]}>Proteína</AppText>
              </View>

            </View>

            <View style={styles.mealsStatsRow}>

              <View style={styles.mealStat}>
                <AppText color={theme.colors.support.yellow} weight='medium'>200g</AppText>
                <AppText color={theme.colors.gray[700]}>Carboidratos</AppText>
              </View>

              <View style={styles.mealStat}>
                <AppText color={theme.colors.support.orange} weight='medium'>5g</AppText>
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
