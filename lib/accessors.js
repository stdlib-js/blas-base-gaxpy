/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

// MAIN //

/**
* Multiplies a vector `x` by a constant and adds the result to `y`.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Object} y - output array object
* @param {Collection} y.data - output array data
* @param {Array<Function>} y.accessors - array element accessors
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Object} output array object
*
* @example
* var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
* var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
*
* gaxpy( x.length, 5.0, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( y ) ), 1, 0 );
* // y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*/
function gaxpy( N, alpha, x, strideX, offsetX, y, strideY, offsetY ) {
	var xbuf;
	var ybuf;
	var set;
	var get;
	var ix;
	var iy;
	var i;

	// Cache references to array data:
	xbuf = x.data;
	ybuf = y.data;

	// Cache references to element accessors:
	get = x.accessors[ 0 ];
	set = y.accessors[ 1 ];

	ix = offsetX;
	iy = offsetY;
	for ( i = 0; i < N; i++ ) {
		set( ybuf, iy, get( ybuf, iy ) + ( alpha * get( xbuf, ix ) ) );
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = gaxpy;
