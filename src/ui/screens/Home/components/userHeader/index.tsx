import { useAccount } from '@app/hooks/queries/useAccount';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { TargetIcon } from 'lucide-react-native';
import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';

const UserHeader = () => {
  const { account } = useAccount();

  return (
    <View style={[styles.container]}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: 'https://github.com/rafaapcode.png' }}
          style={styles.avatar}
        />

        <View style={styles.greetings}>
          <AppText size='sm' color={theme.colors.gray[700]}>Olá, 👋</AppText>
          <AppText weight='semiBold'>{account!.profile.name}</AppText>
        </View>
      </View>

      <Button variant='ghost'  LeftIcon={TargetIcon}>
        Metas
      </Button>
    </View>
  );
};

export default UserHeader;
