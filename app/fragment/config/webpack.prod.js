const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/fragment/'
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'fragment',
            filename: 'remoteEntry.js',
            exposes: {
                './FragmentApp': `./src/bootstrap`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);