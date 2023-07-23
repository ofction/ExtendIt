/** 
 * The Main Function To Create The Extends
 */
function createExtendItArray(name: string, func: Function): void {
  return Array.prototype[name] = func;
};

/**
 * Returns the first element of the array.
 * @returns The first element of the array.
 */
createExtendItArray('first', function<T>(): T {
  return this[0];
});

/**
 * Returns the last element of the array.
 * @returns The last element of the array.
 */
createExtendItArray('last', function<T>(): T {
  return this[this.length - 1];
});

/**
 * Returns a new array with the elements reversed.
 * @returns A new array with the elements reversed.
 */
createExtendItArray('reverse', function<T>(): T[] {
  return this.slice().reverse();
});

/**
 * Returns a new array with unique elements (removes duplicates).
 * @returns A new array with unique elements.
 */
createExtendItArray('unique', function<T>(): T[] {
  return [...new Set(this)];
});

/**
 * Returns a new array with the elements sorted in ascending order.
 * @param compareFn - Optional function to define the sort order.
 * @returns A new array with the elements sorted in ascending order.
 */
createExtendItArray('sortAsc', function<T>(compareFn?: (a: T, b: T) => number): T[] {
  return this.slice().sort(compareFn);
});

/**
 * Returns a new array with the elements sorted in descending order.
 * @param compareFn - Optional function to define the sort order.
 * @returns A new array with the elements sorted in descending order.
 */
createExtendItArray('sortDesc', function<T>(compareFn?: (a: T, b: T) => number): T[] {
  return this.slice().sort((a, b) => compareFn ? -compareFn(a, b) : (b as any) - (a as any));
});

/**
 * Returns a new array with the elements sorted based on a specific property in ascending order.
 * @param prop - The property to use for sorting.
 * @returns A new array with the elements sorted based on the specified property in ascending order.
 */
createExtendItArray('sortByPropAsc', function<T>(prop: keyof T): T[] {
  return this.slice().sort((a, b) => (a[prop] as any) - (b[prop] as any));
});

/**
 * Returns a new array with the elements sorted based on a specific property in descending order.
 * @param prop - The property to use for sorting.
 * @returns A new array with the elements sorted based on the specified property in descending order.
 */
createExtendItArray('sortByPropDesc', function<T>(prop: keyof T): T[] {
  return this.slice().sort((a, b) => (b[prop] as any) - (a[prop] as any));
});

/**
 * Returns a new array with only the elements that pass the test implemented by the provided function.
 * @param callback - Function to test each element of the array.
 * @returns A new array with only the elements that pass the test.
 */
createExtendItArray('filter', function<T>(callback: (value: T, index: number, array: T[]) => unknown): T[] {
  return this.slice().filter(callback);
});

/**
 * Executes a provided function once for each array element.
 * @param callback - Function to execute for each element.
 */
createExtendItArray('forEach', function<T>(callback: (value: T, index: number, array: T[]) => void): void {
  this.slice().forEach(callback);
});

/**
 * Tests whether all elements in the array pass the test implemented by the provided function.
 * @param callback - Function to test each element of the array.
 * @returns True if all elements pass the test, false otherwise.
 */
createExtendItArray('every', function<T>(callback: (value: T, index: number, array: T[]) => boolean): boolean {
  return this.slice().every(callback);
});

/**
 * Tests whether at least one element in the array passes the test implemented by the provided function.
 * @param callback - Function to test each element of the array.
 * @returns True if at least one element passes the test, false otherwise.
 */
createExtendItArray('some', function<T>(callback: (value: T, index: number, array: T[]) => boolean): boolean {
  return this.slice().some(callback);
});

/**
 * Returns the index of the first element in the array that satisfies the provided testing function.
 * @param callback - Function to test for each element.
 * @returns The index of the first element that satisfies the provided testing function, or -1 if none is found.
 */
createExtendItArray('findIndex', function<T>(callback: (value: T, index: number, array: T[]) => boolean): number {
  return this.findIndex(callback);
});

/**
 * Returns the index of the last element in the array that satisfies the provided testing function.
 * @param callback - Function to test for each element.
 * @returns The index of the last element that satisfies the provided testing function, or -1 if none is found.
 */
createExtendItArray('findLastIndex', function<T>(callback: (value: T, index: number, array: T[]) => boolean): number {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
});

/**
 * Returns a new array with all sub-array elements concatenated into it recursively.
 * @returns A new array with the elements concatenated into it recursively.
 */
createExtendItArray('flat', function<T>(): T[] {
  return this.flat();
});

