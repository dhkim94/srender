/*
 * Default webpack configuration for development
 */
var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StringReplacePlugin = require("string-replace-webpack-plugin");

var config = {
    devtool: 'eval-source-map',

    // entry: [
    //     // 'babel-polyfill',
    //     __dirname + "/src/index.js"
    // ],

    // [name] 은 bundle 이 된다.
    entry: {
        bundle: __dirname +"/src/index.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js"
    },
    node: {
        fs: "empty"
    },
    // css 파일을 외부로 뽑아 내기 위해서 ExtractTextPlugin 사용
    plugins: [
        // process.env 에 전역 변수 생성
        // NODE_ENV 값은 development 임.
        // webpack-dev-server 로 뜨면 이것이 반영 됨.
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('development')}
        }),
        new ExtractTextPlugin("[name].css")
    ],
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
                test: /index.html$/,
                loader: StringReplacePlugin.replace({
                    replacements: [
                        {
                            pattern: /<!-- @secret (\w*?) -->/ig,
                            replacement: function (match, p1, offset, string) {

                                console.log('----here here');

                                return secrets.web[p1];
                            }
                        }
                    ]
                })
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // css 파일을 외부로 뽑아 내기 위해서 ExtractTextPlugin loader 사용
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", "less-loader"]
                })
            }

            // todo preprocess 넣어 보도록 하자.
        ],
        // noParse: /\.min\.js/,
        // noParse: [ /.*(pixi\.js).*/ ]
        // postLoaders: [
        //     {
        //         include: path.resolve(__dirname, 'node_modules/pixi.js'),
        //         loader: 'ify'
        //     }
        // ]
    },
    devServer: {
        contentBase: "./public",
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
        new webpack.optimize.OccurrenceOrderPlugin(),
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
        // process.env 에 전역 변수 생성
        // NODE_ENV 값은 production 임.
        // webpack 으로 js 를 추출 하면 이것이 반영 됨.
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        }),
        // css 파일을 외부로 뽑아 내기 위해서 ExtractTextPlugin 사용
        new ExtractTextPlugin("[name].min.css")
    ];
}

module.exports = config;
