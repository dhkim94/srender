/*
 * Default webpack configuration for development
 */
var webpack = require("webpack");
var path = require("path");

var config = {
    devtool: 'eval-source-map',
    entry: [
        // 'babel-polyfill',
        __dirname + "/src/index.js"
    ],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
        // 개발 서버에서 bundle.js 를 /appgallery 하단으로 위치 시킨다.

        // path: __dirname + "/public/appgallery",
        // filename: "bundle.js",
        // // 개발 서버에서 bundle.js 를 /appgallery 하단으로 위치 시킨다.
        // publicPath: "/appgallery"
    },
    node: {
        fs: "empty"
    },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         loader: 'eslint-loader',
        //         exclude: /(node_modules|dist|public)/
        //     }
        // ],
        loaders: [

            {
                test: /\.json$/,
                // We could restrict using json-loader only on .json files in the
                // node_modules/pixi.js directory, but the ability to load .json files
                // could be useful elsewhere in our app, so I usually don't.
                //include: path.resolve(__dirname, 'node_modules/pixi.js'),
                loader: 'json'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            }
            // {
            //     test: [/\.less$/, /\.css$/],
            //     loader: "style!css!postcss!less"
            // }
        ],
        // noParse: /\.min\.js/,
        // noParse: [ /.*(pixi\.js).*/ ]
        postLoaders: [
            {
                include: path.resolve(__dirname, 'node_modules/pixi.js'),
                loader: 'ify'
            }
        ]
    },
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        // historyApiFallback: {
        //     index: 'index.html',
        //     rewrites: [
        //         { from: /\/l\/about3/, to: '/about3.html'}
        //     ]
        // },
        inline: true
    }
};

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
    config.devtool = false;
    config.plugins = [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            mangle: true,
            compress: {
                dead_code: true,
                warnings: false,
                // drop_console: true,
                // pure_funcs: ["console.log"]
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        })
    ];
}

module.exports = config;
