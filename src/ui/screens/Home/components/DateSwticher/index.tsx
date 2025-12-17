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
    isLoading,
  } = useHomeContext();

  return (
    <View style={[styles.container, { opacity: isLoading ? 0.5 : 1 }]}>
      <Button size="icon" variant="ghost" onPress={previousDay} disabled={isLoading}>
        <ChevronLeftIcon />
      </Button>
      <AppText
        style={styles.selectedDate}
        color={theme.colors.gray[700]}
        weight="medium"
      >
        {formatDate(date)}
      </AppText>
      <Button size="icon" variant="ghost" onPress={nextDay} disabled={isToday() || isLoading}>
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
