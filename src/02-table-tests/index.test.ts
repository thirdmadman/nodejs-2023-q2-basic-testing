// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 999, b: 1, action: Action.Add, expected: 1000 },
  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 999, b: 1, action: Action.Subtract, expected: 998 },
  { a: 3, b: 6, action: Action.Multiply, expected: 18 },
  { a: 999, b: 1, action: Action.Multiply, expected: 999 },
  { a: 5, b: 2, action: Action.Multiply, expected: 10 },
  { a: 0.5, b: 2, action: Action.Multiply, expected: 1 },
  { a: 10, b: 5, action: Action.Divide, expected: 2 },
  { a: 1, b: 10, action: Action.Divide, expected: 0.1 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 1, b: 10, action: Action.Exponentiate, expected: 1 },
  { a: 1, b: 2, action: 'f', expected: null },
  { a: 999, b: 1, action: null, expected: null },
  { a: null, b: '-1', action: Action.Add, expected: null },
  { a: [], b: {}, action: [], expected: null },
];

describe('simpleCalculator', () => {
  it.each(testCases)('%o', (testCase) => {
    expect(
      simpleCalculator({
        a: testCase.a,
        b: testCase.b,
        action: testCase.action,
      }),
    ).toBe(testCase.expected);
  });
});
