const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': [
          'ts-jest',
          {
            tsconfig: 'tsconfig.json',
          },
        ],
    },
    roots: ['./src/'],
    testMatch: ['**/?(*.)spec.ts'],
    testTimeout: 32000,
};
module.exports = config;
