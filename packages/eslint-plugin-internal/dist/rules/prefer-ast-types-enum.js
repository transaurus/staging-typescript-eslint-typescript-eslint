import { DefinitionType } from '@typescript-eslint/scope-manager';
import { AST_NODE_TYPES, AST_TOKEN_TYPES } from '@typescript-eslint/utils';
import { createRule } from '../util/index.js';
const isStringLiteral = (node) => typeof node.value === 'string';
export default createRule({
    name: 'prefer-ast-types-enum',
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce consistent usage of `AST_NODE_TYPES`, `AST_TOKEN_TYPES` and `DefinitionType` enums',
        },
        fixable: 'code',
        messages: {
            preferEnum: 'Prefer {{ enumName }}.{{ literal }} over raw literal',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const report = (enumName, literal) => context.report({
            node: literal,
            messageId: 'preferEnum',
            data: { enumName, literal: literal.value },
            fix: fixer => fixer.replaceText(literal, `${enumName}.${literal.value}`),
        });
        return {
            Literal(node) {
                if (node.parent.type === AST_NODE_TYPES.TSEnumMember &&
                    ['AST_NODE_TYPES', 'AST_TOKEN_TYPES', 'DefinitionType'].includes(node.parent.parent.parent.id.name)) {
                    return;
                }
                if (!isStringLiteral(node)) {
                    return;
                }
                const value = node.value;
                if (Object.hasOwn(AST_NODE_TYPES, value)) {
                    report('AST_NODE_TYPES', node);
                }
                if (Object.hasOwn(AST_TOKEN_TYPES, value)) {
                    report('AST_TOKEN_TYPES', node);
                }
                if (Object.hasOwn(DefinitionType, value)) {
                    report('DefinitionType', node);
                }
            },
        };
    },
});
