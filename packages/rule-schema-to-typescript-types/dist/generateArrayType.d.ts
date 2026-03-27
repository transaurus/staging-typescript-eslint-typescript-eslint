import type { JSONSchema4ArraySchema } from '@typescript-eslint/utils/json-schema';
import type { ArrayAST, RefMap, TupleAST, UnionAST } from './types.js';
export declare function generateArrayType(schema: JSONSchema4ArraySchema, refMap: RefMap): ArrayAST | TupleAST | UnionAST;
