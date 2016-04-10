import path from 'path';
import config from '../config';
import loaders from './webpack.loaders';
import plugins from './webpack.plugins';

var includePaths = [
  path.resolve(__dirname, './bower_components'),
];

export default {

  context: path.resolve(config.src),

  resolve: {
    root: [
      path.resolve(config.src),
      path.resolve('./bower_components/'),
      path.resolve('./node_modules/'),
    ],
    alias: {
    },
    extensions: ['', '.js']
  },

  output: {
    publicPath: config.isDevelope ? 'http://localhost:' + config.server.port + '/' : '',
    filename: config.assets.scripts + '/[name].js',
    chunkFilename: config.assets.scripts + '/[name]-[id].js',
  },

  watch: config.isDevelope,

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /\/node_modules\//
      },
    ],

    loaders: loaders,
  },

  plugins: plugins,

  noParse: [/\/node_modules\//i],

  eslint: {
    configFile: '.eslintrc'
  },

  cssLoader: {
    sourceMap: config.isDevelope,
    localIdentName: config.isDevelope ? '[local]' : '[hash:5]',
  },

  sassLoader: {
    includePaths: includePaths,
    sourceMap: true,
  },

  jadeLoader: {
    locals: { config },
    pretty: config.isDevelope,
  },

  devtool: config.isDebug ? 'source-map' : false,
};
