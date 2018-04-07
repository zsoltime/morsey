import { characters, codes } from './constants';
import { hasDuplicateValues } from './helpers';

export default class Morse {
  constructor(options) {
    this.options = Object.assign(
      {
        long: '-',
        short: '·',
        space: ' ',
        wordspace: '/',
      },
      options
    );

    if (hasDuplicateValues(this.options)) {
      throw new Error('Options must have unique values');
    }
  }

  digitsToMarks(digits) {
    return digits.replace(
      /[01]/g,
      m => (m === '0' ? this.options.short : this.options.long)
    );
  }

  marksToDigits(code) {
    const regex = new RegExp(
      `[\\${this.options.short}\\${this.options.long}]`,
      'g'
    );

    return code.replace(regex, m => (m === this.options.short ? '0' : '1'));
  }

  encode(text) {
    return text
      .split('')
      .map(letter =>
        (letter === ' '
          ? this.options.wordspace
          : this.digitsToMarks(characters[letter.toUpperCase()])))
      .join(this.options.space);
  }

  decode(code) {
    return code
      .split(this.options.wordspace)
      .map(word =>
        word
          .split(this.options.space)
          .map(c => codes[this.marksToDigits(c)])
          .join(''))
      .join(' ');
  }
}
