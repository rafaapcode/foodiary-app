import React, { useRef } from 'react';
import { Animated, StyleProp, Text, View, ViewStyle } from 'react-native';
import { Path } from 'react-native-svg';

 interface IArcProps {
  percentage: number;
  color: string;
  radius: number;
  strokeWidth: number;
  baseStrokeColor: string;
  style?: StyleProp<ViewStyle>;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

const Arc = ({
  baseStrokeColor,
  color,
  percentage,
  radius,
  strokeWidth,
  style,
}: IArcProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <Text>Arc</Text>
    </View>
  );
};

export default Arc;
