import React from 'react';
import { IconSvgProps } from '@/entities/icon.interface';
import { colors } from '@/styles';
import { SvgXml } from 'react-native-svg';

const ErrorIcon: React.FC<IconSvgProps> = props => {
  const { color = colors.black, size = 20, scale } = props;

  const svgMarkup = `
  <svg width=${size} height=${size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1761_2)">
    <path d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333ZM8 10.6667C8.55229 10.6667 9 11.1144 9 11.6667C9 12.219 8.55229 12.6667 8 12.6667C7.44772 12.6667 7 12.219 7 11.6667C7 11.1144 7.44772 10.6667 8 10.6667ZM8 3.33333C8.32728 3.33333 8.59948 3.56917 8.65593 3.88017L8.66667 4V8.66667C8.66667 9.03486 8.36819 9.33333 8 9.33333C7.67272 9.33333 7.40052 9.0975 7.34407 8.7865L7.33333 8.66667V4C7.33333 3.63181 7.63181 3.33333 8 3.33333Z" fill=${color}/>
    </g>
    <defs>
    <clipPath id="clip0_1761_2">
    <rect width=${size} height=${size} fill="white"/>
    </clipPath>
    </defs>
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

export default ErrorIcon;
