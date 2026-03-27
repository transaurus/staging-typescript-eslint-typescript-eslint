import type { SyntaxKind } from 'typescript';
export interface BinaryOperatorToText {
    [SyntaxKind.AmpersandAmpersandToken]: '&&';
    [SyntaxKind.AmpersandToken]: '&';
    [SyntaxKind.AsteriskAsteriskToken]: '**';
    [SyntaxKind.AsteriskToken]: '*';
    [SyntaxKind.BarBarToken]: '||';
    [SyntaxKind.BarToken]: '|';
    [SyntaxKind.CaretToken]: '^';
    [SyntaxKind.EqualsEqualsEqualsToken]: '===';
    [SyntaxKind.EqualsEqualsToken]: '==';
    [SyntaxKind.ExclamationEqualsEqualsToken]: '!==';
    [SyntaxKind.ExclamationEqualsToken]: '!=';
    [SyntaxKind.GreaterThanEqualsToken]: '>=';
    [SyntaxKind.GreaterThanGreaterThanGreaterThanToken]: '>>>';
    [SyntaxKind.GreaterThanGreaterThanToken]: '>>';
    [SyntaxKind.GreaterThanToken]: '>';
    [SyntaxKind.InKeyword]: 'in';
    [SyntaxKind.InstanceOfKeyword]: 'instanceof';
    [SyntaxKind.LessThanEqualsToken]: '<=';
    [SyntaxKind.LessThanLessThanToken]: '<<';
    [SyntaxKind.LessThanToken]: '<';
    [SyntaxKind.MinusToken]: '-';
    [SyntaxKind.PercentToken]: '%';
    [SyntaxKind.PlusToken]: '+';
    [SyntaxKind.SlashToken]: '/';
}
