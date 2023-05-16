import React, { useMemo } from 'react';
import { View } from 'react-native';
import { SeparatorColor } from '@/SystemDesign/system/Color/palettes';
import { useForegroundColor } from '@/SystemDesign/system/Color/useForegroundColors';

export interface SeparatorProps {
  color: SeparatorColor;
  direction?: 'horizontal' | 'vertical';
}

/**
 * @description Renders a separator, either horizontal or vertical.
 */
export function Separator({ color, direction = 'horizontal' }: SeparatorProps) {
  const foregroundColor = useForegroundColor(color ?? 'separator'); // Fallback for JS consumers
  const style = useMemo(
    () => ({
      backgroundColor: foregroundColor,
      borderRadius: 1,
      ...(direction === 'horizontal'
        ? {
            height: 1.7,
          }
        : {
            flexGrow: 1,
            width: 2,
          }),
    }),
    [foregroundColor, direction],
  );

  return <View style={style} />;
}
