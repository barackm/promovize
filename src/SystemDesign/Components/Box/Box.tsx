// @ts-nocheck
import React, { forwardRef, ReactNode, useMemo } from 'react';
import { View } from 'react-native';
import type * as Polymorphic from './polymorphic';
import {
  negativeSpace,
  NegativeSpace,
  positionSpace,
  PositionSpace,
  resolveToken,
  space,
  Space,
} from '@/SystemDesign/system/layout/space';
import {
  Height,
  heights,
  Width,
  widths,
} from '@/SystemDesign/system/layout/size';
import {
  BackgroundProvider,
  BackgroundProviderProps,
} from '@/SystemDesign/system/Color/BackgroundProvider';
import { Shadow, shadows } from '@/SystemDesign/system/layout/shadow';
import { ApplyShadow } from '../ApplyShadow/ApplyShadow';
import {
  useForegroundColor,
  useForegroundColors,
} from '@/SystemDesign/system/Color/useForegroundColors';
import { useColorMode } from '@/SystemDesign/system/Color/ColorModeContext';
import { HapticFeedbackType } from '@/utils';

const positions = ['absolute'] as const;
type Position = (typeof positions)[number];

export type BoxProps = {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | undefined;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  bottom?: PositionSpace;
  children?: ReactNode;
  flexBasis?: 0;
  flexDirection?: 'row' | 'row-reverse' | 'column';
  flexGrow?: 0 | 1;
  flexShrink?: 0 | 1;
  flexWrap?: 'wrap';
  height?: Height;
  left?: PositionSpace;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  margin?: NegativeSpace;
  marginBottom?: NegativeSpace;
  marginHorizontal?: NegativeSpace;
  marginLeft?: NegativeSpace;
  marginRight?: NegativeSpace;
  marginTop?: NegativeSpace;
  marginVertical?: NegativeSpace;
  padding?: Space;
  paddingBottom?: Space;
  paddingHorizontal?: Space;
  paddingLeft?: Space;
  paddingRight?: Space;
  paddingTop?: Space;
  paddingVertical?: Space;
  position?: Position;
  right?: PositionSpace;
  top?: PositionSpace;
  width?: Width;
  overflow?: 'hidden' | 'visible' | 'scroll';
} & (
  | {
      borderBottomRadius?: number;
      borderLeftRadius?: never;
      borderRightRadius?: never;
      borderTopRadius?: number;
    }
  | {
      borderBottomRadius?: never;
      borderLeftRadius?: number;
      borderRightRadius?: number;
      borderTopRadius?: never;
    }
) &
  (
    | {
        background?: BackgroundProviderProps['color'];
        shadow?: never;
      }
    | {
        background: BackgroundProviderProps['color'];
        shadow: Shadow;
      }
  );

type PolymorphicBox = Polymorphic.ForwardRefComponent<typeof View, BoxProps>;

/**
 * @description Renders a single `View` element with standard styling. Any
 * background color set via the `background` prop will be used to automatically
 * set the color mode for nested elements. To render another element instead,
 * you can provide the `as` prop, e.g. `<Box as={Animated.View}>`
 */
