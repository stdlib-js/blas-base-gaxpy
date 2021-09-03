<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# gaxpy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Multiply `x` by a constant `alpha` and add the result to `y`.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-gaxpy
```

</section>

<section class="usage">

## Usage

```javascript
var gaxpy = require( '@stdlib/blas-base-gaxpy' );
```

#### gaxpy( N, alpha, x, strideX, y, strideY )

Multiplies `x` by a constant `alpha` and adds the result to `y`.

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
var alpha = 5.0;

gaxpy( x.length, alpha, x, 1, y, 1 );
// y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: `numeric` constant.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: index increment for `x`.
-   **y**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to multiply every other value in `x` by `alpha` and add the result to the first `N` elements of `y` in reverse order,

```javascript
var floor = require( '@stdlib/math-base-special-floor' );

var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var y = [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ];

var alpha = 5.0;
var N = floor( x.length / 2 );

gaxpy( N, alpha, x, 2, y, -1 );
// y => [ 26.0, 16.0, 6.0, 1.0, 1.0, 1.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = floor( x0.length / 2 );

gaxpy( N, 5.0, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 7.0, 8.0, 9.0, 40.0, 31.0, 22.0 ]
```

#### gaxpy.ndarray( N, alpha, x, strideX, offsetX, y, strideY, offsetY )

Multiplies `x` by a constant `alpha` and adds the result to `y` using alternative indexing semantics.

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
var alpha = 5.0;

gaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0 );
// y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to multiply every other value in `x` by a constant `alpha` starting from the second value and add to the last `N` elements in `y` where `x[i] -> y[n]`, `x[i+2] -> y[n-1]`,...,

```javascript
var floor = require( '@stdlib/math-base-special-floor' );

var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var y = [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];

var alpha = 5.0;
var N = floor( x.length / 2 );

gaxpy.ndarray( N, alpha, x, 2, 1, y, -1, y.length-1 );
// y => [ 7.0, 8.0, 9.0, 40.0, 31.0, 22.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `alpha == 0`, both functions return `y` unchanged.
-   `gaxpy()` corresponds to the [BLAS][blas] level 1 function [`daxpy`][daxpy] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`daxpy`][@stdlib/blas/base/daxpy], [`saxpy`][@stdlib/blas/base/saxpy], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var gaxpy = require( '@stdlib/blas-base-gaxpy' );

var x;
var y;
var i;

x = [];
y = [];
for ( i = 0; i < 10; i++ ) {
    x.push( round( randu()*100.0 ) );
    y.push( round( randu()*10.0 ) );
}
console.log( x );
console.log( y );

gaxpy.ndarray( x.length, 5.0, x, 1, 0, y, -1, y.length-1 );
console.log( y );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-gaxpy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-gaxpy

[test-image]: https://github.com/stdlib-js/blas-base-gaxpy/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/blas-base-gaxpy/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-gaxpy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-gaxpy?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-gaxpy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-gaxpy/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-gaxpy/main/LICENSE

[blas]: http://www.netlib.org/blas

[daxpy]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas-base-daxpy

[@stdlib/blas/base/saxpy]: https://github.com/stdlib-js/blas-base-saxpy

</section>

<!-- /.links -->
