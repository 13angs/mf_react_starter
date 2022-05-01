const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const packageJson = require('../package.json');
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
// const webpack = require('webpack');

const domain = process.env.PRODUCTION_DOMAIN || 'localhost';

const devConfig = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 3000
    },
    output: {
        publicPath: "auto"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                'fragment': `fragment@http://${domain}:3001/remoteEntry.js`
            },
            shared: packageJson.dependencies
        }),
        new ExternalTemplateRemotesPlugin(),
    ]
}

module.exports = merge(commonConfig, devConfig);