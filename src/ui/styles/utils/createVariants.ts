import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type Style = ViewStyle | TextStyle | ImageStyle;

type Variant = {
  [variant: string]: {
    [variantName: string]: Style;
  };
};

interface ICreateVariantsParams<TVariants extends Variant> {
  base?: Style;
  variants: TVariants;
  defaultVariants: {
    [k in keyof TVariants]: keyof TVariants[k];
  };
}

export function createVariants<TVariants extends Variant>({
  base = {},
  defaultVariants,
  variants,
}: ICreateVariantsParams<TVariants>) {
  return (selectedVariants?: {
    [k in keyof TVariants]?: keyof TVariants[k];
  }) => {
    let styles = { ...base };
    for(const [variant, variantsStyles] of Object.entries(variants)) {
      const variantName = selectedVariants?.[variant] ?? defaultVariants[variant];
      const selectedVariantStyls = variantsStyles[variantName as keyof typeof variantsStyles];
      styles = {
        ...styles,
        ...selectedVariantStyls,
      };
    }
    return styles;
  };
}

export type VariantProps<T extends ReturnType<typeof createVariants>> = Parameters<T>[0];
