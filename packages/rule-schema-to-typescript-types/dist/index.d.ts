import type { JSONSchema4 } from '@typescript-eslint/utils/json-schema';
/**
 * Converts rule options schema(s) to the equivalent TypeScript type string.
 *
 * @param schema Original rule schema(s) as declared in `meta.schema`.
 * @returns Stringified TypeScript type(s) equivalent to the options schema(s).
 */
export declare function schemaToTypes(schema: JSONSchema4 | readonly JSONSchema4[]): string;
