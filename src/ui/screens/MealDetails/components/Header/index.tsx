import { Meal, MealInputType } from '@app/types/Meals';
import { useNavigation } from '@react-navigation/native';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeftIcon } from 'lucide-react-native';
import { useMemo } from 'react';
import { ActivityIndicator, ImageBackground, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './style';

interface IHeaderProps {
  meal?: Meal;
  isLoading: boolean;
}

export default function Header({ meal, isLoading }: IHeaderProps) {
  const { top } = useSafeAreaInsets();
  const { goBack } = useNavigation();

  const summary = useMemo(
    () =>
      (meal?.foods || []).reduce(
        (acc, food) => {
          const proteinCalories = food.proteins * 4;
          const carbCalories = food.carbohydrates * 4;
          const fatCalories = food.fats * 9;
          const totalCalories = Math.round(
            proteinCalories + carbCalories + fatCalories,
          );

          return {
            calories: Math.round(acc.calories + totalCalories),
            proteins: Math.round(acc.proteins + food.proteins),
            carbohydrates: Math.round(acc.carbohydrates + food.carbohydrates),
            fats: Math.round(acc.fats + food.fats),
          };
        },
        {
          calories: 0,
          proteins: 0,
          carbohydrates: 0,
          fats: 0,
        },
      ),
    [meal?.foods],
  );

  const percentages = useMemo(() => {
    const proteinCalories = summary.proteins * 4;
    const carbCalories = summary.carbohydrates * 4;
    const fatCalories = summary.fats * 9;

    if (summary.calories === 0) {
      return {
        calories: 0,
        proteins: 0,
        carbohydrates: 0,
        fats: 0,
      };
    }

    return {
      proteins: Math.round((proteinCalories / summary.calories) * 100),
      carbohydrates: Math.round((carbCalories / summary.calories) * 100),
      fats: Math.round((fatCalories / summary.calories) * 100),
    };
  }, [summary]);

  const isPictureInput = meal?.inputType === MealInputType.PICTURE;

  if (isLoading) {
    return (
      <>
        <ActivityIndicator size="large" color={theme.colors.gray[700]} />
      </>
    );
  }

  return (
    <>
      <StatusBar animated translucent barStyle="light-content" />

      <View style={[styles.container]}>
        {isPictureInput && (
          <ImageBackground
            style={styles.image}
            source={{
              uri: meal.inputFileUrl,
            }}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0)']}
              style={[styles.overlay, { paddingTop: top + 12 }]}
              start={{ y: 0.5, x: 0 }}
              end={{ y: 1, x: 0 }}
            >
              <BlurView style={styles.blurView}>
                <Button onPress={goBack} variant="ghost" size="icon">
                  <ChevronLeftIcon size={20} color={theme.colors.white} />
                </Button>
              </BlurView>
            </LinearGradient>
          </ImageBackground>
        )}
        <View
          style={[styles.content, { marginTop: !isPictureInput ? top : 0 }]}
        >
          <View style={styles.pageTitleContainer}>
            <Button onPress={goBack} variant="ghost" size="icon">
              <ChevronLeftIcon size={20} color={theme.colors.white} />
            </Button>
            <AppText weight="medium" color={theme.colors.gray[300]}>
              Refeição
            </AppText>
          </View>

          <View style={styles.caloriesContainer}>
            <AppText color={theme.colors.gray[300]}>Calorias</AppText>
            <AppText color={theme.colors.white} weight="medium">
              {summary.calories} kcal
            </AppText>
          </View>
        </View>

        <View style={styles.macrosContainer}>
          <View style={styles.macro}>
            <AppText color={theme.colors.gray[700]}>Proteínas</AppText>
            <AppText weight="medium" color={theme.colors.support.teal}>
              {summary.proteins} g ({percentages.proteins}%)
            </AppText>
          </View>

          <View style={styles.macro}>
            <AppText color={theme.colors.gray[700]}>Carboidratos</AppText>
            <AppText weight="medium" color={theme.colors.support.yellow}>
              {summary.carbohydrates} g ({percentages.carbohydrates}%)
            </AppText>
          </View>

          <View style={styles.macro}>
            <AppText color={theme.colors.gray[700]}>Gorduras</AppText>
            <AppText weight="medium" color={theme.colors.support.orange}>
              {summary.fats} g ({percentages.fats}%)
            </AppText>
          </View>
        </View>

        <View style={styles.macrosProgressContainer}>
          <View style={styles.macrosProgress}>
            <View
              style={[
                styles.proteinProgress,
                { width: `${percentages.proteins}%` },
              ]}
            />
            <View
              style={[
                styles.carbohydratesProgress,
                { width: `${percentages.carbohydrates}%` },
              ]}
            />
            <View
              style={[
                styles.fatsProgress,
                { width: `${percentages.fats}%` },
              ]}
            />
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.mealNameContainer}>
        <AppText size="xl" weight="semiBold" style={styles.mealName}>
          {meal?.name}
        </AppText>
      </View>

      <AppText
        weight="medium"
        color={theme.colors.gray[700]}
        style={styles.mealItemsHeader}
      >
        Itens
      </AppText>
    </>
  );
}
