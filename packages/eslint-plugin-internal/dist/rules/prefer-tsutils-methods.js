import { AST_NODE_TYPES } from '@typescript-eslint/utils';
import { createRule } from '../util/index.js';
function isFlagType(name) {
    return (name === 'TypeFlags' || name === 'SymbolFlags' || name === 'ObjectFlags');
}
const FLAG_CONFIGS = {
    ObjectFlags: {
        flagsProperty: 'objectFlags',
        method: 'isObjectFlagSet',
    },
    SymbolFlags: {
        flagsProperty: 'flags',
        method: 'isSymbolFlagSet',
    },
    TypeFlags: {
        flagsProperty: 'flags',
        method: 'isTypeFlagSet',
    },
};
export default createRule({
    name: 'prefer-tsutils-methods',
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce using ts-api-utils methods over direct bitwise flag checks',
        },
        fixable: 'code',
        messages: {
            preferMethod: 'Prefer tsutils.{{ method }}() over bitwise {{ flagType }} check',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function isTsFlagAccess(node) {
            if (node.type === AST_NODE_TYPES.MemberExpression &&
                node.object.type === AST_NODE_TYPES.MemberExpression &&
                node.object.object.type === AST_NODE_TYPES.Identifier &&
                node.object.object.name === 'ts' &&
                node.object.property.type === AST_NODE_TYPES.Identifier) {
                const flagType = node.object.property.name;
                if (isFlagType(flagType)) {
                    return { flagType, fullText: context.sourceCode.getText(node) };
                }
            }
            return null;
        }
        function isFlagOrExpression(node) {
            if (node.type === AST_NODE_TYPES.BinaryExpression &&
                node.operator === '|') {
                const leftFlag = isTsFlagAccess(node.left);
                if (leftFlag) {
                    return {
                        flagType: leftFlag.flagType,
                        fullText: context.sourceCode.getText(node),
                    };
                }
                const leftOr = isFlagOrExpression(node.left);
                if (leftOr) {
                    return {
                        flagType: leftOr.flagType,
                        fullText: context.sourceCode.getText(node),
                    };
                }
            }
            return null;
        }
        function isFlagPropertyAccess(node, expectedFlagType) {
            if (node.type === AST_NODE_TYPES.MemberExpression &&
                node.property.type === AST_NODE_TYPES.Identifier) {
                const propName = node.property.name;
                const expectedPropName = FLAG_CONFIGS[expectedFlagType].flagsProperty;
                if (propName === expectedPropName) {
                    return {
                        objectText: context.sourceCode.getText(node.object),
                    };
                }
            }
            return null;
        }
        function analyzeBitwiseAnd(node) {
            const { left, right } = node;
            const rightFlag = isTsFlagAccess(right) ?? isFlagOrExpression(right);
            if (rightFlag) {
                const leftPropAccess = isFlagPropertyAccess(left, rightFlag.flagType);
                if (leftPropAccess) {
                    return {
                        flagText: rightFlag.fullText,
                        flagType: rightFlag.flagType,
                        objectText: leftPropAccess.objectText,
                    };
                }
            }
            const leftFlag = isTsFlagAccess(left) ?? isFlagOrExpression(left);
            if (leftFlag) {
                const rightPropAccess = isFlagPropertyAccess(right, leftFlag.flagType);
                if (rightPropAccess) {
                    return {
                        flagText: leftFlag.fullText,
                        flagType: leftFlag.flagType,
                        objectText: rightPropAccess.objectText,
                    };
                }
            }
            return null;
        }
        return {
            BinaryExpression(node) {
                if (node.operator !== '&') {
                    return;
                }
                const analysis = analyzeBitwiseAnd(node);
                if (!analysis) {
                    return;
                }
                const { flagText, flagType, objectText } = analysis;
                const method = FLAG_CONFIGS[flagType].method;
                let nodeToReplace = node;
                let isNegated = false;
                if (node.parent.type === AST_NODE_TYPES.BinaryExpression &&
                    (node.parent.operator === '===' || node.parent.operator === '!==') &&
                    node.parent.right.type === AST_NODE_TYPES.Literal &&
                    node.parent.right.value === 0) {
                    nodeToReplace = node.parent;
                    isNegated = node.parent.operator === '===';
                }
                const replacement = isNegated
                    ? `!tsutils.${method}(${objectText}, ${flagText})`
                    : `tsutils.${method}(${objectText}, ${flagText})`;
                context.report({
                    node: nodeToReplace,
                    messageId: 'preferMethod',
                    data: { flagType, method },
                    fix: fixer => fixer.replaceText(nodeToReplace, replacement),
                });
            },
        };
    },
});
