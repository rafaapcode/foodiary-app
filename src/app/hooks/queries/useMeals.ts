import { MealsService } from '@app/services/MealsService';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export function useMeals(date: Date) {
  const [formattedDate] = date.toISOString().split('T');
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['meals', formattedDate],
    placeholderData: keepPreviousData,
    queryFn: async () => MealsService.getMealsByDate(formattedDate),
    staleTime: Infinity,
  });

  return {
    meals: data?.meals ?? [],
    isInitialLoading: isLoading,
    isLoading: isFetching,
    reloadMeals: refetch,
  };
}
