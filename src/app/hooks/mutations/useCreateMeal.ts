import { getFileInfo } from '@app/lib/getFileInfo';
import { MealsService } from '@app/services/MealsService';
import { useMutation } from '@tanstack/react-query';

export function useCreateMeal() {
  const { mutateAsync } = useMutation({
    mutationFn: async (fileUri: string) => {
      const { size, type } = await getFileInfo(fileUri);

      await MealsService.createMeal({
        file: {
          size,
          type,
        },
      });
    },
  });

  return {
    createMeal: mutateAsync,
  };
}
