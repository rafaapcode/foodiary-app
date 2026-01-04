import AppHeader from '@ui/components/AppHeader';
import { Button } from '@ui/components/Button';
import { FormGroup } from '@ui/components/FormGroup';
import { Input } from '@ui/components/input';
import React from 'react';
import { Controller } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { styles } from './style';
import { useEditGoalController } from './useEditGoalController';

const EditGoal = () => {
  const {
    top,
    bottom,
    form: {
      control,
      formState: { isSubmitting },
    },
    handleSubmit,
    account,
    goBack,
  } = useEditGoalController();

  if (!account) {
    return null;
  }

  return (
    <View style={[styles.container, { paddingTop: top + 12 }]}>
      <AppHeader title="Editar Metas" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.content}>
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
                <FormGroup
                  label="Carboidratos"
                  error={fieldState.error?.message}
                >
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
        </ScrollView>
        <View style={[styles.footer, { paddingBottom: bottom }]}>
          <View style={{ flex: 1 }}>
            <Button
              variant="secondary"
              disabled={isSubmitting}
              onPress={goBack}
            >
              Cancelar
            </Button>
          </View>
          <View>
            <Button onPress={handleSubmit} isLoading={isSubmitting}>
              Salvar Alterações
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EditGoal;
