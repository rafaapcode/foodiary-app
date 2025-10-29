import { AppText } from '@ui/components/AppText';
import { theme } from '@ui/styles/theme';
import { ReactNode } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

const Step = ({ children }: {
  children: ReactNode;
}) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginBottom: bottom }]}>{children}</View>
  );
};

export default Step;

export function StepHeader ({ children }: { children: ReactNode })  {
  return <View style={styles.header}>{children}</View>;
};

export function StepTitle ({ children }: { children: string })  {
  return  <AppText size='3xl' weight='semiBold' style={styles.title}>{children}</AppText>;
};

export function StepSubTitle ({ children }: { children: string })  {
  return  <AppText style={styles.subtitle} color={theme.colors.gray[700]}>{children}</AppText>;
};

interface IStepContentProps {
  children: ReactNode;
  position?: 'center' | 'end';
}

export function StepContent ({ children, position = 'end' }: IStepContentProps)  {
  return <View style={[styles.content, position === 'center' && styles.contentCenter]}>{children}</View>;
};

interface IStepFooterProps {
  children: ReactNode;
  align?: 'start' | 'end';
}

export function StepFooter ({ children, align = 'end' }: IStepFooterProps)  {
  return <View style={[styles.footer, align === 'end' && { alignItems: 'flex-end' }]}>{children}</View>;
};

