import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type Style = ViewStyle | TextStyle | ImageStyle

type Variant = {
  [variant: string]: {
    [variantName: string]: Style
  }
}

interface ICreateVariantsParams<TVariants extends Variant> {
  base?: Style;
  variants: TVariants;
  defaultVariants: {
    [k in keyof TVariants]: TVariants[k];
  };
}

export function createVariants<TVariants extends Variant>({}: ICreateVariantsParams<TVariants>) {

}
