const path = require('path')
const common = require('./webpack.config')
const merge = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebPackPlugin({
        template: './src/template.html',
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
        ]
    }
})