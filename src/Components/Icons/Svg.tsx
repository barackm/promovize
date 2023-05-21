import React, { ReactNode } from 'react';
import SvgPrimitive, { SvgProps } from 'react-native-svg';

interface CustomSvgProps extends SvgProps {
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  children?: ReactNode;
}

const Svg: React.FC<CustomSvgProps> = ({
  scale,
  scaleX,
  scaleY,
  children,
  ...props
}) => {
  const transform = [];
  if (scale) transform.push({ scale });
  if (scaleX) transform.push({ scaleX });
  if (scaleY) transform.push({ scaleY });

  return (
    <SvgPrimitive {...props} style={{ transform }}>
      {children}
    </SvgPrimitive>
  );
};

export default Svg;
