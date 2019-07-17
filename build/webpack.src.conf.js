'use strict'

const webpack = require('webpack');
const merge = require('webpack-merge');
const resolveApp = require('./common');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.base.conf');

function init(env) {
    const webpackConfig = merge(config, {
        devtool: env.devtool,
        mode: env.mode,
        entry: {
            "index": resolveApp("src/main.js")
        },
        output: {
            path: resolveApp('dist'),
            filename: '[name]_[hash].js'
        },
        optimization: {
            minimize: env.mode == "development" ? false : true
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': env
            }),
            new HtmlWebpackPlugin({
                filename: './index.html',
                template: resolveApp('index.html'),
                inject: true,
                chunks: ['index']
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DllReferencePlugin({
                manifest: require(resolveApp('dist/vendor_manifest.json'))
            })
        ]
    });
    return webpackConfig;
}

module.exports = init;