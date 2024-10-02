export default [
	{ ignores: ['dist'] },
	{
		files: ['src/**/*.{js}'],
		languageOptions: {
			ecmaVersion: 5,
			parserOptions: {
				ecmaVersion: 5,
				ecmaFeatures: { jsx: true },
				sourceType: 'commonjs',
			},
		},
	},
]
