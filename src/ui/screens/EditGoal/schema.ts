import z from 'zod';

export const editGoalSchema = z.object({
  calories: z.string().min(0, 'Calorias devem ser maiores que 0'),
  proteins: z.string().min(0, 'Proteínas devem ser maiores que 0'),
  carbohydrates: z.string().min(0, 'Carboidratos devem ser maiores que 0'),
  fats: z.string().min(0, 'Gorduras devem ser maiores que 0'),
});

export type EditGoalFormData = z.infer<typeof editGoalSchema>;
