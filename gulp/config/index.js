module.exports = {
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'ie >= 8',
      'ff >= 5',
      'chrome >= 20',
      'opera >= 12',
      'safari >= 4',
      'ios >= 6',
      'android >= 2',
      'bb >= 6'
    ]
  },
  css: {
    params: {
      includePaths: [
        'node_modules/bourbon/app/assets/stylesheets/',
        'node_modules/breakpoint-sass/stylesheets/',
        'node_modules/mathsass/dist/',
        'node_modules/modernizr-mixin/stylesheets/',
        'node_modules/sass-color-helpers/stylesheets/',
        'node_modules/singularitygs/stylesheets/',
        'src/css'
      ],
      errLogToConsole: true
    }
  },
  dist: {
    base: 'dist/',
    css: 'dist/css/',
    js: 'dist/js/',
    vendor: 'dist/vendor/'
  },
  modernizr: {
    classPrefix: '',
    options: ['addTest', 'prefixed', 'setClasses', 'testProp'],
    'feature-detects': [
      'blob',
      'canvas',
      'css/backgroundsize',
      'css/backgroundsizecover',
      'css/calc',
      'css/flexbox',
      'css/transforms3d',
      'svg',
      'svg/clippaths',
      'svg/inline'
    ]
  },
  src: {
    css: 'src/css/',
    components: 'src/components/',
    views: 'src/views/'
  },
  webserver: {
    host: 'localhost',
    port: 8000,
    path: '/',
    livereload: false,
    directoryListing: false,
    open: '/dist/',
    https: false,
    browsers: {
      default: 'firefox',
      darwin: 'google chrome',
      linux: 'google-chrome',
      win32: 'chrome'
    }
  }
};
