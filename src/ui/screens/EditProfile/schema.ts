import { Gender } from '@app/types/Gender';
import z from 'zod';

export const editProfileSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  birthDate: z.date('Data de nascimento é obrigatória'),
  height: z.string().min(1, 'Altura é obrigatória'),
  weight: z.string().min(1, 'Peso é obrigatório'),
  gender: z.enum(Gender),
});

export type EditProfileFormData = z.infer<typeof editProfileSchema>;
