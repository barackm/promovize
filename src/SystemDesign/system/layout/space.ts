export const space = {
  '1px': 1,
  '2px': 2,
  '3px': 3,
  '4px': 4,
  '5px': 5,
  '6px': 6,
  '8px': 8,
  '10px': 10,
  '12px': 12,
  '15px': 15,
  '16px': 16,
  '19px': 19,
  '20px': 20,
  '24px': 24,
  '28px': 28,
  '30px': 30,
  '32px': 32,
  '34px': 34,
  '36px': 36,
  '42px': 42,
  '44px': 44,
  '52px': 52,
  '60px': 60,
  '72px': 72,
  '80px': 80,
  '104px': 104,
} as const;

export const negativeSpace = {
  '-1px': -1,
  '-2px': -2,
  '-3px': -3,
  '-4px': -4,
  '-5px': -5,
  '-6px': -6,
  '-8px': -8,
  '-10px': -10,
  '-12px': -12,
  '-15px': -15,
  '-16px': -16,
  '-19px': -19,
  '-20px': -20,
  '-24px': -24,
  '-28px': -28,
  '-30px': -30,
  '-32px': -32,
  '-34px': -34,
  '-36px': -36,
  '-42px': -42,
  '-44px': -44,
  '-52px': -52,
  '-60px': -60,
  '-72px': -72,
  '-80px': -80,
  '-104px': -104,
} as const;

const spaceToNegativeSpace: Record<
  keyof typeof space,
  keyof typeof negativeSpace
> = {
  '1px': '-1px',
  '2px': '-2px',
  '3px': '-3px',
  '4px': '-4px',
  '5px': '-5px',
  '6px': '-6px',
  '8px': '-8px',
  '10px': '-10px',
  '12px': '-12px',
  '15px': '-15px',
  '16px': '-16px',
  '19px': '-19px',
  '20px': '-20px',
  '24px': '-24px',
  '28px': '-28px',
  '30px': '-30px',
  '32px': '-32px',
  '34px': '-34px',
  '36px': '-36px',
  '42px': '-42px',
  '44px': '-44px',
  '52px': '-52px',
  '60px': '-60px',
  '72px': '-72px',
  '80px': '-80px',
  '104px': '-104px',
};

export const positionSpace = {
  '0px': 0,
} as const;

type CustomSpace = { custom: number };
export type Space = keyof typeof space | CustomSpace;
export type NegativeSpace = keyof typeof negativeSpace | CustomSpace;
export type PositionSpace = keyof typeof positionSpace | CustomSpace;

export const negateSpace = (space: Space): NegativeSpace => {
  return typeof space === 'object'
    ? { custom: -space.custom }
    : spaceToNegativeSpace[space];
};
