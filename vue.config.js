const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
        // emitError: false,
        failOnError: false,
      }),
    ],
  },
  publicPath:
};