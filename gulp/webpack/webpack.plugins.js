import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from '../config';

var plugins = [
  // удаляем повторые модули
  new webpack.optimize.DedupePlugin(),

  // не билдим сборки, когда ошибка
  new webpack.NoErrorsPlugin(),

  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(config.NODE_ENV),
    },
    config: JSON.stringify(config),
  }),
];

config.isProduction && plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
  })
);

// extracts
export let extructCSS = new ExtractTextPlugin(
  `${ config.assets.styles }/main.css`,
  {
    allChunks: true,
    disable: config.isDevelope,
  }
);

plugins.push(extructCSS);

export default plugins;
