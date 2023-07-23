/** 
 * The Main Function To Create The Extends
 */
function createExtendItString(name: string, func: Function): void {
  return String.prototype[name] = func;
};

/**
 * Removes all spaces from the string.
 */
createExtendItString('noSpace', function(): string {
  return this.replace(/ +/g, '');
});

/**
 * Removes all vowels from the string.
 */
createExtendItString('removeVowels', function(): string {
  return this.replace(/[aeiouAEIOU]/g, '');
});

/**
 * Reverses the characters in the string.
 */
createExtendItString('reverseString', function(): string {
  return this.split('').reverse().join('');
});

/**
 * Converts the string to a URL-friendly slug (lowercase with hyphens instead of spaces).
 */
createExtendItString('toSlug', function(): string {
  return this.toLowerCase().replace(/\s+/g, '-');
});

/**
 * Counts the occurrences of a specified substring in the string.
 * @param substring - The substring to count occurrences of.
 * @returns The number of occurrences of the substring in the string.
 */
createExtendItString('countSubstring', function(substring: string): number {
  const regex = new RegExp(substring, 'g');
  const matches = this.match(regex);
  return matches ? matches.length : 0;
});

/**
 * Truncates the string to a specified length and adds ellipsis if needed.
 * @param maxLength - The maximum length of the truncated string.
 * @returns The truncated string with an ellipsis if needed.
 */
createExtendItString('truncate', function(maxLength: number): string {
  const ellipsis = '...';
  return this.length > maxLength ? this.slice(0, maxLength - ellipsis.length) + ellipsis : this;
});

/**
 * Checks if the string is a palindrome (reads the same backward as forward).
 * @returns True if the string is a palindrome, false otherwise.
 */
createExtendItString('isPalindrome', function(): boolean {
  const cleanedString = this.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
});

/**
 * Checks if the string is empty (contains no characters).
 * @returns True if the string is empty, false otherwise.
 */
createExtendItString('isEmpty', function(): boolean {
  return this.trim().length === 0;
});

/**
 * Counts the number of words in the string.
 * @returns The number of words in the string.
 */
createExtendItString('countWords', function(): number {
  return this.trim().split(/\s+/).length;
});

/**
 * Checks if the string starts with a vowel.
 * @returns True if the string starts with a vowel, false otherwise.
 */
createExtendItString('startsWithVowel', function(): boolean {
  return /^[aeiou]/i.test(this.trim());
});

/**
 * Checks if the string ends with a vowel.
 * @returns True if the string ends with a vowel, false otherwise.
 */
createExtendItString('endsWithVowel', function(): boolean {
  return /[aeiou]$/i.test(this.trim());
});

/**
 * Replaces multiple consecutive spaces with a single space.
 * @returns The string with multiple spaces replaced by a single space.
 */
createExtendItString('replaceMultipleSpaces', function(): string {
  return this.replace(/\s{2,}/g, ' ');
});

/**
 * Shuffles the characters in the string randomly.
 * @returns The string with characters shuffled randomly.
 */
createExtendItString('shuffle', function(): string {
  const arr = this.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
});

/**
 * Repeats the string a specified number of times.
 * @param times - The number of times to repeat the string.
 * @returns The repeated string.
 */
createExtendItString('repeat', function(times: number): string {
  return this.repeat(times);
});

/**
 * Checks if the string contains only numeric characters.
 * @returns True if the string contains only numeric characters, false otherwise.
 */
createExtendItString('isNumeric', function(): boolean {
  return /^-?\d+(\.\d+)?$/.test(this.trim());
});

/**
 * Checks if the string is a valid email address.
 * @returns True if the string is a valid email address, false otherwise.
 */
createExtendItString('isEmail', function(): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.trim());
});

/**
 * Capitalizes the first letter of each word in the string.
 * @returns The string with the first letter of each word capitalized.
 */
createExtendItString('capitalizeWords', function(): string {
  return this.replace(/\b\w/g, (match) => match.toUpperCase());
});

/**
 * Removes all non-alphanumeric characters from the string.
 * @returns The string with non-alphanumeric characters removed.
 */
createExtendItString('removeNonAlphaNumeric', function(): string {
  return this.replace(/[^a-zA-Z0-9]/g, '');
});

/**
 * Counts the occurrences of a substring in the string (case-sensitive).
 * @param substring - The substring to count occurrences of.
 * @returns The number of occurrences of the substring in the string.
 */
createExtendItString('countOccurrences', function(substring: string): number {
  const regex = new RegExp(substring, 'g');
  const matches = this.match(regex);
  return matches ? matches.length : 0;
});

/**
 * Truncates the string to a specified number of words.
 * @param maxWords - The maximum number of words in the truncated string.
 * @returns The truncated string with an ellipsis if needed.
 */
createExtendItString('truncateWords', function(maxWords: number): string {
  const words = this.trim().split(/\s+/);
  return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : this;
});

/**
 * Removes all HTML tags from the string.
 * @returns The string with HTML tags removed.
 */
createExtendItString('stripTags', function(): string {
  return this.replace(/<[^>]*>?/gm, '');
});

