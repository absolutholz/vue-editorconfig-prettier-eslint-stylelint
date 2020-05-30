module.exports = {
	root: true,

	env: {
		browser: true,
		es2020: true,
		node: true
	},

	extends: ["plugin:vue/essential", "eslint:recommended", "prettier"],

	parserOptions: {
		parser: "babel-eslint"
	},

	rules: {
		"prettier/prettier": "error",
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
	},

	plugins: ["prettier"]
};
