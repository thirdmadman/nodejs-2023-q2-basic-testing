// Uncomment the code below and write your tests
import {
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
  getBankAccount,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const account = getBankAccount(1000);
    expect(account.getBalance()).toBe(1000);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(1000);
    const operation = () => account.withdraw(10000);
    expect(operation).toThrow(new InsufficientFundsError(1000));
  });

  test('should throw error when transferring more than balance', () => {
    const account = getBankAccount(1000);
    const accountToTransfer = getBankAccount(0);
    const operation = () => account.transfer(10000, accountToTransfer);
    expect(operation).toThrow(new InsufficientFundsError(1000));
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(1000);
    const operation = () => account.transfer(10000, account);
    expect(operation).toThrow(new TransferFailedError());
  });

  test('should deposit money', () => {
    const account = getBankAccount(1000);
    account.deposit(1000);
    expect(account.getBalance()).toBe(2000);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(1000);
    expect(account.withdraw(100).getBalance()).toBe(900);
  });

  test('should transfer money', () => {
    const account = getBankAccount(1000);
    const accountToTransfer = getBankAccount(0);
    account.transfer(1000, accountToTransfer);
    expect(account.getBalance()).toBe(0);
    expect(accountToTransfer.getBalance()).toBe(1000);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    expect.assertions(1);
    const account = getBankAccount(1000);
    const operation = await account.fetchBalance();
    if (operation === null) {
      expect(operation).toBe(null);
    } else {
      expect(typeof operation).toBe('number');
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(1000);
    const spy = jest.spyOn(account, 'fetchBalance');
    try {
      await account.synchronizeBalance();
      const result = await expect(spy);
      const newBalance = account.getBalance();
      if (result !== null) {
        expect(result).toBe(newBalance);
      }
    } catch (err) {
      const result = await expect(spy);
      if (result === null) {
        expect(err).toBe(new SynchronizationFailedError());
      }
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(1000);
    const spy = jest.spyOn(account, 'fetchBalance');
    try {
      await account.synchronizeBalance();
      const result = await expect(spy);
      const newBalance = account.getBalance();
      if (result !== null) {
        expect(result).toBe(newBalance);
      }
    } catch (err) {
      const result = await expect(spy);
      if (result === null) {
        expect(err).toBe(new SynchronizationFailedError());
      }
    }
  });
});
