import path from 'path';
import config from './config.json';
import ManifestPlugin from 'webpack-manifest-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import webpack from 'webpack';

const plugins = [
    new ManifestPlugin(),
    new AssetsPlugin({
        // path: path.resolve(rootDirectory, config.outputPath),
        useCompilerPath: true,
        filename: 'entrypoints.json',
        includeAllFileTypes: true,
        prettyPrint: true,
        // processOutput: processOutput(),
    }),
];

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
