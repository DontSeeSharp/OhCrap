// Karma configuration
// Generated on Sat Nov 12 2016 16:56:07 GMT+0200 (FLE Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'src/main/webapp/lib/ng-map/ng-map.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-bootstrap/ui-bootstrap-tpls.js',
      'src/main/webapp/js/app.js',
      'src/main/webapp/js/controllers.js',
      'src/main/webapp/js/*.js',
      'src/test/javascript/**/*.js',
      'src/test/javascript/**/*.js',
      'src/main/webapp/partials/addLocation.html',
      'src/main/webapp/partials/home.html',
      'src/main/webapp/partials/login.html',
      'src/main/webapp/partials/rate.html',
      'src/main/webapp/partials/SignIn.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    	'src/main/webapp/js/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
