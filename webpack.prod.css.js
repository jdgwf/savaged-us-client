const path = require('path');
var nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const scssAppConfig = {
    mode: 'production',
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
        },
        {
            // Preprocess your css files
            // you can add additional loaders here (e.g. sass/less etc.)
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
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

const scssBasicPDFConfig = {
    mode: 'production',
    entry: './src/pdfs/scss/basic-charsheet.scss',
    optimization: {
        minimize: true,
    },
    module: {

      rules: [
        {
            test: /\.scss$/,
            include: [
                // path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src/pdfs/scss'),
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
            filename: 'basic-charsheet.css',
        })
    ]
};

const scssClassicPDFConfig = {
    mode: 'production',
    entry: './src/pdfs/scss/nextgen-charsheet.scss',
    optimization: {
        minimize: true,
    },
    module: {

      rules: [
        {
            test: /\.scss$/,
            include: [
                // path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src/pdfs/scss'),
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
            filename: 'nextgen-charsheet.css',
        })
    ]
};

const scssBillingPDF = {
    mode: "development" || 'production',
    entry: './src/pdfs/scss/billing-pdf.scss',
    optimization: {
        minimize: true,
    },
    module: {

      rules: [
        {
            test: /\.scss$/,
            include: [
                // path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src/pdfs/scss'),
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
            filename: 'billing-pdf.css',
        })
    ]
};

const scssPromoPDF = {
    mode: "development" || 'production',
    entry: './src/pdfs/scss/promo-pdf.scss',
    optimization: {
        minimize: true,
    },
    module: {

      rules: [
        {
            test: /\.scss$/,
            include: [
                // path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src/pdfs/scss'),
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
            filename: 'promo-pdf.css',
        })
    ]
};

module.exports = [scssPromoPDF, scssBillingPDF, scssClassicPDFConfig, scssBasicPDFConfig, scssAppConfig];
