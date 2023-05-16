/**
 * Memoization wrapper for common used PURE helper functions.
 * The function will be cached only if it receives number, string or boolean as params
 * PURE means that function accepts at least a single argument and returns
 * same result all the time same arguments are used.
 * In order to memoize the function, it should be defined only once as a static function - outside react components.
 *
 *
 * @export
 * @param {Function} fn - pure function with at least single argument
 * @returns {Function} - same function with a cache
 */
export function memoFn<TArgs extends unknown[], TReturn>(
  fn: (...args: TArgs) => TReturn,
  keyMaker?: (...args: TArgs) => string,
): typeof fn {
  const cache = new Map<string, TReturn>();

  return function memoized(this: ThisType<typeof fn>, ...args: TArgs): TReturn {
    if (args.length === 0) {
      return fn.apply(this, args);
    }

    if (!keyMaker) {
      for (let i = 1; i < args.length; i++) {
        const arg = args[i];
        if (
          typeof arg !== 'number' &&
          typeof arg !== 'boolean' &&
          typeof arg !== 'string'
        ) {
          return fn.apply(this, args);
        }
      }
    }

    const key = keyMaker
      ? keyMaker.apply(null, args)
      : `key ${args.join(' ~ ')}`;

    if (cache.has(key)) {
      return cache.get(key)!;
    } else {
      const res = fn.apply(this, args);
      cache.set(key, res);
      return res;
    }
  };
}
