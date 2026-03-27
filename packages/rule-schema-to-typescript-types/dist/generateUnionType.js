import { NotSupportedError } from './errors.js';
import { generateType } from './generateType.js';
export function generateUnionType(members, refMap) {
    const elements = [];
    for (const memberSchema of members) {
        elements.push((() => {
            switch (typeof memberSchema) {
                case 'string':
                    return {
                        code: `'${memberSchema.replaceAll("'", "\\'")}'`,
                        commentLines: [],
                        type: 'literal',
                    };
                case 'number':
                case 'boolean':
                    return {
                        code: `${memberSchema}`,
                        commentLines: [],
                        type: 'literal',
                    };
                case 'object':
                    if (memberSchema == null) {
                        throw new NotSupportedError('null in an enum', memberSchema);
                    }
                    if (Array.isArray(memberSchema)) {
                        throw new NotSupportedError('array in an enum', memberSchema);
                    }
                    return generateType(memberSchema, refMap);
            }
        })());
    }
    return {
        commentLines: [],
        elements,
        type: 'union',
    };
}
