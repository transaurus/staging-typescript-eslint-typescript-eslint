import type { Fixture, ParserResponse } from './parser-types.js';
export declare function parseTSESTree(fixture: Pick<Fixture, 'config' | 'contents' | 'isJSX'>): ParserResponse;