/**
 * Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * @param depth - The depth level specifying how deep a nested array structure should be flattened.
 * @returns A new array with the elements concatenated into it recursively up to the specified depth.
 */
createExtendItArray('flatDepth', function<T>(depth: number): T[] {
  return this.flat(depth);
});

/**
 * Returns a new array with the specified number of elements from the start of the array.
 * @param count - The number of elements to include from the start.
 * @returns A new array with the specified number of elements from the start of the array.
 */
createExtendItArray('take', function<T>(count: number): T[] {
  return this.slice(0, count);
});

/**
 * Returns a new array with elements excluded from the start.
 * @param count - The number of elements to exclude from the start.
 * @returns A new array with elements excluded from the start.
 */
createExtendItArray('drop', function<T>(count: number): T[] {
  return this.slice(count);
});

/**
 * Returns a new array with elements excluded from the end.
 * @param count - The number of elements to exclude from the end.
 * @returns A new array with elements excluded from the end.
 */
createExtendItArray('dropRight', function<T>(count: number): T[] {
  return this.slice(0, -count);
});

/**
 * Returns a new array with the elements in a random order.
 * @returns A new array with the elements in a random order.
 */
createExtendItArray('randomOrder', function<T>(): T[] {
  const array = this.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
});

/**
 * Returns the index of the last occurrence of a specified element in the array.
 * @param element - The element to search for.
 * @returns The index of the last occurrence of the specified element, or -1 if not found.
 */
createExtendItArray('lastIndexOf', function<T>(element: T): number {
  return this.lastIndexOf(element);
});

/**
 * Returns the first element that satisfies the provided testing function.
 * @param callback - Function that tests each element.
 * @returns The first element that satisfies the provided testing function, or undefined if not found.
 */
createExtendItArray('find', function<T>(callback: (value: T, index: number, array: T[]) => boolean): T | undefined {
  return this.find(callback);
});

/**
 * Creates a new array with all elements that are not equal to null or undefined.
 * @returns A new array with all elements that are not equal to null or undefined.
 */
createExtendItArray('compact', function<T>(): T[] {
  return this.filter((value) => value !== null && value !== undefined);
});

/**
 * Returns a new array with elements included between start and end indices (end index not included).
 * If start is negative, it's offset from the end of the array. If end is negative, it's offset from the end of the array.
 * @param start - The starting index (inclusive).
 * @param end - The ending index (exclusive).
 * @returns A new array with elements included between start and end indices.
 */
createExtendItArray('sliceRange', function<T>(start: number, end: number): T[] {
  const length = this.length;
  const realStart = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  const realEnd = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);
  return this.slice(realStart, realEnd);
});

/**
 * Returns a new array with elements included between start and end indices (both inclusive).
 * If start is negative, it's offset from the end of the array. If end is negative, it's offset from the end of the array.
 * @param start - The starting index (inclusive).
 * @param end - The ending index (inclusive).
 * @returns A new array with elements included between start and end indices.
 */
createExtendItArray('sliceRangeInclusive', function<T>(start: number, end: number): T[] {
  const length = this.length;
  const realStart = start < 0 ? Math.max(length + start, 0) : Math.min(start, length - 1);
  const realEnd = end < 0 ? Math.max(length + end, 0) : Math.min(end, length - 1);
  return this.slice(realStart, realEnd + 1);
});

/**
 * Returns a new array with all elements in reverse order.
 * @returns A new array with all elements in reverse order.
 */
createExtendItArray('reverse', function<T>(): T[] {
  return this.slice().reverse();
});

/**
 * Returns a new array with all elements from the end in reverse order.
 * @returns A new array with all elements from the end in reverse order.
 */
createExtendItArray('reverseFromEnd', function<T>(): T[] {
  return this.slice().reverse().map((_, index) => this[this.length - 1 - index]);
});

/**
 * Returns a new array with a specific number of elements repeated multiple times.
 * @param count - The number of times to repeat the elements.
 * @returns A new array with the elements repeated multiple times.
 */
createExtendItArray('repeat', function<T>(count: number): T[] {
  if (count <= 0) return [];
  return Array.from({ length: count }, () => this).flat();
});

/**
 * Returns a new array with elements sorted based on a specific property in ascending order.
 * @param prop - The property to use for sorting.
 * @returns A new array with elements sorted based on the specified property in ascending order.
 */
createExtendItArray('sortByProperty', function<T>(prop: keyof T): T[] {
  return this.slice().sort((a, b) => (a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0));
});

