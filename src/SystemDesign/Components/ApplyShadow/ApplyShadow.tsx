import ConditionalWrap from 'conditional-wrap';
import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

import { AndroidShadow } from './AndroidShadow';
import { IOSShadow } from './IOSShadow';
import { android, ios } from '@/env';

export type AndroidShadowItem = {
  elevation: ViewStyle['elevation'];
  opacity: ViewStyle['opacity'];
  color: ViewStyle['shadowColor'];
};
export type ShadowItem = {
  color: ViewStyle['shadowColor'];
  offset: ViewStyle['shadowOffset'];
  opacity: ViewStyle['shadowOpacity'];
  radius: ViewStyle['shadowRadius'];
};
export type Shadows = {
  ios: ShadowItem[];
  android: AndroidShadowItem;
};

export type ApplyShadowProps = {
  backgroundColor: ViewStyle['backgroundColor'];
  children: React.ReactElement<ViewProps>;
  shadows?: Shadows;
};

const splitPositionStyles = (style: ViewStyle) => {
  const {
    bottom,
    direction,
    display,
    end,
    left,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginStart,
    marginTop,
    marginVertical,
    position,
    right,
    start,
    top,
    zIndex,
    backfaceVisibility,
    opacity,
    transform,
    width,
    height,
    ...rest
  } = style;
  return [
    {
      backfaceVisibility,
      bottom,
      direction,
      display,
      end,
      height,
      left,
      margin,
      marginBottom,
      marginEnd,
      marginHorizontal,
      marginLeft,
      marginRight,
      marginStart,
      marginTop,
      marginVertical,
      opacity,
      position,
      right,
      start,
      top,
      transform,
      width,
      zIndex,
    },
    rest,
  ];
};

export const ApplyShadow = React.forwardRef(
  (
    { backgroundColor, children: child, shadows }: ApplyShadowProps,
    ref: React.Ref<any>,
  ) => {
    if (!shadows) return child;

    const [parentStyles, childStyles] = splitPositionStyles(
      StyleSheet.flatten(child.props.style) || {},
    );
    const iosShadows = [...shadows?.ios].reverse();

    return (
      <View ref={ref} style={parentStyles}>
        {ios && (
          <IOSShadow
            backgroundColor={backgroundColor}
            shadows={iosShadows}
            style={childStyles}
          />
        )}
        {android && (
          <AndroidShadow
            backgroundColor={backgroundColor}
            shadow={shadows.android}
            style={childStyles}
          />
        )}
        {child}
      </View>
    );
  },
);

ApplyShadow.displayName = 'ApplyShadow';
