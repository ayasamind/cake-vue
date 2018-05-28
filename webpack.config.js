var webpack = require("webpack");

module.exports = {
  entry: {
    javascript: './src/Javascript/index.js',
    html: './src/Template/Pages/home.ctp',
  },
  output: {
    path: __dirname + '/webroot/js',
    filename: '[name].js',
  },
  // Configuration for dev server
  devServer: {
    contentBase: 'dist',
    port: 3000
  },
  module: {
    rules: [
        {
          test: /\.ctp$/,
          loader: 'html-loader',
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
        },

        {
          test: /\.css$/,
          loader: 'css-loader',
        },
        // {
        //   test: /\.scss$/,
        //   use: scssLoader,
        // },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              css: 'css-loader',
            //   scss: scssLoader,
            },
          },
        },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
    ],
  },
}
