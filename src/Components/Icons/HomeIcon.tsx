import React from 'react';
import { IconSvgProps } from '@/entities/icon.interface';
import { SvgXml } from 'react-native-svg';
import { useTheme } from '@/theme/ThemeProvider';

const HomeIcon: React.FC<IconSvgProps> = props => {
  const { colors } = useTheme();
  const { color = colors.black, size = 20, isFocused, scale } = props;

  const svgMarkup = `
  <svg width=${size} height=${size} viewBox="0 0 20 19" fill=${
    isFocused ? color : 'none'
  } xmlns="http://www.w3.org/2000/svg">
    <path d="M4.49996 5C5.96131 3.53865 7.5935 2.41899 8.69749 1.74088C9.5021 1.24665 10.4978 1.24665 11.3024 1.74088C12.4064 2.41899 14.0386 3.53865 15.5 5C18.6683 8.16837 18.5 10 18.5 13C18.5 14.4098 18.3895 15.5988 18.2725 16.4632C18.1493 17.3726 17.3561 18 16.4384 18H15C13.8954 18 13 17.1046 13 16V14C13 13.2043 12.6839 12.4413 12.1213 11.8787C11.5587 11.3161 10.7956 11 9.99997 11C9.20432 11 8.44125 11.3161 7.87864 11.8787C7.31603 12.4413 6.99996 13.2043 6.99996 14V16C6.99996 17.1046 6.10453 18 4.99996 18H3.56152C2.64378 18 1.85061 17.3726 1.72745 16.4631C1.61039 15.5988 1.49997 14.4098 1.49997 13C1.49997 10 1.33157 8.16839 4.49996 5Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  const transform = [{ scale: scale || 1 }];
  return (
    <SvgXml
      xml={svgMarkup}
      style={{
        transform,
      }}
    />
  );
};

export default HomeIcon;
