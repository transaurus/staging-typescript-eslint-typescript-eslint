export class NotSupportedError extends Error {
    constructor(thing, target) {
        super(`Generating a type for ${thing} is not currently supported:\n${JSON.stringify(target, null, 2)}`);
    }
}
export class UnexpectedError extends Error {
    constructor(error, target) {
        super(`Unexpected Error: ${error}:\n${JSON.stringify(target, null, 2)}`);
    }
}
