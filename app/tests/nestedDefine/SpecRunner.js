require.config({
  baseUrl: requirejs.isBrowser ? "../../" : "./tests/",
  urlArgs: 'cb=' + Math.random(),
  paths: {
      jquery: 'lib/jquery-2.0.3',
      underscore: 'lib/underscore-min',
      backbone: 'lib/backbone-min',
      'backbone.localStorage': 'lib/backbone.localStorage',
      jasmine: 'tests/lib/jasmine-1.3.1/jasmine',
      'jasmine-html': 'tests/lib/jasmine-1.3.1/jasmine-html',
      spec: 'tests/jasmine/spec/',
      'subtract':'./samples/math-lib/subtract',
      'square':'./samples/math-lib/square',
      'multiply':['./samples/math-lib/multiply','./samples/math-lib/multiply'],
      'divide':'./samples/math-lib/divide'
  },

  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    'square': {
          deps: ['divide','multiply']
          //  exports: 'squarize'
    }
  }
});

require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('spec/testSpec');
  /*specs.push('spec/models/TodoSpec');
  specs.push('spec/views/ClearCompletedSpec');
  specs.push('spec/views/CountViewSpec');
  specs.push('spec/views/FooterViewSpec');
  specs.push('spec/views/MarkAllSpec');
  specs.push('spec/views/NewTaskSpec');
  specs.push('spec/views/TaskListSpec');
  specs.push('spec/views/TaskViewSpec');*/

  $(function(){
    require(specs, function(){
        jasmineEnv.execute();
    });
  });

});
