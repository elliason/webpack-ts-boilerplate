/* global require process */

import dotenv from 'dotenv';
import webpackMerge from 'webpack-merge';
import loadPresets from './build/loadPresets.babel';
import commonSettings from './build/webpack.common.babel';

// read your .env file, parse the contents, assign it to process.env
dotenv.config();

const modeConfig = env =>
    require(`./build/modes/webpack.${env.mode}.babel.js`)(env);

const webpackConfiguration = (
    { mode, presets } = { mode: process.env.ENVIRONMENT, presets: [] },
) => {
    return webpackMerge(
        commonSettings(__dirname),
        modeConfig({ mode, presets }),
        loadPresets({ mode, presets }),
    );
};

export default webpackConfiguration;
