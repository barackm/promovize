import React from 'react';
import { Source } from 'react-native-fast-image';
import { useTheme } from '@/theme/ThemeProvider';
import { ios } from '@/env';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Inline } from '../Inline/Inline';
import { Stack } from '../Stack/Stack';
import { ButtonPressAnimation } from '../ButtonPressAnimation';
import { Icon } from '@/Components/Icons';
import { IconName } from '@/Components/Icons/Icon';
// import { ImgixImage } from '@/components/images';

// interface ImageIconProps {
//   size?: number;
//   source: StaticImageData;
// }

// const ImageIcon = ({ size = 60, source }: ImageIconProps) => (
//   <Box
//     as={ImgixImage}
//     borderRadius={size / 2}
//     height={{ custom: size }}
//     marginLeft={{ custom: -12 }}
//     marginRight={{ custom: -12 }}
//     marginTop={{ custom: 8 }}
//     source={source as Source}
//     width={{ custom: size }}
//     size={size}
//   />
// );

interface TextIconProps {
  icon: string;
  disabled?: boolean;
  isLink?: boolean;
  colorOverride?: string;
  isEmoji?: boolean;
}

const TextIcon = ({
  colorOverride,
  icon,
  disabled,
  isLink,
  isEmoji = false,
}: TextIconProps) => (
  <Box paddingLeft={{ custom: isEmoji ? 7 : 0 }}>
    <Text
      color={
        colorOverride
          ? { custom: colorOverride }
          : disabled
          ? 'labelSecondary'
          : isLink
          ? 'label'
          : 'blue'
      }
      containsEmoji
      size="18px / 27px"
      weight="semibold">
      {icon}
    </Text>
  </Box>
);

interface SelectionProps {
  children: React.ReactNode;
}

const Selection = ({ children }: SelectionProps) => (
  <Text color="labelSecondary" size="18px / 27px" weight="semibold">
    {children}
  </Text>
);

type StatusType = 'complete' | 'incomplete' | 'warning' | 'selected';

interface StatusIconProps {
  status: StatusType;
}

const StatusIcon = ({ status }: StatusIconProps) => {
  const { colors, isDarkMode } = useTheme();
  const statusColors: { [key in StatusType]: string } = {
    complete: colors.green,
    incomplete: colors.alpha(colors.blueGreyDark, 0.5),
    selected: colors.appleBlue,
    warning: colors.orangeLight,
  };

  const statusIcons: { [key in StatusType]: IconName } = {
    complete: 'checkmark',
    incomplete: 'checkmark',
    selected: 'checkmark',
    warning: 'warning',
  };

  return (
    <Box
      as={Icon}
      name={statusIcons[status]}
      scale={1}
      style={{
        shadowColor: isDarkMode ? colors.shadow : statusColors[status],
        elevation: 12,
        shadowOffset: {
          height: 4,
          width: 0,
        },
        shadowRadius: 6,
        shadowOpacity: ios ? 0.4 : 1,
      }}
      colors={[{ custom: statusColors[status] }, null]}
    />
  );
};

interface TitleProps {
  text: string;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold' | 'heavy';
  disabled?: boolean;
  isLink?: boolean;
}

const Title = ({ text, weight = 'semibold', disabled, isLink }: TitleProps) => (
  <Text
    color={disabled ? 'labelSecondary' : isLink ? 'label' : 'blue'}
    containsEmoji
    size="18px / 27px"
    weight={weight}
    numberOfLines={1}>
    {text}
  </Text>
);

interface LabelProps {
  text: string;
  warn?: boolean;
}

const Label = ({ text, warn }: LabelProps) => {
  const { colors } = useTheme();
  return (
    <Text
      color={warn ? { custom: colors.orangeLight } : 'labelSecondary'}
      size="15pt"
      weight="medium">
      {text}
    </Text>
  );
};

interface MenuItemProps {
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  size: 52 | 60 | 42 | 32;
  hasRightArrow?: boolean;
  onPress?: () => void;
  titleComponent: React.ReactNode;
  labelComponent?: React.ReactNode;
  disabled?: boolean;
  hasChevron?: boolean;
  testID?: string;
}

const MenuItem = ({
  hasRightArrow,
  onPress,
  leftComponent,
  rightComponent,
  size,
  titleComponent,
  labelComponent,
  disabled,
  hasChevron,
  testID,
}: MenuItemProps) => {
  const { colors } = useTheme();

  const Item = () => (
    <Box
      height={{ custom: size }}
      justifyContent="center"
      paddingHorizontal={{ custom: 16 }}
      testID={disabled ? testID : undefined}
      width="full">
      <Inline alignHorizontal="justify" alignVertical="center" wrap={false}>
        <Box flexShrink={1}>
          <Inline alignVertical="center" wrap={false}>
            {leftComponent && <Box width={{ custom: 46 }}>{leftComponent}</Box>}
            <Box flexShrink={1}>
              <Stack space="8px">
                {titleComponent}
                {labelComponent}
              </Stack>
            </Box>
          </Inline>
        </Box>
        <Box paddingLeft="8px">
          <Inline alignVertical="center" space={{ custom: 9 }}>
            {rightComponent}
            {hasRightArrow && <Box as={Icon} name="copy" />}
            {hasChevron && <Box as={Icon} name="copy" />}
          </Inline>
        </Box>
      </Inline>
    </Box>
  );

  return disabled ? (
    <Item />
  ) : (
    <ButtonPressAnimation onPress={onPress} scaleTo={0.96} testID={testID}>
      <Item />
    </ButtonPressAnimation>
  );
};

// MenuItem.ImageIcon = ImageIcon;
MenuItem.Label = Label;
MenuItem.Selection = Selection;
MenuItem.StatusIcon = StatusIcon;
MenuItem.TextIcon = TextIcon;
MenuItem.Title = Title;

export default MenuItem;
