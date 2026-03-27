import type { JSONSchema4 } from '@typescript-eslint/utils/json-schema';
import type { SchemaAST, RefMap } from './types.js';
export declare function generateType(schema: JSONSchema4, refMap: RefMap): SchemaAST;
