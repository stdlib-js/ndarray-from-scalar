# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2024-07-13)

<section class="features">

### Features

-   [`f766a56`](https://github.com/stdlib-js/stdlib/commit/f766a563e112098dc229991c0eedb5f5b7417811) - add boolean dtype support to `ndarray/from-scalar` [(#2589)](https://github.com/stdlib-js/stdlib/pull/2589)

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`f766a56`](https://github.com/stdlib-js/stdlib/commit/f766a563e112098dc229991c0eedb5f5b7417811) - **feat:** add boolean dtype support to `ndarray/from-scalar` [(#2589)](https://github.com/stdlib-js/stdlib/pull/2589) _(by Jaysukh Makvana, Athan Reines)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Jaysukh Makvana

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

<section class="features">

### Features

-   [`9e08caf`](https://github.com/stdlib-js/stdlib/commit/9e08caf0e897040e9b82ff104cb5a09d6b03465e) - return a `complex64` dtype ndarray if provided a Complex64 scalar
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`f07f1ce`](https://github.com/stdlib-js/stdlib/commit/f07f1cedbfa64e81f21fcea8bb4e7ccbc67bde35) - add ndarray option support to `ndarray/from-scalar`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`9e08caf`](https://github.com/stdlib-js/stdlib/commit/9e08caf0e897040e9b82ff104cb5a09d6b03465e): return a `complex64` dtype ndarray if provided a Complex64 scalar
-   [`9e08caf`](https://github.com/stdlib-js/stdlib/commit/9e08caf0e897040e9b82ff104cb5a09d6b03465e): return same dtype when provided a complex number instance 

    -   To migrate, users relying on the previous behavior where anything
    complex-like resulted in a `complex128` ndarray should explicitly
    set the output dtype to 'complex128'. By default, the function will
    return an ndarray having the same dtype as a provided complex number
    instance. When a user wants to explicitly upcast a Complex64 scalar,
    the user can explicitly set the `dtype` option. The previous default
    behavior is undesirable, as we disregarded the explicit type info
    of a provided complex number scalar.

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1 

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`f07f1ce`](https://github.com/stdlib-js/stdlib/commit/f07f1cedbfa64e81f21fcea8bb4e7ccbc67bde35): add ndarray option support to `ndarray/from-scalar`
-   [`f07f1ce`](https://github.com/stdlib-js/stdlib/commit/f07f1cedbfa64e81f21fcea8bb4e7ccbc67bde35): `dtype` argument replaced by `options` argument 

    -   In order to migrate to the new API, users should replace any
    `dtype` argument usage with an equivalent `options` argument.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`9e08caf`](https://github.com/stdlib-js/stdlib/commit/9e08caf0e897040e9b82ff104cb5a09d6b03465e) - **feat:** return a `complex64` dtype ndarray if provided a Complex64 scalar _(by Athan Reines)_
-   [`2c0d176`](https://github.com/stdlib-js/stdlib/commit/2c0d176ac196f519dde40c745cc93e3420d1de15) - **refactor:** dynamically query default dtypes _(by Athan Reines)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`6b34523`](https://github.com/stdlib-js/stdlib/commit/6b3452322174342479d6c8b3277c3efee65d4cc0) - **docs:** update links _(by Athan Reines)_
-   [`bf2cf8b`](https://github.com/stdlib-js/stdlib/commit/bf2cf8b0424e608a4e3abb6d18a8b44d790aa99c) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - **fix:** update import paths for complex type defs _(by Athan Reines)_
-   [`9dbf98e`](https://github.com/stdlib-js/stdlib/commit/9dbf98ecffc9e72508b2db6d5f4af574a48033be) - **refactor:** use ndarray defaults _(by Athan Reines)_
-   [`e6f07c9`](https://github.com/stdlib-js/stdlib/commit/e6f07c9d9f62d9928698f74ce892955ebc78b741) - **bench:** fix options argument _(by Athan Reines)_
-   [`f07f1ce`](https://github.com/stdlib-js/stdlib/commit/f07f1cedbfa64e81f21fcea8bb4e7ccbc67bde35) - **feat:** add ndarray option support to `ndarray/from-scalar` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

