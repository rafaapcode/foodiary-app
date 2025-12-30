import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import CreateMealOptions from '@ui/components/CreateMealOptions';
import { theme } from '@ui/styles/theme';
import { PlusIcon } from 'lucide-react-native';
import React, { useRef } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

const Fab = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { bottom } = useSafeAreaInsets();

  function handleOpenBottomSheet() {
    bottomSheetModalRef.current?.present();
  }

  return (
    <>
      <View style={[styles.container, { bottom: bottom + 16 }]}>
        <Button size="icon" onPress={handleOpenBottomSheet}>
          <PlusIcon size={20} color={theme.colors.black[700]} />
        </Button>
      </View>
      <BottomSheetModalProvider>
        <BottomSheetModal ref={bottomSheetModalRef} style={styles.bottomSheet}>
          <BottomSheetView
            style={[styles.content, { paddingBottom: bottom + 16 }]}
          >
            <AppText size='lg' weight='semiBold' style={styles.title}>Cadastre sua refeição</AppText>

            <CreateMealOptions onCreate={() => bottomSheetModalRef.current?.dismiss()}/>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};

export default Fab;
