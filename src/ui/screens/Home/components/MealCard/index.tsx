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
              <AppText color={theme.colors.gray[700]} size='sm'>Café da manhã</AppText>
              <AppText weight='medium'>Pão, manteiga e groselha</AppText>
            </View>
          </View>
          <View style={styles.body}></View>
        </Pressable>
      </View>
    </View>
  );
};

export default MealCard;