export const Box = forwardRef(function Box(
  {
    alignItems,
    as: Component = View,
    background,
    borderBottomLeftRadius,
    borderBottomRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRadius,
    borderRightRadius,
    borderTopLeftRadius,
    borderTopRadius,
    borderTopRightRadius,
    bottom: bottomProp,
    children,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    height: heightProp,
    justifyContent,
    left: leftProp,
    margin: marginProp,
    marginBottom: marginBottomProp,
    marginHorizontal: marginHorizontalProp,
    marginLeft: marginLeftProp,
    marginRight: marginRightProp,
    marginTop: marginTopProp,
    marginVertical: marginVerticalProp,
    overflow,
    padding: paddingProp,
    paddingBottom: paddingBottomProp,
    paddingHorizontal: paddingHorizontalProp,
    paddingLeft: paddingLeftProp,
    paddingRight: paddingRightProp,
    paddingTop: paddingTopProp,
    paddingVertical: paddingVerticalProp,
    position,
    right: rightProp,
    shadow,
    style: styleProp,
    top: topProp,
    width: widthProp,

    ...restProps
  },
  ref,
) {
  const margin = resolveToken(negativeSpace, marginProp);
  const marginBottom = resolveToken(negativeSpace, marginBottomProp);
  const marginHorizontal = resolveToken(negativeSpace, marginHorizontalProp);
  const marginLeft = resolveToken(negativeSpace, marginLeftProp);
  const marginRight = resolveToken(negativeSpace, marginRightProp);
  const marginTop = resolveToken(negativeSpace, marginTopProp);
  const marginVertical = resolveToken(negativeSpace, marginVerticalProp);

  const padding = resolveToken(space, paddingProp);
  const paddingBottom = resolveToken(space, paddingBottomProp);
  const paddingHorizontal = resolveToken(space, paddingHorizontalProp);
  const paddingLeft = resolveToken(space, paddingLeftProp);
  const paddingRight = resolveToken(space, paddingRightProp);
  const paddingTop = resolveToken(space, paddingTopProp);
  const paddingVertical = resolveToken(space, paddingVerticalProp);

  const bottom = resolveToken(positionSpace, bottomProp);
  const left = resolveToken(positionSpace, leftProp);
  const right = resolveToken(positionSpace, rightProp);
  const top = resolveToken(positionSpace, topProp);

  const width = resolveToken(widths, widthProp);
  const height = resolveToken(heights, heightProp);

  const shadows = useShadow(shadow);

  const styles = useMemo(() => {
    return {
      alignItems,
      borderBottomLeftRadius:
        borderBottomLeftRadius ??
        borderBottomRadius ??
        borderLeftRadius ??
        borderRadius,
      borderBottomRightRadius:
        borderBottomRightRadius ??
        borderBottomRadius ??
        borderRightRadius ??
        borderRadius,
      borderTopLeftRadius:
        borderTopLeftRadius ??
        borderTopRadius ??
        borderLeftRadius ??
        borderRadius,
      borderTopRightRadius:
        borderTopRightRadius ??
        borderTopRadius ??
        borderRightRadius ??
        borderRadius,
      bottom,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      height,
      justifyContent,
      left,
      margin,
      marginBottom,
      marginHorizontal,
      marginLeft,
      marginRight,
      marginTop,
      marginVertical,
      padding,
      paddingBottom,
      paddingHorizontal,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingVertical,
      position,
      right,
      top,
      width,
    };
  }, [
    alignItems,
    borderBottomLeftRadius,
    borderBottomRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRadius,
    borderRightRadius,
    borderTopLeftRadius,
    borderTopRadius,
    borderTopRightRadius,
    bottom,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    height,
    justifyContent,
    left,
    margin,
    marginBottom,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginTop,
    marginVertical,
    padding,
    paddingBottom,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingVertical,
    position,
    right,
    top,
    width,
  ]);

  const style = useMemo(() => {
    const stylesArray = [styles, styleProp];
    return stylesArray.flat();
  }, [styles, styleProp, Component]);

  return background ? (
    <BackgroundProvider
      color={background}
      style={[
        style,
        {
          alignSelf: 'flex-start',
        },
      ]}>
      {({ backgroundColor, backgroundStyle }) => {
        return (
          <ApplyShadow backgroundColor={backgroundColor} shadows={shadows}>
            <Component style={[backgroundStyle]} {...restProps} ref={ref}>
              {children}
            </Component>
          </ApplyShadow>
        );
      }}
    </BackgroundProvider>
  ) : (
    <Component style={style} {...restProps} ref={ref}>
      {children}
    </Component>
  );
}) as PolymorphicBox;

const useShadowColorMode = () => {
  const { colorMode } = useColorMode();

  if (colorMode === 'darkTinted') {
    return 'dark';
  }

  if (colorMode === 'lightTinted') {
    return 'light';
  }

  return colorMode;
};

const useShadow = (shadowProp: BoxProps['shadow']) => {
  const shadowColorMode = useShadowColorMode();
  const shadowToken: any = resolveToken(shadows, shadowProp);
  const shadow =
    shadowToken && 'light' in shadowToken
      ? shadowToken[shadowColorMode]
      : shadowToken;

  const iosColors = useMemo(() => {
    return shadow ? shadow.ios.map(({ color }: any) => color) : [];
  }, [shadow]);
  const iosShadowColors = useForegroundColors(iosColors);

  const androidColor = useForegroundColor(
    shadow ? shadow.android.color : 'shadowFar',
  );

  return useMemo(
    () =>
      shadow
        ? {
            android: {
              ...shadow.android,
              color: androidColor,
            },
            ios: shadow.ios.map((item: any, index: any) => {
              const { x, y, blur, opacity } = item;

              return {
                color: iosShadowColors[index],
                offset: { width: x, height: y },
                opacity,
                radius: blur,
              };
            }),
          }
        : undefined,
    [androidColor, iosShadowColors, shadow],
  );
};
