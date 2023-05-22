import React from 'react';
import {
  Image as NativeImage,
  ImageContentFit,
  ImageProps,
  ImageStyle,
} from 'expo-image';
import {
  Height,
  Width,
  heights,
  widths,
} from '@/SystemDesign/system/layout/size';
import { resolveToken } from '@/SystemDesign/system/layout/space';
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

interface CustomImageProps extends Omit<ImageProps, 'contentFit'> {
  source: ImageProps['source'];
  iWidth?: Width;
  iHeight?: Height;
  borderRadius?: number;
  contentFit?:
    | 'cover'
    | 'contain'
    | 'stretch'
    | 'repeat'
    | 'center'
    | 'scale-down';
  style?: ImageStyle;
}

const resizeModeToContentFit: Record<
  NonNullable<CustomImageProps['resizeMode']>,
  ImageContentFit
> = {
  cover: 'cover',
  contain: 'contain',
  stretch: 'fill',
  repeat: 'none',
  center: 'none',
};

export const Image: React.FC<CustomImageProps> = ({
  source,
  iWidth: widthProp,
  iHeight: heightProp,
  resizeMode = 'cover',
  style,
  ...rest
}) => {
  const width = resolveToken(widths, widthProp);
  const height = resolveToken(heights, heightProp);

  const customStyle: ImageStyle = {
    width: width || '100%',
    height: height || '100%',
  };

  const contentFit: ImageContentFit = resizeModeToContentFit[resizeMode];

  return (
    <NativeImage
      source={source}
      style={[customStyle]}
      placeholder={blurhash}
      {...rest}
      contentFit={contentFit}
    />
  );
};
