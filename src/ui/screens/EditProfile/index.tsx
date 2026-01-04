import { Gender } from '@app/types/Gender';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import AppHeader from '@ui/components/AppHeader';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { FormGroup } from '@ui/components/FormGroup';
import { Input } from '@ui/components/input';
import RadioGroup, {
  RadioGroupIcon,
  RadioGroupItem,
  RadioGroupLabel,
} from '@ui/components/RadioGroup';
import { formatDecimal } from '@ui/utils/formatDecimal';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { styles } from './style';
import { useEditProfileController } from './useEditProfileController';

const EditProfile = () => {
  const {
    top,
    bottom,
    form: {
      control,
      formState: { isSubmitting },
    },
    handleSubmit,
    account,
  } = useEditProfileController();

  const [showDatePicker, setShowDatePicker] = useState(false);

  if (!account) {
    return null;
  }

  return (
    <View style={[styles.container, { paddingTop: top + 12 }]}>
      <AppHeader title="Perfil" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.content}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{
                uri: 'https://i.pravatar.cc/300',
              }}
              style={styles.profileImage}
            />
          </View>

          <View style={styles.form}>
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <FormGroup label="Nome" error={fieldState.error?.message}>
                  <Input
                    placeholder="Seu nome"
                    value={field.value}
                    onChangeText={field.onChange}
                  />
                </FormGroup>
              )}
            />

            <Controller
              control={control}
              name="birthDate"
              render={({ field, fieldState }) => (
                <>
                  <FormGroup
                    label="Data de Nascimento"
                    error={fieldState.error?.message}
                  >
                    <Input
                      placeholder="DD/MM/AAAA"
                      value={field.value?.toLocaleDateString('pt-BR')}
                      onFocus={() => setShowDatePicker(true)}
                      showSoftInputOnFocus={false}
                    />
                  </FormGroup>
                  {showDatePicker && (
                    <RNDateTimePicker
                      value={field.value || new Date()}
                      mode="date"
                      display="spinner"
                      onChange={(event, selectedDate) => {
                        setShowDatePicker(Platform.OS === 'ios');
                        if (selectedDate) {
                          field.onChange(selectedDate);
                        }
                      }}
                    />
                  )}
                </>
              )}
            />

            <Controller
              control={control}
              name="height"
              render={({ field, fieldState }) => (
                <FormGroup label="Altura" error={fieldState.error?.message}>
                  <View style={styles.inputWithUnit}>
                    <View style={styles.inputWrapper}>
                      <Input
                        placeholder="175"
                        keyboardType="numeric"
                        value={field.value}
                        onChangeText={field.onChange}
                        formatter={formatDecimal}
                      />
                    </View>
                    <AppText style={styles.unit}>cm</AppText>
                  </View>
                </FormGroup>
              )}
            />

            <Controller
              control={control}
              name="weight"
              render={({ field, fieldState }) => (
                <FormGroup label="Peso" error={fieldState.error?.message}>
                  <View style={styles.inputWithUnit}>
                    <View style={styles.inputWrapper}>
                      <Input
                        placeholder="80"
                        keyboardType="numeric"
                        value={field.value}
                        onChangeText={field.onChange}
                        formatter={formatDecimal}
                      />
                    </View>
                    <AppText style={styles.unit}>kg</AppText>
                  </View>
                </FormGroup>
              )}
            />

            <Controller
              control={control}
              name="gender"
              render={({ field, fieldState }) => (
                <FormGroup label="Sexo" error={fieldState.error?.message}>
                  <RadioGroup
                    value={field.value}
                    onChangeValue={field.onChange}
                    error={!!fieldState.error}
                    orientation="horizontal"
                  >
                    <RadioGroupItem value={Gender.MALE}>
                      <RadioGroupIcon>👨</RadioGroupIcon>
                      <RadioGroupLabel>Masculino</RadioGroupLabel>
                    </RadioGroupItem>
                    <RadioGroupItem value={Gender.FEMALE}>
                      <RadioGroupIcon>👩</RadioGroupIcon>
                      <RadioGroupLabel>Feminino</RadioGroupLabel>
                    </RadioGroupItem>
                  </RadioGroup>
                </FormGroup>
              )}
            />
          </View>
        </ScrollView>
        <View style={[styles.footer, { paddingBottom: bottom }]}>
          <Button onPress={handleSubmit} isLoading={isSubmitting}>
            Salvar
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EditProfile;
