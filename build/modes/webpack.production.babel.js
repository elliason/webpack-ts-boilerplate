import CssnanoPlugin from 'cssnano-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';

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
    plugins: [new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })],
});
