import { MealsService } from '@app/services/MealsService';
import { MealStatus } from '@app/types/Meals';
import { useQuery } from '@tanstack/react-query';

const processingStatuses = [
  MealStatus.UPLOADING,
  MealStatus.QUEUED,
  MealStatus.PROCESSING,
];

export function useMeal(id?: string) {
  const { data, isFetching } = useQuery({
    queryKey: ['meal', id],
    enabled: !!id,
    queryFn: async () => {
      if(!id) {
        return;
      }
      const { meal } = await MealsService.getMealById(id);
      return meal;
    },
    staleTime: Infinity,
    refetchInterval: (query) => {
      const status = query.state.data?.status;
      if (status && !processingStatuses.includes(status)) {
        return 3_000;
      }
      return false;
    },
  });

  const isProocessingMeal = !!(data && processingStatuses.includes(data.status));

  return {
    meal: data,
    isLoading: isFetching,
    isProcessing: isProocessingMeal,
  };
}
