// Uncomment the code below and write your tests
import path from 'path';
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
    const func = jest.fn();
    const spy = jest.spyOn(global, 'setInterval');
    doStuffByInterval(func, 100);
    expect(spy).toHaveBeenCalledWith(func, 100);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const func = jest.fn();
    const INTERVAL = 100;
    doStuffByInterval(func, INTERVAL);
    expect(func).not.toBeCalled();
    jest.advanceTimersByTime(INTERVAL * 5);
    expect(func).toHaveBeenCalledTimes(5);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const pathToFile = '../../package.json';
    const spy = jest.spyOn(path, 'join');
    const readFile = async () => await readFileAsynchronously(pathToFile);
    readFile();
    expect(spy).toHaveBeenCalledWith(__dirname, pathToFile);
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
