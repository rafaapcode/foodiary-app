import logo from '@ui/assets/logo/Logo.png';
import { Image } from 'react-native';

interface ILogoProps {
  width?: number;
  height?: number;
}

export function Logo({ width = 100, height = 32 }: ILogoProps) {
  return (
    <Image source={logo} style={{ width, height }} resizeMode='contain'/>
  );
};
