const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');


const devConfig = {
    entry: './src/index',
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3001,
    },
    output: {
        publicPath: 'auto',
    },
    plugins: [
        // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
        new ModuleFederationPlugin({
            name: 'fragment',
            filename: 'remoteEntry.js',
            exposes: {
                './FragmentApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        }),
    ],
};
module.exports = merge(commonConfig, devConfig);
