# Morsey (Morse Encoder/Decoder) [![Build Status](https://img.shields.io/travis/zsoltime/morsey.svg?style=flat-square)](https://travis-ci.org/zsoltime/morsey)

Morsey is JavaScript library to convert text to Morse code and vice versa.

## Install

```bash
npm install morsey
```

## Import

### CommonJS

```javascript
const Morsey = require('morsey');
```

### ES6 import

```javascript
import Morsey from 'morsey';
```

### CDN

You can use it directly in your browser using unpkg.com:

```html
<script src="https://unpkg.com/morsey"></script>
```

## Usage

```javascript
import Morsey from 'morsey';

// with optional 'options'
const morse = new Morsey({ wordspace: '|' });

morse.encode('sample text');
// => ··· ·- -- ·--· ·-·· · | - · -··- -

morse.decode('··· ·- -- ·--· ·-·· · | - · -··- -');
// => SAMPLE TEXT
```

## API

### morse.encode(text)

#### text

Type: `string`

Text to encode.

### morse.decode(code)

#### code

Type: `string`

Morse code to decode.

#### options

Type: `object`

Default:

```javascript
{
  long: '-',
  short: '·',
  space: ' ',
  wordspace: '/',
}
```

## Test

```bash
npm install
npm test
```

## License

MIT © Zsolt Meszaros
