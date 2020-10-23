import { cold } from 'jest-marbles';

describe('Baiscs', () => {
  it('should understand marble diagram', () => {
    const source = cold('--');
    const expected = cold('--');

    expect(source).toBeObservable(expected);
  });

  it('should support basic string values', () => {
    const source = cold('-a-|');
    const expected = cold('-a-|');

    expect(source).toBeObservable(expected);
  });

  it('should support basic values provided as params (number)', () => {
    const source = cold('-a-|', { a: 1 });
    const expected = cold('-a-|', { a: 1 });

    expect(source).toBeObservable(expected);
  });

  it('should support basic errors', () => {
    const source = cold('--#');
    const expected = cold('--#');

    expect(source).toBeObservable(expected);
  });

  it('should support custom errors', () => {
    const source = cold('--#', null, new Error('Oops!'));
    const expected = cold('--#', null, new Error('Oops!'));

    expect(source).toBeObservable(expected);
  });
});

