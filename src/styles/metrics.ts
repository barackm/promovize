import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

export const metrics = {
  screenWidth,
  screenHeight,
  pixelRatio,
  baseMargin: PixelRatio.roundToNearestPixel(8 * pixelRatio),
  doubleBaseMargin: PixelRatio.roundToNearestPixel(16 * pixelRatio),
  smallMargin: PixelRatio.roundToNearestPixel(4 * pixelRatio),
  doubleSmallMargin: PixelRatio.roundToNearestPixel(8 * pixelRatio),
  horizontalLineHeight: PixelRatio.roundToNearestPixel(1),
  platform: Platform.OS,
  baseFontSize: PixelRatio.roundToNearestPixel(16 * pixelRatio),
  smallFontSize: PixelRatio.roundToNearestPixel(12 * pixelRatio),
  largeFontSize: PixelRatio.roundToNearestPixel(20 * pixelRatio),
  borderWidth: PixelRatio.roundToNearestPixel(1),
  borderRadius: PixelRatio.roundToNearestPixel(4),
  scale: (size: number) => (screenWidth / 375) * size,
  moderateScale: (size: number, factor = 0.5) =>
    size + (metrics.scale(size) - size) * factor,
  verticalScale: (size: number) => (screenHeight / 812) * size,
  moderateVerticalScale: (size: number, factor = 0.5) =>
    size + (metrics.verticalScale(size) - size) * factor,
};
