 //	./ - indicates current/same directory level
//  ../ - go one level up in the directory tree.
//
//
requirejs.config({
	paths: {
		// switch and load alternative library if not available in first array element
		'backbone':['http://backbonejs.org/backbone-min',
						'./lib/backbone-min','./lib/backbone'],
		'underscore':['http://underscorejs.org/underscore-min',
						'./lib/underscore-min','./lib/underscore'],
		'jquery':['http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
            		//If the CDN location fails, load from this location
            		'./lib/jquery-2.0.3-min','./lib/jquery-2.0.3'],
		'subtract':'./samples/math-lib/subtract',
		'square':'./samples/math-lib/square',
		'multiply':['./samples/math-lib/multiply','./samples/math-lib/multiply'],
		'divide':'./samples/math-lib/divide'
	},
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'square': {
        	deps: ['divide','multiply']
        	//	exports: 'squarize'
        }
    }
});

requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }
    throw err;
};

define(['subtract', 'square','backbone'], function (sub, sq) {
	console.log(sub(18,5));
	console.log(sq(11));
});