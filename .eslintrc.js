module.exports = {
    extends: [
        './codestyle/eslint/index.js',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    env: {
        browser: true,
    },
    plugins: ['@typescript-eslint', 'import'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                directory: './tsconfig.json',
            },
            node: {
                extensions: ['.js', 'jsx', '.ts', '.tsx', '.mjs', '.json'],
            },
        },
        'import/extensions': ['.js', 'jsx', '.ts', '.tsx', '.mjs'],
    },
    rules: {
        strict: 'error',
        'import/no-unresolved': 1,
        'import/no-extraneous-dependencies': 1,
    },
};
