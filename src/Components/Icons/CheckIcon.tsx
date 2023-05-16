import React from 'react';
import { IconSvgProps } from '@/entities/icon.interface';
import { colors } from '@/styles';
import { SvgXml } from 'react-native-svg';

const CheckIcon: React.FC<IconSvgProps> = props => {
  const { color = colors.black, size = 18, scale } = props;

  const svgMarkup = `
  <svg width=${size} height=${size} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 9L4.23309 11.4248C4.66178 11.7463 5.26772 11.6728 5.60705 11.2581L14 1" stroke=${color} stroke-width="2" stroke-linecap="round"/>
  </svg>
  `;

  return (
    <SvgXml
      style={{
        transform: [{ scale: scale || 1 }],
      }}
      xml={svgMarkup}
    />
  );
};

export default CheckIcon;
