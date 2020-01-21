import path from 'path';
import config from './config.json';
import ManifestPlugin from 'webpack-manifest-plugin';
import webpack from 'webpack';

const plugins = [new ManifestPlugin()];

const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules|vendor/,
        use: [
            {
                loader: 'babel-loader',
            },
            {
                loader: 'eslint-loader',
            },
        ],
    },
    {
        test: /\.ts(x)?$/,
        exclude: /node_modules|vendor/,
        use: [
            {
                loader: 'ts-loader',
            },
            {
                loader: 'eslint-loader',
            },
        ],
    },
];

const commonWebpackSettings = rootDirectory => {
    return {
        entry: config.entry,
        output: {
            filename: '[name].[contenthash].js',
            chunkFilename: '[name].[contenthash].bundle.js',
            path: path.resolve(rootDirectory, config.outputPath),
        },
        plugins,
        module: {
            rules: rules,
        },
    };
};

export default commonWebpackSettings;
