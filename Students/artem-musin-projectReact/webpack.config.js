const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');



module.exports = {
    entry: {
        // точка входа до index.js
            main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '',
            filename: path.join('js', 'bundle.js')
    },
    target: 'web',    // настройка типа сборки 
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties", {"loose": true}
                        ]
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: path.join('style', '[name].css'), 
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'public', 'index.html')    // template свойство - для копии собственного html
        }) ,
    ],
    
    devServer: {
        port: 8080, 
        historyApiFallback: {
            index: 'index.html'
        },
    },
};