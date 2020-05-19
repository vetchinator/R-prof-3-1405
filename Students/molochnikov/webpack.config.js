const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'main.js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: 'body'
    })],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
      },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "src"),
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          }
        ]
      }
 };
 

