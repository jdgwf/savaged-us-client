const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const devServer = {
    contentBase: path.join(__dirname, 'public'),
    port: 5000,
    watchOptions: {
        poll: true
    }
}


module.exports = { devServer };
