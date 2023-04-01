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

var bench = require( '@stdlib/bench' );
var randu = require( '@stdlib/random-base-randu' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pow = require( '@stdlib/math-base-special-pow' );
var Float64Array = require( '@stdlib/array-float64' );
var pkg = require( './../package.json' ).name;
var gaxpy = require( './../lib' ).ndarray;


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var x;
	var y;
	var i;

	x = new Float64Array( len );
	y = new Float64Array( len );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = ( randu()*200.0 ) - 100.0;
		y[ i ] = ( randu()*20000.0 ) - 10000.0;
	}
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var z;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			z = gaxpy( x.length, 5.0, x, 1, 0, y, 1, 0 );
			if ( isnan( z[ i%z.length ] ) ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( isnan( z[ i%z.length ] ) ) {
			b.fail( 'something went wrong' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+':ndarray:len='+len, f );
	}
}

main();
