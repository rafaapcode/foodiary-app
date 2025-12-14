import { AppText } from '@ui/components/AppText';
import React from 'react';
import { View } from 'react-native';
import CurrentGoal from '../CurrentGoal';
import DateSwitcher from '../DateSwticher';
import UserHeader from '../userHeader';
import { styles } from './style';

const Header = () => {
  return (
    <View>
      <UserHeader />
      <View style={styles.container}>
        <DateSwitcher />
        <CurrentGoal />

        <View style={styles.divider}>
          <AppText weight='medium' style={styles.mealsLabel}>REFEIÇÕES</AppText>
        </View>
      </View>
    </View>
  );
};

export default Header;
