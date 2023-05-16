import React from 'react';
import { IconSvgProps } from '@/entities/icon.interface';
import { metrics } from '@/styles';
import { SvgXml } from 'react-native-svg';

const ChartIcon: React.FC<IconSvgProps> = props => {
  const { color = '#000', size = 20, isFocused, scale } = props;

  const width = isFocused ? size + metrics.moderateScale(3) : size;

  const svgMarkup = `
    <svg width=${width} height=${width} viewBox="0 0 20 20" fill='none' xmlns="http://www.w3.org/2000/svg">
        ${
          isFocused
            ? `
        <path d="M1 10C1 14.9706 5.02944 19 10 19C12.4853 19 14.7353 17.9926 16.364 16.364C17.9926 14.7353 19 12.4853 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10Z" fill=${color} />
        <path d="M1 10C1 14.9706 5.02944 19 10 19C12.4853 19 14.7353 17.9926 16.364 16.364M1 10C1 5.02944 5.02944 1 10 1M1 10H10M10 1C14.9706 1 19 5.02944 19 10C19 12.4853 17.9926 14.7353 16.364 16.364M10 1V10M16.364 16.364L10 10" stroke=${'#fff'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `
            : `<path d="M1 10C1 14.9706 5.02944 19 10 19C12.4853 19 14.7353 17.9926 16.364 16.364M1 10C1 5.02944 5.02944 1 10 1M1 10H10M10 1C14.9706 1 19 5.02944 19 10C19 12.4853 17.9926 14.7353 16.364 16.364M10 1V10M16.364 16.364L10 10" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill=${'none'}/>`
        }
    </svg>
  `;

  return (
    <SvgXml
      xml={svgMarkup}
      style={{
        transform: [{ scale: scale || 1 }],
      }}
    />
  );
};

export default ChartIcon;
