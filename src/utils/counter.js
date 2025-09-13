let count = 0;

export const getCount = () => count;

export const incrementCount = () => {
  count += 1;
  return count;
};