import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';

const webpackAnalyzeSettings = {
    plugins: [new BundleAnalyzerPlugin()],
};

export default webpackAnalyzeSettings;
