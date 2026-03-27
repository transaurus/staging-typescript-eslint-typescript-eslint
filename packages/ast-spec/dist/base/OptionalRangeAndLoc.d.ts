import type { Range } from './Range';
import type { SourceLocation } from './SourceLocation';
export type OptionalRangeAndLoc<T> = {
    loc?: SourceLocation;
    range?: Range;
} & Pick<T, Exclude<keyof T, 'loc' | 'range'>>;
