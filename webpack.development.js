const merge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const [, client] = require('./webpack.common');

module.exports = merge(client, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/index.html",
            filename: "./index.html"
        }),
    ]
});