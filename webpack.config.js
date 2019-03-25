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
            }
        ]
    }
}