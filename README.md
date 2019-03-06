[![Build Status](https://travis-ci.org/kaelzhang/random-n.svg?branch=master)](https://travis-ci.org/kaelzhang/random-n)
[![Coverage](https://codecov.io/gh/kaelzhang/random-n/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/random-n)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/random-n?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/random-n)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/random-n.svg)](http://badge.fury.io/js/random-n)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/random-n.svg)](https://www.npmjs.org/package/random-n)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/random-n.svg)](https://david-dm.org/kaelzhang/random-n)
-->

# random-n

Get a random collection of n different items from an array.

## Install

```sh
$ npm i random-n
```

## Usage

```js
import random from 'random-n'

random([1, 2, 3, 4, 5], 3)

// [3, 2, 5]
```

## random(array, size?)

- **array** `Array`
- **size** `?int=array.length` The n-size of the collection. If not specified, the length of the `array` will be used.

Returns `Array`

## License

MIT
