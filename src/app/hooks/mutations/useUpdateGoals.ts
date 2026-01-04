import { queryClient } from '@app/lib/QueryClient';
import { GoalsService } from '@app/services/GoalsService';
import { useMutation } from '@tanstack/react-query';

export function useUpdateGoal() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: GoalsService.UpdateGoalsPayload) => {
      await GoalsService.updateGoals(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] });
    },
  });

  return {
    updateGoal: mutateAsync,
    isLoading: isPending,
  };
}
