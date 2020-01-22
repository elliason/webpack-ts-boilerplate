module.exports = {
    verbose: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.ts(x)?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)s(x)?$',
    testPathIgnorePatterns: [
        '/node_modules/',
        '/public/',
        '/vendor/',
        '/patternlab/',
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
        '^~utils/(.*)$': '<rootDir>/assets/scripts/utils/$1',
        '^~components/(.*)$': '<rootDir>/assets/scripts/components/$1',
        '^~enums/(.*)$': '<rootDir>/assets/scripts/enums/$1',
        '^~types/(.*)$': '<rootDir>/assets/scripts/types/$1',
        '^~store/(.*)$': '<rootDir>/assets/scripts/store/$1',
        '^~styles/(.*)$': '<rootDir>/assets/css/$1',
    },
    collectCoverage: false,
};
