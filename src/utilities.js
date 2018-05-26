/**
 * [add return the sum of 2 numbers]
 * @param {[number]} x [first number]
 * @param {[number]} y [second number]
 */
export const add = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    return 'can only add numbers.';
  }
  return x + y;
};