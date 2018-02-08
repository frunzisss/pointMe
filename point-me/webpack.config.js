var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HashOutput = require('webpack-plugin-hash-output');
let plugins = [
    new ExtractTextPlugin({ filename: '[name].[chunkhash].css', allChunks: true })
];
if (!debug) {
    plugins.push(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }));

    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false
        },
        sourceMap: false
    }));

    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            BROWSER: JSON.stringify(true),
            NODE_ENV: JSON.stringify('production')
        }
    }));

} else {
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            BROWSER: JSON.stringify(true),
            NODE_ENV: JSON.stringify('dev')
        }
    }));
    
}

plugins.push(new HtmlWebpackPlugin({
    template: 'index.tmpl',
    cache: false
}));

plugins.push(new HashOutput());

module.exports =() => {
    rootRepoPath = __dirname;
    return ({
    bail: !debug,
    devtool: debug ? "sourcemap" : false,
    entry: {
        bundle: ['whatwg-fetch', 'babel-polyfill', './src/index']
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[chunkhash].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: `awesome-typescript-loader?babelCore=${rootRepoPath}/node_modules/babel-core&useBabel`,
                include: [
                    path.join(__dirname, 'src'), 
                    path.join(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.css$/,
                include: [/node_modules/, /src/],
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader',
                })
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: ["url-loader"]
            }
        ]
    },
    plugins: plugins,
})};