import { TSUtils } from '@typescript-eslint/utils';
import { generateType } from './generateType.js';
import { optimizeAST } from './optimizeAST.js';
import { printTypeAlias } from './printAST.js';
/**
 * Converts rule options schema(s) to the equivalent TypeScript type string.
 *
 * @param schema Original rule schema(s) as declared in `meta.schema`.
 * @returns Stringified TypeScript type(s) equivalent to the options schema(s).
 */
export function schemaToTypes(schema) {
    const [isArraySchema, schemaNormalized] = TSUtils.isArray(schema)
        ? [true, schema]
        : [false, [schema]];
    if (schemaNormalized.length === 0) {
        return ['/** No options declared */', 'type Options = [];'].join('\n');
    }
    const refTypes = [];
    const types = [];
    for (let i = 0; i < schemaNormalized.length; i += 1) {
        const result = compileSchema(schemaNormalized[i], i);
        refTypes.push(...result.refTypes);
        types.push(result.type);
    }
    const optionsType = isArraySchema
        ? printTypeAlias('Options', {
            commentLines: [],
            elements: types,
            spreadType: null,
            type: 'tuple',
        })
        : printTypeAlias('Options', types[0]);
    return [...refTypes, optionsType].join('\n\n');
}
function compileSchema(schema, index) {
    const refTypes = [];
    const refMap = new Map();
    // we only support defs at the top level for simplicity
    const defs = schema.$defs ?? schema.definitions;
    if (defs) {
        for (const [defKey, defSchema] of Object.entries(defs)) {
            const typeName = toPascalCase(defKey);
            refMap.set(`#/$defs/${defKey}`, typeName);
            refMap.set(`#/items/${index}/$defs/${defKey}`, typeName);
            const type = generateType(defSchema, refMap);
            optimizeAST(type);
            refTypes.push(printTypeAlias(typeName, type));
        }
    }
    const type = generateType(schema, refMap);
    optimizeAST(type);
    return {
        refTypes,
        type,
    };
}
function toPascalCase(key) {
    return key[0].toUpperCase() + key.substring(1);
}
