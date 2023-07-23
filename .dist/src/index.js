"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
module.exports = __toCommonJS(src_exports);

// src/extends/String.ts
function createExtendItString(name, func) {
  return String.prototype[name] = func;
}
createExtendItString("noSpace", function() {
  return this.replace(/ +/g, "");
});
createExtendItString("removeVowels", function() {
  return this.replace(/[aeiouAEIOU]/g, "");
});
createExtendItString("reverseString", function() {
  return this.split("").reverse().join("");
});
createExtendItString("toSlug", function() {
  return this.toLowerCase().replace(/\s+/g, "-");
});
createExtendItString("countSubstring", function(substring) {
  const regex = new RegExp(substring, "g");
  const matches = this.match(regex);
  return matches ? matches.length : 0;
});
createExtendItString("truncate", function(maxLength) {
  const ellipsis = "...";
  return this.length > maxLength ? this.slice(0, maxLength - ellipsis.length) + ellipsis : this;
});
createExtendItString("isPalindrome", function() {
  const cleanedString = this.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
});
createExtendItString("isEmpty", function() {
  return this.trim().length === 0;
});
createExtendItString("countWords", function() {
  return this.trim().split(/\s+/).length;
});
createExtendItString("startsWithVowel", function() {
  return /^[aeiou]/i.test(this.trim());
});
createExtendItString("endsWithVowel", function() {
  return /[aeiou]$/i.test(this.trim());
});
createExtendItString("replaceMultipleSpaces", function() {
  return this.replace(/\s{2,}/g, " ");
});
createExtendItString("shuffle", function() {
  const arr = this.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
});
createExtendItString("repeat", function(times) {
  return this.repeat(times);
});
createExtendItString("isNumeric", function() {
  return /^-?\d+(\.\d+)?$/.test(this.trim());
});
createExtendItString("isEmail", function() {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.trim());
});
createExtendItString("capitalizeWords", function() {
  return this.replace(/\b\w/g, (match) => match.toUpperCase());
});
createExtendItString("removeNonAlphaNumeric", function() {
  return this.replace(/[^a-zA-Z0-9]/g, "");
});
createExtendItString("countOccurrences", function(substring) {
  const regex = new RegExp(substring, "g");
  const matches = this.match(regex);
  return matches ? matches.length : 0;
});
createExtendItString("truncateWords", function(maxWords) {
  const words = this.trim().split(/\s+/);
  return words.length > maxWords ? words.slice(0, maxWords).join(" ") + "..." : this;
});
createExtendItString("stripTags", function() {
  return this.replace(/<[^>]*>?/gm, "");
});
createExtendItString("camelCase", function() {
  return this.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => index === 0 ? letter.toLowerCase() : letter.toUpperCase()).replace(/\s+/g, "");
});
createExtendItString("kebabCase", function() {
  return this.replace(/\s+/g, "-").toLowerCase();
});
createExtendItString("snakeCase", function() {
  return this.replace(/\s+/g, "_").toLowerCase();
});
createExtendItString("replaceAllCaseInsensitive", function(find, replace) {
  return this.replace(new RegExp(find, "gi"), replace);
});
createExtendItString("swapCase", function() {
  return this.replace(
    /([a-z])|([A-Z])/g,
    (match, lowerCaseLetter, upperCaseLetter) => lowerCaseLetter ? match.toUpperCase() : match.toLowerCase()
  );
});
createExtendItString("capitalizeFirstSentence", function() {
  return this.replace(/(^\s*|\.\s*)([a-z])/g, (_match, boundary, letter) => boundary + letter.toUpperCase());
});
createExtendItString("isUpperCase", function() {
  return this === this.toUpperCase();
});
createExtendItString("isLowerCase", function() {
  return this === this.toLowerCase();
});
createExtendItString("removeAccents", function() {
  return this.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
});
createExtendItString("reverseWords", function() {
  return this.trim().split(/\s+/).reverse().join(" ");
});
createExtendItString("removeNonWordChars", function() {
  return this.replace(/\W/g, "");
});
createExtendItString("abbreviate", function(maxLength) {
  const ellipsis = "...";
  return this.length > maxLength ? this.slice(0, maxLength - ellipsis.length) + ellipsis : this;
});
createExtendItString("containsOnlyNumbers", function() {
  return /^\d+$/.test(this.trim());
});
createExtendItString("containsOnlyLetters", function() {
  return /^[a-zA-Z]+$/.test(this.trim());
});
createExtendItString("reverseLines", function() {
  return this.trim().split(/\r?\n/).reverse().join("\n");
});
createExtendItString("capitalizeSentences", function() {
  return this.replace(/(^\s*|[.!?]\s+)([a-z])/g, (_match, boundary, letter) => boundary + letter.toUpperCase());
});
createExtendItString("isURL", function() {
  try {
    new URL(this.trim());
    return true;
  } catch (error) {
    return false;
  }
});
createExtendItString("isJSON", function() {
  try {
    JSON.parse(this.trim());
    return true;
  } catch (error) {
    return false;
  }
});
createExtendItString("isHexColorCode", function() {
  return /^#[0-9A-F]{6}$/i.test(this.trim());
});
createExtendItString("toTitleCase", function() {
  return this.replace(/\b\w/g, (match) => match.toUpperCase());
});
createExtendItString("chunkString", function(chunkLength) {
  const chunks = [];
  for (let i = 0; i < this.length; i += chunkLength) {
    chunks.push(this.substr(i, chunkLength));
  }
  return chunks;
});
createExtendItString("containsOnlyWhitespace", function() {
  return /^\s*$/.test(this);
});
createExtendItString("toSafeFilename", function() {
  return this.replace(/[^\w.-]/g, "");
});
createExtendItString("isIPv4Address", function() {
  return /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){2}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(this.trim());
});
createExtendItString("trimStart", function() {
  return this.replace(/^\s+/, "");
});
createExtendItString("trimEnd", function() {
  return this.replace(/\s+$/, "");
});
createExtendItString("reverseCase", function() {
  return this.replace(/./g, (char) => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase());
});
createExtendItString("splitIntoChars", function() {
  return this.split("");
});
createExtendItString("pad", function(length, padChar = " ") {
  if (this.length >= length) {
    return this;
  }
  const padLength = length - this.length;
  const padString = padChar.repeat(padLength);
  return this + padString;
});
createExtendItString("contains", function(substring) {
  return this.includes(substring);
});
createExtendItString("containsCaseInsensitive", function(substring) {
  return this.toLowerCase().includes(substring.toLowerCase());
});
createExtendItString("reverseWordsOnly", function() {
  return this.trim().split(/\s+/).map((word) => word.split("").reverse().join("")).join(" ");
});
createExtendItString("toPascalCase", function() {
  const camelCaseString = this.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => index === 0 ? letter.toLowerCase() : letter.toUpperCase()).replace(/\s+/g, "");
  return camelCaseString.charAt(0).toUpperCase() + camelCaseString.slice(1);
});
createExtendItString("trimWithEllipsis", function(maxLength) {
  if (this.length <= maxLength) {
    return this;
  }
  const trimmedString = this.substr(0, maxLength).replace(/\s+\S*$/, "");
  return trimmedString + "...";
});
createExtendItString("isCreditCardNumber", function() {
  return /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/.test(this.trim().replace(/-/g, ""));
});
createExtendItString("escapeRegexCharacters", function() {
  return this.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
});
createExtendItString("isAlphaNumericPalindrome", function() {
  const cleanedString = this.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
});
createExtendItString("toHumanReadableSize", function() {
  const sizeInBytes = parseInt(this.trim(), 10);
  const units = ["B", "KB", "MB", "GB", "TB"];
  let size = sizeInBytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(2)} ${units[unitIndex]}`;
});

// src/extends/Number.ts
function createExtendItNumber(name, func) {
  return Number.prototype[name] = func;
}
createExtendItNumber("isEven", function() {
  return this % 2 === 0;
});
createExtendItNumber("isOdd", function() {
  return this % 2 !== 0;
});
createExtendItNumber("isPrime", function() {
  if (this <= 1)
    return false;
  if (this <= 3)
    return true;
  if (this % 2 === 0 || this % 3 === 0)
    return false;
  let i = 5;
  while (i * i <= this) {
    if (this % i === 0 || this % (i + 2) === 0)
      return false;
    i += 6;
  }
  return true;
});
createExtendItNumber("factorial", function() {
  if (this < 0)
    throw new Error("Factorial is not defined for negative numbers.");
  if (this === 0)
    return 1;
  let result2 = 1;
  for (let i = 1; i <= this; i++) {
    result2 *= i;
  }
  return result2;
});
createExtendItNumber("sumOfNaturalNumbers", function() {
  if (this < 0)
    throw new Error("Number must be non-negative.");
  return this * (this + 1) / 2;
});
createExtendItNumber("sumOfEvenNumbers", function() {
  if (this < 0)
    throw new Error("Number must be non-negative.");
  let num = this;
  if (num % 2 === 1)
    num--;
  return num / 2 * (num / 2 + 1);
});
createExtendItNumber("sumOfOddNumbers", function() {
  if (this < 0)
    throw new Error("Number must be non-negative.");
  let numm = this;
  if (numm % 2 === 0)
    numm--;
  return (numm + 1) / 2 * ((numm + 1) / 2);
});
createExtendItNumber("isPerfectSquare", function() {
  if (this < 0)
    return false;
  const sqrt = Math.floor(Math.sqrt(this));
  return sqrt * sqrt === this;
});
createExtendItNumber("squareRoot", function() {
  if (this < 0)
    throw new Error("Square root is not defined for negative numbers.");
  return Math.sqrt(this);
});
createExtendItNumber("cubeRoot", function() {
  return Math.cbrt(this);
});
createExtendItNumber("isInteger", function() {
  return Number.isInteger(this);
});
createExtendItNumber("isDecimal", function() {
  return !Number.isInteger(this);
});
createExtendItNumber("roundToDecimalPlaces", function(decimalPlaces) {
  const factor = 10 ** decimalPlaces;
  return Math.round(this * factor) / factor;
});
createExtendItNumber("floorToDecimalPlaces", function(decimalPlaces) {
  const factor = 10 ** decimalPlaces;
  return Math.floor(this * factor) / factor;
});
createExtendItNumber("ceilToDecimalPlaces", function(decimalPlaces) {
  const factor = 10 ** decimalPlaces;
  return Math.ceil(this * factor) / factor;
});
createExtendItNumber("absoluteValue", function() {
  return Math.abs(this);
});
createExtendItNumber("sign", function() {
  return Math.sign(this);
});
createExtendItNumber("clamp", function(min, max) {
  return Math.max(min, Math.min(this, max));
});
createExtendItNumber("isInRange", function(min, max) {
  return this >= min && this <= max;
});
createExtendItNumber("isPositive", function() {
  return this > 0;
});
createExtendItNumber("isNegative", function() {
  return this < 0;
});
createExtendItNumber("toBinaryString", function() {
  return this.toString(2);
});
createExtendItNumber("toOctalString", function() {
  return this.toString(8);
});
createExtendItNumber("toHexString", function(includePrefix = true) {
  const prefix = includePrefix ? "0x" : "";
  return prefix + this.toString(16);
});
createExtendItNumber("toStringWithRadix", function(radix) {
  if (radix < 2 || radix > 36)
    throw new Error("Radix must be between 2 and 36.");
  return this.toString(radix);
});
createExtendItNumber("floor", function() {
  return Math.floor(this);
});
createExtendItNumber("ceil", function() {
  return Math.ceil(this);
});
createExtendItNumber("trunc", function() {
  return Math.trunc(this);
});
createExtendItNumber("round", function() {
  return Math.round(this);
});
createExtendItNumber("toDegrees", function() {
  return 180 * this / Math.PI;
});
createExtendItNumber("toRadians", function() {
  return Math.PI * this / 180;
});
createExtendItNumber("average", function(value) {
  return (this + value) / 2;
});
createExtendItNumber("percentageOf", function(value) {
  return value / this * 100;
});
createExtendItNumber("isApproximatelyEqualTo", function(value, tolerance = Number.EPSILON) {
  return Math.abs(this - value) < tolerance;
});
createExtendItNumber("isMultipleOf", function(factor) {
  return Number.isInteger(this) && this % factor === 0;
});
createExtendItNumber("isPowerOf2", function() {
  if (this < 1)
    return false;
  return (this & this - 1) === 0;
});
createExtendItNumber("nextPowerOf2", function() {
  if (this < 0)
    throw new Error("Next power of 2 is not defined for negative numbers.");
  let value = this - 1;
  value |= value >> 1;
  value |= value >> 2;
  value |= value >> 4;
  value |= value >> 8;
  value |= value >> 16;
  return value + 1;
});
createExtendItNumber("toRomanNumerals", function() {
  if (this <= 0 || this >= 4e3)
    throw new Error("Roman numerals are only defined for positive integers less than 4000.");
  const romanNumerals = {
    1e3: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  };
  let num = this;
  let result2 = "";
  for (const value in romanNumerals) {
    const intValue = parseInt(value);
    while (num >= intValue) {
      result2 += romanNumerals[value];
      num -= intValue;
    }
  }
  return result2;
});
createExtendItNumber("bitwiseNot", function() {
  return ~this;
});
createExtendItNumber("bitwiseAnd", function(value) {
  return this & value;
});
createExtendItNumber("bitwiseOr", function(value) {
  return this | value;
});
createExtendItNumber("bitwiseXor", function(value) {
  return this ^ value;
});
createExtendItNumber("leftShift", function(bits) {
  return this << bits;
});
createExtendItNumber("rightShift", function(bits) {
  return this >> bits;
});
createExtendItNumber("zeroFillRightShift", function(bits) {
  return this >>> bits;
});
createExtendItNumber("isSafeInteger", function() {
  return Number.isSafeInteger(this);
});
createExtendItNumber("isInRangeOfSafeInteger", function() {
  return this >= Number.MIN_SAFE_INTEGER && this <= Number.MAX_SAFE_INTEGER;
});
createExtendItNumber("toBinaryWithBitCount", function(bitCount) {
  if (bitCount < 1 || bitCount > 53)
    throw new Error("Bit count must be between 1 and 53.");
  const binaryString = this.toString(2);
  return binaryString.padStart(bitCount, "0");
});
createExtendItNumber("formatWithCommas", function() {
  return this.toLocaleString();
});
createExtendItNumber("sum", function(...numbers) {
  return [this, ...numbers].reduce((acc, val) => acc + val, 0);
});
createExtendItNumber("sub", function(...numbers) {
  return [this, ...numbers].reduce((acc, val) => acc - val, 0);
});
createExtendItNumber("product", function(...numbers) {
  return [this, ...numbers].reduce((acc, val) => acc * val, 1);
});
createExtendItNumber("min", function(value) {
  return Math.min(this, value);
});
createExtendItNumber("max", function(value) {
  return Math.max(this, value);
});
createExtendItNumber("isNaN", function() {
  return isNaN(this);
});
createExtendItNumber("isFinite", function() {
  return isFinite(this);
});
createExtendItNumber("randomInt", function(value) {
  const min = Math.min(this, value);
  const max = Math.max(this, value);
  return Math.floor(Math.random() * (max - min + 1)) + min;
});
createExtendItNumber("random", function(value) {
  const min = Math.min(this, value);
  const max = Math.max(this, value);
  return Math.random() * (max - min) + min;
});

// src/extends/Array.ts
function createExtendItArray(name, func) {
  return Array.prototype[name] = func;
}
createExtendItArray("first", function() {
  return this[0];
});
createExtendItArray("last", function() {
  return this[this.length - 1];
});
createExtendItArray("reverse", function() {
  return this.slice().reverse();
});
createExtendItArray("unique", function() {
  return [...new Set(this)];
});
createExtendItArray("sortAsc", function(compareFn) {
  return this.slice().sort(compareFn);
});
createExtendItArray("sortDesc", function(compareFn) {
  return this.slice().sort((a, b) => compareFn ? -compareFn(a, b) : b - a);
});
createExtendItArray("sortByPropAsc", function(prop) {
  return this.slice().sort((a, b) => a[prop] - b[prop]);
});
createExtendItArray("sortByPropDesc", function(prop) {
  return this.slice().sort((a, b) => b[prop] - a[prop]);
});
createExtendItArray("filter", function(callback) {
  return this.slice().filter(callback);
});
createExtendItArray("forEach", function(callback) {
  this.slice().forEach(callback);
});
createExtendItArray("every", function(callback) {
  return this.slice().every(callback);
});
createExtendItArray("some", function(callback) {
  return this.slice().some(callback);
});
createExtendItArray("findIndex", function(callback) {
  return this.findIndex(callback);
});
createExtendItArray("findLastIndex", function(callback) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
});
createExtendItArray("flat", function() {
  return this.flat();
});
createExtendItArray("flatDepth", function(depth) {
  return this.flat(depth);
});
createExtendItArray("take", function(count) {
  return this.slice(0, count);
});
createExtendItArray("drop", function(count) {
  return this.slice(count);
});
createExtendItArray("dropRight", function(count) {
  return this.slice(0, -count);
});
createExtendItArray("randomOrder", function() {
  const array = this.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
});
createExtendItArray("lastIndexOf", function(element) {
  return this.lastIndexOf(element);
});
createExtendItArray("find", function(callback) {
  return this.find(callback);
});
createExtendItArray("compact", function() {
  return this.filter((value) => value !== null && value !== void 0);
});
createExtendItArray("sliceRange", function(start, end) {
  const length = this.length;
  const realStart = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  const realEnd = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);
  return this.slice(realStart, realEnd);
});
createExtendItArray("sliceRangeInclusive", function(start, end) {
  const length = this.length;
  const realStart = start < 0 ? Math.max(length + start, 0) : Math.min(start, length - 1);
  const realEnd = end < 0 ? Math.max(length + end, 0) : Math.min(end, length - 1);
  return this.slice(realStart, realEnd + 1);
});
createExtendItArray("reverse", function() {
  return this.slice().reverse();
});
createExtendItArray("reverseFromEnd", function() {
  return this.slice().reverse().map((_, index) => this[this.length - 1 - index]);
});
createExtendItArray("repeat", function(count) {
  if (count <= 0)
    return [];
  return Array.from({ length: count }, () => this).flat();
});
createExtendItArray("sortByProperty", function(prop) {
  return this.slice().sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0);
});
createExtendItArray("sortByPropertyDescending", function(prop) {
  return this.slice().sort((a, b) => a[prop] < b[prop] ? 1 : a[prop] > b[prop] ? -1 : 0);
});
createExtendItArray("mapWith", function(mapper) {
  return this.map(mapper);
});
createExtendItArray("intersect", function(otherArray) {
  return this.filter((value) => otherArray.includes(value));
});
createExtendItArray("difference", function(otherArray) {
  return this.filter((value) => !otherArray.includes(value));
});
createExtendItArray("union", function(otherArray) {
  const combined = this.concat(otherArray);
  return Array.from(new Set(combined));
});
createExtendItArray("isSubsetOf", function(otherArray) {
  return this.every((value) => otherArray.includes(value));
});
createExtendItArray("isUnique", function() {
  return this.length === new Set(this).size;
});
createExtendItArray("takeLast", function(count) {
  return this.slice(-count);
});
createExtendItArray("filterBy", function(predicate) {
  return this.filter(predicate);
});
createExtendItArray("everyBy", function(predicate) {
  return this.every(predicate);
});
createExtendItArray("someBy", function(predicate) {
  return this.some(predicate);
});
createExtendItArray("flatten", function(depth = 1) {
  function flattenHelper(arr, currentDepth) {
    return arr.reduce((acc, item) => {
      if (Array.isArray(item) && currentDepth > 0) {
        return acc.concat(flattenHelper(item, currentDepth - 1));
      } else {
        return acc.concat(item);
      }
    }, []);
  }
  return flattenHelper(this, depth);
});
createExtendItArray("sum", function() {
  return this.reduce((acc, value) => acc + value, 0);
});
createExtendItArray("average", function() {
  if (this.length === 0)
    return 0;
  return this.reduce((acc, value) => acc + value, 0) / this.length;
});
createExtendItArray("isEmpty", function() {
  return this.length === 0;
});
createExtendItArray("unique", function() {
  return Array.from(new Set(this));
});
createExtendItArray("map", function(callback) {
  return this.map(callback);
});
createExtendItArray("max", function() {
  return this.reduce((max, current) => max === void 0 || current > max ? current : max, void 0);
});
createExtendItArray("min", function() {
  return this.reduce((min, current) => min === void 0 || current < min ? current : min, void 0);
});
createExtendItArray("indexOf", function(value) {
  return this.indexOf(value);
});
createExtendItArray("lastIndexOf", function(value) {
  return this.lastIndexOf(value);
});
createExtendItArray("sortByAscending", function() {
  return [...this].sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
});
createExtendItArray("sortByDescending", function() {
  return [...this].sort((a, b) => a > b ? -1 : a < b ? 1 : 0);
});
createExtendItArray("getElementAt", function(index) {
  return this[index];
});
createExtendItArray("slice", function(start, end) {
  return this.slice(start, end);
});
createExtendItArray("countOccurrences", function(value) {
  return this.filter((item) => item === value).length;
});
createExtendItArray("equals", function(otherArray) {
  if (this.length !== otherArray.length)
    return false;
  return this.every((value, index) => value === otherArray[index]);
});
createExtendItArray("sortByPropertyAscending", function(property) {
  return this.slice().sort((a, b) => a[property] - b[property]);
});
createExtendItArray("sortByPropertyDescending", function(property) {
  return this.slice().sort((a, b) => b[property] - a[property]);
});
createExtendItArray("chunk", function(chunkSize) {
  const chunks = [];
  for (let i = 0; i < this.length; i += chunkSize) {
    chunks.push(this.slice(i, i + chunkSize));
  }
  return chunks;
});

// src/extends/Object.ts
function createExtendItObject(name, func) {
  return Object.prototype[name] = func;
}
createExtendItObject("withPrefixToValues", function(prefix) {
  const result2 = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      result2[key] = prefix + " " + this[key].toString();
    }
  }
  return result2;
});
createExtendItObject("countProperties", function() {
  let count = 0;
  for (const prop in this) {
    if (this.hasOwnProperty(prop)) {
      count++;
    }
  }
  return count;
});
createExtendItObject("reversedKeys", function() {
  const reversedObject = {};
  const keys = Object.keys(this);
  for (let i = keys.length - 1; i >= 0; i--) {
    reversedObject[keys[i]] = this[keys[i]];
  }
  return reversedObject;
});
createExtendItObject("isEmpty", function() {
  for (const prop in this) {
    if (this.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
});
createExtendItObject("keysByValueType", function(value) {
  const keys = [];
  for (const prop in this) {
    if (this.hasOwnProperty(prop) && this[prop] === value) {
      keys.push(prop);
    }
  }
  return keys;
});
createExtendItObject("mergeWith", function(otherObject) {
  return { ...this, ...otherObject };
});
createExtendItObject("filterByKeys", function(keys) {
  const filteredObject = {};
  for (const key of keys) {
    if (this.hasOwnProperty(key)) {
      filteredObject[key] = this[key];
    }
  }
  return filteredObject;
});
createExtendItObject("renameProperty", function(oldName, newName) {
  if (this.hasOwnProperty(oldName)) {
    this[newName] = this[oldName];
    delete this[oldName];
  }
  return this;
});
createExtendItObject("uppercaseKeys", function() {
  const result2 = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      result2[key.toUpperCase()] = this[key];
    }
  }
  return result2;
});
createExtendItObject("convertToArray", function() {
  return Object.entries(this);
});
createExtendItObject("filterByValues", function(value) {
  const filteredObject = {};
  for (const key in this) {
    if (this.hasOwnProperty(key) && this[key] === value) {
      filteredObject[key] = this[key];
    }
  }
  return filteredObject;
});
createExtendItObject("sortByKey", function() {
  const sortedObject = {};
  const keys = Object.keys(this).sort();
  for (const key of keys) {
    sortedObject[key] = this[key];
  }
  return sortedObject;
});
createExtendItObject("updateValue", function(key, value) {
  if (this.hasOwnProperty(key)) {
    this[key] = value;
  }
  return this;
});
createExtendItObject("deleteByKey", function(key) {
  if (this.hasOwnProperty(key)) {
    delete this[key];
  }
  return this;
});
createExtendItObject("hasSameKeys", function(otherObject) {
  const keys1 = Object.keys(this).sort().toString();
  const keys2 = Object.keys(otherObject).sort().toString();
  return keys1 === keys2;
});
createExtendItObject("isEqual", function(otherObject) {
  const keys1 = Object.keys(this).sort().toString();
  const keys2 = Object.keys(otherObject).sort().toString();
  if (keys1 !== keys2)
    return false;
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      if (this[key] !== otherObject[key])
        return false;
    }
  }
  return true;
});
createExtendItObject("randomKey", function() {
  const keys = Object.keys(this);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
});
createExtendItObject("findKeyByValue", function(value) {
  for (const key in this) {
    if (this.hasOwnProperty(key) && this[key] === value) {
      return key;
    }
  }
  return null;
});
createExtendItObject("hasAllKeys", function(keys) {
  for (const key of keys) {
    if (!this.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
});
createExtendItObject("distinctValuesCount", function() {
  const values = new Set(Object.values(this));
  return values.size;
});
createExtendItObject("getPropertyTypes", function() {
  const types = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      types[key] = typeof this[key];
    }
  }
  return types;
});
createExtendItObject("firstKey", function() {
  const keys = Object.keys(this);
  return keys.length > 0 ? keys[0] : void 0;
});
createExtendItObject("lastKey", function() {
  const keys = Object.keys(this);
  return keys.length > 0 ? keys[keys.length - 1] : void 0;
});
createExtendItObject("swapKeyValue", function() {
  const swappedObject = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      swappedObject[this[key]] = key;
    }
  }
  return swappedObject;
});
createExtendItObject("omitKeys", function(keys) {
  const result2 = { ...this };
  for (const key of keys) {
    if (result2.hasOwnProperty(key)) {
      delete result2[key];
    }
  }
  return result2;
});
createExtendItObject("mergeDuplicates", function() {
  const mergedObject = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      const value = this[key];
      const duplicateKey = Object.keys(mergedObject).find((k) => mergedObject[k] === value);
      if (duplicateKey) {
        mergedObject[duplicateKey + "_" + key] = value;
      } else {
        mergedObject[key] = value;
      }
    }
  }
  return mergedObject;
});
createExtendItObject("getValuesByKeys", function(keys) {
  const values = [];
  for (const key of keys) {
    if (this.hasOwnProperty(key)) {
      values.push(this[key]);
    }
  }
  return values;
});
createExtendItObject("reverseKeyValue", function() {
  const reversedObject = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      reversedObject[this[key]] = key;
    }
  }
  return reversedObject;
});
createExtendItObject("groupByProperty", function() {
  const groupedObject = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      const value = this[key];
      if (!groupedObject[value]) {
        groupedObject[value] = [];
      }
      groupedObject[value].push(key);
    }
  }
  return groupedObject;
});
createExtendItObject("computeAverage", function() {
  let sum = 0;
  let count = 0;
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      sum += this[key];
      count++;
    }
  }
  return count > 0 ? sum / count : void 0;
});
createExtendItObject("shuffleKeys", function() {
  const shuffledObject = {};
  const keys = Object.keys(this);
  const shuffledKeys = keys.sort(() => Math.random() - 0.5);
  for (let i = 0; i < keys.length; i++) {
    shuffledObject[shuffledKeys[i]] = this[shuffledKeys[i]];
  }
  return shuffledObject;
});
createExtendItObject("reverseValues", function() {
  const reversedObject = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      reversedObject[key] = this[key].toString().split("").reverse().join("");
    }
  }
  return reversedObject;
});
createExtendItObject("getKeysStartingWith", function(prefix) {
  const keys = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && key.startsWith(prefix)) {
      keys.push(key);
    }
  }
  return keys;
});
createExtendItObject("removeFalsyValues", function() {
  const result2 = {};
  for (const key in this) {
    if (this.hasOwnProperty(key) && this[key]) {
      result2[key] = this[key];
    }
  }
  return result2;
});
createExtendItObject("truncateKeys", function(length) {
  const result2 = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      result2[key.substring(0, length)] = this[key];
    }
  }
  return result2;
});
createExtendItObject("findLongestKey", function() {
  let longestKey = "";
  for (const key in this) {
    if (this.hasOwnProperty(key) && key.length > longestKey.length) {
      longestKey = key;
    }
  }
  return longestKey;
});
createExtendItObject("getKeysEndingWith", function(suffix) {
  const keys = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && key.endsWith(suffix)) {
      keys.push(key);
    }
  }
  return keys;
});
createExtendItObject("calculateSum", function() {
  let sum = 0;
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      sum += this[key];
    }
  }
  return sum;
});
createExtendItObject("extractKeysByPattern", function(pattern) {
  const keys = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && pattern.test(key)) {
      keys.push(key);
    }
  }
  return keys;
});
createExtendItObject("incrementValues", function(increment) {
  const result2 = {};
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      result2[key] = this[key] + increment;
    }
  }
  return result2;
});
createExtendItObject("decrementValues", function(decrement) {
  const result2 = {};
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      result2[key] = this[key] - decrement;
    }
  }
  return result2;
});
createExtendItObject("getCommonKeys", function(otherObject) {
  const keys1 = Object.keys(this);
  const keys2 = Object.keys(otherObject);
  return keys1.filter((key) => keys2.includes(key));
});
createExtendItObject("calculateProduct", function() {
  let product = 1;
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      product *= this[key];
    }
  }
  return product;
});
createExtendItObject("swapPropertyCase", function() {
  const swappedObject = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      const newKey = key.replace(/([a-z]+)|([A-Z]+)/g, (match, lower, upper) => lower ? match.toUpperCase() : match.toLowerCase());
      swappedObject[newKey] = this[key];
    }
  }
  return swappedObject;
});
createExtendItObject("getKeysGreaterThan", function(value) {
  const keys = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number" && this[key] > value) {
      keys.push(key);
    }
  }
  return keys;
});
createExtendItObject("getKeysSmallerThan", function(value) {
  const keys = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number" && this[key] < value) {
      keys.push(key);
    }
  }
  return keys;
});
createExtendItObject("calculateMedian", function() {
  const values = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      values.push(this[key]);
    }
  }
  values.sort((a, b) => a - b);
  const middle = Math.floor(values.length / 2);
  return values.length % 2 === 0 ? (values[middle - 1] + values[middle]) / 2 : values[middle];
});
createExtendItObject("getKeysInAlphabeticalOrder", function() {
  const keys = Object.keys(this);
  return keys.sort();
});
createExtendItObject("removeEmptyItems", function() {
  const result2 = {};
  for (const key in this) {
    if (this.hasOwnProperty(key) && this[key] !== null && this[key] !== void 0) {
      result2[key] = this[key];
    }
  }
  return result2;
});
createExtendItObject("extractUniqueValues", function() {
  const values = new Set(Object.values(this));
  return Array.from(values);
});
createExtendItObject("reversePropertyOrder", function() {
  const reversedObject = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      const value = this[key];
      if (Array.isArray(value)) {
        reversedObject[key] = value.reverse();
      } else if (typeof value === "string") {
        reversedObject[key] = value.split("").reverse().join("");
      } else {
        reversedObject[key] = value;
      }
    }
  }
  return reversedObject;
});
createExtendItObject("sumNumericValues", function() {
  let sum = 0;
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      sum += this[key];
    }
  }
  return sum;
});
createExtendItObject("replaceValueByKey", function(key, newValue) {
  if (this.hasOwnProperty(key)) {
    this[key] = newValue;
  }
  return this;
});
createExtendItObject("getItemsStartingWith", function(prefix) {
  const items = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && key.startsWith(prefix)) {
      items.push({ key, value: this[key] });
    }
  }
  return items;
});
createExtendItObject("getValuesGreaterThan", function(value) {
  const values = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number" && this[key] > value) {
      values.push(this[key]);
    }
  }
  return values;
});
createExtendItObject("getValuesSmallerThan", function(value) {
  const values = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number" && this[key] < value) {
      values.push(this[key]);
    }
  }
  return values;
});
createExtendItObject("filterByValueType", function(type) {
  const result2 = {};
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === type) {
      result2[key] = this[key];
    }
  }
  return result2;
});
createExtendItObject("findKeysByPattern", function(pattern) {
  const keys = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && pattern.test(key)) {
      keys.push(key);
    }
  }
  return keys;
});
createExtendItObject("partitionByKey", function(callback) {
  const partitionedObjects = [{}, {}];
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      const partitionIndex = callback(key) ? 0 : 1;
      partitionedObjects[partitionIndex][key] = this[key];
    }
  }
  return partitionedObjects;
});

// src/index.ts
var result = "Hello World";
console.log(result.noSpace());
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2luZGV4LnRzIiwgIi4uLy4uL3NyYy9leHRlbmRzL1N0cmluZy50cyIsICIuLi8uLi9zcmMvZXh0ZW5kcy9OdW1iZXIudHMiLCAiLi4vLi4vc3JjL2V4dGVuZHMvQXJyYXkudHMiLCAiLi4vLi4vc3JjL2V4dGVuZHMvT2JqZWN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiogXG4gKiBFeHBvcnQgQWxsIEV4dGVuZHNcbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbmRzL1N0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuZHMvTnVtYmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5kcy9BcnJheSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuZHMvT2JqZWN0JztcblxubGV0IHJlc3VsdCA9ICdIZWxsbyBXb3JsZCc7XG5jb25zb2xlLmxvZyhyZXN1bHQubm9TcGFjZSgpKSIsICIvKiogXG4gKiBUaGUgTWFpbiBGdW5jdGlvbiBUbyBDcmVhdGUgVGhlIEV4dGVuZHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRXh0ZW5kSXRTdHJpbmcobmFtZTogc3RyaW5nLCBmdW5jOiBGdW5jdGlvbik6IHZvaWQge1xuICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmM7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIHNwYWNlcyBmcm9tIHRoZSBzdHJpbmcuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCdub1NwYWNlJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSgvICsvZywgJycpO1xufSk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgdm93ZWxzIGZyb20gdGhlIHN0cmluZy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ3JlbW92ZVZvd2VscycsIGZ1bmN0aW9uKCk6IHN0cmluZyB7XG4gIHJldHVybiB0aGlzLnJlcGxhY2UoL1thZWlvdUFFSU9VXS9nLCAnJyk7XG59KTtcblxuLyoqXG4gKiBSZXZlcnNlcyB0aGUgY2hhcmFjdGVycyBpbiB0aGUgc3RyaW5nLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygncmV2ZXJzZVN0cmluZycsIGZ1bmN0aW9uKCk6IHN0cmluZyB7XG4gIHJldHVybiB0aGlzLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgc3RyaW5nIHRvIGEgVVJMLWZyaWVuZGx5IHNsdWcgKGxvd2VyY2FzZSB3aXRoIGh5cGhlbnMgaW5zdGVhZCBvZiBzcGFjZXMpLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygndG9TbHVnJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICctJyk7XG59KTtcblxuLyoqXG4gKiBDb3VudHMgdGhlIG9jY3VycmVuY2VzIG9mIGEgc3BlY2lmaWVkIHN1YnN0cmluZyBpbiB0aGUgc3RyaW5nLlxuICogQHBhcmFtIHN1YnN0cmluZyAtIFRoZSBzdWJzdHJpbmcgdG8gY291bnQgb2NjdXJyZW5jZXMgb2YuXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIG9jY3VycmVuY2VzIG9mIHRoZSBzdWJzdHJpbmcgaW4gdGhlIHN0cmluZy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ2NvdW50U3Vic3RyaW5nJywgZnVuY3Rpb24oc3Vic3RyaW5nOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3Vic3RyaW5nLCAnZycpO1xuICBjb25zdCBtYXRjaGVzID0gdGhpcy5tYXRjaChyZWdleCk7XG4gIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlcy5sZW5ndGggOiAwO1xufSk7XG5cbi8qKlxuICogVHJ1bmNhdGVzIHRoZSBzdHJpbmcgdG8gYSBzcGVjaWZpZWQgbGVuZ3RoIGFuZCBhZGRzIGVsbGlwc2lzIGlmIG5lZWRlZC5cbiAqIEBwYXJhbSBtYXhMZW5ndGggLSBUaGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIHRydW5jYXRlZCBzdHJpbmcuXG4gKiBAcmV0dXJucyBUaGUgdHJ1bmNhdGVkIHN0cmluZyB3aXRoIGFuIGVsbGlwc2lzIGlmIG5lZWRlZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ3RydW5jYXRlJywgZnVuY3Rpb24obWF4TGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBlbGxpcHNpcyA9ICcuLi4nO1xuICByZXR1cm4gdGhpcy5sZW5ndGggPiBtYXhMZW5ndGggPyB0aGlzLnNsaWNlKDAsIG1heExlbmd0aCAtIGVsbGlwc2lzLmxlbmd0aCkgKyBlbGxpcHNpcyA6IHRoaXM7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHN0cmluZyBpcyBhIHBhbGluZHJvbWUgKHJlYWRzIHRoZSBzYW1lIGJhY2t3YXJkIGFzIGZvcndhcmQpLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RyaW5nIGlzIGEgcGFsaW5kcm9tZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnaXNQYWxpbmRyb21lJywgZnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gIGNvbnN0IGNsZWFuZWRTdHJpbmcgPSB0aGlzLnJlcGxhY2UoL1teYS16QS1aXS9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgcmV2ZXJzZWRTdHJpbmcgPSBjbGVhbmVkU3RyaW5nLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG4gIHJldHVybiBjbGVhbmVkU3RyaW5nID09PSByZXZlcnNlZFN0cmluZztcbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgc3RyaW5nIGlzIGVtcHR5IChjb250YWlucyBubyBjaGFyYWN0ZXJzKS5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0cmluZyBpcyBlbXB0eSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnaXNFbXB0eScsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdGhpcy50cmltKCkubGVuZ3RoID09PSAwO1xufSk7XG5cbi8qKlxuICogQ291bnRzIHRoZSBudW1iZXIgb2Ygd29yZHMgaW4gdGhlIHN0cmluZy5cbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2Ygd29yZHMgaW4gdGhlIHN0cmluZy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ2NvdW50V29yZHMnLCBmdW5jdGlvbigpOiBudW1iZXIge1xuICByZXR1cm4gdGhpcy50cmltKCkuc3BsaXQoL1xccysvKS5sZW5ndGg7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHN0cmluZyBzdGFydHMgd2l0aCBhIHZvd2VsLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RyaW5nIHN0YXJ0cyB3aXRoIGEgdm93ZWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ3N0YXJ0c1dpdGhWb3dlbCcsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gL15bYWVpb3VdL2kudGVzdCh0aGlzLnRyaW0oKSk7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHN0cmluZyBlbmRzIHdpdGggYSB2b3dlbC5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0cmluZyBlbmRzIHdpdGggYSB2b3dlbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnZW5kc1dpdGhWb3dlbCcsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gL1thZWlvdV0kL2kudGVzdCh0aGlzLnRyaW0oKSk7XG59KTtcblxuLyoqXG4gKiBSZXBsYWNlcyBtdWx0aXBsZSBjb25zZWN1dGl2ZSBzcGFjZXMgd2l0aCBhIHNpbmdsZSBzcGFjZS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgd2l0aCBtdWx0aXBsZSBzcGFjZXMgcmVwbGFjZWQgYnkgYSBzaW5nbGUgc3BhY2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCdyZXBsYWNlTXVsdGlwbGVTcGFjZXMnLCBmdW5jdGlvbigpOiBzdHJpbmcge1xuICByZXR1cm4gdGhpcy5yZXBsYWNlKC9cXHN7Mix9L2csICcgJyk7XG59KTtcblxuLyoqXG4gKiBTaHVmZmxlcyB0aGUgY2hhcmFjdGVycyBpbiB0aGUgc3RyaW5nIHJhbmRvbWx5LlxuICogQHJldHVybnMgVGhlIHN0cmluZyB3aXRoIGNoYXJhY3RlcnMgc2h1ZmZsZWQgcmFuZG9tbHkuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCdzaHVmZmxlJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgY29uc3QgYXJyID0gdGhpcy5zcGxpdCgnJyk7XG4gIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICBbYXJyW2ldLCBhcnJbal1dID0gW2FycltqXSwgYXJyW2ldXTtcbiAgfVxuICByZXR1cm4gYXJyLmpvaW4oJycpO1xufSk7XG5cbi8qKlxuICogUmVwZWF0cyB0aGUgc3RyaW5nIGEgc3BlY2lmaWVkIG51bWJlciBvZiB0aW1lcy5cbiAqIEBwYXJhbSB0aW1lcyAtIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBzdHJpbmcuXG4gKiBAcmV0dXJucyBUaGUgcmVwZWF0ZWQgc3RyaW5nLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygncmVwZWF0JywgZnVuY3Rpb24odGltZXM6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiB0aGlzLnJlcGVhdCh0aW1lcyk7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHN0cmluZyBjb250YWlucyBvbmx5IG51bWVyaWMgY2hhcmFjdGVycy5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0cmluZyBjb250YWlucyBvbmx5IG51bWVyaWMgY2hhcmFjdGVycywgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnaXNOdW1lcmljJywgZnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiAvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHRoaXMudHJpbSgpKTtcbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgc3RyaW5nIGlzIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0cmluZyBpcyBhIHZhbGlkIGVtYWlsIGFkZHJlc3MsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ2lzRW1haWwnLCBmdW5jdGlvbigpOiBib29sZWFuIHtcbiAgcmV0dXJuIC9eW2EtekEtWjAtOS5fJSstXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLH0kLy50ZXN0KHRoaXMudHJpbSgpKTtcbn0pO1xuXG4vKipcbiAqIENhcGl0YWxpemVzIHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCB3b3JkIGluIHRoZSBzdHJpbmcuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHdpdGggdGhlIGZpcnN0IGxldHRlciBvZiBlYWNoIHdvcmQgY2FwaXRhbGl6ZWQuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCdjYXBpdGFsaXplV29yZHMnLCBmdW5jdGlvbigpOiBzdHJpbmcge1xuICByZXR1cm4gdGhpcy5yZXBsYWNlKC9cXGJcXHcvZywgKG1hdGNoKSA9PiBtYXRjaC50b1VwcGVyQ2FzZSgpKTtcbn0pO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIG5vbi1hbHBoYW51bWVyaWMgY2hhcmFjdGVycyBmcm9tIHRoZSBzdHJpbmcuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHdpdGggbm9uLWFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIHJlbW92ZWQuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCdyZW1vdmVOb25BbHBoYU51bWVyaWMnLCBmdW5jdGlvbigpOiBzdHJpbmcge1xuICByZXR1cm4gdGhpcy5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgJycpO1xufSk7XG5cbi8qKlxuICogQ291bnRzIHRoZSBvY2N1cnJlbmNlcyBvZiBhIHN1YnN0cmluZyBpbiB0aGUgc3RyaW5nIChjYXNlLXNlbnNpdGl2ZSkuXG4gKiBAcGFyYW0gc3Vic3RyaW5nIC0gVGhlIHN1YnN0cmluZyB0byBjb3VudCBvY2N1cnJlbmNlcyBvZi5cbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2Ygb2NjdXJyZW5jZXMgb2YgdGhlIHN1YnN0cmluZyBpbiB0aGUgc3RyaW5nLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnY291bnRPY2N1cnJlbmNlcycsIGZ1bmN0aW9uKHN1YnN0cmluZzogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN1YnN0cmluZywgJ2cnKTtcbiAgY29uc3QgbWF0Y2hlcyA9IHRoaXMubWF0Y2gocmVnZXgpO1xuICByZXR1cm4gbWF0Y2hlcyA/IG1hdGNoZXMubGVuZ3RoIDogMDtcbn0pO1xuXG4vKipcbiAqIFRydW5jYXRlcyB0aGUgc3RyaW5nIHRvIGEgc3BlY2lmaWVkIG51bWJlciBvZiB3b3Jkcy5cbiAqIEBwYXJhbSBtYXhXb3JkcyAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiB3b3JkcyBpbiB0aGUgdHJ1bmNhdGVkIHN0cmluZy5cbiAqIEByZXR1cm5zIFRoZSB0cnVuY2F0ZWQgc3RyaW5nIHdpdGggYW4gZWxsaXBzaXMgaWYgbmVlZGVkLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygndHJ1bmNhdGVXb3JkcycsIGZ1bmN0aW9uKG1heFdvcmRzOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCB3b3JkcyA9IHRoaXMudHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gIHJldHVybiB3b3Jkcy5sZW5ndGggPiBtYXhXb3JkcyA/IHdvcmRzLnNsaWNlKDAsIG1heFdvcmRzKS5qb2luKCcgJykgKyAnLi4uJyA6IHRoaXM7XG59KTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBIVE1MIHRhZ3MgZnJvbSB0aGUgc3RyaW5nLlxuICogQHJldHVybnMgVGhlIHN0cmluZyB3aXRoIEhUTUwgdGFncyByZW1vdmVkLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnc3RyaXBUYWdzJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSgvPFtePl0qPj8vZ20sICcnKTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBzdHJpbmcgdG8gY2FtZWxDYXNlLlxuICogQHJldHVybnMgVGhlIHN0cmluZyBpbiBjYW1lbENhc2UgZm9ybWF0LlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnY2FtZWxDYXNlJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKD86Xlxcd3xbQS1aXXxcXGJcXHcpL2csIChsZXR0ZXIsIGluZGV4KSA9PiAoaW5kZXggPT09IDAgPyBsZXR0ZXIudG9Mb3dlckNhc2UoKSA6IGxldHRlci50b1VwcGVyQ2FzZSgpKSkucmVwbGFjZSgvXFxzKy9nLCAnJyk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgc3RyaW5nIHRvIGtlYmFiLWNhc2UuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIGluIGtlYmFiLWNhc2UgZm9ybWF0LlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygna2ViYWJDYXNlJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgc3RyaW5nIHRvIHNuYWtlX2Nhc2UuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIGluIHNuYWtlX2Nhc2UgZm9ybWF0LlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnc25ha2VDYXNlJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXFxzKy9nLCAnXycpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxuLyoqXG4gKiBSZXBsYWNlcyBhbGwgb2NjdXJyZW5jZXMgb2YgYSBzdWJzdHJpbmcgaW4gdGhlIHN0cmluZyAoY2FzZS1pbnNlbnNpdGl2ZSkuXG4gKiBAcGFyYW0gZmluZCAtIFRoZSBzdWJzdHJpbmcgdG8gZmluZC5cbiAqIEBwYXJhbSByZXBsYWNlIC0gVGhlIHJlcGxhY2VtZW50IHN0cmluZy5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgd2l0aCBhbGwgb2NjdXJyZW5jZXMgb2YgdGhlIHN1YnN0cmluZyByZXBsYWNlZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ3JlcGxhY2VBbGxDYXNlSW5zZW5zaXRpdmUnLCBmdW5jdGlvbihmaW5kOiBzdHJpbmcsIHJlcGxhY2U6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChmaW5kLCAnZ2knKSwgcmVwbGFjZSk7XG59KTtcblxuLyoqXG4gKiBTd2FwcyB0aGUgY2FzZSBvZiBjaGFyYWN0ZXJzIGluIHRoZSBzdHJpbmcgKHVwcGVyIHRvIGxvd2VyIGFuZCB2aWNlIHZlcnNhKS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgd2l0aCB0aGUgY2FzZSBvZiBjaGFyYWN0ZXJzIHN3YXBwZWQuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCdzd2FwQ2FzZScsIGZ1bmN0aW9uKCk6IHN0cmluZyB7XG4gIHJldHVybiB0aGlzLnJlcGxhY2UoLyhbYS16XSl8KFtBLVpdKS9nLCAobWF0Y2gsIGxvd2VyQ2FzZUxldHRlciwgdXBwZXJDYXNlTGV0dGVyKSA9PlxuICAgIGxvd2VyQ2FzZUxldHRlciA/IG1hdGNoLnRvVXBwZXJDYXNlKCkgOiBtYXRjaC50b0xvd2VyQ2FzZSgpXG4gICk7XG59KTtcblxuLyoqXG4gKiBDYXBpdGFsaXplcyB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBmaXJzdCBzZW50ZW5jZSBpbiB0aGUgc3RyaW5nLlxuICogQHJldHVybnMgVGhlIHN0cmluZyB3aXRoIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIGZpcnN0IHNlbnRlbmNlIGNhcGl0YWxpemVkLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnY2FwaXRhbGl6ZUZpcnN0U2VudGVuY2UnLCBmdW5jdGlvbigpOiBzdHJpbmcge1xuICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oXlxccyp8XFwuXFxzKikoW2Etel0pL2csIChfbWF0Y2gsIGJvdW5kYXJ5LCBsZXR0ZXIpID0+IGJvdW5kYXJ5ICsgbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBlbnRpcmUgc3RyaW5nIGlzIGluIHVwcGVyY2FzZS5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGVudGlyZSBzdHJpbmcgaXMgaW4gdXBwZXJjYXNlLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCdpc1VwcGVyQ2FzZScsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdGhpcyA9PT0gdGhpcy50b1VwcGVyQ2FzZSgpO1xufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBlbnRpcmUgc3RyaW5nIGlzIGluIGxvd2VyY2FzZS5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGVudGlyZSBzdHJpbmcgaXMgaW4gbG93ZXJjYXNlLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCdpc0xvd2VyQ2FzZScsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdGhpcyA9PT0gdGhpcy50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbi8qKlxuICogUmVtb3ZlcyBhY2NlbnRzIGFuZCBkaWFjcml0aWNhbCBtYXJrcyBmcm9tIHRoZSBzdHJpbmcuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHdpdGggYWNjZW50cyBhbmQgZGlhY3JpdGljYWwgbWFya3MgcmVtb3ZlZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ3JlbW92ZUFjY2VudHMnLCBmdW5jdGlvbigpOiBzdHJpbmcge1xuICByZXR1cm4gdGhpcy5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcbn0pO1xuXG4vKipcbiAqIFJldmVyc2VzIHRoZSBvcmRlciBvZiB3b3JkcyBpbiB0aGUgc3RyaW5nLlxuICogQHJldHVybnMgVGhlIHN0cmluZyB3aXRoIHdvcmRzIHJldmVyc2VkLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygncmV2ZXJzZVdvcmRzJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRoaXMudHJpbSgpLnNwbGl0KC9cXHMrLykucmV2ZXJzZSgpLmpvaW4oJyAnKTtcbn0pO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIG5vbi13b3JkIGNoYXJhY3RlcnMgZnJvbSB0aGUgc3RyaW5nIChsZXR0ZXJzLCBudW1iZXJzLCBhbmQgdW5kZXJzY29yZXMpLlxuICogQHJldHVybnMgVGhlIHN0cmluZyB3aXRoIG5vbi13b3JkIGNoYXJhY3RlcnMgcmVtb3ZlZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ3JlbW92ZU5vbldvcmRDaGFycycsIGZ1bmN0aW9uKCk6IHN0cmluZyB7XG4gIHJldHVybiB0aGlzLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG59KTtcblxuLyoqXG4gKiBBYmJyZXZpYXRlcyB0aGUgc3RyaW5nIHRvIGEgc3BlY2lmaWVkIGxlbmd0aCwgYWRkaW5nIGVsbGlwc2lzIGlmIG5lZWRlZC5cbiAqIEBwYXJhbSBtYXhMZW5ndGggLSBUaGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIGFiYnJldmlhdGVkIHN0cmluZy5cbiAqIEByZXR1cm5zIFRoZSBhYmJyZXZpYXRlZCBzdHJpbmcgd2l0aCBhbiBlbGxpcHNpcyBpZiBuZWVkZWQuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCdhYmJyZXZpYXRlJywgZnVuY3Rpb24obWF4TGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBlbGxpcHNpcyA9ICcuLi4nO1xuICByZXR1cm4gdGhpcy5sZW5ndGggPiBtYXhMZW5ndGggPyB0aGlzLnNsaWNlKDAsIG1heExlbmd0aCAtIGVsbGlwc2lzLmxlbmd0aCkgKyBlbGxpcHNpcyA6IHRoaXM7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHN0cmluZyBjb250YWlucyBvbmx5IG51bWJlcnMgKGRpZ2l0cykuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgb25seSBudW1lcmljIGNoYXJhY3RlcnMsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ2NvbnRhaW5zT25seU51bWJlcnMnLCBmdW5jdGlvbigpOiBib29sZWFuIHtcbiAgcmV0dXJuIC9eXFxkKyQvLnRlc3QodGhpcy50cmltKCkpO1xufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgb25seSBsZXR0ZXJzIChhbHBoYWJldGljIGNoYXJhY3RlcnMpLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG9ubHkgbGV0dGVycywgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnY29udGFpbnNPbmx5TGV0dGVycycsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gL15bYS16QS1aXSskLy50ZXN0KHRoaXMudHJpbSgpKTtcbn0pO1xuXG4vKipcbiAqIFJldmVyc2VzIHRoZSBvcmRlciBvZiBsaW5lcyBpbiB0aGUgbXVsdGktbGluZSBzdHJpbmcuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHdpdGggbGluZXMgcmV2ZXJzZWQuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCdyZXZlcnNlTGluZXMnLCBmdW5jdGlvbigpOiBzdHJpbmcge1xuICByZXR1cm4gdGhpcy50cmltKCkuc3BsaXQoL1xccj9cXG4vKS5yZXZlcnNlKCkuam9pbignXFxuJyk7XG59KTtcblxuLyoqXG4gKiBDYXBpdGFsaXplcyB0aGUgZmlyc3QgbGV0dGVyIG9mIGVhY2ggc2VudGVuY2UgaW4gdGhlIHN0cmluZy5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgd2l0aCB0aGUgZmlyc3QgbGV0dGVyIG9mIGVhY2ggc2VudGVuY2UgY2FwaXRhbGl6ZWQuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCdjYXBpdGFsaXplU2VudGVuY2VzJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKF5cXHMqfFsuIT9dXFxzKykoW2Etel0pL2csIChfbWF0Y2gsIGJvdW5kYXJ5LCBsZXR0ZXIpID0+IGJvdW5kYXJ5ICsgbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBzdHJpbmcgaXMgYSB2YWxpZCBVUkwuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdHJpbmcgaXMgYSB2YWxpZCBVUkwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ2lzVVJMJywgZnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbmV3IFVSTCh0aGlzLnRyaW0oKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHN0cmluZyBpcyBhIHZhbGlkIEpTT04gc3RyaW5nLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RyaW5nIGlzIGEgdmFsaWQgSlNPTiBzdHJpbmcsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ2lzSlNPTicsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIEpTT04ucGFyc2UodGhpcy50cmltKCkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBzdHJpbmcgaXMgYSB2YWxpZCBoZXhhZGVjaW1hbCBjb2xvciBjb2RlIChlLmcuLCAjUlJHR0JCKS5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0cmluZyBpcyBhIHZhbGlkIGhleGFkZWNpbWFsIGNvbG9yIGNvZGUsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ2lzSGV4Q29sb3JDb2RlJywgZnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiAvXiNbMC05QS1GXXs2fSQvaS50ZXN0KHRoaXMudHJpbSgpKTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBzdHJpbmcgdG8gdGl0bGUgY2FzZSAoZWFjaCB3b3JkJ3MgZmlyc3QgbGV0dGVyIGNhcGl0YWxpemVkKS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgaW4gdGl0bGUgY2FzZSBmb3JtYXQuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCd0b1RpdGxlQ2FzZScsIGZ1bmN0aW9uKCk6IHN0cmluZyB7XG4gIHJldHVybiB0aGlzLnJlcGxhY2UoL1xcYlxcdy9nLCAobWF0Y2gpID0+IG1hdGNoLnRvVXBwZXJDYXNlKCkpO1xufSk7XG5cbi8qKlxuICogU3BsaXRzIHRoZSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBzdWJzdHJpbmdzIG9mIHNwZWNpZmllZCBsZW5ndGguXG4gKiBAcGFyYW0gY2h1bmtMZW5ndGggLSBUaGUgbGVuZ3RoIG9mIGVhY2ggc3Vic3RyaW5nIGNodW5rLlxuICogQHJldHVybnMgQW4gYXJyYXkgb2Ygc3Vic3RyaW5ncy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ2NodW5rU3RyaW5nJywgZnVuY3Rpb24oY2h1bmtMZW5ndGg6IG51bWJlcik6IHN0cmluZ1tdIHtcbiAgY29uc3QgY2h1bmtzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gY2h1bmtMZW5ndGgpIHtcbiAgICBjaHVua3MucHVzaCh0aGlzLnN1YnN0cihpLCBjaHVua0xlbmd0aCkpO1xuICB9XG4gIHJldHVybiBjaHVua3M7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHN0cmluZyBjb250YWlucyBvbmx5IHdoaXRlc3BhY2UgY2hhcmFjdGVycy5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0cmluZyBjb250YWlucyBvbmx5IHdoaXRlc3BhY2UgY2hhcmFjdGVycywgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnY29udGFpbnNPbmx5V2hpdGVzcGFjZScsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gL15cXHMqJC8udGVzdCh0aGlzKTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBzdHJpbmcgdG8gYSBVUkwtZnJpZW5kbHkgZmlsZW5hbWUgYnkgcmVtb3ZpbmcgaWxsZWdhbCBjaGFyYWN0ZXJzLlxuICogQHJldHVybnMgVGhlIHN0cmluZyB3aXRoIGlsbGVnYWwgZmlsZW5hbWUgY2hhcmFjdGVycyByZW1vdmVkLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygndG9TYWZlRmlsZW5hbWUnLCBmdW5jdGlvbigpOiBzdHJpbmcge1xuICByZXR1cm4gdGhpcy5yZXBsYWNlKC9bXlxcdy4tXS9nLCAnJyk7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHN0cmluZyBpcyBhIHZhbGlkIElQdjQgYWRkcmVzcy5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0cmluZyBpcyBhIHZhbGlkIElQdjQgYWRkcmVzcywgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnaXNJUHY0QWRkcmVzcycsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gL14oMjVbMC01XXwyWzAtNF1cXGR8WzAxXT9cXGRcXGQ/KVxcLigoMjVbMC01XXwyWzAtNF1cXGR8WzAxXT9cXGRcXGQ/KVxcLil7Mn0oMjVbMC01XXwyWzAtNF1cXGR8WzAxXT9cXGRcXGQ/KSQvLnRlc3QodGhpcy50cmltKCkpO1xufSk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgbGVhZGluZyB3aGl0ZXNwYWNlIGZyb20gdGhlIHN0cmluZy5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgd2l0aCBsZWFkaW5nIHdoaXRlc3BhY2UgcmVtb3ZlZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ3RyaW1TdGFydCcsIGZ1bmN0aW9uKCk6IHN0cmluZyB7XG4gIHJldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrLywgJycpO1xufSk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgdHJhaWxpbmcgd2hpdGVzcGFjZSBmcm9tIHRoZSBzdHJpbmcuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHdpdGggdHJhaWxpbmcgd2hpdGVzcGFjZSByZW1vdmVkLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygndHJpbUVuZCcsIGZ1bmN0aW9uKCk6IHN0cmluZyB7XG4gIHJldHVybiB0aGlzLnJlcGxhY2UoL1xccyskLywgJycpO1xufSk7XG5cbi8qKlxuICogUmV2ZXJzZXMgdGhlIGNhc2Ugb2YgY2hhcmFjdGVycyBpbiB0aGUgc3RyaW5nIChsb3dlciB0byB1cHBlciBhbmQgdmljZSB2ZXJzYSkuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHdpdGggdGhlIGNhc2Ugb2YgY2hhcmFjdGVycyByZXZlcnNlZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ3JldmVyc2VDYXNlJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSgvLi9nLCAoY2hhcikgPT4gY2hhciA9PT0gY2hhci50b0xvd2VyQ2FzZSgpID8gY2hhci50b1VwcGVyQ2FzZSgpIDogY2hhci50b0xvd2VyQ2FzZSgpKTtcbn0pO1xuXG4vKipcbiAqIFNwbGl0cyB0aGUgc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgY2hhcmFjdGVycy5cbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGluZGl2aWR1YWwgY2hhcmFjdGVycyBpbiB0aGUgc3RyaW5nLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnc3BsaXRJbnRvQ2hhcnMnLCBmdW5jdGlvbigpOiBzdHJpbmdbXSB7XG4gIHJldHVybiB0aGlzLnNwbGl0KCcnKTtcbn0pO1xuXG4vKipcbiAqIFBhZHMgdGhlIHN0cmluZyB3aXRoIGEgc3BlY2lmaWVkIGNoYXJhY3RlciB0byBhIHNwZWNpZmllZCBsZW5ndGguXG4gKiBAcGFyYW0gbGVuZ3RoIC0gVGhlIHRhcmdldCBsZW5ndGggb2YgdGhlIHBhZGRlZCBzdHJpbmcuXG4gKiBAcGFyYW0gcGFkQ2hhciAtIFRoZSBjaGFyYWN0ZXIgdG8gdXNlIGZvciBwYWRkaW5nIChkZWZhdWx0IGlzIHNwYWNlICcgJykuXG4gKiBAcmV0dXJucyBUaGUgcGFkZGVkIHN0cmluZy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ3BhZCcsIGZ1bmN0aW9uKGxlbmd0aDogbnVtYmVyLCBwYWRDaGFyOiBzdHJpbmcgPSAnICcpOiBzdHJpbmcge1xuICBpZiAodGhpcy5sZW5ndGggPj0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY29uc3QgcGFkTGVuZ3RoID0gbGVuZ3RoIC0gdGhpcy5sZW5ndGg7XG4gIGNvbnN0IHBhZFN0cmluZyA9IHBhZENoYXIucmVwZWF0KHBhZExlbmd0aCk7XG4gIHJldHVybiB0aGlzICsgcGFkU3RyaW5nO1xufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgYSBzcGVjaWZpZWQgc3Vic3RyaW5nIChjYXNlLXNlbnNpdGl2ZSkuXG4gKiBAcGFyYW0gc3Vic3RyaW5nIC0gVGhlIHN1YnN0cmluZyB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3Vic3RyaW5nIGlzIGZvdW5kLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCdjb250YWlucycsIGZ1bmN0aW9uKHN1YnN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiB0aGlzLmluY2x1ZGVzKHN1YnN0cmluZyk7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHN0cmluZyBjb250YWlucyBhIHNwZWNpZmllZCBzdWJzdHJpbmcgKGNhc2UtaW5zZW5zaXRpdmUpLlxuICogQHBhcmFtIHN1YnN0cmluZyAtIFRoZSBzdWJzdHJpbmcgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN1YnN0cmluZyBpcyBmb3VuZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnY29udGFpbnNDYXNlSW5zZW5zaXRpdmUnLCBmdW5jdGlvbihzdWJzdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gdGhpcy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHN1YnN0cmluZy50b0xvd2VyQ2FzZSgpKTtcbn0pO1xuXG4vKipcbiAqIFJldmVyc2VzIHRoZSBvcmRlciBvZiB3b3JkcyBpbiB0aGUgc3RyaW5nIHdpdGhvdXQgcmV2ZXJzaW5nIGNoYXJhY3RlcnMgaW4gZWFjaCB3b3JkLlxuICogQHJldHVybnMgVGhlIHN0cmluZyB3aXRoIHdvcmRzIHJldmVyc2VkLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygncmV2ZXJzZVdvcmRzT25seScsIGZ1bmN0aW9uKCk6IHN0cmluZyB7XG4gIHJldHVybiB0aGlzLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcCgod29yZCkgPT4gd29yZC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpKS5qb2luKCcgJyk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgc3RyaW5nIHRvIFBhc2NhbENhc2UgKGNhbWVsQ2FzZSB3aXRoIHRoZSBmaXJzdCBsZXR0ZXIgY2FwaXRhbGl6ZWQpLlxuICogQHJldHVybnMgVGhlIHN0cmluZyBpbiBQYXNjYWxDYXNlIGZvcm1hdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ3RvUGFzY2FsQ2FzZScsIGZ1bmN0aW9uKCk6IHN0cmluZyB7XG4gIGNvbnN0IGNhbWVsQ2FzZVN0cmluZyA9IHRoaXMucmVwbGFjZSgvKD86Xlxcd3xbQS1aXXxcXGJcXHcpL2csIChsZXR0ZXIsIGluZGV4KSA9PiAoaW5kZXggPT09IDAgPyBsZXR0ZXIudG9Mb3dlckNhc2UoKSA6IGxldHRlci50b1VwcGVyQ2FzZSgpKSkucmVwbGFjZSgvXFxzKy9nLCAnJyk7XG4gIHJldHVybiBjYW1lbENhc2VTdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjYW1lbENhc2VTdHJpbmcuc2xpY2UoMSk7XG59KTtcblxuLyoqXG4gKiBUcmltcyB0aGUgc3RyaW5nIHRvIGEgc3BlY2lmaWVkIGxlbmd0aCBhbmQgYWRkcyBlbGxpcHNpcyBpZiBuZWVkZWQuXG4gKiBVbmxpa2UgdHJ1bmNhdGUsIHRoaXMgZnVuY3Rpb24gcHJlc2VydmVzIHdob2xlIHdvcmRzLlxuICogQHBhcmFtIG1heExlbmd0aCAtIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKiBAcmV0dXJucyBUaGUgdHJpbW1lZCBzdHJpbmcgd2l0aCBhbiBlbGxpcHNpcyBpZiBuZWVkZWQuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCd0cmltV2l0aEVsbGlwc2lzJywgZnVuY3Rpb24obWF4TGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAodGhpcy5sZW5ndGggPD0gbWF4TGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY29uc3QgdHJpbW1lZFN0cmluZyA9IHRoaXMuc3Vic3RyKDAsIG1heExlbmd0aCkucmVwbGFjZSgvXFxzK1xcUyokLywgJycpO1xuICByZXR1cm4gdHJpbW1lZFN0cmluZyArICcuLi4nO1xufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBzdHJpbmcgaXMgYSB2YWxpZCBjcmVkaXQgY2FyZCBudW1iZXIuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdHJpbmcgaXMgYSB2YWxpZCBjcmVkaXQgY2FyZCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRTdHJpbmcoJ2lzQ3JlZGl0Q2FyZE51bWJlcicsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gL15cXGR7NH0tP1xcZHs0fS0/XFxkezR9LT9cXGR7NH0kLy50ZXN0KHRoaXMudHJpbSgpLnJlcGxhY2UoLy0vZywgJycpKTtcbn0pO1xuXG4vKipcbiAqIEVzY2FwZXMgc3BlY2lhbCByZWdleCBjaGFyYWN0ZXJzIGluIHRoZSBzdHJpbmcuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHdpdGggcmVnZXggY2hhcmFjdGVycyBlc2NhcGVkLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnZXNjYXBlUmVnZXhDaGFyYWN0ZXJzJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgc3RyaW5nIGlzIGEgcGFsaW5kcm9tZSBjb25zaWRlcmluZyBhbHBoYW51bWVyaWMgY2hhcmFjdGVycyBvbmx5LlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RyaW5nIGlzIGEgcGFsaW5kcm9tZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnaXNBbHBoYU51bWVyaWNQYWxpbmRyb21lJywgZnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gIGNvbnN0IGNsZWFuZWRTdHJpbmcgPSB0aGlzLnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgcmV2ZXJzZWRTdHJpbmcgPSBjbGVhbmVkU3RyaW5nLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG4gIHJldHVybiBjbGVhbmVkU3RyaW5nID09PSByZXZlcnNlZFN0cmluZztcbn0pO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBzdHJpbmcgdG8gYSBodW1hbi1yZWFkYWJsZSBmaWxlIHNpemUgcmVwcmVzZW50YXRpb24uXG4gKiBAcmV0dXJucyBUaGUgaHVtYW4tcmVhZGFibGUgZmlsZSBzaXplIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzdHJpbmcuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0U3RyaW5nKCd0b0h1bWFuUmVhZGFibGVTaXplJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgY29uc3Qgc2l6ZUluQnl0ZXMgPSBwYXJzZUludCh0aGlzLnRyaW0oKSwgMTApO1xuICBjb25zdCB1bml0cyA9IFsnQicsICdLQicsICdNQicsICdHQicsICdUQiddO1xuICBsZXQgc2l6ZSA9IHNpemVJbkJ5dGVzO1xuICBsZXQgdW5pdEluZGV4ID0gMDtcbiAgd2hpbGUgKHNpemUgPj0gMTAyNCAmJiB1bml0SW5kZXggPCB1bml0cy5sZW5ndGggLSAxKSB7XG4gICAgc2l6ZSAvPSAxMDI0O1xuICAgIHVuaXRJbmRleCsrO1xuICB9XG4gIHJldHVybiBgJHtzaXplLnRvRml4ZWQoMil9ICR7dW5pdHNbdW5pdEluZGV4XX1gO1xufSk7XG4iLCAiLyoqIFxuICogVGhlIE1haW4gRnVuY3Rpb24gVG8gQ3JlYXRlIFRoZSBFeHRlbmRzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUV4dGVuZEl0TnVtYmVyKG5hbWU6IHN0cmluZywgZnVuYzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgcmV0dXJuIE51bWJlci5wcm90b3R5cGVbbmFtZV0gPSBmdW5jO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG51bWJlciBpcyBldmVuLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4sIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2lzRXZlbicsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdGhpcyAlIDIgPT09IDA7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG51bWJlciBpcyBvZGQuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgb2RkLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdpc09kZCcsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdGhpcyAlIDIgIT09IDA7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG51bWJlciBpcyBwcmltZS5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG51bWJlciBpcyBwcmltZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcignaXNQcmltZScsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICBpZiAodGhpcyA8PSAxKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0aGlzIDw9IDMpIHJldHVybiB0cnVlO1xuICBpZiAodGhpcyAlIDIgPT09IDAgfHwgdGhpcyAlIDMgPT09IDApIHJldHVybiBmYWxzZTtcbiAgbGV0IGkgPSA1O1xuICB3aGlsZSAoaSAqIGkgPD0gdGhpcykge1xuICAgIGlmICh0aGlzICUgaSA9PT0gMCB8fCB0aGlzICUgKGkgKyAyKSA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIGkgKz0gNjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZhY3RvcmlhbCBvZiB0aGUgbnVtYmVyLlxuICogQHJldHVybnMgVGhlIGZhY3RvcmlhbCBvZiB0aGUgbnVtYmVyLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcignZmFjdG9yaWFsJywgZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgaWYgKHRoaXMgPCAwKSB0aHJvdyBuZXcgRXJyb3IoJ0ZhY3RvcmlhbCBpcyBub3QgZGVmaW5lZCBmb3IgbmVnYXRpdmUgbnVtYmVycy4nKTtcbiAgaWYgKHRoaXMgPT09IDApIHJldHVybiAxO1xuICBsZXQgcmVzdWx0ID0gMTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpczsgaSsrKSB7XG4gICAgcmVzdWx0ICo9IGk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiBhbGwgbmF0dXJhbCBudW1iZXJzIHVwIHRvIHRoZSBudW1iZXIgKGluY2x1c2l2ZSkuXG4gKiBAcmV0dXJucyBUaGUgc3VtIG9mIGFsbCBuYXR1cmFsIG51bWJlcnMgdXAgdG8gdGhlIG51bWJlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3N1bU9mTmF0dXJhbE51bWJlcnMnLCBmdW5jdGlvbigpOiBudW1iZXIge1xuICBpZiAodGhpcyA8IDApIHRocm93IG5ldyBFcnJvcignTnVtYmVyIG11c3QgYmUgbm9uLW5lZ2F0aXZlLicpO1xuICByZXR1cm4gKHRoaXMgKiAodGhpcyArIDEpKSAvIDI7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdW0gb2YgYWxsIGV2ZW4gbnVtYmVycyB1cCB0byB0aGUgbnVtYmVyIChpbmNsdXNpdmUpLlxuICogQHJldHVybnMgVGhlIHN1bSBvZiBhbGwgZXZlbiBudW1iZXJzIHVwIHRvIHRoZSBudW1iZXIuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdzdW1PZkV2ZW5OdW1iZXJzJywgZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzIDwgMCkgdGhyb3cgbmV3IEVycm9yKCdOdW1iZXIgbXVzdCBiZSBub24tbmVnYXRpdmUuJyk7XG4gIGxldCBudW0gPSB0aGlzO1xuICBpZiAobnVtICUgMiA9PT0gMSkgbnVtLS07XG4gIHJldHVybiAobnVtIC8gMikgKiAobnVtIC8gMiArIDEpO1xufSk7XG4vKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiBhbGwgb2RkIG51bWJlcnMgdXAgdG8gdGhlIG51bWJlciAoaW5jbHVzaXZlKS5cbiAqIEByZXR1cm5zIFRoZSBzdW0gb2YgYWxsIG9kZCBudW1iZXJzIHVwIHRvIHRoZSBudW1iZXIuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdzdW1PZk9kZE51bWJlcnMnLCBmdW5jdGlvbigpOiBudW1iZXIge1xuICBpZiAodGhpcyA8IDApIHRocm93IG5ldyBFcnJvcignTnVtYmVyIG11c3QgYmUgbm9uLW5lZ2F0aXZlLicpO1xuICBsZXQgbnVtbSA9IHRoaXM7XG4gIGlmIChudW1tICUgMiA9PT0gMCkgbnVtbS0tO1xuICByZXR1cm4gKChudW1tICsgMSkgLyAyKSAqICgobnVtbSArIDEpIC8gMik7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG51bWJlciBpcyBhIHBlcmZlY3Qgc3F1YXJlLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGEgcGVyZmVjdCBzcXVhcmUsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2lzUGVyZmVjdFNxdWFyZScsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICBpZiAodGhpcyA8IDApIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc3FydCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KHRoaXMpKTtcbiAgcmV0dXJuIHNxcnQgKiBzcXJ0ID09PSB0aGlzO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3F1YXJlIHJvb3Qgb2YgdGhlIG51bWJlci5cbiAqIEByZXR1cm5zIFRoZSBzcXVhcmUgcm9vdCBvZiB0aGUgbnVtYmVyLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcignc3F1YXJlUm9vdCcsIGZ1bmN0aW9uKCk6IG51bWJlciB7XG4gIGlmICh0aGlzIDwgMCkgdGhyb3cgbmV3IEVycm9yKCdTcXVhcmUgcm9vdCBpcyBub3QgZGVmaW5lZCBmb3IgbmVnYXRpdmUgbnVtYmVycy4nKTtcbiAgcmV0dXJuIE1hdGguc3FydCh0aGlzKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1YmUgcm9vdCBvZiB0aGUgbnVtYmVyLlxuICogQHJldHVybnMgVGhlIGN1YmUgcm9vdCBvZiB0aGUgbnVtYmVyLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcignY3ViZVJvb3QnLCBmdW5jdGlvbigpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5jYnJ0KHRoaXMpO1xufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlci5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG51bWJlciBpcyBhbiBpbnRlZ2VyLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdpc0ludGVnZXInLCBmdW5jdGlvbigpOiBib29sZWFuIHtcbiAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcyk7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG51bWJlciBpcyBhIGRlY2ltYWwgbnVtYmVyLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGEgZGVjaW1hbCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2lzRGVjaW1hbCcsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gIU51bWJlci5pc0ludGVnZXIodGhpcyk7XG59KTtcblxuLyoqXG4gKiBSb3VuZHMgdGhlIG51bWJlciB0byB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcy5cbiAqIEBwYXJhbSBkZWNpbWFsUGxhY2VzIC0gVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byByb3VuZCB0by5cbiAqIEByZXR1cm5zIFRoZSByb3VuZGVkIG51bWJlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3JvdW5kVG9EZWNpbWFsUGxhY2VzJywgZnVuY3Rpb24oZGVjaW1hbFBsYWNlczogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgZmFjdG9yID0gMTAgKiogZGVjaW1hbFBsYWNlcztcbiAgcmV0dXJuIE1hdGgucm91bmQodGhpcyAqIGZhY3RvcikgLyBmYWN0b3I7XG59KTtcblxuLyoqXG4gKiBGbG9vcnMgdGhlIG51bWJlciB0byB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcy5cbiAqIEBwYXJhbSBkZWNpbWFsUGxhY2VzIC0gVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byBmbG9vciB0by5cbiAqIEByZXR1cm5zIFRoZSBmbG9vcmVkIG51bWJlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2Zsb29yVG9EZWNpbWFsUGxhY2VzJywgZnVuY3Rpb24oZGVjaW1hbFBsYWNlczogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgZmFjdG9yID0gMTAgKiogZGVjaW1hbFBsYWNlcztcbiAgcmV0dXJuIE1hdGguZmxvb3IodGhpcyAqIGZhY3RvcikgLyBmYWN0b3I7XG59KTtcblxuLyoqXG4gKiBDZWlscyB0aGUgbnVtYmVyIHRvIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzLlxuICogQHBhcmFtIGRlY2ltYWxQbGFjZXMgLSBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIGNlaWwgdG8uXG4gKiBAcmV0dXJucyBUaGUgY2VpbGVkIG51bWJlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2NlaWxUb0RlY2ltYWxQbGFjZXMnLCBmdW5jdGlvbihkZWNpbWFsUGxhY2VzOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBmYWN0b3IgPSAxMCAqKiBkZWNpbWFsUGxhY2VzO1xuICByZXR1cm4gTWF0aC5jZWlsKHRoaXMgKiBmYWN0b3IpIC8gZmFjdG9yO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAqIEByZXR1cm5zIFRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiB0aGUgbnVtYmVyLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcignYWJzb2x1dGVWYWx1ZScsIGZ1bmN0aW9uKCk6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmFicyh0aGlzKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHNpZ24gb2YgdGhlIG51bWJlciBhcyBlaXRoZXIgMSwgMCwgb3IgLTEuXG4gKiBAcmV0dXJucyBUaGUgc2lnbiBvZiB0aGUgbnVtYmVyICgtMSwgMCwgb3IgMSkuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdzaWduJywgZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguc2lnbih0aGlzKTtcbn0pO1xuXG4vKipcbiAqIENsYW1wcyB0aGUgbnVtYmVyIGJldHdlZW4gdGhlIGdpdmVuIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWVzLlxuICogQHBhcmFtIG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIHRvIGNsYW1wIHRvLlxuICogQHBhcmFtIG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIHRvIGNsYW1wIHRvLlxuICogQHJldHVybnMgVGhlIGNsYW1wZWQgbnVtYmVyLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcignY2xhbXAnLCBmdW5jdGlvbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbih0aGlzLCBtYXgpKTtcbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgbnVtYmVyIGlzIHdpdGhpbiB0aGUgcmFuZ2UgKGluY2x1c2l2ZSkgb2YgdGhlIGdpdmVuIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWVzLlxuICogQHBhcmFtIG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIG9mIHRoZSByYW5nZS5cbiAqIEBwYXJhbSBtYXggLSBUaGUgbWF4aW11bSB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgd2l0aGluIHRoZSByYW5nZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcignaXNJblJhbmdlJywgZnVuY3Rpb24obWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiB0aGlzID49IG1pbiAmJiB0aGlzIDw9IG1heDtcbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgbnVtYmVyIGlzIGEgcG9zaXRpdmUgbnVtYmVyLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIHBvc2l0aXZlLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdpc1Bvc2l0aXZlJywgZnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiB0aGlzID4gMDtcbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgbnVtYmVyIGlzIGEgbmVnYXRpdmUgbnVtYmVyLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIG5lZ2F0aXZlLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdpc05lZ2F0aXZlJywgZnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiB0aGlzIDwgMDtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBudW1iZXIgdG8gYSBiaW5hcnkgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICogQHJldHVybnMgVGhlIGJpbmFyeSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3RvQmluYXJ5U3RyaW5nJywgZnVuY3Rpb24oKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRoaXMudG9TdHJpbmcoMik7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgbnVtYmVyIHRvIGFuIG9jdGFsIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqIEByZXR1cm5zIFRoZSBvY3RhbCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3RvT2N0YWxTdHJpbmcnLCBmdW5jdGlvbigpOiBzdHJpbmcge1xuICByZXR1cm4gdGhpcy50b1N0cmluZyg4KTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBudW1iZXIgdG8gYSBoZXhhZGVjaW1hbCBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gKiBAcGFyYW0gaW5jbHVkZVByZWZpeCAtIFdoZXRoZXIgdG8gaW5jbHVkZSAnMHgnIHByZWZpeCBpbiB0aGUgaGV4YWRlY2ltYWwgc3RyaW5nLlxuICogQHJldHVybnMgVGhlIGhleGFkZWNpbWFsIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbnVtYmVyLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcigndG9IZXhTdHJpbmcnLCBmdW5jdGlvbihpbmNsdWRlUHJlZml4OiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZyB7XG4gIGNvbnN0IHByZWZpeCA9IGluY2x1ZGVQcmVmaXggPyAnMHgnIDogJyc7XG4gIHJldHVybiBwcmVmaXggKyB0aGlzLnRvU3RyaW5nKDE2KTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBudW1iZXIgdG8gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gd2l0aCB0aGUgc3BlY2lmaWVkIHJhZGl4IChiYXNlKS5cbiAqIEBwYXJhbSByYWRpeCAtIFRoZSByYWRpeCAoYmFzZSkgZm9yIHRoZSBzdHJpbmcgY29udmVyc2lvbiAoMiB0byAzNikuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBudW1iZXIgd2l0aCB0aGUgc3BlY2lmaWVkIHJhZGl4LlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcigndG9TdHJpbmdXaXRoUmFkaXgnLCBmdW5jdGlvbihyYWRpeDogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKHJhZGl4IDwgMiB8fCByYWRpeCA+IDM2KSB0aHJvdyBuZXcgRXJyb3IoJ1JhZGl4IG11c3QgYmUgYmV0d2VlbiAyIGFuZCAzNi4nKTtcbiAgcmV0dXJuIHRoaXMudG9TdHJpbmcocmFkaXgpO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGFyZ2VzdCBpbnRlZ2VyIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgbnVtYmVyLlxuICogQHJldHVybnMgVGhlIGxhcmdlc3QgaW50ZWdlciBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIG51bWJlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2Zsb29yJywgZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IodGhpcyk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzbWFsbGVzdCBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgbnVtYmVyLlxuICogQHJldHVybnMgVGhlIHNtYWxsZXN0IGludGVnZXIgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBudW1iZXIuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdjZWlsJywgZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguY2VpbCh0aGlzKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGludGVnZXIgcGFydCBvZiB0aGUgbnVtYmVyIGJ5IHJlbW92aW5nIGFueSBmcmFjdGlvbmFsIGRpZ2l0cy5cbiAqIEByZXR1cm5zIFRoZSBpbnRlZ2VyIHBhcnQgb2YgdGhlIG51bWJlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3RydW5jJywgZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgudHJ1bmModGhpcyk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgcm91bmRlZCB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyLlxuICogQHJldHVybnMgVGhlIHJvdW5kZWQgaW50ZWdlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3JvdW5kJywgZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodGhpcyk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgbnVtYmVyIHRvIGRlZ3JlZXMgZnJvbSByYWRpYW5zLlxuICogQHJldHVybnMgVGhlIG51bWJlciBpbiBkZWdyZWVzLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcigndG9EZWdyZWVzJywgZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgcmV0dXJuICgxODAgKiB0aGlzKSAvIE1hdGguUEk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgbnVtYmVyIHRvIHJhZGlhbnMgZnJvbSBkZWdyZWVzLlxuICogQHJldHVybnMgVGhlIG51bWJlciBpbiByYWRpYW5zLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcigndG9SYWRpYW5zJywgZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgcmV0dXJuIChNYXRoLlBJICogdGhpcykgLyAxODA7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhdmVyYWdlIG9mIHRoZSBudW1iZXIgYW5kIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjYWxjdWxhdGUgdGhlIGF2ZXJhZ2Ugd2l0aC5cbiAqIEByZXR1cm5zIFRoZSBhdmVyYWdlIG9mIHRoZSBudW1iZXIgYW5kIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2F2ZXJhZ2UnLCBmdW5jdGlvbih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuICh0aGlzICsgdmFsdWUpIC8gMjtcbn0pO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGdpdmVuIHZhbHVlIHdpdGggcmVzcGVjdCB0byB0aGUgbnVtYmVyLlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNhbGN1bGF0ZSB0aGUgcGVyY2VudGFnZSBvZi5cbiAqIEByZXR1cm5zIFRoZSBwZXJjZW50YWdlIG9mIHRoZSBnaXZlbiB2YWx1ZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3BlcmNlbnRhZ2VPZicsIGZ1bmN0aW9uKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gKHZhbHVlIC8gdGhpcykgKiAxMDA7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG51bWJlciBpcyBhcHByb3hpbWF0ZWx5IGVxdWFsIHRvIHRoZSBwcm92aWRlZCB2YWx1ZSB3aXRoaW4gYSBnaXZlbiB0b2xlcmFuY2UuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29tcGFyZSB3aXRoLlxuICogQHBhcmFtIHRvbGVyYW5jZSAtIFRoZSBtYXhpbXVtIGFsbG93ZWQgZGlmZmVyZW5jZSAoZGVmYXVsdCBpcyBOdW1iZXIuRVBTSUxPTikuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgYXBwcm94aW1hdGVseSBlcXVhbCB0byB0aGUgcHJvdmlkZWQgdmFsdWUsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2lzQXBwcm94aW1hdGVseUVxdWFsVG8nLCBmdW5jdGlvbih2YWx1ZTogbnVtYmVyLCB0b2xlcmFuY2U6IG51bWJlciA9IE51bWJlci5FUFNJTE9OKTogYm9vbGVhbiB7XG4gIHJldHVybiBNYXRoLmFicyh0aGlzIC0gdmFsdWUpIDwgdG9sZXJhbmNlO1xufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBudW1iZXIgaXMgYSB3aG9sZSBudW1iZXIgKGludGVnZXIpIGFuZCBhIG11bHRpcGxlIG9mIHRoZSBwcm92aWRlZCBmYWN0b3IuXG4gKiBAcGFyYW0gZmFjdG9yIC0gVGhlIGZhY3RvciB0byBjaGVjayBmb3IuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgYSB3aG9sZSBudW1iZXIgYW5kIGEgbXVsdGlwbGUgb2YgdGhlIGZhY3RvciwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcignaXNNdWx0aXBsZU9mJywgZnVuY3Rpb24oZmFjdG9yOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcykgJiYgdGhpcyAlIGZhY3RvciA9PT0gMDtcbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgbnVtYmVyIGlzIGEgcG93ZXIgb2YgMi5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG51bWJlciBpcyBhIHBvd2VyIG9mIDIsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2lzUG93ZXJPZjInLCBmdW5jdGlvbigpOiBib29sZWFuIHtcbiAgaWYgKHRoaXMgPCAxKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiAodGhpcyAmICh0aGlzIC0gMSkpID09PSAwO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBwb3dlciBvZiAyIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgbnVtYmVyLlxuICogQHJldHVybnMgVGhlIG5leHQgcG93ZXIgb2YgMi5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ25leHRQb3dlck9mMicsIGZ1bmN0aW9uKCk6IG51bWJlciB7XG4gIGlmICh0aGlzIDwgMCkgdGhyb3cgbmV3IEVycm9yKCdOZXh0IHBvd2VyIG9mIDIgaXMgbm90IGRlZmluZWQgZm9yIG5lZ2F0aXZlIG51bWJlcnMuJyk7XG4gIGxldCB2YWx1ZSA9IHRoaXMgLSAxO1xuICB2YWx1ZSB8PSB2YWx1ZSA+PiAxO1xuICB2YWx1ZSB8PSB2YWx1ZSA+PiAyO1xuICB2YWx1ZSB8PSB2YWx1ZSA+PiA0O1xuICB2YWx1ZSB8PSB2YWx1ZSA+PiA4O1xuICB2YWx1ZSB8PSB2YWx1ZSA+PiAxNjtcbiAgcmV0dXJuIHZhbHVlICsgMTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBhcyBhIFJvbWFuIG51bWVyYWwgc3RyaW5nLlxuICogQHJldHVybnMgVGhlIFJvbWFuIG51bWVyYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3RvUm9tYW5OdW1lcmFscycsIGZ1bmN0aW9uKCk6IHN0cmluZyB7XG4gIGlmICh0aGlzIDw9IDAgfHwgdGhpcyA+PSA0MDAwKSB0aHJvdyBuZXcgRXJyb3IoJ1JvbWFuIG51bWVyYWxzIGFyZSBvbmx5IGRlZmluZWQgZm9yIHBvc2l0aXZlIGludGVnZXJzIGxlc3MgdGhhbiA0MDAwLicpO1xuICBjb25zdCByb21hbk51bWVyYWxzOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAgIDEwMDA6ICdNJywgOTAwOiAnQ00nLCA1MDA6ICdEJywgNDAwOiAnQ0QnLFxuICAgIDEwMDogJ0MnLCA5MDogJ1hDJywgNTA6ICdMJywgNDA6ICdYTCcsXG4gICAgMTA6ICdYJywgOTogJ0lYJywgNTogJ1YnLCA0OiAnSVYnLCAxOiAnSSdcbiAgfTtcbiAgbGV0IG51bSA9IHRoaXM7XG4gIGxldCByZXN1bHQgPSAnJztcbiAgZm9yIChjb25zdCB2YWx1ZSBpbiByb21hbk51bWVyYWxzKSB7XG4gICAgY29uc3QgaW50VmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgd2hpbGUgKG51bSA+PSBpbnRWYWx1ZSkge1xuICAgICAgcmVzdWx0ICs9IHJvbWFuTnVtZXJhbHNbdmFsdWVdO1xuICAgICAgbnVtIC09IGludFZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYml0d2lzZSBOT1QgKH4pIG9mIHRoZSBudW1iZXIuXG4gKiBAcmV0dXJucyBUaGUgYml0d2lzZSBOT1Qgb2YgdGhlIG51bWJlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2JpdHdpc2VOb3QnLCBmdW5jdGlvbigpOiBudW1iZXIge1xuICByZXR1cm4gfnRoaXM7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBiaXR3aXNlIEFORCAoJikgb2YgdGhlIG51bWJlciBhbmQgdGhlIHByb3ZpZGVkIHZhbHVlLlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIHBlcmZvcm0gYml0d2lzZSBBTkQgd2l0aC5cbiAqIEByZXR1cm5zIFRoZSBiaXR3aXNlIEFORCBvZiB0aGUgbnVtYmVyIGFuZCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdiaXR3aXNlQW5kJywgZnVuY3Rpb24odmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiB0aGlzICYgdmFsdWU7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBiaXR3aXNlIE9SICh8KSBvZiB0aGUgbnVtYmVyIGFuZCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gcGVyZm9ybSBiaXR3aXNlIE9SIHdpdGguXG4gKiBAcmV0dXJucyBUaGUgYml0d2lzZSBPUiBvZiB0aGUgbnVtYmVyIGFuZCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdiaXR3aXNlT3InLCBmdW5jdGlvbih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHRoaXMgfCB2YWx1ZTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGJpdHdpc2UgWE9SICheKSBvZiB0aGUgbnVtYmVyIGFuZCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gcGVyZm9ybSBiaXR3aXNlIFhPUiB3aXRoLlxuICogQHJldHVybnMgVGhlIGJpdHdpc2UgWE9SIG9mIHRoZSBudW1iZXIgYW5kIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2JpdHdpc2VYb3InLCBmdW5jdGlvbih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHRoaXMgXiB2YWx1ZTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBsZWZ0LXNoaWZ0ZWQgKDw8KSBieSB0aGUgcHJvdmlkZWQgbnVtYmVyIG9mIGJpdHMuXG4gKiBAcGFyYW0gYml0cyAtIFRoZSBudW1iZXIgb2YgYml0cyB0byBsZWZ0LXNoaWZ0IGJ5LlxuICogQHJldHVybnMgVGhlIGxlZnQtc2hpZnRlZCBudW1iZXIuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdsZWZ0U2hpZnQnLCBmdW5jdGlvbihiaXRzOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdGhpcyA8PCBiaXRzO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIHJpZ2h0LXNoaWZ0ZWQgKD4+KSBieSB0aGUgcHJvdmlkZWQgbnVtYmVyIG9mIGJpdHMuXG4gKiBAcGFyYW0gYml0cyAtIFRoZSBudW1iZXIgb2YgYml0cyB0byByaWdodC1zaGlmdCBieS5cbiAqIEByZXR1cm5zIFRoZSByaWdodC1zaGlmdGVkIG51bWJlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3JpZ2h0U2hpZnQnLCBmdW5jdGlvbihiaXRzOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdGhpcyA+PiBiaXRzO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIHplcm8tZmlsbGVkIHJpZ2h0LXNoaWZ0ZWQgKD4+PikgYnkgdGhlIHByb3ZpZGVkIG51bWJlciBvZiBiaXRzLlxuICogQHBhcmFtIGJpdHMgLSBUaGUgbnVtYmVyIG9mIGJpdHMgdG8gemVyby1maWxsIHJpZ2h0LXNoaWZ0IGJ5LlxuICogQHJldHVybnMgVGhlIHplcm8tZmlsbGVkIHJpZ2h0LXNoaWZ0ZWQgbnVtYmVyLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcignemVyb0ZpbGxSaWdodFNoaWZ0JywgZnVuY3Rpb24oYml0czogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHRoaXMgPj4+IGJpdHM7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG51bWJlciBpcyBhIHNhZmUgaW50ZWdlciAoYmV0d2VlbiAtKDJeNTMgLSAxKSBhbmQgMl41MyAtIDEpLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGEgc2FmZSBpbnRlZ2VyLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdpc1NhZmVJbnRlZ2VyJywgZnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiBOdW1iZXIuaXNTYWZlSW50ZWdlcih0aGlzKTtcbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgbnVtYmVyIGlzIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgYSBKYXZhU2NyaXB0IHNhZmUgaW50ZWdlciAoYmV0d2VlbiAtKDJeNTMgLSAxKSBhbmQgMl41MyAtIDEpLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgYSBzYWZlIGludGVnZXIsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2lzSW5SYW5nZU9mU2FmZUludGVnZXInLCBmdW5jdGlvbigpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRoaXMgPj0gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIgJiYgdGhpcyA8PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGJpbmFyeSByZXByZXNlbnRhdGlvbiBvZiB0aGUgbnVtYmVyIHdpdGggYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGJpdHMuXG4gKiBAcGFyYW0gYml0Q291bnQgLSBUaGUgbnVtYmVyIG9mIGJpdHMgaW4gdGhlIGJpbmFyeSByZXByZXNlbnRhdGlvbi5cbiAqIEByZXR1cm5zIFRoZSBiaW5hcnkgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3RvQmluYXJ5V2l0aEJpdENvdW50JywgZnVuY3Rpb24oYml0Q291bnQ6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChiaXRDb3VudCA8IDEgfHwgYml0Q291bnQgPiA1MykgdGhyb3cgbmV3IEVycm9yKCdCaXQgY291bnQgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDUzLicpO1xuICBjb25zdCBiaW5hcnlTdHJpbmcgPSB0aGlzLnRvU3RyaW5nKDIpO1xuICByZXR1cm4gYmluYXJ5U3RyaW5nLnBhZFN0YXJ0KGJpdENvdW50LCAnMCcpO1xufSk7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIG51bWJlciB0byBhIHN0cmluZyB3aXRoIGNvbW1hcyBmb3IgdGhvdXNhbmRzIHNlcGFyYXRvci5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlciB3aXRoIGNvbW1hcy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2Zvcm1hdFdpdGhDb21tYXMnLCBmdW5jdGlvbigpOiBzdHJpbmcge1xuICByZXR1cm4gdGhpcy50b0xvY2FsZVN0cmluZygpO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSBudW1iZXIgYW5kIGFsbCB0aGUgbnVtYmVycyBwcm92aWRlZC5cbiAqIEBwYXJhbSBudW1iZXJzIC0gQWRkaXRpb25hbCBudW1iZXJzIHRvIGFkZCB0byB0aGUgb3JpZ2luYWwgbnVtYmVyLlxuICogQHJldHVybnMgVGhlIHN1bSBvZiBhbGwgbnVtYmVycy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3N1bScsIGZ1bmN0aW9uKC4uLm51bWJlcnM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgcmV0dXJuIFt0aGlzLCAuLi5udW1iZXJzXS5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKyB2YWwsIDApO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3ViIG9mIHRoZSBudW1iZXIgYW5kIGFsbCB0aGUgbnVtYmVycyBwcm92aWRlZC5cbiAqIEBwYXJhbSBudW1iZXJzIC0gQWRkaXRpb25hbCBudW1iZXJzIHRvIGFkZCB0byB0aGUgb3JpZ2luYWwgbnVtYmVyLlxuICogQHJldHVybnMgVGhlIHN1YiBvZiBhbGwgbnVtYmVycy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3N1YicsIGZ1bmN0aW9uKC4uLm51bWJlcnM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgcmV0dXJuIFt0aGlzLCAuLi5udW1iZXJzXS5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgLSB2YWwsIDApO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgbnVtYmVyIGFuZCBhbGwgdGhlIG51bWJlcnMgcHJvdmlkZWQuXG4gKiBAcGFyYW0gbnVtYmVycyAtIEFkZGl0aW9uYWwgbnVtYmVycyB0byBtdWx0aXBseSB3aXRoIHRoZSBvcmlnaW5hbCBudW1iZXIuXG4gKiBAcmV0dXJucyBUaGUgcHJvZHVjdCBvZiBhbGwgbnVtYmVycy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ3Byb2R1Y3QnLCBmdW5jdGlvbiguLi5udW1iZXJzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIHJldHVybiBbdGhpcywgLi4ubnVtYmVyc10ucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjICogdmFsLCAxKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gdmFsdWUgYmV0d2VlbiB0aGUgbnVtYmVyIGFuZCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29tcGFyZSB3aXRoLlxuICogQHJldHVybnMgVGhlIG1pbmltdW0gdmFsdWUuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdtaW4nLCBmdW5jdGlvbih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWluKHRoaXMsIHZhbHVlKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgYmV0d2VlbiB0aGUgbnVtYmVyIGFuZCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29tcGFyZSB3aXRoLlxuICogQHJldHVybnMgVGhlIG1heGltdW0gdmFsdWUuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdtYXgnLCBmdW5jdGlvbih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWF4KHRoaXMsIHZhbHVlKTtcbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgbnVtYmVyIGlzIE5hTiAoTm90LWEtTnVtYmVyKS5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG51bWJlciBpcyBOYU4sIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXROdW1iZXIoJ2lzTmFOJywgZnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc05hTih0aGlzKTtcbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgbnVtYmVyIGlzIGZpbml0ZSAobm90IE5hTiwgbm90IEluZmluaXR5LCBhbmQgbm90IC1JbmZpbml0eSkuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgZmluaXRlLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdpc0Zpbml0ZScsIGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNGaW5pdGUodGhpcyk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiB0aGUgbnVtYmVyIGFuZCB0aGUgcHJvdmlkZWQgdmFsdWUgKGluY2x1c2l2ZSkuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gZ2VuZXJhdGUgYSByYW5kb20gaW50ZWdlciB3aXRoLlxuICogQHJldHVybnMgVGhlIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gdGhlIG51bWJlciBhbmQgdGhlIHByb3ZpZGVkIHZhbHVlLlxuICovXG5jcmVhdGVFeHRlbmRJdE51bWJlcigncmFuZG9tSW50JywgZnVuY3Rpb24odmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IG1pbiA9IE1hdGgubWluKHRoaXMsIHZhbHVlKTtcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgodGhpcywgdmFsdWUpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gdGhlIG51bWJlciBhbmQgdGhlIHByb3ZpZGVkIHZhbHVlLlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGdlbmVyYXRlIGEgcmFuZG9tIG51bWJlciB3aXRoLlxuICogQHJldHVybnMgVGhlIHJhbmRvbSBudW1iZXIgYmV0d2VlbiB0aGUgbnVtYmVyIGFuZCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0TnVtYmVyKCdyYW5kb20nLCBmdW5jdGlvbih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgbWluID0gTWF0aC5taW4odGhpcywgdmFsdWUpO1xuICBjb25zdCBtYXggPSBNYXRoLm1heCh0aGlzLCB2YWx1ZSk7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59KTsiLCAiLyoqIFxuICogVGhlIE1haW4gRnVuY3Rpb24gVG8gQ3JlYXRlIFRoZSBFeHRlbmRzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUV4dGVuZEl0QXJyYXkobmFtZTogc3RyaW5nLCBmdW5jOiBGdW5jdGlvbik6IHZvaWQge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlW25hbWVdID0gZnVuYztcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJucyBUaGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgYXJyYXkuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ2ZpcnN0JywgZnVuY3Rpb248VD4oKTogVCB7XG4gIHJldHVybiB0aGlzWzBdO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBhcnJheS5cbiAqIEByZXR1cm5zIFRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGFycmF5LlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdsYXN0JywgZnVuY3Rpb248VD4oKTogVCB7XG4gIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlIGVsZW1lbnRzIHJldmVyc2VkLlxuICogQHJldHVybnMgQSBuZXcgYXJyYXkgd2l0aCB0aGUgZWxlbWVudHMgcmV2ZXJzZWQuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ3JldmVyc2UnLCBmdW5jdGlvbjxUPigpOiBUW10ge1xuICByZXR1cm4gdGhpcy5zbGljZSgpLnJldmVyc2UoKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB1bmlxdWUgZWxlbWVudHMgKHJlbW92ZXMgZHVwbGljYXRlcykuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIHVuaXF1ZSBlbGVtZW50cy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgndW5pcXVlJywgZnVuY3Rpb248VD4oKTogVFtdIHtcbiAgcmV0dXJuIFsuLi5uZXcgU2V0KHRoaXMpXTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgZWxlbWVudHMgc29ydGVkIGluIGFzY2VuZGluZyBvcmRlci5cbiAqIEBwYXJhbSBjb21wYXJlRm4gLSBPcHRpb25hbCBmdW5jdGlvbiB0byBkZWZpbmUgdGhlIHNvcnQgb3JkZXIuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIHRoZSBlbGVtZW50cyBzb3J0ZWQgaW4gYXNjZW5kaW5nIG9yZGVyLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdzb3J0QXNjJywgZnVuY3Rpb248VD4oY29tcGFyZUZuPzogKGE6IFQsIGI6IFQpID0+IG51bWJlcik6IFRbXSB7XG4gIHJldHVybiB0aGlzLnNsaWNlKCkuc29ydChjb21wYXJlRm4pO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSBlbGVtZW50cyBzb3J0ZWQgaW4gZGVzY2VuZGluZyBvcmRlci5cbiAqIEBwYXJhbSBjb21wYXJlRm4gLSBPcHRpb25hbCBmdW5jdGlvbiB0byBkZWZpbmUgdGhlIHNvcnQgb3JkZXIuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIHRoZSBlbGVtZW50cyBzb3J0ZWQgaW4gZGVzY2VuZGluZyBvcmRlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnc29ydERlc2MnLCBmdW5jdGlvbjxUPihjb21wYXJlRm4/OiAoYTogVCwgYjogVCkgPT4gbnVtYmVyKTogVFtdIHtcbiAgcmV0dXJuIHRoaXMuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBjb21wYXJlRm4gPyAtY29tcGFyZUZuKGEsIGIpIDogKGIgYXMgYW55KSAtIChhIGFzIGFueSkpO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSBlbGVtZW50cyBzb3J0ZWQgYmFzZWQgb24gYSBzcGVjaWZpYyBwcm9wZXJ0eSBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gKiBAcGFyYW0gcHJvcCAtIFRoZSBwcm9wZXJ0eSB0byB1c2UgZm9yIHNvcnRpbmcuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIHRoZSBlbGVtZW50cyBzb3J0ZWQgYmFzZWQgb24gdGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ3NvcnRCeVByb3BBc2MnLCBmdW5jdGlvbjxUPihwcm9wOiBrZXlvZiBUKTogVFtdIHtcbiAgcmV0dXJuIHRoaXMuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiAoYVtwcm9wXSBhcyBhbnkpIC0gKGJbcHJvcF0gYXMgYW55KSk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlIGVsZW1lbnRzIHNvcnRlZCBiYXNlZCBvbiBhIHNwZWNpZmljIHByb3BlcnR5IGluIGRlc2NlbmRpbmcgb3JkZXIuXG4gKiBAcGFyYW0gcHJvcCAtIFRoZSBwcm9wZXJ0eSB0byB1c2UgZm9yIHNvcnRpbmcuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIHRoZSBlbGVtZW50cyBzb3J0ZWQgYmFzZWQgb24gdGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBpbiBkZXNjZW5kaW5nIG9yZGVyLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdzb3J0QnlQcm9wRGVzYycsIGZ1bmN0aW9uPFQ+KHByb3A6IGtleW9mIFQpOiBUW10ge1xuICByZXR1cm4gdGhpcy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IChiW3Byb3BdIGFzIGFueSkgLSAoYVtwcm9wXSBhcyBhbnkpKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCBvbmx5IHRoZSBlbGVtZW50cyB0aGF0IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICogQHBhcmFtIGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gdGVzdCBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5LlxuICogQHJldHVybnMgQSBuZXcgYXJyYXkgd2l0aCBvbmx5IHRoZSBlbGVtZW50cyB0aGF0IHBhc3MgdGhlIHRlc3QuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ2ZpbHRlcicsIGZ1bmN0aW9uPFQ+KGNhbGxiYWNrOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IHVua25vd24pOiBUW10ge1xuICByZXR1cm4gdGhpcy5zbGljZSgpLmZpbHRlcihjYWxsYmFjayk7XG59KTtcblxuLyoqXG4gKiBFeGVjdXRlcyBhIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2ggYXJyYXkgZWxlbWVudC5cbiAqIEBwYXJhbSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgZm9yIGVhY2ggZWxlbWVudC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnZm9yRWFjaCcsIGZ1bmN0aW9uPFQ+KGNhbGxiYWNrOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IHZvaWQpOiB2b2lkIHtcbiAgdGhpcy5zbGljZSgpLmZvckVhY2goY2FsbGJhY2spO1xufSk7XG5cbi8qKlxuICogVGVzdHMgd2hldGhlciBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICogQHBhcmFtIGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gdGVzdCBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5LlxuICogQHJldHVybnMgVHJ1ZSBpZiBhbGwgZWxlbWVudHMgcGFzcyB0aGUgdGVzdCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdldmVyeScsIGZ1bmN0aW9uPFQ+KGNhbGxiYWNrOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgcmV0dXJuIHRoaXMuc2xpY2UoKS5ldmVyeShjYWxsYmFjayk7XG59KTtcblxuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBhcnJheSBwYXNzZXMgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICogQHBhcmFtIGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gdGVzdCBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5LlxuICogQHJldHVybnMgVHJ1ZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBwYXNzZXMgdGhlIHRlc3QsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnc29tZScsIGZ1bmN0aW9uPFQ+KGNhbGxiYWNrOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgcmV0dXJuIHRoaXMuc2xpY2UoKS5zb21lKGNhbGxiYWNrKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBhcnJheSB0aGF0IHNhdGlzZmllcyB0aGUgcHJvdmlkZWQgdGVzdGluZyBmdW5jdGlvbi5cbiAqIEBwYXJhbSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIHRlc3QgZm9yIGVhY2ggZWxlbWVudC5cbiAqIEByZXR1cm5zIFRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IHNhdGlzZmllcyB0aGUgcHJvdmlkZWQgdGVzdGluZyBmdW5jdGlvbiwgb3IgLTEgaWYgbm9uZSBpcyBmb3VuZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnZmluZEluZGV4JywgZnVuY3Rpb248VD4oY2FsbGJhY2s6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IFRbXSkgPT4gYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiB0aGlzLmZpbmRJbmRleChjYWxsYmFjayk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBlbGVtZW50IGluIHRoZSBhcnJheSB0aGF0IHNhdGlzZmllcyB0aGUgcHJvdmlkZWQgdGVzdGluZyBmdW5jdGlvbi5cbiAqIEBwYXJhbSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIHRlc3QgZm9yIGVhY2ggZWxlbWVudC5cbiAqIEByZXR1cm5zIFRoZSBpbmRleCBvZiB0aGUgbGFzdCBlbGVtZW50IHRoYXQgc2F0aXNmaWVzIHRoZSBwcm92aWRlZCB0ZXN0aW5nIGZ1bmN0aW9uLCBvciAtMSBpZiBub25lIGlzIGZvdW5kLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdmaW5kTGFzdEluZGV4JywgZnVuY3Rpb248VD4oY2FsbGJhY2s6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IFRbXSkgPT4gYm9vbGVhbik6IG51bWJlciB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGNhbGxiYWNrKHRoaXNbaV0sIGksIHRoaXMpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIGFsbCBzdWItYXJyYXkgZWxlbWVudHMgY29uY2F0ZW5hdGVkIGludG8gaXQgcmVjdXJzaXZlbHkuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIHRoZSBlbGVtZW50cyBjb25jYXRlbmF0ZWQgaW50byBpdCByZWN1cnNpdmVseS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnZmxhdCcsIGZ1bmN0aW9uPFQ+KCk6IFRbXSB7XG4gIHJldHVybiB0aGlzLmZsYXQoKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCBhbGwgc3ViLWFycmF5IGVsZW1lbnRzIGNvbmNhdGVuYXRlZCBpbnRvIGl0IHJlY3Vyc2l2ZWx5IHVwIHRvIHRoZSBzcGVjaWZpZWQgZGVwdGguXG4gKiBAcGFyYW0gZGVwdGggLSBUaGUgZGVwdGggbGV2ZWwgc3BlY2lmeWluZyBob3cgZGVlcCBhIG5lc3RlZCBhcnJheSBzdHJ1Y3R1cmUgc2hvdWxkIGJlIGZsYXR0ZW5lZC5cbiAqIEByZXR1cm5zIEEgbmV3IGFycmF5IHdpdGggdGhlIGVsZW1lbnRzIGNvbmNhdGVuYXRlZCBpbnRvIGl0IHJlY3Vyc2l2ZWx5IHVwIHRvIHRoZSBzcGVjaWZpZWQgZGVwdGguXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ2ZsYXREZXB0aCcsIGZ1bmN0aW9uPFQ+KGRlcHRoOiBudW1iZXIpOiBUW10ge1xuICByZXR1cm4gdGhpcy5mbGF0KGRlcHRoKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBlbGVtZW50cyBmcm9tIHRoZSBzdGFydCBvZiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gY291bnQgLSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGluY2x1ZGUgZnJvbSB0aGUgc3RhcnQuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBhcnJheS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgndGFrZScsIGZ1bmN0aW9uPFQ+KGNvdW50OiBudW1iZXIpOiBUW10ge1xuICByZXR1cm4gdGhpcy5zbGljZSgwLCBjb3VudCk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggZWxlbWVudHMgZXhjbHVkZWQgZnJvbSB0aGUgc3RhcnQuXG4gKiBAcGFyYW0gY291bnQgLSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgc3RhcnQuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIGVsZW1lbnRzIGV4Y2x1ZGVkIGZyb20gdGhlIHN0YXJ0LlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdkcm9wJywgZnVuY3Rpb248VD4oY291bnQ6IG51bWJlcik6IFRbXSB7XG4gIHJldHVybiB0aGlzLnNsaWNlKGNvdW50KTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCBlbGVtZW50cyBleGNsdWRlZCBmcm9tIHRoZSBlbmQuXG4gKiBAcGFyYW0gY291bnQgLSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgZW5kLlxuICogQHJldHVybnMgQSBuZXcgYXJyYXkgd2l0aCBlbGVtZW50cyBleGNsdWRlZCBmcm9tIHRoZSBlbmQuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ2Ryb3BSaWdodCcsIGZ1bmN0aW9uPFQ+KGNvdW50OiBudW1iZXIpOiBUW10ge1xuICByZXR1cm4gdGhpcy5zbGljZSgwLCAtY291bnQpO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSBlbGVtZW50cyBpbiBhIHJhbmRvbSBvcmRlci5cbiAqIEByZXR1cm5zIEEgbmV3IGFycmF5IHdpdGggdGhlIGVsZW1lbnRzIGluIGEgcmFuZG9tIG9yZGVyLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdyYW5kb21PcmRlcicsIGZ1bmN0aW9uPFQ+KCk6IFRbXSB7XG4gIGNvbnN0IGFycmF5ID0gdGhpcy5zbGljZSgpO1xuICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG9jY3VycmVuY2Ugb2YgYSBzcGVjaWZpZWQgZWxlbWVudCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyBUaGUgaW5kZXggb2YgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiB0aGUgc3BlY2lmaWVkIGVsZW1lbnQsIG9yIC0xIGlmIG5vdCBmb3VuZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnbGFzdEluZGV4T2YnLCBmdW5jdGlvbjxUPihlbGVtZW50OiBUKTogbnVtYmVyIHtcbiAgcmV0dXJuIHRoaXMubGFzdEluZGV4T2YoZWxlbWVudCk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgc2F0aXNmaWVzIHRoZSBwcm92aWRlZCB0ZXN0aW5nIGZ1bmN0aW9uLlxuICogQHBhcmFtIGNhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCB0ZXN0cyBlYWNoIGVsZW1lbnQuXG4gKiBAcmV0dXJucyBUaGUgZmlyc3QgZWxlbWVudCB0aGF0IHNhdGlzZmllcyB0aGUgcHJvdmlkZWQgdGVzdGluZyBmdW5jdGlvbiwgb3IgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnZmluZCcsIGZ1bmN0aW9uPFQ+KGNhbGxiYWNrOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IGJvb2xlYW4pOiBUIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHRoaXMuZmluZChjYWxsYmFjayk7XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBlcXVhbCB0byBudWxsIG9yIHVuZGVmaW5lZC5cbiAqIEByZXR1cm5zIEEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBlcXVhbCB0byBudWxsIG9yIHVuZGVmaW5lZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnY29tcGFjdCcsIGZ1bmN0aW9uPFQ+KCk6IFRbXSB7XG4gIHJldHVybiB0aGlzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIGVsZW1lbnRzIGluY2x1ZGVkIGJldHdlZW4gc3RhcnQgYW5kIGVuZCBpbmRpY2VzIChlbmQgaW5kZXggbm90IGluY2x1ZGVkKS5cbiAqIElmIHN0YXJ0IGlzIG5lZ2F0aXZlLCBpdCdzIG9mZnNldCBmcm9tIHRoZSBlbmQgb2YgdGhlIGFycmF5LiBJZiBlbmQgaXMgbmVnYXRpdmUsIGl0J3Mgb2Zmc2V0IGZyb20gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gc3RhcnQgLSBUaGUgc3RhcnRpbmcgaW5kZXggKGluY2x1c2l2ZSkuXG4gKiBAcGFyYW0gZW5kIC0gVGhlIGVuZGluZyBpbmRleCAoZXhjbHVzaXZlKS5cbiAqIEByZXR1cm5zIEEgbmV3IGFycmF5IHdpdGggZWxlbWVudHMgaW5jbHVkZWQgYmV0d2VlbiBzdGFydCBhbmQgZW5kIGluZGljZXMuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ3NsaWNlUmFuZ2UnLCBmdW5jdGlvbjxUPihzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IFRbXSB7XG4gIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICBjb25zdCByZWFsU3RhcnQgPSBzdGFydCA8IDAgPyBNYXRoLm1heChsZW5ndGggKyBzdGFydCwgMCkgOiBNYXRoLm1pbihzdGFydCwgbGVuZ3RoKTtcbiAgY29uc3QgcmVhbEVuZCA9IGVuZCA8IDAgPyBNYXRoLm1heChsZW5ndGggKyBlbmQsIDApIDogTWF0aC5taW4oZW5kLCBsZW5ndGgpO1xuICByZXR1cm4gdGhpcy5zbGljZShyZWFsU3RhcnQsIHJlYWxFbmQpO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIGVsZW1lbnRzIGluY2x1ZGVkIGJldHdlZW4gc3RhcnQgYW5kIGVuZCBpbmRpY2VzIChib3RoIGluY2x1c2l2ZSkuXG4gKiBJZiBzdGFydCBpcyBuZWdhdGl2ZSwgaXQncyBvZmZzZXQgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS4gSWYgZW5kIGlzIG5lZ2F0aXZlLCBpdCdzIG9mZnNldCBmcm9tIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICogQHBhcmFtIHN0YXJ0IC0gVGhlIHN0YXJ0aW5nIGluZGV4IChpbmNsdXNpdmUpLlxuICogQHBhcmFtIGVuZCAtIFRoZSBlbmRpbmcgaW5kZXggKGluY2x1c2l2ZSkuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIGVsZW1lbnRzIGluY2x1ZGVkIGJldHdlZW4gc3RhcnQgYW5kIGVuZCBpbmRpY2VzLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdzbGljZVJhbmdlSW5jbHVzaXZlJywgZnVuY3Rpb248VD4oc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBUW10ge1xuICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgY29uc3QgcmVhbFN0YXJ0ID0gc3RhcnQgPCAwID8gTWF0aC5tYXgobGVuZ3RoICsgc3RhcnQsIDApIDogTWF0aC5taW4oc3RhcnQsIGxlbmd0aCAtIDEpO1xuICBjb25zdCByZWFsRW5kID0gZW5kIDwgMCA/IE1hdGgubWF4KGxlbmd0aCArIGVuZCwgMCkgOiBNYXRoLm1pbihlbmQsIGxlbmd0aCAtIDEpO1xuICByZXR1cm4gdGhpcy5zbGljZShyZWFsU3RhcnQsIHJlYWxFbmQgKyAxKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCBhbGwgZWxlbWVudHMgaW4gcmV2ZXJzZSBvcmRlci5cbiAqIEByZXR1cm5zIEEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIGluIHJldmVyc2Ugb3JkZXIuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ3JldmVyc2UnLCBmdW5jdGlvbjxUPigpOiBUW10ge1xuICByZXR1cm4gdGhpcy5zbGljZSgpLnJldmVyc2UoKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCBhbGwgZWxlbWVudHMgZnJvbSB0aGUgZW5kIGluIHJldmVyc2Ugb3JkZXIuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBlbmQgaW4gcmV2ZXJzZSBvcmRlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgncmV2ZXJzZUZyb21FbmQnLCBmdW5jdGlvbjxUPigpOiBUW10ge1xuICByZXR1cm4gdGhpcy5zbGljZSgpLnJldmVyc2UoKS5tYXAoKF8sIGluZGV4KSA9PiB0aGlzW3RoaXMubGVuZ3RoIC0gMSAtIGluZGV4XSk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggYSBzcGVjaWZpYyBudW1iZXIgb2YgZWxlbWVudHMgcmVwZWF0ZWQgbXVsdGlwbGUgdGltZXMuXG4gKiBAcGFyYW0gY291bnQgLSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHJlcGVhdCB0aGUgZWxlbWVudHMuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIHRoZSBlbGVtZW50cyByZXBlYXRlZCBtdWx0aXBsZSB0aW1lcy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgncmVwZWF0JywgZnVuY3Rpb248VD4oY291bnQ6IG51bWJlcik6IFRbXSB7XG4gIGlmIChjb3VudCA8PSAwKSByZXR1cm4gW107XG4gIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjb3VudCB9LCAoKSA9PiB0aGlzKS5mbGF0KCk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggZWxlbWVudHMgc29ydGVkIGJhc2VkIG9uIGEgc3BlY2lmaWMgcHJvcGVydHkgaW4gYXNjZW5kaW5nIG9yZGVyLlxuICogQHBhcmFtIHByb3AgLSBUaGUgcHJvcGVydHkgdG8gdXNlIGZvciBzb3J0aW5nLlxuICogQHJldHVybnMgQSBuZXcgYXJyYXkgd2l0aCBlbGVtZW50cyBzb3J0ZWQgYmFzZWQgb24gdGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ3NvcnRCeVByb3BlcnR5JywgZnVuY3Rpb248VD4ocHJvcDoga2V5b2YgVCk6IFRbXSB7XG4gIHJldHVybiB0aGlzLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gKGFbcHJvcF0gPiBiW3Byb3BdID8gMSA6IGFbcHJvcF0gPCBiW3Byb3BdID8gLTEgOiAwKSk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggZWxlbWVudHMgc29ydGVkIGJhc2VkIG9uIGEgc3BlY2lmaWMgcHJvcGVydHkgaW4gZGVzY2VuZGluZyBvcmRlci5cbiAqIEBwYXJhbSBwcm9wIC0gVGhlIHByb3BlcnR5IHRvIHVzZSBmb3Igc29ydGluZy5cbiAqIEByZXR1cm5zIEEgbmV3IGFycmF5IHdpdGggZWxlbWVudHMgc29ydGVkIGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgcHJvcGVydHkgaW4gZGVzY2VuZGluZyBvcmRlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnc29ydEJ5UHJvcGVydHlEZXNjZW5kaW5nJywgZnVuY3Rpb248VD4ocHJvcDoga2V5b2YgVCk6IFRbXSB7XG4gIHJldHVybiB0aGlzLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gKGFbcHJvcF0gPCBiW3Byb3BdID8gMSA6IGFbcHJvcF0gPiBiW3Byb3BdID8gLTEgOiAwKSk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRyYW5zZm9ybWVkIGJ5IGEgbWFwcGluZyBmdW5jdGlvbi5cbiAqIEBwYXJhbSBtYXBwZXIgLSBGdW5jdGlvbiB0aGF0IG1hcHMgZWFjaCBlbGVtZW50IHRvIGEgbmV3IHZhbHVlLlxuICogQHJldHVybnMgQSBuZXcgYXJyYXkgd2l0aCBhbGwgZWxlbWVudHMgbWFwcGVkIHRvIG5ldyB2YWx1ZXMuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ21hcFdpdGgnLCBmdW5jdGlvbjxULCBVPihtYXBwZXI6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IFRbXSkgPT4gVSk6IFVbXSB7XG4gIHJldHVybiB0aGlzLm1hcChtYXBwZXIpO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIGVsZW1lbnRzIHRoYXQgYXJlIHByZXNlbnQgaW4gYm90aCBhcnJheXMuXG4gKiBAcGFyYW0gb3RoZXJBcnJheSAtIFRoZSBhcnJheSB0byBpbnRlcnNlY3Qgd2l0aC5cbiAqIEByZXR1cm5zIEEgbmV3IGFycmF5IHdpdGggZWxlbWVudHMgdGhhdCBhcmUgcHJlc2VudCBpbiBib3RoIGFycmF5cy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnaW50ZXJzZWN0JywgZnVuY3Rpb248VD4ob3RoZXJBcnJheTogVFtdKTogVFtdIHtcbiAgcmV0dXJuIHRoaXMuZmlsdGVyKCh2YWx1ZSkgPT4gb3RoZXJBcnJheS5pbmNsdWRlcyh2YWx1ZSkpO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIGVsZW1lbnRzIHRoYXQgYXJlIHVuaXF1ZSB0byB0aGUgY3VycmVudCBhcnJheSAobm90IHByZXNlbnQgaW4gdGhlIG90aGVyIGFycmF5KS5cbiAqIEBwYXJhbSBvdGhlckFycmF5IC0gVGhlIGFycmF5IHRvIGNvbXBhcmUgd2l0aC5cbiAqIEByZXR1cm5zIEEgbmV3IGFycmF5IHdpdGggZWxlbWVudHMgdGhhdCBhcmUgdW5pcXVlIHRvIHRoZSBjdXJyZW50IGFycmF5LlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdkaWZmZXJlbmNlJywgZnVuY3Rpb248VD4ob3RoZXJBcnJheTogVFtdKTogVFtdIHtcbiAgcmV0dXJuIHRoaXMuZmlsdGVyKCh2YWx1ZSkgPT4gIW90aGVyQXJyYXkuaW5jbHVkZXModmFsdWUpKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCBlbGVtZW50cyBmcm9tIGJvdGggYXJyYXlzIHdpdGhvdXQgZHVwbGljYXRlcy5cbiAqIEBwYXJhbSBvdGhlckFycmF5IC0gVGhlIGFycmF5IHRvIHVuaW9uIHdpdGguXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIGVsZW1lbnRzIGZyb20gYm90aCBhcnJheXMgd2l0aG91dCBkdXBsaWNhdGVzLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCd1bmlvbicsIGZ1bmN0aW9uPFQ+KG90aGVyQXJyYXk6IFRbXSk6IFRbXSB7XG4gIGNvbnN0IGNvbWJpbmVkID0gdGhpcy5jb25jYXQob3RoZXJBcnJheSk7XG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoY29tYmluZWQpKTtcbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgYXJyYXkgaXMgYSBzdWJzZXQgb2YgdGhlIG90aGVyIGFycmF5LlxuICogQHBhcmFtIG90aGVyQXJyYXkgLSBUaGUgYXJyYXkgdG8gY2hlY2sgYWdhaW5zdC5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGFycmF5IGlzIGEgc3Vic2V0IG9mIHRoZSBvdGhlciBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdpc1N1YnNldE9mJywgZnVuY3Rpb248VD4ob3RoZXJBcnJheTogVFtdKTogYm9vbGVhbiB7XG4gIHJldHVybiB0aGlzLmV2ZXJ5KCh2YWx1ZSkgPT4gb3RoZXJBcnJheS5pbmNsdWRlcyh2YWx1ZSkpO1xufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBhcnJheSBjb250YWlucyBvbmx5IHVuaXF1ZSBlbGVtZW50cyAobm8gZHVwbGljYXRlcykuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBhcnJheSBjb250YWlucyBvbmx5IHVuaXF1ZSBlbGVtZW50cywgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdpc1VuaXF1ZScsIGZ1bmN0aW9uPFQ+KCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdGhpcy5sZW5ndGggPT09IG5ldyBTZXQodGhpcykuc2l6ZTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBlbGVtZW50cyBmcm9tIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICogQHBhcmFtIGNvdW50IC0gVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBpbmNsdWRlIGZyb20gdGhlIGVuZC5cbiAqIEByZXR1cm5zIEEgbmV3IGFycmF5IHdpdGggdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZWxlbWVudHMgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgndGFrZUxhc3QnLCBmdW5jdGlvbjxUPihjb3VudDogbnVtYmVyKTogVFtdIHtcbiAgcmV0dXJuIHRoaXMuc2xpY2UoLWNvdW50KTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCBlbGVtZW50cyB0aGF0IG1lZXQgYSBzcGVjaWZpYyBjb25kaXRpb24uXG4gKiBAcGFyYW0gcHJlZGljYXRlIC0gRnVuY3Rpb24gdGhhdCB0ZXN0cyBlYWNoIGVsZW1lbnQuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIGVsZW1lbnRzIHRoYXQgbWVldCB0aGUgY29uZGl0aW9uLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdmaWx0ZXJCeScsIGZ1bmN0aW9uPFQ+KHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogVFtdKSA9PiBib29sZWFuKTogVFtdIHtcbiAgcmV0dXJuIHRoaXMuZmlsdGVyKHByZWRpY2F0ZSk7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSBtZWV0IGEgc3BlY2lmaWMgY29uZGl0aW9uLlxuICogQHBhcmFtIHByZWRpY2F0ZSAtIEZ1bmN0aW9uIHRoYXQgdGVzdHMgZWFjaCBlbGVtZW50LlxuICogQHJldHVybnMgVHJ1ZSBpZiBhbGwgZWxlbWVudHMgbWVldCB0aGUgY29uZGl0aW9uLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ2V2ZXJ5QnknLCBmdW5jdGlvbjxUPihwcmVkaWNhdGU6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IFRbXSkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICByZXR1cm4gdGhpcy5ldmVyeShwcmVkaWNhdGUpO1xufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBhcnJheSBtZWV0cyBhIHNwZWNpZmljIGNvbmRpdGlvbi5cbiAqIEBwYXJhbSBwcmVkaWNhdGUgLSBGdW5jdGlvbiB0aGF0IHRlc3RzIGVhY2ggZWxlbWVudC5cbiAqIEByZXR1cm5zIFRydWUgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgbWVldHMgdGhlIGNvbmRpdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdzb21lQnknLCBmdW5jdGlvbjxUPihwcmVkaWNhdGU6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IFRbXSkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICByZXR1cm4gdGhpcy5zb21lKHByZWRpY2F0ZSk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggZWxlbWVudHMgaW4gYSBmbGF0dGVuZWQgZm9ybWF0IHVwIHRvIGEgc3BlY2lmaWMgZGVwdGguXG4gKiBAcGFyYW0gZGVwdGggLSBUaGUgbWF4aW11bSBkZXB0aCBsZXZlbCB0byBmbGF0dGVuIChkZWZhdWx0OiAxKS5cbiAqIEByZXR1cm5zIEEgbmV3IGFycmF5IHdpdGggZWxlbWVudHMgZmxhdHRlbmVkIHVwIHRvIHRoZSBzcGVjaWZpZWQgZGVwdGguXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ2ZsYXR0ZW4nLCBmdW5jdGlvbjxUPihkZXB0aDogbnVtYmVyID0gMSk6IFRbXSB7XG4gIGZ1bmN0aW9uIGZsYXR0ZW5IZWxwZXIoYXJyOiBUW10sIGN1cnJlbnREZXB0aDogbnVtYmVyKTogVFtdIHtcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgoYWNjOiBUW10sIGl0ZW06IGFueSkgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkgJiYgY3VycmVudERlcHRoID4gMCkge1xuICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChmbGF0dGVuSGVscGVyKGl0ZW0sIGN1cnJlbnREZXB0aCAtIDEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhY2MuY29uY2F0KGl0ZW0pO1xuICAgICAgfVxuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHJldHVybiBmbGF0dGVuSGVscGVyKHRoaXMsIGRlcHRoKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5LlxuICogQHJldHVybnMgVGhlIHN1bSBvZiBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5LlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdzdW0nLCBmdW5jdGlvbigpOiBudW1iZXIge1xuICByZXR1cm4gdGhpcy5yZWR1Y2UoKGFjYzogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKSA9PiBhY2MgKyB2YWx1ZSwgMCk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhdmVyYWdlIHZhbHVlIG9mIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJucyBUaGUgYXZlcmFnZSB2YWx1ZSBvZiBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5LlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdhdmVyYWdlJywgZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcbiAgcmV0dXJuIHRoaXMucmVkdWNlKChhY2M6IG51bWJlciwgdmFsdWU6IG51bWJlcikgPT4gYWNjICsgdmFsdWUsIDApIC8gdGhpcy5sZW5ndGg7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGFycmF5IGlzIGVtcHR5IChoYXMgemVybyBlbGVtZW50cykuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBhcnJheSBpcyBlbXB0eSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdpc0VtcHR5JywgZnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gMDtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB1bmlxdWUgZWxlbWVudHMsIHJlbW92aW5nIGR1cGxpY2F0ZXMuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB3aXRoIHVuaXF1ZSBlbGVtZW50cy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgndW5pcXVlJywgZnVuY3Rpb248VD4oKTogVFtdIHtcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldCh0aGlzKSk7XG59KTtcblxuLyoqXG4gKiBFeGVjdXRlcyBhIGZ1bmN0aW9uIG9uIGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIHJlc3VsdHMuXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGVhY2ggZWxlbWVudC5cbiAqIEByZXR1cm5zIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGZ1bmN0aW9uIHRvIGVhY2ggZWxlbWVudC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnbWFwJywgZnVuY3Rpb248VCwgVT4oY2FsbGJhY2s6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IFRbXSkgPT4gVSk6IFVbXSB7XG4gIHJldHVybiB0aGlzLm1hcChjYWxsYmFjayk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIGVsZW1lbnQgaW4gdGhlIGFycmF5LlxuICogQHJldHVybnMgVGhlIG1heGltdW0gZWxlbWVudCBpbiB0aGUgYXJyYXkuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ21heCcsIGZ1bmN0aW9uPFQ+KCk6IFQgfCB1bmRlZmluZWQge1xuICByZXR1cm4gdGhpcy5yZWR1Y2UoKG1heDogVCB8IHVuZGVmaW5lZCwgY3VycmVudDogVCkgPT4gKG1heCA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnQgPiBtYXggPyBjdXJyZW50IDogbWF4KSwgdW5kZWZpbmVkKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gZWxlbWVudCBpbiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJucyBUaGUgbWluaW11bSBlbGVtZW50IGluIHRoZSBhcnJheS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnbWluJywgZnVuY3Rpb248VD4oKTogVCB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiB0aGlzLnJlZHVjZSgobWluOiBUIHwgdW5kZWZpbmVkLCBjdXJyZW50OiBUKSA9PiAobWluID09PSB1bmRlZmluZWQgfHwgY3VycmVudCA8IG1pbiA/IGN1cnJlbnQgOiBtaW4pLCB1bmRlZmluZWQpO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYSBzcGVjaWZpYyBlbGVtZW50IGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgdGhlIGVsZW1lbnQsIG9yIC0xIGlmIG5vdCBmb3VuZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnaW5kZXhPZicsIGZ1bmN0aW9uPFQ+KHZhbHVlOiBUKTogbnVtYmVyIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWx1ZSk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBvY2N1cnJlbmNlIG9mIGEgc3BlY2lmaWMgZWxlbWVudCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgZWxlbWVudCB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMgVGhlIGluZGV4IG9mIHRoZSBsYXN0IG9jY3VycmVuY2Ugb2YgdGhlIGVsZW1lbnQsIG9yIC0xIGlmIG5vdCBmb3VuZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnbGFzdEluZGV4T2YnLCBmdW5jdGlvbjxUPih2YWx1ZTogVCk6IG51bWJlciB7XG4gIHJldHVybiB0aGlzLmxhc3RJbmRleE9mKHZhbHVlKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCBlbGVtZW50cyBzb3J0ZWQgaW4gYXNjZW5kaW5nIG9yZGVyLlxuICogQHJldHVybnMgQSBuZXcgYXJyYXkgd2l0aCBlbGVtZW50cyBzb3J0ZWQgaW4gYXNjZW5kaW5nIG9yZGVyLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdzb3J0QnlBc2NlbmRpbmcnLCBmdW5jdGlvbjxUPigpOiBUW10ge1xuICByZXR1cm4gWy4uLnRoaXNdLnNvcnQoKGEsIGIpID0+IChhID4gYiA/IDEgOiBhIDwgYiA/IC0xIDogMCkpO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIGVsZW1lbnRzIHNvcnRlZCBpbiBkZXNjZW5kaW5nIG9yZGVyLlxuICogQHJldHVybnMgQSBuZXcgYXJyYXkgd2l0aCBlbGVtZW50cyBzb3J0ZWQgaW4gZGVzY2VuZGluZyBvcmRlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnc29ydEJ5RGVzY2VuZGluZycsIGZ1bmN0aW9uPFQ+KCk6IFRbXSB7XG4gIHJldHVybiBbLi4udGhpc10uc29ydCgoYSwgYikgPT4gKGEgPiBiID8gLTEgOiBhIDwgYiA/IDEgOiAwKSk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50IGF0IGEgc3BlY2lmaWMgaW5kZXggaW4gdGhlIGFycmF5LlxuICogQHBhcmFtIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBlbGVtZW50IHRvIHJldHJpZXZlLlxuICogQHJldHVybnMgVGhlIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleCwgb3IgdW5kZWZpbmVkIGlmIHRoZSBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0QXJyYXkoJ2dldEVsZW1lbnRBdCcsIGZ1bmN0aW9uPFQ+KGluZGV4OiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHRoaXNbaW5kZXhdO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIGVsZW1lbnRzIGZyb20gYSBzcGVjaWZpYyBzdGFydCBpbmRleCB1cCB0bywgYnV0IG5vdCBpbmNsdWRpbmcsIGFuIGVuZCBpbmRleC5cbiAqIEBwYXJhbSBzdGFydCAtIFRoZSBzdGFydCBpbmRleCAoaW5jbHVzaXZlKS5cbiAqIEBwYXJhbSBlbmQgLSBUaGUgZW5kIGluZGV4IChleGNsdXNpdmUpLlxuICogQHJldHVybnMgQSBuZXcgYXJyYXkgd2l0aCBlbGVtZW50cyBpbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdzbGljZScsIGZ1bmN0aW9uPFQ+KHN0YXJ0OiBudW1iZXIsIGVuZD86IG51bWJlcik6IFRbXSB7XG4gIHJldHVybiB0aGlzLnNsaWNlKHN0YXJ0LCBlbmQpO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIG9jY3VycmVuY2VzIG9mIGEgc3BlY2lmaWMgZWxlbWVudCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgZWxlbWVudCB0byBjb3VudCBvY2N1cnJlbmNlcyBvZi5cbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2Ygb2NjdXJyZW5jZXMgb2YgdGhlIGVsZW1lbnQgaW4gdGhlIGFycmF5LlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdjb3VudE9jY3VycmVuY2VzJywgZnVuY3Rpb248VD4odmFsdWU6IFQpOiBudW1iZXIge1xuICByZXR1cm4gdGhpcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gPT09IHZhbHVlKS5sZW5ndGg7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGFycmF5IGlzIGVxdWFsIHRvIGFub3RoZXIgYXJyYXkgKHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgb3JkZXIpLlxuICogQHBhcmFtIG90aGVyQXJyYXkgLSBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGFycmF5cyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnZXF1YWxzJywgZnVuY3Rpb248VD4ob3RoZXJBcnJheTogVFtdKTogYm9vbGVhbiB7XG4gIGlmICh0aGlzLmxlbmd0aCAhPT0gb3RoZXJBcnJheS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRoaXMuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IG90aGVyQXJyYXlbaW5kZXhdKTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgZWxlbWVudHMgc29ydGVkIGJhc2VkIG9uIGEgc3BlY2lmaWMgcHJvcGVydHkgaW4gYXNjZW5kaW5nIG9yZGVyLlxuICogQHBhcmFtIHByb3BlcnR5IC0gVGhlIHByb3BlcnR5IHRvIHVzZSBmb3Igc29ydGluZy5cbiAqIEByZXR1cm5zIEEgbmV3IGFycmF5IHdpdGggdGhlIGVsZW1lbnRzIHNvcnRlZCBiYXNlZCBvbiB0aGUgc3BlY2lmaWVkIHByb3BlcnR5IGluIGFzY2VuZGluZyBvcmRlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnc29ydEJ5UHJvcGVydHlBc2NlbmRpbmcnLCBmdW5jdGlvbjxUPihwcm9wZXJ0eToga2V5b2YgVCk6IFRbXSB7XG4gIHJldHVybiB0aGlzLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gKGFbcHJvcGVydHldIGFzIGFueSkgLSAoYltwcm9wZXJ0eV0gYXMgYW55KSk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlIGVsZW1lbnRzIHNvcnRlZCBiYXNlZCBvbiBhIHNwZWNpZmljIHByb3BlcnR5IGluIGRlc2NlbmRpbmcgb3JkZXIuXG4gKiBAcGFyYW0gcHJvcGVydHkgLSBUaGUgcHJvcGVydHkgdG8gdXNlIGZvciBzb3J0aW5nLlxuICogQHJldHVybnMgQSBuZXcgYXJyYXkgd2l0aCB0aGUgZWxlbWVudHMgc29ydGVkIGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgcHJvcGVydHkgaW4gZGVzY2VuZGluZyBvcmRlci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRBcnJheSgnc29ydEJ5UHJvcGVydHlEZXNjZW5kaW5nJywgZnVuY3Rpb248VD4ocHJvcGVydHk6IGtleW9mIFQpOiBUW10ge1xuICByZXR1cm4gdGhpcy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IChiW3Byb3BlcnR5XSBhcyBhbnkpIC0gKGFbcHJvcGVydHldIGFzIGFueSkpO1xufSk7XG5cbi8qKlxuICogU3BsaXRzIHRoZSBhcnJheSBpbnRvIGNodW5rcyBvZiB0aGUgc3BlY2lmaWVkIHNpemUuXG4gKiBAcGFyYW0gY2h1bmtTaXplIC0gVGhlIHNpemUgb2YgZWFjaCBjaHVuay5cbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGNodW5rcywgd2hlcmUgZWFjaCBjaHVuayBpcyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGVsZW1lbnRzLlxuICovXG5jcmVhdGVFeHRlbmRJdEFycmF5KCdjaHVuaycsIGZ1bmN0aW9uPFQ+KGNodW5rU2l6ZTogbnVtYmVyKTogVFtdW10ge1xuICBjb25zdCBjaHVua3M6IFRbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gY2h1bmtTaXplKSB7XG4gICAgY2h1bmtzLnB1c2godGhpcy5zbGljZShpLCBpICsgY2h1bmtTaXplKSk7XG4gIH1cbiAgcmV0dXJuIGNodW5rcztcbn0pOyIsICIvKiogXG4gKiBUaGUgTWFpbiBGdW5jdGlvbiBUbyBDcmVhdGUgVGhlIEV4dGVuZHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRXh0ZW5kSXRPYmplY3QobmFtZTogc3RyaW5nLCBmdW5jOiBGdW5jdGlvbikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZVtuYW1lXSA9IGZ1bmM7XG59O1xuXG4vKipcbiAqIEFkZHMgYSBjdXN0b20gcHJlZml4IHRvIHRoZSB2YWx1ZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcyBhbmQgcmV0dXJucyBhIG5ldyBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IC0gVGhlIHByZWZpeCB0byBiZSBhZGRlZC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJ3aXRoUHJlZml4VG9WYWx1ZXNcIiwgZnVuY3Rpb24ocHJlZml4KSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBwcmVmaXggKyBcIiBcIiArIHRoaXNba2V5XS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVudW1lcmFibGUgcHJvcGVydGllcyBpbiB0aGUgb2JqZWN0LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcImNvdW50UHJvcGVydGllc1wiLCBmdW5jdGlvbigpIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgZm9yIChjb25zdCBwcm9wIGluIHRoaXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvdW50O1xufSk7XG5cbi8qKlxuICogUmV2ZXJzZXMgdGhlIG9yZGVyIG9mIHRoZSBvYmplY3QncyBrZXlzIGFuZCByZXR1cm5zIGEgbmV3IG9iamVjdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJyZXZlcnNlZEtleXNcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJldmVyc2VkT2JqZWN0ID0ge307XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgZm9yIChsZXQgaSA9IGtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICByZXZlcnNlZE9iamVjdFtrZXlzW2ldXSA9IHRoaXNba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIHJldmVyc2VkT2JqZWN0O1xufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBvYmplY3QgaGFzIGFueSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzIGFuZCByZXR1cm5zIGEgYm9vbGVhbi5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJpc0VtcHR5XCIsIGZ1bmN0aW9uKCkge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBrZXlzIHdob3NlIGNvcnJlc3BvbmRpbmcgdmFsdWVzIG1hdGNoIHRoZSBzcGVjaWZpZWQgdmFsdWUuXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gbWF0Y2ggYWdhaW5zdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJrZXlzQnlWYWx1ZVR5cGVcIiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgY29uc3Qga2V5cyA9IFtdO1xuICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHByb3ApICYmIHRoaXNbcHJvcF0gPT09IHZhbHVlKSB7XG4gICAgICBrZXlzLnB1c2gocHJvcCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBrZXlzO1xufSk7XG5cbi8qKlxuICogTWVyZ2VzIHRoZSBjdXJyZW50IG9iamVjdCB3aXRoIGFub3RoZXIgb2JqZWN0IGFuZCByZXR1cm5zIGEgbmV3IG1lcmdlZCBvYmplY3QuXG4gKiBAcGFyYW0ge29iamVjdH0gb3RoZXJPYmplY3QgLSBUaGUgb2JqZWN0IHRvIG1lcmdlIHdpdGguXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwibWVyZ2VXaXRoXCIsIGZ1bmN0aW9uKG90aGVyT2JqZWN0KSB7XG4gIHJldHVybiB7IC4uLnRoaXMsIC4uLm90aGVyT2JqZWN0IH07XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IG9iamVjdCBjb250YWluaW5nIG9ubHkgdGhlIHNwZWNpZmllZCBrZXlzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIHZhbHVlcy5cbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgLSBUaGUga2V5cyB0byBmaWx0ZXIgYnkuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwiZmlsdGVyQnlLZXlzXCIsIGZ1bmN0aW9uKGtleXMpIHtcbiAgY29uc3QgZmlsdGVyZWRPYmplY3QgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGZpbHRlcmVkT2JqZWN0W2tleV0gPSB0aGlzW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBmaWx0ZXJlZE9iamVjdDtcbn0pO1xuXG4vKipcbiAqIFJlbmFtZXMgYSBwcm9wZXJ0eSBpbiB0aGUgb2JqZWN0LCBwcmVzZXJ2aW5nIGl0cyB2YWx1ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvbGROYW1lIC0gVGhlIGN1cnJlbnQgbmFtZSBvZiB0aGUgcHJvcGVydHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmV3TmFtZSAtIFRoZSBuZXcgbmFtZSBmb3IgdGhlIHByb3BlcnR5LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcInJlbmFtZVByb3BlcnR5XCIsIGZ1bmN0aW9uKG9sZE5hbWUsIG5ld05hbWUpIHtcbiAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkob2xkTmFtZSkpIHtcbiAgICB0aGlzW25ld05hbWVdID0gdGhpc1tvbGROYW1lXTtcbiAgICBkZWxldGUgdGhpc1tvbGROYW1lXTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn0pO1xuXG4vKipcbiAqIE1vZGlmaWVzIHRoZSBvYmplY3QgYnkgY29udmVydGluZyBhbGwga2V5cyB0byB1cHBlcmNhc2UuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwidXBwZXJjYXNlS2V5c1wiLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXN1bHRba2V5LnRvVXBwZXJDYXNlKCldID0gdGhpc1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIG9iamVjdCBpbnRvIGFuIGFycmF5IG9mIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJjb252ZXJ0VG9BcnJheVwiLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMpO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBvYmplY3QgY29udGFpbmluZyBvbmx5IHRoZSBwcm9wZXJ0aWVzIHdpdGggc3BlY2lmaWVkIHZhbHVlcy5cbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBmaWx0ZXIgYnkuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwiZmlsdGVyQnlWYWx1ZXNcIiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgY29uc3QgZmlsdGVyZWRPYmplY3QgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkgJiYgdGhpc1trZXldID09PSB2YWx1ZSkge1xuICAgICAgZmlsdGVyZWRPYmplY3Rba2V5XSA9IHRoaXNba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkT2JqZWN0O1xufSk7XG5cbi8qKlxuICogU29ydHMgdGhlIG9iamVjdCdzIHByb3BlcnRpZXMgYnkgdGhlaXIga2V5cyBhbmQgcmV0dXJucyBhIG5ldyBvYmplY3QuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwic29ydEJ5S2V5XCIsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBzb3J0ZWRPYmplY3QgPSB7fTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpLnNvcnQoKTtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIHNvcnRlZE9iamVjdFtrZXldID0gdGhpc1trZXldO1xuICB9XG4gIHJldHVybiBzb3J0ZWRPYmplY3Q7XG59KTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IGluIHRoZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gdXBkYXRlLlxuICogQHBhcmFtIHthbnl9IHZhbHVlIC0gVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIHByb3BlcnR5LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcInVwZGF0ZVZhbHVlXCIsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufSk7XG5cbi8qKlxuICogRGVsZXRlcyBhIHByb3BlcnR5IGZyb20gdGhlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBkZWxldGUuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwiZGVsZXRlQnlLZXlcIiwgZnVuY3Rpb24oa2V5KSB7XG4gIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICBkZWxldGUgdGhpc1trZXldO1xuICB9XG4gIHJldHVybiB0aGlzO1xufSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHR3byBvYmplY3RzIGhhdmUgdGhlIHNhbWUga2V5cy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvdGhlck9iamVjdCAtIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZSBrZXlzIHdpdGguXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwiaGFzU2FtZUtleXNcIiwgZnVuY3Rpb24ob3RoZXJPYmplY3QpIHtcbiAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyh0aGlzKS5zb3J0KCkudG9TdHJpbmcoKTtcbiAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyhvdGhlck9iamVjdCkuc29ydCgpLnRvU3RyaW5nKCk7XG4gIHJldHVybiBrZXlzMSA9PT0ga2V5czI7XG59KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLCBoYXZpbmcgdGhlIHNhbWUga2V5cyBhbmQgY29ycmVzcG9uZGluZyB2YWx1ZXMuXG4gKiBAcGFyYW0ge29iamVjdH0gb3RoZXJPYmplY3QgLSBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUgd2l0aC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJpc0VxdWFsXCIsIGZ1bmN0aW9uKG90aGVyT2JqZWN0KSB7XG4gIGNvbnN0IGtleXMxID0gT2JqZWN0LmtleXModGhpcykuc29ydCgpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMob3RoZXJPYmplY3QpLnNvcnQoKS50b1N0cmluZygpO1xuICBpZiAoa2V5czEgIT09IGtleXMyKSByZXR1cm4gZmFsc2U7XG4gIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAodGhpc1trZXldICE9PSBvdGhlck9iamVjdFtrZXldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBrZXkgZnJvbSB0aGUgb2JqZWN0LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcInJhbmRvbUtleVwiLCBmdW5jdGlvbigpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGtleXMubGVuZ3RoKTtcbiAgcmV0dXJuIGtleXNbcmFuZG9tSW5kZXhdO1xufSk7XG5cbi8qKlxuICogRmluZHMgYSBrZXkgaW4gdGhlIG9iamVjdCBiYXNlZCBvbiB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuICogQHBhcmFtIHthbnl9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGZpbmQgaW4gdGhlIG9iamVjdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJmaW5kS2V5QnlWYWx1ZVwiLCBmdW5jdGlvbih2YWx1ZSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0aGlzW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgb2JqZWN0IGNvbnRhaW5zIGFsbCB0aGUgc3BlY2lmaWVkIGtleXMuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIC0gVGhlIGtleXMgdG8gY2hlY2sgZm9yLlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcImhhc0FsbEtleXNcIiwgZnVuY3Rpb24oa2V5cykge1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGlzdGluY3QgdmFsdWVzIGluIHRoZSBvYmplY3QuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwiZGlzdGluY3RWYWx1ZXNDb3VudFwiLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgdmFsdWVzID0gbmV3IFNldChPYmplY3QudmFsdWVzKHRoaXMpKTtcbiAgcmV0dXJuIHZhbHVlcy5zaXplO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgdHlwZXMgb2YgdGhlIHByb3BlcnRpZXMgaW4gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJnZXRQcm9wZXJ0eVR5cGVzXCIsIGZ1bmN0aW9uKCkge1xuICBjb25zdCB0eXBlcyA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdHlwZXNba2V5XSA9IHR5cGVvZiB0aGlzW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0eXBlcztcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGtleSBvZiB0aGUgb2JqZWN0LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcImZpcnN0S2V5XCIsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gIHJldHVybiBrZXlzLmxlbmd0aCA+IDAgPyBrZXlzWzBdIDogdW5kZWZpbmVkO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGFzdCBrZXkgb2YgdGhlIG9iamVjdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJsYXN0S2V5XCIsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gIHJldHVybiBrZXlzLmxlbmd0aCA+IDAgPyBrZXlzW2tleXMubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG59KTtcblxuLyoqXG4gKiBTd2FwcyB0aGUga2V5cyB3aXRoIHRoZWlyIHZhbHVlcyBpbiB0aGUgb2JqZWN0IGFuZCByZXR1cm5zIGEgbmV3IG9iamVjdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJzd2FwS2V5VmFsdWVcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHN3YXBwZWRPYmplY3QgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHN3YXBwZWRPYmplY3RbdGhpc1trZXldXSA9IGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN3YXBwZWRPYmplY3Q7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5cyBvbWl0dGVkLlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAtIFRoZSBrZXlzIHRvIG9taXQuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwib21pdEtleXNcIiwgZnVuY3Rpb24oa2V5cykge1xuICBjb25zdCByZXN1bHQgPSB7IC4uLnRoaXMgfTtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGlmIChyZXN1bHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZGVsZXRlIHJlc3VsdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbi8qKlxuICogTWVyZ2VzIHByb3BlcnRpZXMgd2l0aCBkdXBsaWNhdGUgdmFsdWVzIGludG8gYSBzaW5nbGUgcHJvcGVydHkgaW4gdGhlIG9iamVjdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJtZXJnZUR1cGxpY2F0ZXNcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1lcmdlZE9iamVjdCA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG4gICAgICBjb25zdCBkdXBsaWNhdGVLZXkgPSBPYmplY3Qua2V5cyhtZXJnZWRPYmplY3QpLmZpbmQoKGspID0+IG1lcmdlZE9iamVjdFtrXSA9PT0gdmFsdWUpO1xuICAgICAgaWYgKGR1cGxpY2F0ZUtleSkge1xuICAgICAgICBtZXJnZWRPYmplY3RbZHVwbGljYXRlS2V5ICsgXCJfXCIgKyBrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRPYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWVyZ2VkT2JqZWN0O1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWx1ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgc3BlY2lmaWVkIGtleXMuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIC0gVGhlIGtleXMgdG8gZ2V0IHZhbHVlcyBmb3IuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwiZ2V0VmFsdWVzQnlLZXlzXCIsIGZ1bmN0aW9uKGtleXMpIHtcbiAgY29uc3QgdmFsdWVzID0gW107XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YWx1ZXMucHVzaCh0aGlzW2tleV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVzO1xufSk7XG5cbi8qKlxuICogUmV2ZXJzZXMgdGhlIG9yZGVyIG9mIGtleXMgYW5kIHZhbHVlcyBpbiB0aGUgb2JqZWN0IGFuZCByZXR1cm5zIGEgbmV3IG9iamVjdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJyZXZlcnNlS2V5VmFsdWVcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJldmVyc2VkT2JqZWN0ID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXZlcnNlZE9iamVjdFt0aGlzW2tleV1dID0ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV2ZXJzZWRPYmplY3Q7XG59KTtcblxuLyoqXG4gKiBHcm91cHMgdGhlIG9iamVjdCdzIHByb3BlcnRpZXMgYmFzZWQgb24gdGhlaXIgY29tbW9uIHByb3BlcnR5IHZhbHVlcy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJncm91cEJ5UHJvcGVydHlcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGdyb3VwZWRPYmplY3QgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpc1trZXldO1xuICAgICAgaWYgKCFncm91cGVkT2JqZWN0W3ZhbHVlXSkge1xuICAgICAgICBncm91cGVkT2JqZWN0W3ZhbHVlXSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBlZE9iamVjdFt2YWx1ZV0ucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ3JvdXBlZE9iamVjdDtcbn0pO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBhdmVyYWdlIG9mIG51bWVyaWMgcHJvcGVydHkgdmFsdWVzIGluIHRoZSBvYmplY3QuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwiY29tcHV0ZUF2ZXJhZ2VcIiwgZnVuY3Rpb24oKSB7XG4gIGxldCBzdW0gPSAwO1xuICBsZXQgY291bnQgPSAwO1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdGhpc1trZXldID09PSBcIm51bWJlclwiKSB7XG4gICAgICBzdW0gKz0gdGhpc1trZXldO1xuICAgICAgY291bnQrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvdW50ID4gMCA/IHN1bSAvIGNvdW50IDogdW5kZWZpbmVkO1xufSk7XG5cbi8qKlxuICogU2h1ZmZsZXMgdGhlIG9yZGVyIG9mIGtleXMgaW4gdGhlIG9iamVjdCBhbmQgcmV0dXJucyBhIG5ldyBvYmplY3QuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwic2h1ZmZsZUtleXNcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHNodWZmbGVkT2JqZWN0ID0ge307XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgY29uc3Qgc2h1ZmZsZWRLZXlzID0ga2V5cy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBzaHVmZmxlZE9iamVjdFtzaHVmZmxlZEtleXNbaV1dID0gdGhpc1tzaHVmZmxlZEtleXNbaV1dO1xuICB9XG4gIHJldHVybiBzaHVmZmxlZE9iamVjdDtcbn0pO1xuXG4vKipcbiAqIFJldmVyc2VzIHRoZSB2YWx1ZXMgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXMgYW5kIHJldHVybnMgYSBuZXcgb2JqZWN0LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcInJldmVyc2VWYWx1ZXNcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJldmVyc2VkT2JqZWN0ID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXZlcnNlZE9iamVjdFtrZXldID0gdGhpc1trZXldLnRvU3RyaW5nKCkuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXZlcnNlZE9iamVjdDtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Yga2V5cyB3aG9zZSBuYW1lcyBzdGFydCB3aXRoIHRoZSBzcGVjaWZpZWQgcHJlZml4LlxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeCAtIFRoZSBwcmVmaXggdG8gbG9vayBmb3IuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwiZ2V0S2V5c1N0YXJ0aW5nV2l0aFwiLCBmdW5jdGlvbihwcmVmaXgpIHtcbiAgY29uc3Qga2V5cyA9IFtdO1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkuc3RhcnRzV2l0aChwcmVmaXgpKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59KTtcblxuLyoqXG4gKiBSZW1vdmVzIHByb3BlcnRpZXMgd2l0aCBmYWxzeSB2YWx1ZXMgKGZhbHNlLCBudWxsLCAwLCBcIlwiLCBOYU4sIHVuZGVmaW5lZCkgZnJvbSB0aGUgb2JqZWN0LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcInJlbW92ZUZhbHN5VmFsdWVzXCIsIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkgJiYgdGhpc1trZXldKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHRoaXNba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG4vKipcbiAqIFRydW5jYXRlcyB0aGUgbGVuZ3RoIG9mIGtleXMgaW4gdGhlIG9iamVjdCBhbmQgcmV0dXJucyBhIG5ldyBvYmplY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gVGhlIG1heGltdW0gbGVuZ3RoIGZvciB0aGUga2V5cy5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJ0cnVuY2F0ZUtleXNcIiwgZnVuY3Rpb24obGVuZ3RoKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmVzdWx0W2tleS5zdWJzdHJpbmcoMCwgbGVuZ3RoKV0gPSB0aGlzW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxuLyoqXG4gKiBGaW5kcyB0aGUga2V5IHdpdGggdGhlIGxvbmdlc3QgbmFtZSBpbiB0aGUgb2JqZWN0LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcImZpbmRMb25nZXN0S2V5XCIsIGZ1bmN0aW9uKCkge1xuICBsZXQgbG9uZ2VzdEtleSA9IFwiXCI7XG4gIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleS5sZW5ndGggPiBsb25nZXN0S2V5Lmxlbmd0aCkge1xuICAgICAgbG9uZ2VzdEtleSA9IGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxvbmdlc3RLZXk7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIGtleXMgd2hvc2UgbmFtZXMgZW5kIHdpdGggdGhlIHNwZWNpZmllZCBzdWZmaXguXG4gKiBAcGFyYW0ge3N0cmluZ30gc3VmZml4IC0gVGhlIHN1ZmZpeCB0byBsb29rIGZvci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJnZXRLZXlzRW5kaW5nV2l0aFwiLCBmdW5jdGlvbihzdWZmaXgpIHtcbiAgY29uc3Qga2V5cyA9IFtdO1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkuZW5kc1dpdGgoc3VmZml4KSkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBrZXlzO1xufSk7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3VtIG9mIG51bWVyaWMgcHJvcGVydHkgdmFsdWVzIGluIHRoZSBvYmplY3QuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwiY2FsY3VsYXRlU3VtXCIsIGZ1bmN0aW9uKCkge1xuICBsZXQgc3VtID0gMDtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHRoaXNba2V5XSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgc3VtICs9IHRoaXNba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Yga2V5cyB3aG9zZSBuYW1lcyBtYXRjaCB0aGUgc3BlY2lmaWVkIHBhdHRlcm4gKFJlZ0V4cCkuXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcGF0dGVybiAtIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybiB0byBtYXRjaCBrZXlzIGFnYWluc3QuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwiZXh0cmFjdEtleXNCeVBhdHRlcm5cIiwgZnVuY3Rpb24ocGF0dGVybikge1xuICBjb25zdCBrZXlzID0gW107XG4gIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHBhdHRlcm4udGVzdChrZXkpKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59KTtcblxuLyoqXG4gKiBJbmNyZW1lbnRzIHRoZSBudW1lcmljIHZhbHVlcyBvZiB0aGUgb2JqZWN0J3MgcHJvcGVydGllcyBhbmQgcmV0dXJucyBhIG5ldyBvYmplY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5jcmVtZW50IC0gVGhlIHZhbHVlIHRvIGluY3JlbWVudCB0aGUgcHJvcGVydGllcyBieS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJpbmNyZW1lbnRWYWx1ZXNcIiwgZnVuY3Rpb24oaW5jcmVtZW50KSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdGhpc1trZXldID09PSBcIm51bWJlclwiKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHRoaXNba2V5XSArIGluY3JlbWVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG4vKipcbiAqIERlY3JlbWVudHMgdGhlIG51bWVyaWMgdmFsdWVzIG9mIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzIGFuZCByZXR1cm5zIGEgbmV3IG9iamVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWNyZW1lbnQgLSBUaGUgdmFsdWUgdG8gZGVjcmVtZW50IHRoZSBwcm9wZXJ0aWVzIGJ5LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcImRlY3JlbWVudFZhbHVlc1wiLCBmdW5jdGlvbihkZWNyZW1lbnQpIHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiB0aGlzW2tleV0gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdGhpc1trZXldIC0gZGVjcmVtZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBrZXlzIHRoYXQgYXJlIGNvbW1vbiBpbiBib3RoIHRoZSBvYmplY3QgYW5kIGFub3RoZXIgb2JqZWN0LlxuICogQHBhcmFtIHtvYmplY3R9IG90aGVyT2JqZWN0IC0gVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlIGtleXMgd2l0aC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJnZXRDb21tb25LZXlzXCIsIGZ1bmN0aW9uKG90aGVyT2JqZWN0KSB7XG4gIGNvbnN0IGtleXMxID0gT2JqZWN0LmtleXModGhpcyk7XG4gIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMob3RoZXJPYmplY3QpO1xuICByZXR1cm4ga2V5czEuZmlsdGVyKChrZXkpID0+IGtleXMyLmluY2x1ZGVzKGtleSkpO1xufSk7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgcHJvZHVjdCBvZiBudW1lcmljIHByb3BlcnR5IHZhbHVlcyBpbiB0aGUgb2JqZWN0LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcImNhbGN1bGF0ZVByb2R1Y3RcIiwgZnVuY3Rpb24oKSB7XG4gIGxldCBwcm9kdWN0ID0gMTtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHRoaXNba2V5XSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcHJvZHVjdCAqPSB0aGlzW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBwcm9kdWN0O1xufSk7XG5cbi8qKlxuICogU3dhcHMgdGhlIGNhc2UgKHVwcGVyIHRvIGxvd2VyIGFuZCB2aWNlIHZlcnNhKSBvZiB0aGUgb2JqZWN0J3MgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwic3dhcFByb3BlcnR5Q2FzZVwiLCBmdW5jdGlvbigpIHtcbiAgY29uc3Qgc3dhcHBlZE9iamVjdCA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgbmV3S2V5ID0ga2V5LnJlcGxhY2UoLyhbYS16XSspfChbQS1aXSspL2csIChtYXRjaCwgbG93ZXIsIHVwcGVyKSA9PiBsb3dlciA/IG1hdGNoLnRvVXBwZXJDYXNlKCkgOiBtYXRjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIHN3YXBwZWRPYmplY3RbbmV3S2V5XSA9IHRoaXNba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN3YXBwZWRPYmplY3Q7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIGtleXMgd2hvc2UgbnVtZXJpYyBwcm9wZXJ0eSB2YWx1ZXMgYXJlIGdyZWF0ZXIgdGhhbiB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbXBhcmUgYWdhaW5zdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJnZXRLZXlzR3JlYXRlclRoYW5cIiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgY29uc3Qga2V5cyA9IFtdO1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdGhpc1trZXldID09PSBcIm51bWJlclwiICYmIHRoaXNba2V5XSA+IHZhbHVlKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIGtleXMgd2hvc2UgbnVtZXJpYyBwcm9wZXJ0eSB2YWx1ZXMgYXJlIHNtYWxsZXIgdGhhbiB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbXBhcmUgYWdhaW5zdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJnZXRLZXlzU21hbGxlclRoYW5cIiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgY29uc3Qga2V5cyA9IFtdO1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdGhpc1trZXldID09PSBcIm51bWJlclwiICYmIHRoaXNba2V5XSA8IHZhbHVlKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59KTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBtZWRpYW4gb2YgbnVtZXJpYyBwcm9wZXJ0eSB2YWx1ZXMgaW4gdGhlIG9iamVjdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJjYWxjdWxhdGVNZWRpYW5cIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHZhbHVlcyA9IFtdO1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdGhpc1trZXldID09PSBcIm51bWJlclwiKSB7XG4gICAgICB2YWx1ZXMucHVzaCh0aGlzW2tleV0pO1xuICAgIH1cbiAgfVxuICB2YWx1ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICBjb25zdCBtaWRkbGUgPSBNYXRoLmZsb29yKHZhbHVlcy5sZW5ndGggLyAyKTtcbiAgcmV0dXJuIHZhbHVlcy5sZW5ndGggJSAyID09PSAwID8gKHZhbHVlc1ttaWRkbGUgLSAxXSArIHZhbHVlc1ttaWRkbGVdKSAvIDIgOiB2YWx1ZXNbbWlkZGxlXTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Yga2V5cyBpbiBhbHBoYWJldGljYWwgb3JkZXIuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwiZ2V0S2V5c0luQWxwaGFiZXRpY2FsT3JkZXJcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgcmV0dXJuIGtleXMuc29ydCgpO1xufSk7XG5cbi8qKlxuICogUmVtb3ZlcyBlbXB0eSAobnVsbCBvciB1bmRlZmluZWQpIHByb3BlcnRpZXMgZnJvbSB0aGUgb2JqZWN0LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcInJlbW92ZUVtcHR5SXRlbXNcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0aGlzW2tleV0gIT09IG51bGwgJiYgdGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdGhpc1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiB1bmlxdWUgdmFsdWVzIGluIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcImV4dHJhY3RVbmlxdWVWYWx1ZXNcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHZhbHVlcyA9IG5ldyBTZXQoT2JqZWN0LnZhbHVlcyh0aGlzKSk7XG4gIHJldHVybiBBcnJheS5mcm9tKHZhbHVlcyk7XG59KTtcblxuLyoqXG4gKiBSZXZlcnNlcyB0aGUgb3JkZXIgb2YgdmFsdWVzIGluIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzIGFuZCByZXR1cm5zIGEgbmV3IG9iamVjdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJyZXZlcnNlUHJvcGVydHlPcmRlclwiLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmV2ZXJzZWRPYmplY3QgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpc1trZXldO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldmVyc2VkT2JqZWN0W2tleV0gPSB2YWx1ZS5yZXZlcnNlKCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXZlcnNlZE9iamVjdFtrZXldID0gdmFsdWUuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXZlcnNlZE9iamVjdFtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXZlcnNlZE9iamVjdDtcbn0pO1xuXG4vKipcbiAqIFN1bXMgYWxsIG51bWVyaWMgcHJvcGVydHkgdmFsdWVzIGluIHRoZSBvYmplY3QgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJzdW1OdW1lcmljVmFsdWVzXCIsIGZ1bmN0aW9uKCkge1xuICBsZXQgc3VtID0gMDtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHRoaXNba2V5XSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgc3VtICs9IHRoaXNba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn0pO1xuXG4vKipcbiAqIFJlcGxhY2VzIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IGluIHRoZSBvYmplY3QgYmFzZWQgb24gdGhlIHNwZWNpZmllZCBrZXkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gcmVwbGFjZSB0aGUgdmFsdWUuXG4gKiBAcGFyYW0ge2FueX0gbmV3VmFsdWUgLSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgcHJvcGVydHkuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwicmVwbGFjZVZhbHVlQnlLZXlcIiwgZnVuY3Rpb24oa2V5LCBuZXdWYWx1ZSkge1xuICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgdGhpc1trZXldID0gbmV3VmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdob3NlIG5hbWVzIHN0YXJ0IHdpdGggdGhlIHNwZWNpZmllZCBwcmVmaXguXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IC0gVGhlIHByZWZpeCB0byBsb29rIGZvci5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJnZXRJdGVtc1N0YXJ0aW5nV2l0aFwiLCBmdW5jdGlvbihwcmVmaXgpIHtcbiAgY29uc3QgaXRlbXMgPSBbXTtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5LnN0YXJ0c1dpdGgocHJlZml4KSkge1xuICAgICAgaXRlbXMucHVzaCh7IGtleSwgdmFsdWU6IHRoaXNba2V5XSB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGl0ZW1zO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWx1ZXMgdGhhdCBhcmUgZ3JlYXRlciB0aGFuIHRoZSBzcGVjaWZpZWQgdmFsdWUuXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29tcGFyZSBhZ2FpbnN0LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcImdldFZhbHVlc0dyZWF0ZXJUaGFuXCIsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGNvbnN0IHZhbHVlcyA9IFtdO1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdGhpc1trZXldID09PSBcIm51bWJlclwiICYmIHRoaXNba2V5XSA+IHZhbHVlKSB7XG4gICAgICB2YWx1ZXMucHVzaCh0aGlzW2tleV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVzO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWx1ZXMgdGhhdCBhcmUgc21hbGxlciB0aGFuIHRoZSBzcGVjaWZpZWQgdmFsdWUuXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29tcGFyZSBhZ2FpbnN0LlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcImdldFZhbHVlc1NtYWxsZXJUaGFuXCIsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGNvbnN0IHZhbHVlcyA9IFtdO1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdGhpc1trZXldID09PSBcIm51bWJlclwiICYmIHRoaXNba2V5XSA8IHZhbHVlKSB7XG4gICAgICB2YWx1ZXMucHVzaCh0aGlzW2tleV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVzO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBvYmplY3QgY29udGFpbmluZyBvbmx5IHByb3BlcnRpZXMgd2hvc2UgdmFsdWVzIG1hdGNoIHRoZSBzcGVjaWZpZWQgdHlwZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIHR5cGUgdG8gZmlsdGVyIGJ5IChlLmcuLCBcInN0cmluZ1wiLCBcIm51bWJlclwiLCBcIm9iamVjdFwiLCBldGMuKS5cbiAqL1xuY3JlYXRlRXh0ZW5kSXRPYmplY3QoXCJmaWx0ZXJCeVZhbHVlVHlwZVwiLCBmdW5jdGlvbih0eXBlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdGhpc1trZXldID09PSB0eXBlKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHRoaXNba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Yga2V5cyB3aG9zZSBuYW1lcyBtYXRjaCB0aGUgc3BlY2lmaWVkIHBhdHRlcm4gKFJlZ0V4cCkuXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcGF0dGVybiAtIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybiB0byBtYXRjaCBrZXlzIGFnYWluc3QuXG4gKi9cbmNyZWF0ZUV4dGVuZEl0T2JqZWN0KFwiZmluZEtleXNCeVBhdHRlcm5cIiwgZnVuY3Rpb24ocGF0dGVybikge1xuICBjb25zdCBrZXlzID0gW107XG4gIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHBhdHRlcm4udGVzdChrZXkpKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59KTtcblxuLyoqXG4gKiBQYXJ0aXRpb25zIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzIGludG8gdHdvIG9iamVjdHMgYmFzZWQgb24gYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB0aGUgcGFydGl0aW9uaW5nLlxuICovXG5jcmVhdGVFeHRlbmRJdE9iamVjdChcInBhcnRpdGlvbkJ5S2V5XCIsIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIGNvbnN0IHBhcnRpdGlvbmVkT2JqZWN0cyA9IFt7fSwge31dO1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgcGFydGl0aW9uSW5kZXggPSBjYWxsYmFjayhrZXkpID8gMCA6IDE7XG4gICAgICBwYXJ0aXRpb25lZE9iamVjdHNbcGFydGl0aW9uSW5kZXhdW2tleV0gPSB0aGlzW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBwYXJ0aXRpb25lZE9iamVjdHM7XG59KTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTs7O0FDR0EsU0FBUyxxQkFBcUIsTUFBYyxNQUFz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
