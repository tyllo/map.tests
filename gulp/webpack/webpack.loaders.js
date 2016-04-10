import path from 'path';
import { extructCSS } from './webpack.plugins';
import config from '../config';

var loaders = {};

loaders.template = {
  test: /\.jade$/i,
  include: [/templates/],
  loaders: [
    'file?name=[name].html',
    'jade-html',
  ],
};

loaders.jade = {
  test: /\.jade$/i,
  exclude: loaders.template.include,
  loader: 'jade'
};

loaders.js = {
  test: /\.js$/i,
  include: path.resolve(config.src),
  exclude: [/\/node_modules\//, /\/bower_components\//],
  loader: 'babel'
};

loaders.sass = {
  test: /\.(sass|scss|css)$/i,
  loader: extructCSS.extract('style', ['css', 'sass']),
};

loaders.url = {
  test: /.*\.(gif|png|jpe?g|svg)$/i,
  loader: 'url',
  query: {
    limit: 5 * 1024,
    name: config.isDevelope
      ? config.assets.images + '/[name].[ext]'
      : config.assets.images + '/[name]-[hash:5].[ext]',
  }
};

export default [
  loaders.jade,
  loaders.template,
  loaders.js,
  loaders.sass,
  loaders.url
];
