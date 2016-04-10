import { debug, develope, production } from './helpers/getArg';

var src = './src';
var dest = production ? './build' : './dist';

export default {
  src: src,
  dest: dest,
  modules: src,

  assets: {
    images: 'assets/images',
    scripts: 'assets/scripts',
    styles: 'assets/styles',
    fonts: 'assets/fonts',
  },

  isProduction: production,
  isDevelope: develope,
  isDebug: debug,
  NODE_ENV: production ? 'production' : 'develope',

  server: {
    port: 8080,
  },
};
