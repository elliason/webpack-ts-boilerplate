import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const analyzePreset = env => ({
    plugins: [new BundleAnalyzerPlugin()],
});

module.exports = analyzePreset;
