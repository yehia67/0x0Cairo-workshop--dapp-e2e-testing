module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        "cypress/globals": true
    },
    extends: [
        "react-app",
        "plugin:cypress/recommended"
    ],
    rules: {
        "no-console": "warn",
        "no-debugger": "error",
        "max-len": ["warn", { code: 240, tabWidth: 4, ignoreUrls: true }],
        indent: ["warn", 4, { "SwitchCase": 1 }],
        "array-bracket-spacing": ["warn", "always"],
        "comma-spacing": ["warn", { "before": false, "after": true }],
        "switch-colon-spacing": ["warn"],
        "object-curly-spacing": ["warn", "always"],
        "quotes": ["warn", "double"],
        "comma-dangle": ["warn", "never"],
        "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1 }],
        "semi": ["warn", "always"],
        "cypress/no-assigning-return-values": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn",
        "cypress/no-async-tests": "error",
        "cypress/no-pause": "error",
        "cypress/no-unnecessary-waiting": "never"
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    }
};
