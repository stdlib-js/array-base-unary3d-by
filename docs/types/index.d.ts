/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Array3D } from '@stdlib/types/array';
import { Shape3D } from '@stdlib/types/ndarray';

/**
* Returns the accessed value.
*
* @returns accessed value
*/
type NullaryCallback<U, W> = ( this: W ) => U;

/**
* Returns the accessed value.
*
* @param value - array element value
* @returns accessed value
*/
type UnaryCallback<T, U, W> = ( this: W, value: T ) => U;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param indices - current array element indices
* @returns accessed value
*/
type BinaryCallback<T, U, W> = ( this: W, value: T, indices: Array<number> ) => U;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param indices - current array element indices
* @returns accessed value
*/
type TernaryCallback<T, U, V, W> = ( this: W, value: T, indices: Array<number>, arrays: [ Array3D<T>, Array3D<V> ] ) => U;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param indices - current array element indices
* @param arrays - input and output arrays
* @returns accessed value
*/
type Callback<T, U, V, W> = NullaryCallback<U, W>  | UnaryCallback<T, U, W> | BinaryCallback<T, U, W> | TernaryCallback<T, U, V, W>;

/**
* Callback invoked for each nested array element retrieved via a callback function.
*
* @param value - array element
* @returns result
*/
type Unary<U, V> = ( value: U ) => V;

/**
* Applies a unary function to each element retrieved from a three-dimensional nested input array according to a callback function and assigns results to elements in a three-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary function to apply to callback return values
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* var ones3d = require( '@stdlib/array-base-ones3d' );
* var zeros3d = require( '@stdlib/array-base-zeros3d' );
*
* function accessor( v ) {
*     return v - 2.0;
* }
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 2, 2 ];
*
* var x = ones3d( shape );
* var y = zeros3d( shape );
*
* unary3dBy( [ x, y ], shape, scale, accessor );
*
* console.log( y );
* // => [ [ [ -10.0, -10.0 ], [ -10.0, -10.0 ] ] ]
*/
declare function unary3dBy<T = unknown, U = unknown, V = unknown, W = unknown>( arrays: [ Array3D<T>, Array3D<V> ], shape: Shape3D, fcn: Unary<U, V>, clbk: Callback<T, U, V, W>, thisArg?: ThisParameterType<Callback<T, U, V, W>> ): void;


// EXPORTS //

export = unary3dBy;
