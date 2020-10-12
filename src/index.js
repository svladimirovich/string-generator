export function generateId(source) {
    return String(source).replace(/#/g, c => (Math.random()*16|0).toString(16));
}
