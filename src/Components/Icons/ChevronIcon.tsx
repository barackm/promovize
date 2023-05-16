import React from 'react';
import { IconSvgProps } from '@/entities/icon.interface';
import { colors } from '@/styles';
import { SvgXml } from 'react-native-svg';

interface ChevronIconProps extends IconSvgProps {
  direction?: 'left' | 'right' | 'up' | 'down' | 'top-bottom';
}

const ChevronIcon: React.FC<ChevronIconProps> = props => {
  const { color = colors.black, size = 20, scale, direction } = props;

  const svgMarkupLeft = `
  <svg width=${
    size / 2
  } height=${size} viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 11L3.23703 9.25269C1.8311 7.85925 1.12813 7.16252 1.01989 6.31333C0.99337 6.10527 0.99337 5.89473 1.01989 5.68667C1.12813 4.83748 1.8311 4.14075 3.23703 2.74731L5 1" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  `;

  const svgMarkupRight = `
  <svg width=${
    size / 2
  } height=${size} viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L2.76297 2.74731C4.1689 4.14075 4.87187 4.83747 4.98011 5.68667C5.00663 5.89473 5.00663 6.10527 4.98011 6.31333C4.87187 7.16252 4.1689 7.85925 2.76297 9.25269L1 11" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  `;

  const svgMarkupUp = `
  <svg width=${
    size / 2
  } height=${size} viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5327 1.52796C11.8243 1.23376 11.8222 0.758893 11.528 0.467309C11.2338 0.175726 10.7589 0.177844 10.4673 0.472041L8.72 2.23501C8.01086 2.9505 7.52282 3.44131 7.1093 3.77341C6.7076 4.096 6.44958 4.20668 6.2185 4.23613C6.07341 4.25462 5.92659 4.25462 5.7815 4.23613C5.55042 4.20668 5.2924 4.09601 4.89071 3.77341C4.47718 3.44131 3.98914 2.95051 3.28 2.23501L1.53269 0.472042C1.24111 0.177845 0.766238 0.175726 0.472041 0.46731C0.177844 0.758894 0.175726 1.23376 0.467309 1.52796L2.24609 3.32269C2.91604 3.99866 3.46359 4.55114 3.95146 4.94294C4.45879 5.35037 4.97373 5.64531 5.59184 5.72409C5.86287 5.75864 6.13714 5.75864 6.40816 5.72409C7.02628 5.64531 7.54122 5.35037 8.04854 4.94294C8.53641 4.55114 9.08396 3.99867 9.7539 3.32269L11.5327 1.52796Z" fill=${color}/>
</svg>

  `;
  const svgMarkupDown = `
  <svg width=${
    size / 2
  } height=${size} viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.7815 1.76387C5.92659 1.74538 6.07341 1.74538 6.2185 1.76387C6.44958 1.79332 6.7076 1.904 7.10929 2.22659C7.52282 2.55869 8.01086 3.0495 8.72 3.76499L10.4673 5.52796C10.7589 5.82216 11.2338 5.82427 11.528 5.53269C11.8222 5.24111 11.8243 4.76624 11.5327 4.47204L9.7539 2.6773C9.08396 2.00133 8.53641 1.44886 8.04854 1.05706C7.54122 0.649628 7.02628 0.354695 6.40816 0.275909C6.13714 0.241364 5.86286 0.241364 5.59184 0.275909C4.97372 0.354695 4.45878 0.649628 3.95146 1.05706C3.46358 1.44886 2.91604 2.00134 2.24609 2.67732L0.467309 4.47204C0.175726 4.76624 0.177844 5.24111 0.472041 5.53269C0.766238 5.82427 1.24111 5.82216 1.53269 5.52796L3.28 3.76499C3.98914 3.0495 4.47718 2.55869 4.89071 2.22659C5.2924 1.904 5.55042 1.79332 5.7815 1.76387Z" fill=${color}/>
</svg>

  `;
  const svgMarkupTopBottom = `
  <svg width=${size} height=${size} viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 11L3.87868 13.8787C5.05025 15.0503 6.94975 15.0503 8.12132 13.8787L11 11M11 5L8.12132 2.12132C6.94975 0.949745 5.05025 0.949748 3.87868 2.12132L1 5" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  const getCorrectSvgMarkup = () => {
    const cases = {
      left: svgMarkupLeft,
      right: svgMarkupRight,
      up: svgMarkupUp,
      down: svgMarkupDown,
      'top-bottom': svgMarkupTopBottom,
    };

    return cases[direction || 'right'];
  };

  return (
    <SvgXml
      xml={getCorrectSvgMarkup()}
      style={{
        transform: [{ scale: scale || 1 }],
      }}
    />
  );
};

export default ChevronIcon;
