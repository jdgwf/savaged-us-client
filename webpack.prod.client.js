const path = require('path');
var nodeExternals = require('webpack-node-externals');

const clientProdConfig = {
    mode: 'production',
    entry: ['./src/react/index.tsx'],
    devtool: '(none)',
    optimization: {
        minimize: true,
        // moduleIds: 'hashed',
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
      ],

    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/js')
    },
};

module.exports = [ clientProdConfig ];
