import AppHeader from '@ui/components/AppHeader';
import { Button } from '@ui/components/Button';
import { FormGroup } from '@ui/components/FormGroup';
import { Input } from '@ui/components/input';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { styles } from './style';
import { useEditGoalController } from './useEditGoalController';

const EditGoal = () => {
  const {
    top,
    form: {
      control,
      formState: { isSubmitting },
    },
    handleSubmit,
    account,
  } = useEditGoalController();

  if (!account) {
    return null;
  }

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <AppHeader title="Editar Metas" />

      <ScrollView>
        <View style={styles.form}>
          <Controller
            control={control}
            name="calories"
            render={({ field, fieldState }) => (
              <FormGroup label="Calorias" error={fieldState.error?.message}>
                <Input
                  placeholder="2000"
                  keyboardType="numeric"
                  value={field.value}
                  onChangeText={field.onChange}
                />
              </FormGroup>
            )}
          />

          <Controller
            control={control}
            name="carbohydrates"
            render={({ field, fieldState }) => (
              <FormGroup label="Carboidratos" error={fieldState.error?.message}>
                <Input
                  placeholder="2000"
                  keyboardType="numeric"
                  value={field.value}
                  onChangeText={field.onChange}
                />
              </FormGroup>
            )}
          />

          <Controller
            control={control}
            name="fats"
            render={({ field, fieldState }) => (
              <FormGroup label="Gorduras" error={fieldState.error?.message}>
                <Input
                  placeholder="2000"
                  keyboardType="numeric"
                  value={field.value}
                  onChangeText={field.onChange}
                />
              </FormGroup>
            )}
          />

          <Controller
            control={control}
            name="proteins"
            render={({ field, fieldState }) => (
              <FormGroup label="Proteínas" error={fieldState.error?.message}>
                <Input
                  placeholder="2000"
                  keyboardType="numeric"
                  value={field.value}
                  onChangeText={field.onChange}
                />
              </FormGroup>
            )}
          />
        </View>
        <Button onPress={handleSubmit} isLoading={isSubmitting}>
          Salvar Alterações
        </Button>
      </ScrollView>
    </View>
  );
};

export default EditGoal;
