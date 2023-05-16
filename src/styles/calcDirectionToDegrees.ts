import { isString } from 'lodash';

type Direction = 'up' | 'down' | 'left' | 'right';

interface DirectionObject {
  direction: Direction;
}

export default (directionValue: Direction | DirectionObject = 'right') => {
  const direction = isString(directionValue)
    ? directionValue
    : directionValue?.direction;

  if (direction === 'down') return '90';
  if (direction === 'left') return '180';
  if (direction === 'up') return '270';
  return '0';
};
