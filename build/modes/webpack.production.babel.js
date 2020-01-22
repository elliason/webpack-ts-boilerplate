module.exports = () => ({
    mode: 'production',
    performance: {
        maxEntrypointSize: 500000,
        hints: 'warning',
    },
});
