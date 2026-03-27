import { ESLintUtils } from '@typescript-eslint/utils';
export interface ESLintPluginInternalDocs {
    requiresTypeChecking?: true;
}
export declare const createRule: <Options extends readonly unknown[], MessageIds extends string>({ meta, name, ...rule }: Readonly<ESLintUtils.RuleWithMetaAndName<Options, MessageIds, ESLintPluginInternalDocs>>) => ESLintUtils.RuleModule<MessageIds, Options, ESLintPluginInternalDocs, ESLintUtils.RuleListener> & {
    name: string;
};
