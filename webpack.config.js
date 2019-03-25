const path = require('path')

module.exports = {
    "mode": "development",
    "devtool": "none",
    "entry": "./src/index.js",
    "output": {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
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