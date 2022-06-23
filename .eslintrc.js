const rules = {
	quotes: ["error", "double"],
	indent: ["error", "tab"],
	"no-tabs": "off",
	"import/prefer-default-export": "off",
	"react/function-component-definition": [2, { namedComponents: "arrow-function" }],
};

const parserOptions = {
	tsconfigRootDir: __dirname,
	project: ["./packages/**/tsconfig.json", "./packages/**/tsconfig.*.json"],
};

module.exports = {
	root: true,
	extends: ["eslint:recommended", "prettier", "airbnb-base"],
	// typescript configuration
	overrides: [
		{
			files: ["**/*.ts"],
			plugins: ["@typescript-eslint", "prettier"],
			parser: "@typescript-eslint/parser",
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"airbnb-base",
				"airbnb-typescript/base",
				"prettier",
			],
			rules,
			parserOptions,
		},
		{
			files: ["**/*.tsx"],
			plugins: ["@typescript-eslint", "prettier"],
			parser: "@typescript-eslint/parser",
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:react/recommended",
				"plugin:react-hooks/recommended",
				"airbnb",
				"airbnb-typescript",
				"plugin:react/jsx-runtime",
				"plugin:prettier/recommended",
			],
			rules,
			parserOptions,
		},
	],
	rules,
};
