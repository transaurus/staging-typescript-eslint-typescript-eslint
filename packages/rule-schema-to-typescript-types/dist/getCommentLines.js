export function getCommentLines(schema) {
    const lines = [];
    if (schema.description) {
        lines.push(schema.description);
    }
    return lines;
}
