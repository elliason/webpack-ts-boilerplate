// eslint-disable-next-line import/no-extraneous-dependencies
const webpackMerge = require('webpack-merge');

const loadPresetsBabel = (env = { presets: [] }) => {
    const presets = env.presets || [];

    const mergedPresets = [].concat(...[presets]);
    const mergedConfigs = mergedPresets.map(presetName => {
        // eslint-disable-next-line global-require,import/no-dynamic-require
        return require(`./presets/webpack.${presetName}`)(env);
    });

    return webpackMerge({}, ...mergedConfigs);
};

module.exports = loadPresetsBabel;
