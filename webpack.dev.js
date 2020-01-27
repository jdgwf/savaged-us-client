const path = require('path');
var nodeExternals = require('webpack-node-externals');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const clientDevConfig = {
    mode: 'staging',

    entry: ['./src/react/index.tsx'],
    devtool: 'source-map',
    optimization: {
        minimize: false,
    },

    module: {
      rules: [
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                configFile: 'tsconfig.client.json'
            }
        },
        {
            // Preprocess your css files
            // you can add additional loaders here (e.g. sass/less etc.)
            test: /\.css$/,
            // exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
        }
      ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/js')
    },
};

const scssAppConfig = {
    mode: "development" || 'production',
    entry: './public/scss/app.scss',
    optimization: {
        minimize: true,
    },
    module: {

      rules: [
        {
            test: /\.scss$/,
            include: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'public/scss'),
            ],
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader?url=false',
                'sass-loader',
                // 'style-loader',
            ]
        }
      ]
    },

    resolve: {
        extensions: ['.scss' ]
    },
    output: {
        path: path.resolve(__dirname, 'public/css')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ]
};


module.exports = [ clientDevConfig,  scssAppConfig];
