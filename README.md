
# jslice
[`jslice`](https://www.npmjs.com/package/jslice) is a small `JavaScript/TypeScript` library for slicing arrays using `slice strings`.
The `slice` syntax is heavily inspired by its counterpart in `python`.

I felt the need for `jslice` when I was working on [`josn`](https://github.com/iaseth/josn).

I am using [`readmix`](https://github.com/iaseth/readmix) for generating this README.
You can view the source file [here](https://github.com/iaseth/jslice/blob/master/README.md.rx).


## Table of contents
* [jslice](#jslice)
    * [Table of contents](#table-of-contents)
    * [Installation](#installation)
    * [What is a slice string?](#what-is-a-slice-string?)
    * [Documentation](#documentation)
    * [Package details](#package-details)
    * [Dependencies](#dependencies)
    * [Dev dependencies](#dev-dependencies)
    * [License](#license)


## Installation
You can install [`jslice`](https://www.npmjs.com/package/jslice) with the following command:
```
npm i jslice
```
Now you can import `jslice` in your project as follows.
```
const jslice = require("jslice");
```
```
const { isSlice, slice } = jslice;
```


## What is a slice string?
A slice string is any string of the form `start:end`,
where `start` and `end` are integers, that can be used for slicing an array.
Here, `start` is the first element that is part of the resulting slice,
`end` is the first element that is not in the resulting slice.

Both these arguments are optional. By default, `start` is set to `0` and `end` is set to the array length.
So, `0:20` is just the same as `:20`.
And, for an array of length 10, `4:10` is just the same as `4:`.

Both these arguments can be negative.
A negative value is counted from the end of the array.
So, `-1` refers to the last element in array.


## Documentation
`jslice` exports just 2 functions - `isSlice(str)` and `slice(arr, str)`.

| Function          | Returns   | Description                                                       |
| ----------------- | --------- | ----------------------------------------------------------------- |
| `isSlice(str)`    | `boolean` | Checks whether the given string is a valid slice string or not.   |
| `slice(arr, str)` | `array`   | Returns a slice of the array `arr` according to the slice string. |


## Package details
| `Name`         | `Value`                            |
| -------------- | ---------------------------------- |
| `Name`         | `jslice`                           |
| `Version`      | `0.11.0`                           |
| `Author`       | `iaseth`                           |
| `Homepage`     | `https://github.com/iaseth/jslice` |
| `Repository`   | `iaseth/jslice`                    |
| `License`      | `MIT`                              |
| `Dependencies` | `0`                                |



## Dependencies
This package has no dependencies.


## Dev dependencies
|     | `Package`     | `Version`   |
| --- | ------------- | ----------- |
| 1   | `@types/jest` | `^29.5.1`   |
| 2   | `jest`        | `^29.5.0`   |



## License
MIT License

Copyright (c) Ankur Seth.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Credit

This file was generated using [`readmix`](https://github.com/iaseth/readmix).


