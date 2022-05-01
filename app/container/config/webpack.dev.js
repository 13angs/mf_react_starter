const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const packageJson = require('../package.json');
const path = require('path');
// const webpack = require('webpack');

const domain = process.env.PRODUCTION_DOMAIN || 'localhost:3001';
console.log(domain)

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 3000
    },
    output: {
        publicPath: "auto"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"]
                }
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                'fragment': `fragment@http://${domain}/remoteEntry.js`
            },
            shared: packageJson.dependencies
        }),
        new ExternalTemplateRemotesPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        // new webpack.EnvironmentPlugin({
        //     PRODUCTION_DOMAIN: 'localhost:3001'
        // })
    ]
}