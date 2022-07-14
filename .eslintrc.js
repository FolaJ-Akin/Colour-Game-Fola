module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-uses-react": "off", // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
        "react/react-in-jsx-scope": "off", // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint,
        "react/no-unescaped-entities": "warn", // favouring readability of characters instead https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
      }
}
