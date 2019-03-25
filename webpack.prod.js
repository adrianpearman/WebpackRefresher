const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.config')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].[contentHash].css' }), 
        new CleanWebpackPlugin()
    ],
    optimization:{
        minimizer: [
            new OptimizeCssAssetsPlugin(), 
            new TerserPlugin(),
            new HtmlWebPackPlugin({
                template: './src/template.html',
               minify:{
                    removeComments: true,
                    removeAttributeQuotes: true,
                    collapseWhitespace: true
               }
            })
        ]
    },
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //extract css into files
                    'css-loader', //compiles CSS to JavScript
                    'sass-loader' //converts SASS into CSS
                ]
            },
        ]
    }
})