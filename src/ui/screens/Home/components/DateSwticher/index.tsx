import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react-native';
import React from 'react';
import { View } from 'react-native';
import { useHomeContext } from '../../context/useHomeContext';
import { styles } from './styles';

const DateSwitcher = () => {
  const {
    date,
    nextDay,
    previousDay,
    isToday,
  } = useHomeContext();

  return (
    <View style={styles.container}>
      <Button size="icon" variant="ghost" onPress={previousDay}>
        <ChevronLeftIcon />
      </Button>
      <AppText
        style={styles.selectedDate}
        color={theme.colors.gray[700]}
        weight="medium"
      >
        {formatDate(date)}
      </AppText>
      <Button size="icon" variant="ghost" onPress={nextDay} disabled={isToday()}>
        <ChevronRightIcon />
      </Button>
    </View>
  );
};

export default DateSwitcher;

function formatDate(date: Date) {
  const now = new Date();
  const isToday = now.toDateString() === date.toDateString();

  const formattedDate = Intl.DateTimeFormat('pt-BR', {
    weekday: isToday ? undefined : 'short',
    day: '2-digit',
    month: 'short',
  }).format(date);

  return `${isToday ? 'Hoje, ' : ''}${formattedDate}`.toUpperCase();
}
