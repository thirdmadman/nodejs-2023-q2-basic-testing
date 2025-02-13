// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');
  return {
    __esModule: true,
    ...originalModule,
    mockOne: () => null,
    mockTwo: () => null,
    mockThree: () => null,
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    expect(mockOne()).toBe(null);
    expect(mockTwo()).toBe(null);
    expect(mockThree()).toBe(null);
  });

  test('unmockedFunction should log into console', () => {
    const operation = jest.spyOn(console, 'log');
    unmockedFunction();
    expect(operation).toHaveBeenCalled();
    expect(unmockedFunction()).toBe(undefined);
  });
});
