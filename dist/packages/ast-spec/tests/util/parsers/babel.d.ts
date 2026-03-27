import type { Fixture, ParserResponse } from './parser-types.js';
export declare function parseBabel(fixture: Pick<Fixture, 'contents' | 'isJSX'>): ParserResponse;
