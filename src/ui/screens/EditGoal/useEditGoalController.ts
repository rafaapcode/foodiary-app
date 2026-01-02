import { useAccount } from '@app/hooks/queries/useAccount';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EditGoalFormData, editGoalSchema } from './schema';

export function useEditGoalController() {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const { account } = useAccount();

const form = useForm<EditGoalFormData>({
    resolver: zodResolver(editGoalSchema),
    defaultValues: {
      calories: account?.goal.calories.toString() || '',
      proteins: account?.goal.proteins.toString() || '',
      carbohydrates: account?.goal.carbohydrates.toString() || '',
      fats: account?.goal.fats.toString() || '',
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const payload = {
        calories: Number(data.calories),
        proteins: Number(data.proteins),
        carbohydrates: Number(data.carbohydrates),
        fats: Number(data.fats),
      };

      console.log('Form Data:', data);
    } catch (error) {
      console.log(error);
    }
  });

  return {
    account,
    top,
    bottom,
    navigation,
    form,
    handleSubmit,
  };
}
