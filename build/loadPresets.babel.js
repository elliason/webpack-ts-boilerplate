import webpackMerge from 'webpack-merge';

const loadPresetsBabel = (env = { presets: [] }) => {
    const presets = env.presets || [];

    const mergedPresets = [].concat(...[presets]);
    const mergedConfigs = mergedPresets.map(presetName => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
        return require(`./presets/webpack.${presetName}.babel.js`)(env);
    });

    return webpackMerge({}, ...mergedConfigs);
};

export default loadPresetsBabel;
