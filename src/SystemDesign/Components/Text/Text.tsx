import React, { LegacyRef, ReactNode, forwardRef } from 'react';
import { Text as NativeText } from 'react-native';
import { TextColor } from '@/SystemDesign/system/Color/palettes';
import { useTextStyles } from './useTextStyle';
import { CustomColor } from '@/SystemDesign/system/Color/useForegroundColors';
import {
  textSizes,
  textWeights,
} from '@/SystemDesign/system/typography/typography';
import {
  nodeIsString,
  renderStringWithEmoji,
} from '../../system/typography/renderStringWithEmoji';
import { ios } from '@/env';

export type TextSize = keyof typeof textSizes;
export type TextWeight = keyof typeof textWeights;

export type TextProps = {
  align?: 'center' | 'left' | 'right';
  color?: TextColor | CustomColor;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  numberOfLines?: number;
  size?: TextSize;
  tabularNumbers?: boolean;
  uppercase?: boolean;
  weight?: TextWeight;
} & {
  containsEmoji?: true;
  children: string | (string | null)[] | (ReactNode | null | undefined);
};

export const Text: React.FC<TextProps> = forwardRef(
  (props, ref: LegacyRef<NativeText> | undefined) => {
    const {
      children,
      numberOfLines,
      ellipsizeMode,
      containsEmoji: containsEmojiProp = false,
    } = props;
    const textStyle = useTextStyles(props);

    return (
      <NativeText
        allowFontScaling={false}
        numberOfLines={numberOfLines}
        ellipsizeMode={ellipsizeMode}
        ref={ref}
        style={textStyle}>
        {ios && containsEmojiProp && nodeIsString(children)
          ? renderStringWithEmoji(children)
          : children}
      </NativeText>
    );
  },
);
