module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks'
    ],
    env: {
        browser: true,
        jest: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parserOptions: {
        project: [
            "tsconfig.json",
        ],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react/jsx-filename-extension': ['warn', {extensions: ['.jsx', '.tsx']}],
        'react/prop-types': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/no-var-requires": 0
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};