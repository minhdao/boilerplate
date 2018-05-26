/**
 * [add return the sum of 2 numbers]
 * @param {[number]} x [first number]
 * @param {[number]} y [second number]
 */
export const add = (x, y) => {
  if (x.isNaN || y.isNaN) {
    return 'can only add numbers.';
  }
  return x + y;
};