module.exports = [
    {
        ignores: ['node_modules/**', 'dist/**'],
    },
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 5,
            sourceType: 'script',
            parserOptions: {
                ecmaVersion: 5,
                ecmaFeatures: { jsx: false },
                sourceType: 'script',
            },
            globals: {
                console: 'readonly',
                module: 'readonly',
                require: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                process: 'readonly',
                Buffer: 'readonly',
            },
        },
    },
    {
        rules: {
            semi: 'error',
        },
    },
];
