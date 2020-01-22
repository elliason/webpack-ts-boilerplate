import CssnanoPlugin from 'cssnano-webpack-plugin';
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => ({
    mode: 'production',
    performance: {
        maxEntrypointSize: 500000,
        hints: 'warning',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssnanoPlugin(),
            new TerserPlugin({
                parallel: true,
                cache: true,
                terserOptions: {},
            }),
        ],
    },
});
