/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
var accessors = require( './accessors.js' );


// VARIABLES //

var M = 4;


// MAIN //

/**
* Multiplies `x` by a constant and adds the result to `y`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar
* @param {NumericArray} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {NumericArray} y - output array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {NumericArray} output array
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
* var alpha = 5.0;
*
* gaxpy( x.length, alpha, x, 1, 0, y, 1, 0 );
* // y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*/
function gaxpy( N, alpha, x, strideX, offsetX, y, strideY, offsetY ) {
	var ix;
	var iy;
	var ox;
	var oy;
	var m;
	var i;
	if ( N <= 0 || alpha === 0.0 ) {
		return y;
	}
	ox = arraylike2object( x );
	oy = arraylike2object( y );
	if ( ox.accessorProtocol || oy.accessorProtocol ) {
		accessors( N, alpha, ox, strideX, offsetX, oy, strideY, offsetY );
		return oy.data;
	}
	ix = offsetX;
	iy = offsetY;

	// Use unrolled loops if both strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				y[ iy ] += alpha * x[ ix ];
				ix += strideX;
				iy += strideY;
			}
		}
		if ( N < M ) {
			return y;
		}
		for ( i = m; i < N; i += M ) {
			y[ iy ] += alpha * x[ ix ];
			y[ iy+1 ] += alpha * x[ ix+1 ];
			y[ iy+2 ] += alpha * x[ ix+2 ];
			y[ iy+3 ] += alpha * x[ ix+3 ];
			ix += M;
			iy += M;
		}
		return y;
	}
	for ( i = 0; i < N; i++ ) {
		y[ iy ] += alpha * x[ ix ];
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = gaxpy;
