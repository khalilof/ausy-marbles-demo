import { cold } from 'jest-marbles';
import { concatMap, map } from 'rxjs/operators';

describe('Demo1', () => {

  it('should multiply by "2" each value emitted', () => {
    const values = { a: 1, b: 2, c: 3, x: 2, y: 4, z: 6};
    const source = cold('-a-b-c-|', values); // => -1-2-3-
    const expected = cold('-x-y-z-|', values); // => -2-4-6-
    const result = source.pipe(map(x => x * 2));
    expect(result).toBeObservable(expected);
  });

  it('should maps values to inner observable and emits in order', () => {
    const values = { a: 10, b: 30, x: 20, y: 40 };
    const obs1 = cold(    '-a--------b------ab|', values);  // => - 10------30-------10 30
    const obs2 = cold(    'a-a-a|', values);  // => 10 10 10
    const expected = cold('-x-x-x----y-y-y--x-x-xy-y-y|', values); // => -20 20 20 --- 40 40 40 --- 20 20 20 40 40 40

    const result = obs1.pipe(concatMap(outerStream => obs2.pipe(map(innerStream => outerStream + innerStream))));
    expect(result).toBeObservable(expected);
  });

});

