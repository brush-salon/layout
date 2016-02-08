var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = function () {
    return {
        context: path.resolve("js"),
        entry: path.resolve('js/main'),
        output: {
            path: "src",
            filename: "bundle.js",
        },
        resolve: {
            alias: {
                jquery: "jquery/src/jquery"
            }
        },
        module: {
            loaders: [
                {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url-loader?limit=10000&mimetype=application/font-woff"
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader: 'file'
                },
            ]
        },
        plugins: [
            new ExtractTextPlugin('[name].css'),
        ],
        postcss: function () {
            return [require('autoprefixer')];
        },
        watch: true,
    };
};

var handleError = function (err, stats) {
        if (err)
            return handleFatalError(err, stats);
        var jsonStats = stats.toJson();
        if (jsonStats.errors.length > 0)
            return handleSoftErrors(jsonStats.errors);
        if (jsonStats.warnings.length > 0)
            handleWarnings(jsonStats.warnings);
        successfullyCompiled();
    },
    handleFatalError = function (err, stats) {
        console.log((new Date).toString(), err);
    },
    handleSoftErrors = function (json) {
        console.log((new Date).toString(), json);
    },
    handleWarnings = function (json) {
        console.log((new Date).toString(), json);
    },
    successfullyCompiled = function () {
        console.log((new Date).toString(), 'build complete');
    };

var com = webpack(config());
com.watch(null, handleError);