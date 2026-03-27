import { ESLintUtils } from '@typescript-eslint/utils';
type Options = [
    {
        formatWithPrettier?: boolean;
    }
];
type MessageIds = 'invalidFormatting' | 'invalidFormattingErrorTest' | 'noUnnecessaryNoFormat' | 'prettierException' | 'singleLineQuotes' | 'templateLiteralEmptyEnds' | 'templateLiteralLastLineIndent' | 'templateStringMinimumIndent' | 'templateStringRequiresIndent';
declare const _default: ESLintUtils.RuleModule<MessageIds, Options, import("../util/createRule.js").ESLintPluginInternalDocs, ESLintUtils.RuleListener> & {
    name: string;
};
export default _default;
