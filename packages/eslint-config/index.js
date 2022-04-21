module.exports = {
	extends: ["eslint:recommended", "prettier"],
	// typescript configuration
	overrides: {
		files: ["**/*.ts"],
		plugins: ["'@typescript-eslint", "prettier"],
		parser: "@typescript-eslint/parser",
		extends: [
			"eslint:recommended",
			"plugin:@typescript-eslint/recommended",
			"plugin:@typescript-eslint/recommended-requiring-type-checking",
			"prettier",
		],
	},
	// typescript react configuration
	overrides: {
		files: ["**/*.tsx"],
		plugins: ["'@typescript-eslint", "prettier"],
		parser: "@typescript-eslint/parser",
		extends: [
			"eslint:recommended",
			"plugin:@typescript-eslint/recommended",
			"plugin:@typescript-eslint/recommended-requiring-type-checking",
			"plugin:react/recommended",
			"plugin:react-hooks/recommended",
			"plugin:prettier/recommended",
		],
	},
};
