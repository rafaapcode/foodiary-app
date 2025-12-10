import { useAuth } from '@app/contexts/AuthContext/useAuth';
import { useAccount } from '@app/hooks/queries/useAccount';
import { theme } from '@ui/styles/theme';
import React, { useState } from 'react';
import { Modal, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../AppText';
import { Button } from '../Button';
import GoalStats from '../GoalStats';
import { styles } from './style';

const WelcomeModal = () => {
  const { signedUp } = useAuth();
  const { account } = useAccount();
  const [visible, setVisible] = useState(signedUp);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} transparent statusBarTranslucent animationType="fade" onRequestClose={handleClose}>
      <StatusBar barStyle="light-content" animated />
      <View style={styles.container}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.wrapper}>
            <View style={styles.content}>
              <View style={styles.header}>
                <View style={styles.icon}>
                  <AppText>🥬</AppText>
                </View>

                <View style={styles.headerContent}>
                  <AppText
                    size="3xl"
                    weight="semiBold"
                    style={styles.title}
                    color={theme.colors.gray[100]}
                    align="center"
                  >
                    Seu plano de dieta para{' '}
                    <Text style={styles.titleHighlight}>Perder Peso</Text> está
                    pronto!
                  </AppText>
                  <AppText color={theme.colors.gray[600]} align="center">
                    Essa é a recomendação diária para o seu plano. Fique
                    tranquilo, você poderia editar depois acaso deseje.
                  </AppText>
                </View>
              </View>

              <View style={styles.body}>
                <GoalStats
                  calories={{ goal: account!.goal.calories }}
                  proteins={{ goal: account!.goal.proteins }}
                  carbohydrates={{ goal: account!.goal.carbohydrates }}
                  fats={{ goal: account!.goal.fats }}
                />
              </View>
            </View>

            <View style={styles.footer}>
              <Button onPress={handleClose}>Começar meu plano</Button>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
    </Modal>
  );
};

export default WelcomeModal;
