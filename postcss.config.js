// eslint-disable-next-line import/no-extraneous-dependencies
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: {
        autoprefixer,
        stylelint: {
            configBaseDir: './',
        },
        'postcss-custom-media': {},
        'postcss-calc': {},
        'postcss-preset-env': {
            stage: 2,
        },
        'postcss-flexbugs-fixes': {},
        // Pack same CSS media query rules into one
        'css-mqpacker': {
            sort: true,
        },
        // A PostCSS plugin to console.log() the messages (warnings, etc.) registered by other PostCSS plugins.
        'postcss-reporter': {},
        // compression
        cssnano: {},
    },
};