/**
 * Converts the string to camelCase.
 * @returns The string in camelCase format.
 */
createExtendItString('camelCase', function(): string {
  return this.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase())).replace(/\s+/g, '');
});

/**
 * Converts the string to kebab-case.
 * @returns The string in kebab-case format.
 */
createExtendItString('kebabCase', function(): string {
  return this.replace(/\s+/g, '-').toLowerCase();
});

/**
 * Converts the string to snake_case.
 * @returns The string in snake_case format.
 */
createExtendItString('snakeCase', function(): string {
  return this.replace(/\s+/g, '_').toLowerCase();
});

/**
 * Replaces all occurrences of a substring in the string (case-insensitive).
 * @param find - The substring to find.
 * @param replace - The replacement string.
 * @returns The string with all occurrences of the substring replaced.
 */
createExtendItString('replaceAllCaseInsensitive', function(find: string, replace: string): string {
  return this.replace(new RegExp(find, 'gi'), replace);
});

/**
 * Swaps the case of characters in the string (upper to lower and vice versa).
 * @returns The string with the case of characters swapped.
 */
createExtendItString('swapCase', function(): string {
  return this.replace(/([a-z])|([A-Z])/g, (match, lowerCaseLetter, upperCaseLetter) =>
    lowerCaseLetter ? match.toUpperCase() : match.toLowerCase()
  );
});

/**
 * Capitalizes the first letter of the first sentence in the string.
 * @returns The string with the first letter of the first sentence capitalized.
 */
createExtendItString('capitalizeFirstSentence', function(): string {
  return this.replace(/(^\s*|\.\s*)([a-z])/g, (_match, boundary, letter) => boundary + letter.toUpperCase());
});

/**
 * Checks if the entire string is in uppercase.
 * @returns True if the entire string is in uppercase, false otherwise.
 */
createExtendItString('isUpperCase', function(): boolean {
  return this === this.toUpperCase();
});

/**
 * Checks if the entire string is in lowercase.
 * @returns True if the entire string is in lowercase, false otherwise.
 */
createExtendItString('isLowerCase', function(): boolean {
  return this === this.toLowerCase();
});

/**
 * Removes accents and diacritical marks from the string.
 * @returns The string with accents and diacritical marks removed.
 */
createExtendItString('removeAccents', function(): string {
  return this.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
});

/**
 * Reverses the order of words in the string.
 * @returns The string with words reversed.
 */
createExtendItString('reverseWords', function(): string {
  return this.trim().split(/\s+/).reverse().join(' ');
});

/**
 * Removes all non-word characters from the string (letters, numbers, and underscores).
 * @returns The string with non-word characters removed.
 */
createExtendItString('removeNonWordChars', function(): string {
  return this.replace(/\W/g, '');
});

/**
 * Abbreviates the string to a specified length, adding ellipsis if needed.
 * @param maxLength - The maximum length of the abbreviated string.
 * @returns The abbreviated string with an ellipsis if needed.
 */
createExtendItString('abbreviate', function(maxLength: number): string {
  const ellipsis = '...';
  return this.length > maxLength ? this.slice(0, maxLength - ellipsis.length) + ellipsis : this;
});

/**
 * Checks if the string contains only numbers (digits).
 * @returns True if the string contains only numeric characters, false otherwise.
 */
createExtendItString('containsOnlyNumbers', function(): boolean {
  return /^\d+$/.test(this.trim());
});

/**
 * Checks if the string contains only letters (alphabetic characters).
 * @returns True if the string contains only letters, false otherwise.
 */
createExtendItString('containsOnlyLetters', function(): boolean {
  return /^[a-zA-Z]+$/.test(this.trim());
});

/**
 * Reverses the order of lines in the multi-line string.
 * @returns The string with lines reversed.
 */
createExtendItString('reverseLines', function(): string {
  return this.trim().split(/\r?\n/).reverse().join('\n');
});

/**
 * Capitalizes the first letter of each sentence in the string.
 * @returns The string with the first letter of each sentence capitalized.
 */
createExtendItString('capitalizeSentences', function(): string {
  return this.replace(/(^\s*|[.!?]\s+)([a-z])/g, (_match, boundary, letter) => boundary + letter.toUpperCase());
});

/**
 * Checks if the string is a valid URL.
 * @returns True if the string is a valid URL, false otherwise.
 */
createExtendItString('isURL', function(): boolean {
  try {
    new URL(this.trim());
    return true;
  } catch (error) {
    return false;
  }
});

/**
 * Checks if the string is a valid JSON string.
 * @returns True if the string is a valid JSON string, false otherwise.
 */
createExtendItString('isJSON', function(): boolean {
  try {
    JSON.parse(this.trim());
    return true;
  } catch (error) {
    return false;
  }
});

/**
 * Checks if the string is a valid hexadecimal color code (e.g., #RRGGBB).
 * @returns True if the string is a valid hexadecimal color code, false otherwise.
 */
createExtendItString('isHexColorCode', function(): boolean {
  return /^#[0-9A-F]{6}$/i.test(this.trim());
});

/**
 * Converts the string to title case (each word's first letter capitalized).
 * @returns The string in title case format.
 */
