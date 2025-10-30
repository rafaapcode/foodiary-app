import { ActivityLevel } from '@app/types/ActivityLevel';
import { Gender } from '@app/types/Gender';
import { Goal } from '@app/types/Goal';
import z from 'zod';

export const onboardingSchema = z.object({
  goal: z.enum(Goal),
  gender: z.enum(Gender),
  birthDate: z.date(),
  height: z.string().min(1, 'Informe a sua altura'),
  weight: z.string().min(1, 'Informe o seu peso'),
  activityLevel: z.enum(ActivityLevel),
  account: z.object({
    name: z.string().min(1, 'Informe o seu nome'),
    email: z.email('Informe um email válido'),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
    confirmPassword: z.string().min(1, 'Confirme a sua senha'),
  }).refine(({ confirmPassword, password }) => {}, {}),
});

export type OnboardingSchema = z.infer<typeof onboardingSchema>;