/**
 * Returns a new array with elements sorted based on a specific property in descending order.
 * @param prop - The property to use for sorting.
 * @returns A new array with elements sorted based on the specified property in descending order.
 */
createExtendItArray('sortByPropertyDescending', function<T>(prop: keyof T): T[] {
  return this.slice().sort((a, b) => (a[prop] < b[prop] ? 1 : a[prop] > b[prop] ? -1 : 0));
});

/**
 * Returns a new array with all elements transformed by a mapping function.
 * @param mapper - Function that maps each element to a new value.
 * @returns A new array with all elements mapped to new values.
 */
createExtendItArray('mapWith', function<T, U>(mapper: (value: T, index: number, array: T[]) => U): U[] {
  return this.map(mapper);
});

/**
 * Returns a new array with elements that are present in both arrays.
 * @param otherArray - The array to intersect with.
 * @returns A new array with elements that are present in both arrays.
 */
createExtendItArray('intersect', function<T>(otherArray: T[]): T[] {
  return this.filter((value) => otherArray.includes(value));
});

/**
 * Returns a new array with elements that are unique to the current array (not present in the other array).
 * @param otherArray - The array to compare with.
 * @returns A new array with elements that are unique to the current array.
 */
createExtendItArray('difference', function<T>(otherArray: T[]): T[] {
  return this.filter((value) => !otherArray.includes(value));
});

/**
 * Returns a new array with elements from both arrays without duplicates.
 * @param otherArray - The array to union with.
 * @returns A new array with elements from both arrays without duplicates.
 */
createExtendItArray('union', function<T>(otherArray: T[]): T[] {
  const combined = this.concat(otherArray);
  return Array.from(new Set(combined));
});

/**
 * Checks if the array is a subset of the other array.
 * @param otherArray - The array to check against.
 * @returns True if the array is a subset of the other array, false otherwise.
 */
createExtendItArray('isSubsetOf', function<T>(otherArray: T[]): boolean {
  return this.every((value) => otherArray.includes(value));
});

/**
 * Checks if the array contains only unique elements (no duplicates).
 * @returns True if the array contains only unique elements, false otherwise.
 */
createExtendItArray('isUnique', function<T>(): boolean {
  return this.length === new Set(this).size;
});

/**
 * Returns a new array with the specified number of elements from the end of the array.
 * @param count - The number of elements to include from the end.
 * @returns A new array with the specified number of elements from the end of the array.
 */
createExtendItArray('takeLast', function<T>(count: number): T[] {
  return this.slice(-count);
});

/**
 * Returns a new array with elements that meet a specific condition.
 * @param predicate - Function that tests each element.
 * @returns A new array with elements that meet the condition.
 */
createExtendItArray('filterBy', function<T>(predicate: (value: T, index: number, array: T[]) => boolean): T[] {
  return this.filter(predicate);
});

/**
 * Checks if all elements in the array meet a specific condition.
 * @param predicate - Function that tests each element.
 * @returns True if all elements meet the condition, false otherwise.
 */
createExtendItArray('everyBy', function<T>(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
  return this.every(predicate);
});

/**
 * Checks if at least one element in the array meets a specific condition.
 * @param predicate - Function that tests each element.
 * @returns True if at least one element meets the condition, false otherwise.
 */
createExtendItArray('someBy', function<T>(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
  return this.some(predicate);
});

/**
 * Returns a new array with elements in a flattened format up to a specific depth.
 * @param depth - The maximum depth level to flatten (default: 1).
 * @returns A new array with elements flattened up to the specified depth.
 */
createExtendItArray('flatten', function<T>(depth: number = 1): T[] {
  function flattenHelper(arr: T[], currentDepth: number): T[] {
    return arr.reduce((acc: T[], item: any) => {
      if (Array.isArray(item) && currentDepth > 0) {
        return acc.concat(flattenHelper(item, currentDepth - 1));
      } else {
        return acc.concat(item);
      }
    }, []);
  }

  return flattenHelper(this, depth);
});

/**
 * Returns the sum of all elements in the array.
 * @returns The sum of all elements in the array.
 */
createExtendItArray('sum', function(): number {
  return this.reduce((acc: number, value: number) => acc + value, 0);
});

/**
 * Returns the average value of all elements in the array.
 * @returns The average value of all elements in the array.
 */
createExtendItArray('average', function(): number {
  if (this.length === 0) return 0;
  return this.reduce((acc: number, value: number) => acc + value, 0) / this.length;
});

