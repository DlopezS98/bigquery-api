export function replaceBlanksWithUnderscore(value: string) {
    return value.replace(/ /g, '_');
}

export function replaceDashWithUnderscore(value: string) {
    return value.replace(/-/g, '_');
}

export function removeSpecialCharacters(value: string) {
    return value.replace(/[^a-zA-Z0-9 ]/g, '');
}

export function replaceBlankAndRemoveSpecialCharacters(value: string) {
    return removeSpecialCharacters(replaceBlanksWithUnderscore(value));
}

export function convertToBQNamesConventions(value: string) {
    return replaceBlankAndRemoveSpecialCharacters(value);
}