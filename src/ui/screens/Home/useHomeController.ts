import { useMeals } from '@app/hooks/queries/useMeals';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useHomeController() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { top, bottom } = useSafeAreaInsets();
  const [date, setDate] = useState(new Date());
  const { meals, isInitialLoading } = useMeals(date);

  async function handleRefresh() {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsRefreshing(false);
  }

  function handleNextDay() {
    setDate((prevState) => {
      const newDate = new Date(prevState);
      newDate.setDate(prevState.getDate() + 1);

      return newDate;
    });
  }

  function handlePreviousDay() {
    setDate((prevState) => {
      const newDate = new Date(prevState);
      newDate.setDate(prevState.getDate() - 1);

      return newDate;
    });
  }

  function isToday() {
    const now = new Date();
    return now.toDateString() === date.toDateString();
  }

  return {
    isRefreshing,
    top,
    bottom,
    meals,
    date,
    isInitialLoading,
    handleRefresh,
    handleNextDay,
    handlePreviousDay,
    isToday,
  };
}
