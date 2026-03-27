import { requiresQuoting } from '@typescript-eslint/type-utils';
import { TSUtils } from '@typescript-eslint/utils';
import { generateType } from './generateType.js';
import { getCommentLines } from './getCommentLines.js';
export function generateObjectType(schema, refMap) {
    const commentLines = getCommentLines(schema);
    let indexSignature = null;
    if (schema.additionalProperties === true ||
        // eslint-disable-next-line @typescript-eslint/internal/eqeq-nullish
        schema.additionalProperties === undefined) {
        indexSignature = {
            commentLines: [],
            type: 'type-reference',
            typeName: 'unknown',
        };
    }
    else if (typeof schema.additionalProperties === 'object') {
        const indexSigType = generateType(schema.additionalProperties, refMap);
        indexSignature = indexSigType;
    }
    const properties = [];
    const required = new Set(TSUtils.isArray(schema.required) ? schema.required : []);
    if (schema.properties) {
        const propertyDefs = Object.entries(schema.properties);
        for (const [propName, propSchema] of propertyDefs) {
            const propType = generateType(propSchema, refMap);
            const sanitisedPropName = requiresQuoting(propName)
                ? `'${propName}'`
                : propName;
            properties.push({
                name: sanitisedPropName,
                optional: !required.has(propName),
                type: propType,
            });
        }
    }
    return {
        commentLines,
        indexSignature,
        properties,
        type: 'object',
    };
}
