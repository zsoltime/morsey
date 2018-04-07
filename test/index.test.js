/* eslint-disable max-len */
import Morse from '../src';

describe('Morsey', () => {
  test('throws error if option values are not unique', () => {
    const options = {
      long: '.',
      short: '.',
    };

    expect(() => new Morse(options)).toThrow();
  });

  describe('Convert text to Morse code', () => {
    test('convert text using default options', () => {
      const morse = new Morse();
      const text = 'Sphinx of black quartz, judge my vow';
      const expected =
        '··· ·--· ···· ·· -· -··- / --- ··-· / -··· ·-·· ·- -·-· -·- / --·- ··- ·- ·-· - --·· --··-- / ·--- ··- -·· --· · / -- -·-- / ···- --- ·--';
      expect(morse.encode(text)).toBe(expected);
    });

    test('convert text using the options specified', () => {
      const text = 'Pack my box with five dozen liquor jugs!';
      const options = {
        long: '=',
        short: '*',
        space: '.',
        wordspace: '|',
      };
      const morse = new Morse(options);
      const expected =
        '*==*.*=.=*=*.=*=.|.==.=*==.|.=***.===.=**=.|.*==.**.=.****.|.**=*.**.***=.*.|.=**.===.==**.*.=*.|.*=**.**.==*=.**=.===.*=*.|.*===.**=.==*.***.=*=*==';

      expect(morse.encode(text, options)).toBe(expected);
    });

    test('convert a single letter', () => {
      const morse = new Morse();
      expect(morse.encode('A')).toBe('·-');
    });

    test('convert a single letter with spaces', () => {
      const morse = new Morse();
      expect(morse.encode('A')).toBe('·-');
    });
  });

  describe('Convert Morse code to text', () => {
    test('convert Morse code using default options', () => {
      const morse = new Morse();
      const code =
        '··· ·--· ···· ·· -· -··- / --- ··-· / -··· ·-·· ·- -·-· -·- / --·- ··- ·- ·-· - --·· --··-- / ·--- ··- -·· --· · / -- -·-- / ···- --- ·--';
      const expected = 'Sphinx of black quartz, judge my vow'.toUpperCase();

      expect(morse.decode(code)).toBe(expected);
    });

    test('convert Morse code using the options specified', () => {
      const code =
        '*==*.*=.=*=*.=*=.|.==.=*==.|.=***.===.=**=.|.*==.**.=.****.|.**=*.**.***=.*.|.=**.===.==**.*.=*.|.*=**.**.==*=.**=.===.*=*.|.*===.**=.==*.***.=*=*==';
      const expected = 'Pack my box with five dozen liquor jugs!'.toUpperCase();
      const options = {
        long: '=',
        short: '*',
        space: '.',
        wordspace: '|',
      };
      const morse = new Morse(options);

      expect(morse.decode(code)).toBe(expected);
    });
  });
});
