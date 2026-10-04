import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVueA11y from "eslint-plugin-vuejs-accessibility";

export default [
  ...pluginVue.configs["flat/recommended"],
  ...pluginVueA11y.configs["flat/recommended"],
  {
    files: ["**/*.ts", "**/*.vue"],
    languageOptions: {
      sourceType: "module",
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".vue"],
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },
];
