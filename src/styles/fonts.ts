import { metrics } from './metrics';
const { moderateVerticalScale, verticalScale, moderateScale } = metrics;
const ios = metrics.platform === 'ios';

const font: Font = {
  family: {
    SFMono: 'SFMono-Regular',
    SFProRounded: ios ? 'SF Pro Rounded' : 'SF-Pro-Rounded',
  },

  letterSpacing: {
    zero: 0,
    roundedTightest: moderateScale(0.2),
    roundedTighter: moderateScale(0.3),
    roundedTight: moderateScale(0.4),
    roundedMedium: moderateScale(0.5),
    rounded: moderateScale(0.6),
    uppercase: moderateScale(0.8),
    one: moderateScale(1),
  },

  lineHeight: {
    none: 0,
    tightest: verticalScale(14),
    tight: verticalScale(16),
    normalTight: verticalScale(18),
    normal: verticalScale(20),
    loose: verticalScale(21),
    looserLoose: verticalScale(22),
    paragraphSmaller: verticalScale(24),
    paragraphSmall: verticalScale(25),
    looser: verticalScale(26),
    big: verticalScale(27),
    loosest: verticalScale(28),
    giant: verticalScale(108),
  },

  size: {
    micro: moderateVerticalScale(9),
    tiny: moderateVerticalScale(11),
    smaller: moderateVerticalScale(12),
    small: moderateVerticalScale(13),
    smedium: moderateVerticalScale(14),
    medium: moderateVerticalScale(15),
    lmedium: moderateVerticalScale(16),
    bmedium: moderateVerticalScale(17),
    large: moderateVerticalScale(18),
    larger: moderateVerticalScale(20),
    big: moderateVerticalScale(23),
    bigger: moderateVerticalScale(26),
    biggest: moderateVerticalScale(36),
    headline: moderateVerticalScale(50),
    h1: moderateVerticalScale(41),
    h2: moderateVerticalScale(32),
    h3: moderateVerticalScale(30),
    h4: moderateVerticalScale(20),
    h5: moderateVerticalScale(17),
    h6: moderateVerticalScale(14),
  },

  weight: {
    thin: '100',
    ultraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    heavy: '800',
    black: '900',
  },
};

interface Font {
  family: {
    SFMono: any;
    SFProRounded: any;
  };
  letterSpacing: {
    zero: any;
    roundedTightest: any;
    roundedTighter: any;
    roundedTight: any;
    roundedMedium: any;
    rounded: any;
    uppercase: any;
    one: any;
  };
  lineHeight: {
    none: any;
    tightest: any;
    tight: any;
    normalTight: any;
    normal: any;
    loose: any;
    looserLoose: any;
    paragraphSmaller: any;
    paragraphSmall: any;
    looser: any;
    big: any;
    loosest: any;
    giant: any;
  };
  size: {
    micro: any;
    tiny: any;
    smaller: any;
    small: any;
    smedium: any;
    medium: any;
    lmedium: any;
    bmedium: any;
    large: any;
    larger: any;
    big: any;
    bigger: any;
    biggest: any;
    headline: any;
    h1: any;
    h2: any;
    h3: any;
    h4: any;
    h5: any;
    h6: any;
  };
  weight: {
    thin: any;
    ultraLight: any;
    light: any;
    regular: any;
    medium: any;
    semibold: any;
    bold: any;
    heavy: any;
    black: any;
  };
}

export type FontSize = keyof Font['size'];
export type FontWeight = keyof Font['weight'];
export type FontFamily = keyof Font['family'];
export type FontLetterSpacing = keyof Font['letterSpacing'];
export type FontLineHeight = keyof Font['lineHeight'];

export default font;
