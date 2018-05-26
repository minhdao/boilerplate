import { add } from './../utilities.js';

describe('utilities.js add', () => {
  it('should return correct sum of two positive numbers', () => {
    let x = 12;
    let y = 43;
    let expectedResult = 55;
    let result = add(12, 43);
    if (result !== expectedResult) {
      throw new Error(`expected ${expectedResult} but got ${result}`);
    }
  });

  it('should return correct sum of two negative numbers', () => {
    let x = -10;
    let y = -32;
    let expectedResult = -42;
    let result = add(x, y);
    if (result !== expectedResult) {
      throw new Error(`expected ${expectedResult} but got ${result}`);
    }
  });

  it('should return correct sum of one negative and one positive number', () => {
    let x = 13;
    let y = -32;
    let expectedResult = -19;
    let result = add(x, y);
    if (result !== expectedResult) {
      throw new Error(`expected ${expectedResult} but got ${result}`);
    }
  });

  it('should reject and display error message if either input is not number', () => {
    let x = 'a';
    let y = 12;
    let expectedResult = 'can only add numbers.';
    let result = add(x, y);
    if (result !== expectedResult) {
      throw new Error(`expected ${expectedResult} but got ${result}`);
    }
  });
});