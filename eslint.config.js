module.export = [
	{ ignores: ['dist'] },
	{
		files: ['**/*.{js}'],
		languageOptions: {
			ecmaVersion: 5,
			sourceType: 'script',
			parserOptions: {
				ecmaVersion: 5,
				ecmaFeatures: { jsx: false },
				sourceType: 'script',
			},
		},
	},
]
