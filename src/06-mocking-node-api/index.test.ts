// Uncomment the code below and write your tests
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    jest.spyOn(global, 'setTimeout');
    const readFile = async () =>
      await readFileAsynchronously('../../package.json');
    doStuffByTimeout(readFile, 5000);
    expect(global.setTimeout).toHaveBeenCalledWith(readFile, 5000);
  });

  test('should call callback only after timeout', () => {
    const funcToCall = jest.fn();
    doStuffByTimeout(funcToCall, 5000);
    expect(funcToCall).not.toBeCalled();
    jest.runAllTimers();
    expect(funcToCall).toBeCalled();
    expect(funcToCall).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    jest.spyOn(global, 'setInterval');
    const readFile = async () =>
      await readFileAsynchronously('../../package.json');
    doStuffByInterval(readFile, 5000);
    expect(setInterval).toHaveBeenCalledWith(readFile, 5000);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
