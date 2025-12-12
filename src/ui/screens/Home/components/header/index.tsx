import React from 'react';
import { View } from 'react-native';
import DateSwitcher from '../DateSwticher';
import UserHeader from '../userHeader';
import { styles } from './style';

const Header = () => {
  return (
    <View>
      <UserHeader />
      <View style={styles.container}>
        <DateSwitcher />
      </View>
    </View>
  );
};

export default Header;
