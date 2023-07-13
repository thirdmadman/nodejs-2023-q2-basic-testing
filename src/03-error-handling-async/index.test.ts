// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    expect.assertions(1);
    const data = 'Some really good data';
    await expect(resolveValue(data)).resolves.toEqual(data);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const t = () => throwError('Error message');
    expect(t).toThrow(new Error('Error message'));
  });

  test('should throw error with default message if message is not provided', () => {
    const t = () => throwError();
    expect(t).toThrow(new Error('Oops!'));
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    const t = () => throwCustomError();
    expect(t).toThrow(new MyAwesomeError());
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    expect.assertions(1);
    await expect(rejectCustomError()).rejects.toEqual(new MyAwesomeError());
  });
});
