import { isNil } from 'lodash';

interface Dictionary<T> {
  [index: string]: T;
}

type ValueKeyIteratee<T> = (value: T, key: string) => unknown;

/**
 * @desc Promise that will resolve after the ms interval
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const flattenDeep = (arr: unknown[]): unknown[] =>
  arr.flatMap(subArray =>
    Array.isArray(subArray) ? flattenDeep(subArray) : subArray,
  );

export const times = (n: number, fn: (i: number) => unknown) =>
  Array.from({ length: n }, (_, i) => fn(i));

/**
 * @desc Creates an object composed of the omitted object properties by some predicate function.
 */
export const omitBy = <T>(
  obj: Dictionary<T>,
  predicate: ValueKeyIteratee<T>,
): Dictionary<T> => {
  return Object.keys(obj)
    .filter(k => !predicate(obj[k], k))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {} as Dictionary<T>);
};

/**
 * @desc Can omit only flattened key, will not work with nested props like 'key.someObj.value'
 */
export const omitFlatten = <T extends object, K extends keyof T>(
  obj: T | null | undefined,
  keys: K[] | K,
): Omit<T, K> => {
  const keysArr = Array.isArray(keys) ? keys : [keys];
  const newObj: any = {};
  const keysArrObj: any = {};
  for (const key of keysArr) {
    keysArrObj[key] = true;
  }
  for (const key in obj) {
    if (!keysArrObj[key]) newObj[key] = obj[key];
  }
  return newObj;
};

/**
 * Creates an object composed of the picked object properties.
 * @param obj The source object
 * @param paths The property paths to pick
 */
export const pickShallow = <T extends object, K extends keyof T>(
  obj: T,
  paths: K[],
): Pick<T, K> => {
  return paths.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
      return acc;
    }
    return acc;
  }, {} as Pick<T, K>);
};

/**
 * Creates an object composed of the picked object properties by some predicate function.
 * @param obj The source object
 * @param predicate The function invoked per property
 */
export const pickBy = <T>(
  obj: Dictionary<T>,
  predicate: ValueKeyIteratee<T>,
): Dictionary<T> => {
  return Object.keys(obj)
    .filter(k => predicate(obj[k], k))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {} as Dictionary<T>);
};
