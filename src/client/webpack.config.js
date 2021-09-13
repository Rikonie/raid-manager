const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.(scss|css)$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            namedExport: true
                        },
                    }, {
                        loader: 'sass-loader',
                    }],
            },
            {
                test: /\.(scss|css)$/,
                include: [
                    path.resolve(__dirname, "node_modules"),
                ],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            camelCase: true,
                            namedExport: true
                        },
                    }, {
                        loader: 'sass-loader',
                    }],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource",
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'config'}
            ]
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};