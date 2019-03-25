const path = require('path')

module.exports = {
    "entry": {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use: [
                    'html-loader' // allows for webpack to require the asset images
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