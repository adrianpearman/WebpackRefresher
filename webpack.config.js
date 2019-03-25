const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    "mode": "development",
    "devtool": "none",
    "entry": "./src/index.js",
    "output": {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
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