import { getFileInfo } from '@app/lib/getFileInfo';
import { MealsService } from '@app/services/MealsService';
import { useMutation } from '@tanstack/react-query';

export function useCreateMeal() {
  const { mutateAsync, isPending, data } = useMutation({
    mutationFn: async (fileUri: string) => {
      const { size, type,  fileName } = await getFileInfo(fileUri);

      const { mealId } = await MealsService.createMeal({
        file: {
          size,
          type,
          name: fileName,
          uri: fileUri,
        },
      });

      return { mealId };
    },
  });

  return {
    createMeal: mutateAsync,
    isLoading: isPending,
    createdMealId: data?.mealId,
  };
}
