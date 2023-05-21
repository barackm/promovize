export const capitalizeFirstLetters = (str: string | undefined) => {
  if (undefined) return str;
  return str?.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
};
