const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN || 'localhost';

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                'fragment': `fragment@http://${domain}:3001/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);