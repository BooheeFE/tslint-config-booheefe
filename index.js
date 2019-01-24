const rules = require("./rules");

module.exports = {
  extends: ["tslint-eslint-rules"],
  rules: rules,
  jsRules: false,
  defaultSeverity: "error"
};
