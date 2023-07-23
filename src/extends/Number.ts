/** 
 * The Main Function To Create The Extends
 */
function createExtendItNumber(name: string, func: Function): void {
  return Number.prototype[name] = func;
};

/**
 * Checks if the number is even.
 * @returns True if the number is even, false otherwise.
 */
createExtendItNumber('isEven', function(): boolean {
  return this % 2 === 0;
});

/**
 * Checks if the number is odd.
 * @returns True if the number is odd, false otherwise.
 */
createExtendItNumber('isOdd', function(): boolean {
  return this % 2 !== 0;
});

/**
 * Checks if the number is prime.
 * @returns True if the number is prime, false otherwise.
 */
createExtendItNumber('isPrime', function(): boolean {
  if (this <= 1) return false;
  if (this <= 3) return true;
  if (this % 2 === 0 || this % 3 === 0) return false;
  let i = 5;
  while (i * i <= this) {
    if (this % i === 0 || this % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
});

/**
 * Returns the factorial of the number.
 * @returns The factorial of the number.
 */
createExtendItNumber('factorial', function(): number {
  if (this < 0) throw new Error('Factorial is not defined for negative numbers.');
  if (this === 0) return 1;
  let result = 1;
  for (let i = 1; i <= this; i++) {
    result *= i;
  }
  return result;
});

/**
 * Returns the sum of all natural numbers up to the number (inclusive).
 * @returns The sum of all natural numbers up to the number.
 */
createExtendItNumber('sumOfNaturalNumbers', function(): number {
  if (this < 0) throw new Error('Number must be non-negative.');
  return (this * (this + 1)) / 2;
});

/**
 * Returns the sum of all even numbers up to the number (inclusive).
 * @returns The sum of all even numbers up to the number.
 */
createExtendItNumber('sumOfEvenNumbers', function() {
  if (this < 0) throw new Error('Number must be non-negative.');
  let num = this;
  if (num % 2 === 1) num--;
  return (num / 2) * (num / 2 + 1);
});
/**
 * Returns the sum of all odd numbers up to the number (inclusive).
 * @returns The sum of all odd numbers up to the number.
 */
createExtendItNumber('sumOfOddNumbers', function(): number {
  if (this < 0) throw new Error('Number must be non-negative.');
  let numm = this;
  if (numm % 2 === 0) numm--;
  return ((numm + 1) / 2) * ((numm + 1) / 2);
});

/**
 * Checks if the number is a perfect square.
 * @returns True if the number is a perfect square, false otherwise.
 */
createExtendItNumber('isPerfectSquare', function(): boolean {
  if (this < 0) return false;
  const sqrt = Math.floor(Math.sqrt(this));
  return sqrt * sqrt === this;
});

/**
 * Returns the square root of the number.
 * @returns The square root of the number.
 */
createExtendItNumber('squareRoot', function(): number {
  if (this < 0) throw new Error('Square root is not defined for negative numbers.');
  return Math.sqrt(this);
});

/**
 * Returns the cube root of the number.
 * @returns The cube root of the number.
 */
createExtendItNumber('cubeRoot', function(): number {
  return Math.cbrt(this);
});

/**
 * Checks if the number is an integer.
 * @returns True if the number is an integer, false otherwise.
 */
createExtendItNumber('isInteger', function(): boolean {
  return Number.isInteger(this);
});

/**
 * Checks if the number is a decimal number.
 * @returns True if the number is a decimal number, false otherwise.
 */
createExtendItNumber('isDecimal', function(): boolean {
  return !Number.isInteger(this);
});

/**
 * Rounds the number to the specified number of decimal places.
 * @param decimalPlaces - The number of decimal places to round to.
 * @returns The rounded number.
 */
createExtendItNumber('roundToDecimalPlaces', function(decimalPlaces: number): number {
  const factor = 10 ** decimalPlaces;
  return Math.round(this * factor) / factor;
});

/**
 * Floors the number to the specified number of decimal places.
 * @param decimalPlaces - The number of decimal places to floor to.
 * @returns The floored number.
 */
createExtendItNumber('floorToDecimalPlaces', function(decimalPlaces: number): number {
  const factor = 10 ** decimalPlaces;
  return Math.floor(this * factor) / factor;
});

/**
 * Ceils the number to the specified number of decimal places.
 * @param decimalPlaces - The number of decimal places to ceil to.
 * @returns The ceiled number.
 */
createExtendItNumber('ceilToDecimalPlaces', function(decimalPlaces: number): number {
  const factor = 10 ** decimalPlaces;
  return Math.ceil(this * factor) / factor;
});

/**
 * Returns the absolute value of the number.
 * @returns The absolute value of the number.
 */
createExtendItNumber('absoluteValue', function(): number {
  return Math.abs(this);
});

/**
 * Returns the sign of the number as either 1, 0, or -1.
 * @returns The sign of the number (-1, 0, or 1).
 */
createExtendItNumber('sign', function(): number {
  return Math.sign(this);
});

/**
 * Clamps the number between the given minimum and maximum values.
 * @param min - The minimum value to clamp to.
 * @param max - The maximum value to clamp to.
 * @returns The clamped number.
 */
createExtendItNumber('clamp', function(min: number, max: number): number {
  return Math.max(min, Math.min(this, max));
});

/**
 * Checks if the number is within the range (inclusive) of the given minimum and maximum values.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns True if the number is within the range, false otherwise.
 */
createExtendItNumber('isInRange', function(min: number, max: number): boolean {
  return this >= min && this <= max;
});

/**
 * Checks if the number is a positive number.
 * @returns True if the number is positive, false otherwise.
 */
createExtendItNumber('isPositive', function(): boolean {
  return this > 0;
});

/**
 * Checks if the number is a negative number.
 * @returns True if the number is negative, false otherwise.
 */
createExtendItNumber('isNegative', function(): boolean {
  return this < 0;
});

/**
 * Converts the number to a binary string representation.
 * @returns The binary string representation of the number.
 */
createExtendItNumber('toBinaryString', function(): string {
  return this.toString(2);
});

/**
 * Converts the number to an octal string representation.
 * @returns The octal string representation of the number.
 */
createExtendItNumber('toOctalString', function(): string {
  return this.toString(8);
});

/**
 * Converts the number to a hexadecimal string representation.
 * @param includePrefix - Whether to include '0x' prefix in the hexadecimal string.
 * @returns The hexadecimal string representation of the number.
 */
createExtendItNumber('toHexString', function(includePrefix: boolean = true): string {
  const prefix = includePrefix ? '0x' : '';
  return prefix + this.toString(16);
});

/**
 * Converts the number to a string representation with the specified radix (base).
 * @param radix - The radix (base) for the string conversion (2 to 36).
 * @returns The string representation of the number with the specified radix.
 */
createExtendItNumber('toStringWithRadix', function(radix: number): string {
  if (radix < 2 || radix > 36) throw new Error('Radix must be between 2 and 36.');
  return this.toString(radix);
});

/**
 * Returns the largest integer less than or equal to the number.
 * @returns The largest integer less than or equal to the number.
 */
createExtendItNumber('floor', function(): number {
  return Math.floor(this);
});

/**
 * Returns the smallest integer greater than or equal to the number.
 * @returns The smallest integer greater than or equal to the number.
 */
createExtendItNumber('ceil', function(): number {
  return Math.ceil(this);
});

/**
 * Returns the integer part of the number by removing any fractional digits.
 * @returns The integer part of the number.
 */
createExtendItNumber('trunc', function(): number {
  return Math.trunc(this);
});

/**
 * Returns the number rounded to the nearest integer.
 * @returns The rounded integer.
 */
createExtendItNumber('round', function(): number {
  return Math.round(this);
});

/**
 * Converts the number to degrees from radians.
 * @returns The number in degrees.
 */
createExtendItNumber('toDegrees', function(): number {
  return (180 * this) / Math.PI;
});

/**
 * Converts the number to radians from degrees.
 * @returns The number in radians.
 */
createExtendItNumber('toRadians', function(): number {
  return (Math.PI * this) / 180;
});

/**
 * Returns the average of the number and the provided value.
 * @param value - The value to calculate the average with.
 * @returns The average of the number and the provided value.
 */
createExtendItNumber('average', function(value: number): number {
  return (this + value) / 2;
});

/**
 * Calculates the percentage of the given value with respect to the number.
 * @param value - The value to calculate the percentage of.
 * @returns The percentage of the given value.
 */
createExtendItNumber('percentageOf', function(value: number): number {
  return (value / this) * 100;
});

/**
 * Checks if the number is approximately equal to the provided value within a given tolerance.
 * @param value - The value to compare with.
 * @param tolerance - The maximum allowed difference (default is Number.EPSILON).
 * @returns True if the number is approximately equal to the provided value, false otherwise.
 */
createExtendItNumber('isApproximatelyEqualTo', function(value: number, tolerance: number = Number.EPSILON): boolean {
  return Math.abs(this - value) < tolerance;
});

/**
 * Checks if the number is a whole number (integer) and a multiple of the provided factor.
 * @param factor - The factor to check for.
 * @returns True if the number is a whole number and a multiple of the factor, false otherwise.
 */
createExtendItNumber('isMultipleOf', function(factor: number): boolean {
  return Number.isInteger(this) && this % factor === 0;
});

/**
 * Checks if the number is a power of 2.
 * @returns True if the number is a power of 2, false otherwise.
 */
createExtendItNumber('isPowerOf2', function(): boolean {
  if (this < 1) return false;
  return (this & (this - 1)) === 0;
});

/**
 * Returns the next power of 2 greater than or equal to the number.
 * @returns The next power of 2.
 */
createExtendItNumber('nextPowerOf2', function(): number {
  if (this < 0) throw new Error('Next power of 2 is not defined for negative numbers.');
  let value = this - 1;
  value |= value >> 1;
  value |= value >> 2;
  value |= value >> 4;
  value |= value >> 8;
  value |= value >> 16;
  return value + 1;
});

/**
 * Returns the number as a Roman numeral string.
 * @returns The Roman numeral representation of the number.
 */
createExtendItNumber('toRomanNumerals', function(): string {
  if (this <= 0 || this >= 4000) throw new Error('Roman numerals are only defined for positive integers less than 4000.');
  const romanNumerals: Record<number, string> = {
    1000: 'M', 900: 'CM', 500: 'D', 400: 'CD',
    100: 'C', 90: 'XC', 50: 'L', 40: 'XL',
    10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'
  };
  let num = this;
  let result = '';
  for (const value in romanNumerals) {
    const intValue = parseInt(value);
    while (num >= intValue) {
      result += romanNumerals[value];
      num -= intValue;
    }
  }
  return result;
});

/**
 * Returns the bitwise NOT (~) of the number.
 * @returns The bitwise NOT of the number.
 */
createExtendItNumber('bitwiseNot', function(): number {
  return ~this;
});

/**
 * Returns the bitwise AND (&) of the number and the provided value.
 * @param value - The value to perform bitwise AND with.
 * @returns The bitwise AND of the number and the provided value.
 */
createExtendItNumber('bitwiseAnd', function(value: number): number {
  return this & value;
});

/**
 * Returns the bitwise OR (|) of the number and the provided value.
 * @param value - The value to perform bitwise OR with.
 * @returns The bitwise OR of the number and the provided value.
 */
createExtendItNumber('bitwiseOr', function(value: number): number {
  return this | value;
});

/**
 * Returns the bitwise XOR (^) of the number and the provided value.
 * @param value - The value to perform bitwise XOR with.
 * @returns The bitwise XOR of the number and the provided value.
 */
createExtendItNumber('bitwiseXor', function(value: number): number {
  return this ^ value;
});

/**
 * Returns the number left-shifted (<<) by the provided number of bits.
 * @param bits - The number of bits to left-shift by.
 * @returns The left-shifted number.
 */
createExtendItNumber('leftShift', function(bits: number): number {
  return this << bits;
});

/**
 * Returns the number right-shifted (>>) by the provided number of bits.
 * @param bits - The number of bits to right-shift by.
 * @returns The right-shifted number.
 */
createExtendItNumber('rightShift', function(bits: number): number {
  return this >> bits;
});

/**
 * Returns the number zero-filled right-shifted (>>>) by the provided number of bits.
 * @param bits - The number of bits to zero-fill right-shift by.
 * @returns The zero-filled right-shifted number.
 */
createExtendItNumber('zeroFillRightShift', function(bits: number): number {
  return this >>> bits;
});

/**
 * Checks if the number is a safe integer (between -(2^53 - 1) and 2^53 - 1).
 * @returns True if the number is a safe integer, false otherwise.
 */
createExtendItNumber('isSafeInteger', function(): boolean {
  return Number.isSafeInteger(this);
});

/**
 * Checks if the number is within the range of a JavaScript safe integer (between -(2^53 - 1) and 2^53 - 1).
 * @returns True if the number is within the range of a safe integer, false otherwise.
 */
createExtendItNumber('isInRangeOfSafeInteger', function(): boolean {
  return this >= Number.MIN_SAFE_INTEGER && this <= Number.MAX_SAFE_INTEGER;
});

/**
 * Returns the binary representation of the number with a specified number of bits.
 * @param bitCount - The number of bits in the binary representation.
 * @returns The binary representation of the number.
 */
createExtendItNumber('toBinaryWithBitCount', function(bitCount: number): string {
  if (bitCount < 1 || bitCount > 53) throw new Error('Bit count must be between 1 and 53.');
  const binaryString = this.toString(2);
  return binaryString.padStart(bitCount, '0');
});

/**
 * Converts the number to a string with commas for thousands separator.
 * @returns The string representation of the number with commas.
 */
createExtendItNumber('formatWithCommas', function(): string {
  return this.toLocaleString();
});

/**
 * Returns the sum of the number and all the numbers provided.
 * @param numbers - Additional numbers to add to the original number.
 * @returns The sum of all numbers.
 */
createExtendItNumber('sum', function(...numbers: number[]): number {
  return [this, ...numbers].reduce((acc, val) => acc + val, 0);
});

/**
 * Returns the sub of the number and all the numbers provided.
 * @param numbers - Additional numbers to add to the original number.
 * @returns The sub of all numbers.
 */
createExtendItNumber('sub', function(...numbers: number[]): number {
  return [this, ...numbers].reduce((acc, val) => acc - val, 0);
});

/**
 * Returns the product of the number and all the numbers provided.
 * @param numbers - Additional numbers to multiply with the original number.
 * @returns The product of all numbers.
 */
createExtendItNumber('product', function(...numbers: number[]): number {
  return [this, ...numbers].reduce((acc, val) => acc * val, 1);
});

/**
 * Returns the minimum value between the number and the provided value.
 * @param value - The value to compare with.
 * @returns The minimum value.
 */
createExtendItNumber('min', function(value: number): number {
  return Math.min(this, value);
});

/**
 * Returns the maximum value between the number and the provided value.
 * @param value - The value to compare with.
 * @returns The maximum value.
 */
createExtendItNumber('max', function(value: number): number {
  return Math.max(this, value);
});

/**
 * Checks if the number is NaN (Not-a-Number).
 * @returns True if the number is NaN, false otherwise.
 */
createExtendItNumber('isNaN', function(): boolean {
  return isNaN(this);
});

/**
 * Checks if the number is finite (not NaN, not Infinity, and not -Infinity).
 * @returns True if the number is finite, false otherwise.
 */
createExtendItNumber('isFinite', function(): boolean {
  return isFinite(this);
});

/**
 * Returns a random integer between the number and the provided value (inclusive).
 * @param value - The value to generate a random integer with.
 * @returns The random integer between the number and the provided value.
 */
createExtendItNumber('randomInt', function(value: number): number {
  const min = Math.min(this, value);
  const max = Math.max(this, value);
  return Math.floor(Math.random() * (max - min + 1)) + min;
});

/**
 * Returns a random number between the number and the provided value.
 * @param value - The value to generate a random number with.
 * @returns The random number between the number and the provided value.
 */
createExtendItNumber('random', function(value: number): number {
  const min = Math.min(this, value);
  const max = Math.max(this, value);
  return Math.random() * (max - min) + min;
});