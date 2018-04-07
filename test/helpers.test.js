import { hasDuplicateValues } from '../src/helpers';

describe('Helpers', () => {
  describe('hasDuplicateValues', () => {
    test('return true if array has duplicate values', () => {
      const arr = ['a', 'test', 'b', 'test', 3, 4];

      expect(hasDuplicateValues(arr)).toBeTruthy();
    });

    test('return false if array has unique values', () => {
      const arr = ['a', 'b', 'c', 1, 2, 3];
      expect(hasDuplicateValues(arr)).toBeFalsy();
    });

    test('return true if object has duplicate values', () => {
      const obj = {
        a: 4,
        b: 'test',
        c: 7,
        d: 'test',
      };

      expect(hasDuplicateValues(obj)).toBeTruthy();
    });

    test('return false if object has unique values', () => {
      const obj = {
        a: 4,
        b: 'test',
        c: 7,
        d: 'halp',
      };

      expect(hasDuplicateValues(obj)).toBeFalsy();
    });
  });
});
