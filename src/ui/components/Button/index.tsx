import { ComponentProps } from 'react';
import { Platform, Pressable, View } from 'react-native';
import { AppText } from '../AppText';
import { styles } from './styles';

type IButtonProps = ComponentProps<typeof Pressable>;

export function Button({ children, ...props }: IButtonProps) {
  const childEl = (
    typeof children === 'string' ? <AppText weight='medium'>{children}</AppText> : children
  );

  return (
    <View style={styles.wrapper}>
      <Pressable android_ripple={{ color: 'rgba(0,0,0,0.1)' }} style={({ pressed }) => [styles.button, pressed && Platform.OS === 'ios' && { opacity: 0.7 }]}  {...props}>
        {childEl}
      </Pressable>
    </View>
  );
}
