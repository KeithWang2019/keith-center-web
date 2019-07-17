'use strict'

const resolveApp = require('./common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    bail: false,
    devtool: "development",
    mode: "source-map",
    entry: {
    },
    output: {
    },
    resolve: {
        alias: {
            'store': resolveApp('src/store'),
            'css': resolveApp('src/components/css'),
            'components': resolveApp('src/components')
        },
        extensions: ['.js', '.json', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                ['@babel/preset-env'],
                                ['@babel/preset-react']
                            ],
                            plugins: ["@babel/plugin-syntax-dynamic-import"]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            name: 'img/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        },

                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].dll.css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        port: 7001,
        contentBase: resolveApp('dist'),
        disableHostCheck: true,
        inline: true,
        hot: true,
        open: true,
        historyApiFallback: {
            index: '/index.html'//index.html为当前目录创建的template.html
        },
        host: '0.0.0.0'
    },
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    }
}