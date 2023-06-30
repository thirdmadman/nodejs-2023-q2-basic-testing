// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 1, b: 2, action: Action.Add })).toBe(3);
    expect(simpleCalculator({ a: 999, b: 1, action: Action.Add })).toBe(1000);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 1, b: 2, action: Action.Subtract })).toBe(-1);
    expect(simpleCalculator({ a: 999, b: 1, action: Action.Subtract })).toBe(
      998,
    );
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 3, b: 6, action: Action.Multiply })).toBe(18);
    expect(simpleCalculator({ a: 999, b: 1, action: Action.Multiply })).toBe(
      999,
    );
    expect(simpleCalculator({ a: 5, b: 2, action: Action.Multiply })).toBe(10);
    expect(simpleCalculator({ a: 0.5, b: 2, action: Action.Multiply })).toBe(1);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 10, b: 5, action: Action.Divide })).toBe(2);
    expect(simpleCalculator({ a: 1, b: 10, action: Action.Divide })).toBe(0.1);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate })).toBe(
      8,
    );
    expect(simpleCalculator({ a: 1, b: 10, action: Action.Exponentiate })).toBe(
      1,
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 1, b: 2, action: 'f' })).toBe(null);
    expect(simpleCalculator({ a: 999, b: 1, action: null })).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: null, b: '-1', action: Action.Add })).toBe(
      null,
    );
    expect(simpleCalculator({ a: [], b: {}, action: [] })).toBe(null);
  });
});
