module.exports = {
    extends: [
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    env: {
        browser: true,
    },
    plugins: ['@typescript-eslint'],
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
                extensions: ['.mjs', '.js', 'jsx', '.ts', '.tsx', '.json'],
            },
        },
        'import/extensions': ['.js', 'jsx', '.ts', '.tsx', '.mjs'],
    },
};
