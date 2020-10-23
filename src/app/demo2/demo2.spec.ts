import { cold } from 'jest-marbles';
import { toArray } from 'rxjs/operators';
import { of } from 'rxjs';

describe('Demo2', () => {

  it('collect all values in an array', () => {
    const values = { a: 1, b: 2, c: 3};
    const source = cold('-a-b-c-|', values);

    const expected = cold('-------a|', {a: [1, 2 , 3]});

    const result = source.pipe(toArray());
    expect(result).toBeObservable(expected);
  });

  it('multiple streams', () => {
    const values = { a: 10, b: 30, x: 20, y: 40 };

    const source1 = of(10, 30);
    const source2 = of(20, 40);

    const expected1 = cold('(ab|)', values);
    const expected2 = cold('(xy|)', values);

    expect(source1).toBeObservable(expected1);
    expect(source2).toBeObservable(expected2);
  });

});
