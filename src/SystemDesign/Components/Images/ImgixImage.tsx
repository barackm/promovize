import * as React from 'react';
import FastImage, { FastImageProps, Source } from 'react-native-fast-image';

export type ImgixImageProps = FastImageProps & {
  readonly Component?: React.ElementType;
  readonly size: number;
  readonly localImage?: number;
  readonly autoRetry?: boolean;
  readonly maxRetries?: number;
  readonly onRetry?: () => void;
};

const ImgixImage: React.FC<ImgixImageProps> = ({
  Component = FastImage,
  size,
  localImage,
  ...restProps
}) => {
  // @ts-ignore
  const imgixSource: Source | undefined =
    restProps.source !== undefined ? restProps.source : localImage;
  const options = React.useMemo(() => {
    if (size) {
      return { height: size, width: size };
    }
    return {};
  }, [size]);

  const handleError = (error: any) => {
    const { onError, autoRetry, maxRetries = 5, onRetry } = restProps;
    const isNotFound = error.nativeEvent.statusCode === 404;
    const shouldRetry = autoRetry && !isNotFound;

    if (shouldRetry && onRetry && maxRetries > 0) {
      onRetry();
    } else if (onError) {
      onError();
    }
  };

  return (
    <Component
      {...restProps}
      source={imgixSource}
      resizeMode={restProps.resizeMode || FastImage.resizeMode.contain}
      onError={handleError}
    />
  );
};

export default ImgixImage;
