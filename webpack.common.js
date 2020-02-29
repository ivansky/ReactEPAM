const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'production',
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, 'build'),
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: "./src/index.html", 
        filename: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};