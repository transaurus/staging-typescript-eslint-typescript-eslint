import { ESLintUtils } from '@typescript-eslint/utils';
export const createRule = ESLintUtils.RuleCreator(name => `https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin-internal/src/rules/${name}.ts`);
