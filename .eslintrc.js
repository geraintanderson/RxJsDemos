module.exports = {
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "indent": ["error", 2, {"MemberExpression": "off"}],
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "semi": 0,
    "space-infix-ops": "error",
    "spaced-comment": ['error', "always"]
  }
}