createExtendItString('toTitleCase', function(): string {
  return this.replace(/\b\w/g, (match) => match.toUpperCase());
});

/**
 * Splits the string into an array of substrings of specified length.
 * @param chunkLength - The length of each substring chunk.
 * @returns An array of substrings.
 */
createExtendItString('chunkString', function(chunkLength: number): string[] {
  const chunks = [];
  for (let i = 0; i < this.length; i += chunkLength) {
    chunks.push(this.substr(i, chunkLength));
  }
  return chunks;
});

/**
 * Checks if the string contains only whitespace characters.
 * @returns True if the string contains only whitespace characters, false otherwise.
 */
createExtendItString('containsOnlyWhitespace', function(): boolean {
  return /^\s*$/.test(this);
});

/**
 * Converts the string to a URL-friendly filename by removing illegal characters.
 * @returns The string with illegal filename characters removed.
 */
createExtendItString('toSafeFilename', function(): string {
  return this.replace(/[^\w.-]/g, '');
});

/**
 * Checks if the string is a valid IPv4 address.
 * @returns True if the string is a valid IPv4 address, false otherwise.
 */
createExtendItString('isIPv4Address', function(): boolean {
  return /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){2}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(this.trim());
});

/**
 * Removes all leading whitespace from the string.
 * @returns The string with leading whitespace removed.
 */
createExtendItString('trimStart', function(): string {
  return this.replace(/^\s+/, '');
});

/**
 * Removes all trailing whitespace from the string.
 * @returns The string with trailing whitespace removed.
 */
createExtendItString('trimEnd', function(): string {
  return this.replace(/\s+$/, '');
});

/**
 * Reverses the case of characters in the string (lower to upper and vice versa).
 * @returns The string with the case of characters reversed.
 */
createExtendItString('reverseCase', function(): string {
  return this.replace(/./g, (char) => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase());
});

/**
 * Splits the string into an array of characters.
 * @returns An array of individual characters in the string.
 */
createExtendItString('splitIntoChars', function(): string[] {
  return this.split('');
});

/**
 * Pads the string with a specified character to a specified length.
 * @param length - The target length of the padded string.
 * @param padChar - The character to use for padding (default is space ' ').
 * @returns The padded string.
 */
createExtendItString('pad', function(length: number, padChar: string = ' '): string {
  if (this.length >= length) {
    return this;
  }
  const padLength = length - this.length;
  const padString = padChar.repeat(padLength);
  return this + padString;
});

/**
 * Checks if the string contains a specified substring (case-sensitive).
 * @param substring - The substring to search for.
 * @returns True if the substring is found, false otherwise.
 */
createExtendItString('contains', function(substring: string): boolean {
  return this.includes(substring);
});

/**
 * Checks if the string contains a specified substring (case-insensitive).
 * @param substring - The substring to search for.
 * @returns True if the substring is found, false otherwise.
 */
createExtendItString('containsCaseInsensitive', function(substring: string): boolean {
  return this.toLowerCase().includes(substring.toLowerCase());
});

/**
 * Reverses the order of words in the string without reversing characters in each word.
 * @returns The string with words reversed.
 */
createExtendItString('reverseWordsOnly', function(): string {
  return this.trim().split(/\s+/).map((word) => word.split('').reverse().join('')).join(' ');
});

/**
 * Converts the string to PascalCase (camelCase with the first letter capitalized).
 * @returns The string in PascalCase format.
 */
createExtendItString('toPascalCase', function(): string {
  const camelCaseString = this.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase())).replace(/\s+/g, '');
  return camelCaseString.charAt(0).toUpperCase() + camelCaseString.slice(1);
});

/**
 * Trims the string to a specified length and adds ellipsis if needed.
 * Unlike truncate, this function preserves whole words.
 * @param maxLength - The maximum length of the trimmed string.
 * @returns The trimmed string with an ellipsis if needed.
 */
createExtendItString('trimWithEllipsis', function(maxLength: number): string {
  if (this.length <= maxLength) {
    return this;
  }
  const trimmedString = this.substr(0, maxLength).replace(/\s+\S*$/, '');
  return trimmedString + '...';
});

/**
 * Checks if the string is a valid credit card number.
 * @returns True if the string is a valid credit card number, false otherwise.
 */
createExtendItString('isCreditCardNumber', function(): boolean {
  return /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/.test(this.trim().replace(/-/g, ''));
});

/**
 * Escapes special regex characters in the string.
 * @returns The string with regex characters escaped.
 */
createExtendItString('escapeRegexCharacters', function(): string {
  return this.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
});

/**
 * Checks if the string is a palindrome considering alphanumeric characters only.
 * @returns True if the string is a palindrome, false otherwise.
 */
createExtendItString('isAlphaNumericPalindrome', function(): boolean {
  const cleanedString = this.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
});

/**
 * Converts the string to a human-readable file size representation.
 * @returns The human-readable file size representation of the string.
 */
createExtendItString('toHumanReadableSize', function(): string {
  const sizeInBytes = parseInt(this.trim(), 10);
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = sizeInBytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(2)} ${units[unitIndex]}`;
});
