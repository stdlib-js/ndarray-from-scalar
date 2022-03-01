<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# scalar2ndarray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a scalar value to a zero-dimensional [ndarray][@stdlib/ndarray/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-from-scalar
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
```

#### scalar2ndarray( value\[, dtype] )

Returns a zero-dimensional [`ndarray`][@stdlib/ndarray/ctor] containing a provided scalar `value` and having a specified [data type][@stdlib/ndarray/dtypes].

```javascript
var x = scalar2ndarray( 1.0 );
// returns <ndarray>

var sh = x.shape;
// returns []

var dt = x.dtype;
// returns 'float64'

var v = x.get();
// returns 1.0
```

If `dtype` is not provided and `value`

-   is a `number`, the default [data type][@stdlib/ndarray/dtypes] is `'float64'`.
-   is a complex number object, the default [data type][@stdlib/ndarray/dtypes] is `'complex128'`.
-   is any other value type, the default [data type][@stdlib/ndarray/dtypes] is `'generic'`.

To explicitly specify the [data type][@stdlib/ndarray/dtypes] of the returned [`ndarray`][@stdlib/ndarray/ctor], provide a `dtype` argument.

```javascript
var x = scalar2ndarray( 1.0, 'float32' );
// returns <ndarray>

var sh = x.shape;
// returns []

var dt = x.dtype;
// returns 'float32'

var v = x.get();
// returns 1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `value` is a number and [`dtype`][@stdlib/ndarray/dtypes] is a complex [data type][@stdlib/ndarray/dtypes], the function returns a zero-dimensional [`ndarray`][@stdlib/ndarray/ctor] containing a complex number whose real component equals the provided scalar `value` and whose imaginary component is zero.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/ndarray-dtypes' );
var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );

// Get a list of data types:
var dt = dtypes();

// Generate zero-dimensional arrays...
var x;
var i;
for ( i = 0; i < dt.length; i++ ) {
    x = scalar2ndarray( i, dt[ i ] );
    console.log( x.get() );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-from-scalar.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-from-scalar

[test-image]: https://github.com/stdlib-js/ndarray-from-scalar/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-from-scalar/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-from-scalar/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-from-scalar?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-from-scalar.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-from-scalar/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-from-scalar/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-from-scalar/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-from-scalar/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-from-scalar/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/stdlib

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
