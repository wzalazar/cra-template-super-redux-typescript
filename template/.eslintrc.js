module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "plugins": [
    "prettier",
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 10,
  },
  "parser": "@typescript-eslint/parser",
  "globals": {
    "jest": false,
    "it": false,
    "beforeEach": false,
    "process": false,
    "describe": false,
    "test": false,
    "expect": false,
    "console.warn": false,
    "__dirname": false,
    "Buffer": false,
  },
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "semi": false,
      "arrowParens": "always",
      "printWidth": 120,
      "tabWidth": 2,
      "trailingComma": "es5"
    }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-console": ["error"],
    "linebreak-style": [
      "error",
      "unix"
    ]
  },
  "overrides": [
    {
        "files": ["**/*.tsx"],
        "rules": {
            "react/prop-types": "off"
        }
    }
  ]
};