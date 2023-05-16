import React, { Children, ReactElement, ReactNode, useMemo } from 'react';
import flattenChildren from 'react-flatten-children';
import {
  AlignHorizontal,
  alignHorizontalToFlexAlign,
  AlignVertical,
  alignVerticalToFlexAlign,
} from '../../system/layout/alignment';
import { Box } from '../Box/Box';
import { Space, negateSpace } from '@/SystemDesign/system/layout/space';
import { StyleSheetProperties, ViewStyle } from 'react-native/types';
import { View } from 'react-native';

export type InlineProps = {
  children: ReactNode | Array<ReactNode & { flex?: number }>;
  alignHorizontal?: AlignHorizontal;
  alignVertical?: AlignVertical;
  space?: Space;
  horizontalSpace?: Space;
  verticalSpace?: Space;
  style?: ViewStyle;
} & (
  | {
      separator?: undefined;
      wrap?: true;
    }
  | {
      separator?: ReactElement;
      wrap: false;
    }
);

export const Inline = ({
  children,
  alignHorizontal,
  alignVertical,
  space,
  horizontalSpace: horizontalSpaceProp,
  verticalSpace: verticalSpaceProp,
  separator,
  wrap = true,
  style,
}: InlineProps) => {
  const verticalSpace = verticalSpaceProp ?? space;
  const horizontalSpace = horizontalSpaceProp ?? space;

  const flattenedChildren = useMemo(
    () => flattenChildren(children),
    [children],
  );

  return (
    <Box
      alignItems={
        alignVertical ? alignVerticalToFlexAlign[alignVertical] : undefined
      }
      flexDirection="row"
      flexWrap={wrap ? 'wrap' : undefined}
      justifyContent={
        alignHorizontal
          ? alignHorizontalToFlexAlign[alignHorizontal]
          : undefined
      }
      marginRight={
        wrap && horizontalSpace ? negateSpace(horizontalSpace) : undefined
      }
      style={style}
      marginTop={
        wrap && verticalSpace ? negateSpace(verticalSpace) : undefined
      }>
      {Children.map(flattenedChildren, (child: any, index) => {
        if (wrap) {
          return (
            <Box
              paddingRight={horizontalSpace}
              paddingTop={verticalSpace}
              style={{ flex: child.props.flex }}>
              {child}
            </Box>
          );
        }

        const isLastChild = index === flattenedChildren.length - 1;
        return (
          <>
            {horizontalSpace && !isLastChild ? (
              <Box
                paddingRight={horizontalSpace}
                style={{ flex: child.props.flex }}>
                {child}
              </Box>
            ) : (
              child
            )}
            {separator && !isLastChild ? (
              <Box paddingRight={horizontalSpace}>{separator}</Box>
            ) : null}
          </>
        );
      })}
    </Box>
  );
};

export type FlexChildProps = {
  children: ReactNode;
  flex?: number;
};

export const FlexChild: React.FC<FlexChildProps> = ({ children, flex }) => {
  return <View style={{ flex: flex }}>{children}</View>;
};
