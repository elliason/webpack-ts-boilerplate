import path from 'path';
import config from './config.json';
import ManifestPlugin from 'webpack-manifest-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';

const plugins = rootDirectory => [
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
    new StylelintPlugin(),
    new ManifestPlugin(),
    new AssetsPlugin({
        useCompilerPath: true,
        filename: 'entrypoints.json',
        includeAllFileTypes: true,
        prettyPrint: true,
        // processOutput: processOutput(),
    }),
    new CopyPlugin([
        {
            from: path.resolve(rootDirectory, config.staticFilesPath),
            to: path.resolve(rootDirectory, config.outputPath),
        },
    ]),
    new HtmlWebPackPlugin({
        template: path.resolve(rootDirectory, './src/html/index.html'),
        filename: './index.html',
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
                loader: 'babel-loader',
            },
            {
                loader: 'ts-loader',
            },
            {
                loader: 'eslint-loader',
            },
        ],
    },
    {
        test: /\.scss$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'postcss-loader',
            },
            {
                loader: 'sass-loader',
            },
        ],
    },
    {
        test: /\.html$/,
        use: [
            {
                loader: 'html-loader',
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
        plugins: plugins(rootDirectory),
        resolve: {
            extensions: ['.js', 'jsx', '.ts', '.tsx', '.mjs', '.json'],
            plugins: [
                new TsconfigPathsPlugin({
                    /* options: */
                }),
            ],
        },
        module: {
            rules: rules,
        },
    };
};

export default commonWebpackSettings;
