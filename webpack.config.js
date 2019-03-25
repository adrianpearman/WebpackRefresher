const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    "entry": "./src/index.js",

    plugins:[ new HtmlWebPackPlugin({
        template: './src/template.html'
    })],
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // inject content to DOM
                    'css-loader', //compiles CSS to JavScript
                    'sass-loader' //converts SASS into CSS
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader' //converts SASS into CSS
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs'
                    }
                }
            },
        ]
    }
}