/**
 * Checks if the array is empty (has zero elements).
 * @returns True if the array is empty, false otherwise.
 */
createExtendItArray('isEmpty', function(): boolean {
  return this.length === 0;
});

/**
 * Returns a new array with unique elements, removing duplicates.
 * @returns A new array with unique elements.
 */
createExtendItArray('unique', function<T>(): T[] {
  return Array.from(new Set(this));
});

/**
 * Executes a function on each element of the array and returns the results.
 * @param callback - Function to execute on each element.
 * @returns An array containing the results of applying the function to each element.
 */
createExtendItArray('map', function<T, U>(callback: (value: T, index: number, array: T[]) => U): U[] {
  return this.map(callback);
});

/**
 * Returns the maximum element in the array.
 * @returns The maximum element in the array.
 */
createExtendItArray('max', function<T>(): T | undefined {
  return this.reduce((max: T | undefined, current: T) => (max === undefined || current > max ? current : max), undefined);
});

/**
 * Returns the minimum element in the array.
 * @returns The minimum element in the array.
 */
createExtendItArray('min', function<T>(): T | undefined {
  return this.reduce((min: T | undefined, current: T) => (min === undefined || current < min ? current : min), undefined);
});

/**
 * Returns the index of the first occurrence of a specific element in the array.
 * @param value - The element to search for.
 * @returns The index of the first occurrence of the element, or -1 if not found.
 */
createExtendItArray('indexOf', function<T>(value: T): number {
  return this.indexOf(value);
});

/**
 * Returns the index of the last occurrence of a specific element in the array.
 * @param value - The element to search for.
 * @returns The index of the last occurrence of the element, or -1 if not found.
 */
createExtendItArray('lastIndexOf', function<T>(value: T): number {
  return this.lastIndexOf(value);
});

/**
 * Returns a new array with elements sorted in ascending order.
 * @returns A new array with elements sorted in ascending order.
 */
createExtendItArray('sortByAscending', function<T>(): T[] {
  return [...this].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
});

/**
 * Returns a new array with elements sorted in descending order.
 * @returns A new array with elements sorted in descending order.
 */
createExtendItArray('sortByDescending', function<T>(): T[] {
  return [...this].sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
});

/**
 * Returns the element at a specific index in the array.
 * @param index - The index of the element to retrieve.
 * @returns The element at the specified index, or undefined if the index is out of range.
 */
createExtendItArray('getElementAt', function<T>(index: number): T | undefined {
  return this[index];
});

/**
 * Returns a new array with elements from a specific start index up to, but not including, an end index.
 * @param start - The start index (inclusive).
 * @param end - The end index (exclusive).
 * @returns A new array with elements in the specified range.
 */
createExtendItArray('slice', function<T>(start: number, end?: number): T[] {
  return this.slice(start, end);
});

/**
 * Returns the number of occurrences of a specific element in the array.
 * @param value - The element to count occurrences of.
 * @returns The number of occurrences of the element in the array.
 */
createExtendItArray('countOccurrences', function<T>(value: T): number {
  return this.filter((item) => item === value).length;
});

/**
 * Checks if the array is equal to another array (same elements in the same order).
 * @param otherArray - The other array to compare.
 * @returns True if the arrays are equal, false otherwise.
 */
createExtendItArray('equals', function<T>(otherArray: T[]): boolean {
  if (this.length !== otherArray.length) return false;
  return this.every((value, index) => value === otherArray[index]);
});

/**
 * Returns a new array with the elements sorted based on a specific property in ascending order.
 * @param property - The property to use for sorting.
 * @returns A new array with the elements sorted based on the specified property in ascending order.
 */
createExtendItArray('sortByPropertyAscending', function<T>(property: keyof T): T[] {
  return this.slice().sort((a, b) => (a[property] as any) - (b[property] as any));
});

/**
 * Returns a new array with the elements sorted based on a specific property in descending order.
 * @param property - The property to use for sorting.
 * @returns A new array with the elements sorted based on the specified property in descending order.
 */
createExtendItArray('sortByPropertyDescending', function<T>(property: keyof T): T[] {
  return this.slice().sort((a, b) => (b[property] as any) - (a[property] as any));
});

/**
 * Splits the array into chunks of the specified size.
 * @param chunkSize - The size of each chunk.
 * @returns An array of chunks, where each chunk is an array containing the specified number of elements.
 */
createExtendItArray('chunk', function<T>(chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < this.length; i += chunkSize) {
    chunks.push(this.slice(i, i + chunkSize));
  }
  return chunks;
});