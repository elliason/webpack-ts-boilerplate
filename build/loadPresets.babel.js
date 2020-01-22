import webpackMerge from 'webpack-merge';

const loadPresetsBabel = (env = { presets: [] }) => {
    const presets = env.presets || [];

    const mergedPresets = [].concat(...[presets]);
    const mergedConfigs = mergedPresets.map(presetName => {
        return require(`./presets/webpack.${presetName}.babel.js`)(env);
    });

    return webpackMerge({}, ...mergedConfigs);
};

export default loadPresetsBabel;
