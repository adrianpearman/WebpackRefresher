const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const common = require('./webpack.config')
const merge = require('webpack-merge')

module.exports = merge(common, {
    "mode": "production",
    "output": {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    }
})