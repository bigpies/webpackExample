const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new  MiniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`,
      chunkFilename: '[id].css',
    })
  ],
  module: {
    rules: [
      {
        test:/\.css$/,
        use: [ 'style-loader', 'css-loader'],
        // use: [MiniCssExtractPlugin.loader, 'css-loader'],
      } 
    ]
  }
};