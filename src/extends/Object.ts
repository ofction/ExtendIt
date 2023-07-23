/** 
 * The Main Function To Create The Extends
 */
function createExtendItObject(name: string, func: Function) {
  return Object.prototype[name] = func;
};

/**
 * Adds a custom prefix to the values of an object's properties and returns a new object.
 * @param {string} prefix - The prefix to be added.
 */
createExtendItObject("withPrefixToValues", function(prefix) {
  const result = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      result[key] = prefix + " " + this[key].toString();
    }
  }
  return result;
});

/**
 * Returns the number of enumerable properties in the object.
 */
createExtendItObject("countProperties", function() {
  let count = 0;
  for (const prop in this) {
    if (this.hasOwnProperty(prop)) {
      count++;
    }
  }
  return count;
});

/**
 * Reverses the order of the object's keys and returns a new object.
 */
createExtendItObject("reversedKeys", function() {
  const reversedObject = {};
  const keys = Object.keys(this);
  for (let i = keys.length - 1; i >= 0; i--) {
    reversedObject[keys[i]] = this[keys[i]];
  }
  return reversedObject;
});

/**
 * Checks if the object has any own enumerable properties and returns a boolean.
 */
createExtendItObject("isEmpty", function() {
  for (const prop in this) {
    if (this.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
});

/**
 * Returns an array of keys whose corresponding values match the specified value.
 * @param {any} value - The value to match against.
 */
createExtendItObject("keysByValueType", function(value) {
  const keys = [];
  for (const prop in this) {
    if (this.hasOwnProperty(prop) && this[prop] === value) {
      keys.push(prop);
    }
  }
  return keys;
});

/**
 * Merges the current object with another object and returns a new merged object.
 * @param {object} otherObject - The object to merge with.
 */
createExtendItObject("mergeWith", function(otherObject) {
  return { ...this, ...otherObject };
});

/**
 * Returns a new object containing only the specified keys and their corresponding values.
 * @param {string[]} keys - The keys to filter by.
 */
createExtendItObject("filterByKeys", function(keys) {
  const filteredObject = {};
  for (const key of keys) {
    if (this.hasOwnProperty(key)) {
      filteredObject[key] = this[key];
    }
  }
  return filteredObject;
});

/**
 * Renames a property in the object, preserving its value.
 * @param {string} oldName - The current name of the property.
 * @param {string} newName - The new name for the property.
 */
createExtendItObject("renameProperty", function(oldName, newName) {
  if (this.hasOwnProperty(oldName)) {
    this[newName] = this[oldName];
    delete this[oldName];
  }
  return this;
});

/**
 * Modifies the object by converting all keys to uppercase.
 */
createExtendItObject("uppercaseKeys", function() {
  const result = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      result[key.toUpperCase()] = this[key];
    }
  }
  return result;
});

/**
 * Converts the object into an array of key-value pairs.
 */
createExtendItObject("convertToArray", function() {
  return Object.entries(this);
});

/**
 * Returns a new object containing only the properties with specified values.
 * @param {any} value - The value to filter by.
 */
createExtendItObject("filterByValues", function(value) {
  const filteredObject = {};
  for (const key in this) {
    if (this.hasOwnProperty(key) && this[key] === value) {
      filteredObject[key] = this[key];
    }
  }
  return filteredObject;
});

/**
 * Sorts the object's properties by their keys and returns a new object.
 */
createExtendItObject("sortByKey", function() {
  const sortedObject = {};
  const keys = Object.keys(this).sort();
  for (const key of keys) {
    sortedObject[key] = this[key];
  }
  return sortedObject;
});

/**
 * Updates the value of a property in the object.
 * @param {string} key - The key of the property to update.
 * @param {any} value - The new value for the property.
 */
createExtendItObject("updateValue", function(key, value) {
  if (this.hasOwnProperty(key)) {
    this[key] = value;
  }
  return this;
});

/**
 * Deletes a property from the object.
 * @param {string} key - The key of the property to delete.
 */
createExtendItObject("deleteByKey", function(key) {
  if (this.hasOwnProperty(key)) {
    delete this[key];
  }
  return this;
});

/**
 * Checks if two objects have the same keys.
 * @param {object} otherObject - The other object to compare keys with.
 */
createExtendItObject("hasSameKeys", function(otherObject) {
  const keys1 = Object.keys(this).sort().toString();
  const keys2 = Object.keys(otherObject).sort().toString();
  return keys1 === keys2;
});

/**
 * Checks if two objects are equal, having the same keys and corresponding values.
 * @param {object} otherObject - The other object to compare with.
 */
createExtendItObject("isEqual", function(otherObject) {
  const keys1 = Object.keys(this).sort().toString();
  const keys2 = Object.keys(otherObject).sort().toString();
  if (keys1 !== keys2) return false;
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      if (this[key] !== otherObject[key]) return false;
    }
  }
  return true;
});

/**
 * Returns a random key from the object.
 */
createExtendItObject("randomKey", function() {
  const keys = Object.keys(this);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
});

/**
 * Finds a key in the object based on the specified value.
 * @param {any} value - The value to find in the object.
 */
createExtendItObject("findKeyByValue", function(value) {
  for (const key in this) {
    if (this.hasOwnProperty(key) && this[key] === value) {
      return key;
    }
  }
  return null;
});

/**
 * Checks if the object contains all the specified keys.
 * @param {string[]} keys - The keys to check for.
 */
createExtendItObject("hasAllKeys", function(keys) {
  for (const key of keys) {
    if (!this.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
});

/**
 * Returns the number of distinct values in the object.
 */
createExtendItObject("distinctValuesCount", function() {
  const values = new Set(Object.values(this));
  return values.size;
});

/**
 * Returns an object containing the types of the properties in the original object.
 */
createExtendItObject("getPropertyTypes", function() {
  const types = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      types[key] = typeof this[key];
    }
  }
  return types;
});

/**
 * Returns the first key of the object.
 */
createExtendItObject("firstKey", function() {
  const keys = Object.keys(this);
  return keys.length > 0 ? keys[0] : undefined;
});

/**
 * Returns the last key of the object.
 */
createExtendItObject("lastKey", function() {
  const keys = Object.keys(this);
  return keys.length > 0 ? keys[keys.length - 1] : undefined;
});

/**
 * Swaps the keys with their values in the object and returns a new object.
 */
createExtendItObject("swapKeyValue", function() {
  const swappedObject = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      swappedObject[this[key]] = key;
    }
  }
  return swappedObject;
});

/**
 * Returns a new object with the specified keys omitted.
 * @param {string[]} keys - The keys to omit.
 */
createExtendItObject("omitKeys", function(keys) {
  const result = { ...this };
  for (const key of keys) {
    if (result.hasOwnProperty(key)) {
      delete result[key];
    }
  }
  return result;
});

/**
 * Merges properties with duplicate values into a single property in the object.
 */
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

/**
 * Returns an array of values corresponding to the specified keys.
 * @param {string[]} keys - The keys to get values for.
 */
createExtendItObject("getValuesByKeys", function(keys) {
  const values = [];
  for (const key of keys) {
    if (this.hasOwnProperty(key)) {
      values.push(this[key]);
    }
  }
  return values;
});

/**
 * Reverses the order of keys and values in the object and returns a new object.
 */
createExtendItObject("reverseKeyValue", function() {
  const reversedObject = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      reversedObject[this[key]] = key;
    }
  }
  return reversedObject;
});

/**
 * Groups the object's properties based on their common property values.
 */
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

/**
 * Computes the average of numeric property values in the object.
 */
createExtendItObject("computeAverage", function() {
  let sum = 0;
  let count = 0;
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      sum += this[key];
      count++;
    }
  }
  return count > 0 ? sum / count : undefined;
});

/**
 * Shuffles the order of keys in the object and returns a new object.
 */
createExtendItObject("shuffleKeys", function() {
  const shuffledObject = {};
  const keys = Object.keys(this);
  const shuffledKeys = keys.sort(() => Math.random() - 0.5);
  for (let i = 0; i < keys.length; i++) {
    shuffledObject[shuffledKeys[i]] = this[shuffledKeys[i]];
  }
  return shuffledObject;
});

/**
 * Reverses the values of the object's properties and returns a new object.
 */
createExtendItObject("reverseValues", function() {
  const reversedObject = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      reversedObject[key] = this[key].toString().split("").reverse().join("");
    }
  }
  return reversedObject;
});

/**
 * Returns an array of keys whose names start with the specified prefix.
 * @param {string} prefix - The prefix to look for.
 */
createExtendItObject("getKeysStartingWith", function(prefix) {
  const keys = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && key.startsWith(prefix)) {
      keys.push(key);
    }
  }
  return keys;
});

/**
 * Removes properties with falsy values (false, null, 0, "", NaN, undefined) from the object.
 */
createExtendItObject("removeFalsyValues", function() {
  const result = {};
  for (const key in this) {
    if (this.hasOwnProperty(key) && this[key]) {
      result[key] = this[key];
    }
  }
  return result;
});

/**
 * Truncates the length of keys in the object and returns a new object.
 * @param {number} length - The maximum length for the keys.
 */
createExtendItObject("truncateKeys", function(length) {
  const result = {};
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      result[key.substring(0, length)] = this[key];
    }
  }
  return result;
});

/**
 * Finds the key with the longest name in the object.
 */
createExtendItObject("findLongestKey", function() {
  let longestKey = "";
  for (const key in this) {
    if (this.hasOwnProperty(key) && key.length > longestKey.length) {
      longestKey = key;
    }
  }
  return longestKey;
});

/**
 * Returns an array of keys whose names end with the specified suffix.
 * @param {string} suffix - The suffix to look for.
 */
createExtendItObject("getKeysEndingWith", function(suffix) {
  const keys = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && key.endsWith(suffix)) {
      keys.push(key);
    }
  }
  return keys;
});

/**
 * Calculates the sum of numeric property values in the object.
 */
createExtendItObject("calculateSum", function() {
  let sum = 0;
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      sum += this[key];
    }
  }
  return sum;
});

/**
 * Returns an array of keys whose names match the specified pattern (RegExp).
 * @param {RegExp} pattern - The regular expression pattern to match keys against.
 */
createExtendItObject("extractKeysByPattern", function(pattern) {
  const keys = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && pattern.test(key)) {
      keys.push(key);
    }
  }
  return keys;
});

/**
 * Increments the numeric values of the object's properties and returns a new object.
 * @param {number} increment - The value to increment the properties by.
 */
createExtendItObject("incrementValues", function(increment) {
  const result = {};
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      result[key] = this[key] + increment;
    }
  }
  return result;
});

/**
 * Decrements the numeric values of the object's properties and returns a new object.
 * @param {number} decrement - The value to decrement the properties by.
 */
createExtendItObject("decrementValues", function(decrement) {
  const result = {};
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      result[key] = this[key] - decrement;
    }
  }
  return result;
});

/**
 * Returns an array of keys that are common in both the object and another object.
 * @param {object} otherObject - The other object to compare keys with.
 */
createExtendItObject("getCommonKeys", function(otherObject) {
  const keys1 = Object.keys(this);
  const keys2 = Object.keys(otherObject);
  return keys1.filter((key) => keys2.includes(key));
});

/**
 * Calculates the product of numeric property values in the object.
 */
createExtendItObject("calculateProduct", function() {
  let product = 1;
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      product *= this[key];
    }
  }
  return product;
});

/**
 * Swaps the case (upper to lower and vice versa) of the object's property names.
 */
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

/**
 * Returns an array of keys whose numeric property values are greater than the specified value.
 * @param {number} value - The value to compare against.
 */
createExtendItObject("getKeysGreaterThan", function(value) {
  const keys = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number" && this[key] > value) {
      keys.push(key);
    }
  }
  return keys;
});

/**
 * Returns an array of keys whose numeric property values are smaller than the specified value.
 * @param {number} value - The value to compare against.
 */
createExtendItObject("getKeysSmallerThan", function(value) {
  const keys = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number" && this[key] < value) {
      keys.push(key);
    }
  }
  return keys;
});

/**
 * Calculates the median of numeric property values in the object.
 */
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

/**
 * Returns an array of keys in alphabetical order.
 */
createExtendItObject("getKeysInAlphabeticalOrder", function() {
  const keys = Object.keys(this);
  return keys.sort();
});

/**
 * Removes empty (null or undefined) properties from the object.
 */
createExtendItObject("removeEmptyItems", function() {
  const result = {};
  for (const key in this) {
    if (this.hasOwnProperty(key) && this[key] !== null && this[key] !== undefined) {
      result[key] = this[key];
    }
  }
  return result;
});

/**
 * Returns an array of unique values in the object's properties.
 */
createExtendItObject("extractUniqueValues", function() {
  const values = new Set(Object.values(this));
  return Array.from(values);
});

/**
 * Reverses the order of values in the object's properties and returns a new object.
 */
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

/**
 * Sums all numeric property values in the object and returns the result.
 */
createExtendItObject("sumNumericValues", function() {
  let sum = 0;
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      sum += this[key];
    }
  }
  return sum;
});

/**
 * Replaces the value of a property in the object based on the specified key.
 * @param {string} key - The key of the property to replace the value.
 * @param {any} newValue - The new value for the property.
 */
createExtendItObject("replaceValueByKey", function(key, newValue) {
  if (this.hasOwnProperty(key)) {
    this[key] = newValue;
  }
  return this;
});

/**
 * Returns an array of items whose names start with the specified prefix.
 * @param {string} prefix - The prefix to look for.
 */
createExtendItObject("getItemsStartingWith", function(prefix) {
  const items = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && key.startsWith(prefix)) {
      items.push({ key, value: this[key] });
    }
  }
  return items;
});

/**
 * Returns an array of values that are greater than the specified value.
 * @param {number} value - The value to compare against.
 */
createExtendItObject("getValuesGreaterThan", function(value) {
  const values = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number" && this[key] > value) {
      values.push(this[key]);
    }
  }
  return values;
});

/**
 * Returns an array of values that are smaller than the specified value.
 * @param {number} value - The value to compare against.
 */
createExtendItObject("getValuesSmallerThan", function(value) {
  const values = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number" && this[key] < value) {
      values.push(this[key]);
    }
  }
  return values;
});

/**
 * Returns a new object containing only properties whose values match the specified type.
 * @param {string} type - The type to filter by (e.g., "string", "number", "object", etc.).
 */
createExtendItObject("filterByValueType", function(type) {
  const result = {};
  for (const key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === type) {
      result[key] = this[key];
    }
  }
  return result;
});

/**
 * Returns an array of keys whose names match the specified pattern (RegExp).
 * @param {RegExp} pattern - The regular expression pattern to match keys against.
 */
createExtendItObject("findKeysByPattern", function(pattern) {
  const keys = [];
  for (const key in this) {
    if (this.hasOwnProperty(key) && pattern.test(key)) {
      keys.push(key);
    }
  }
  return keys;
});

/**
 * Partitions the object's properties into two objects based on a callback function.
 * @param {Function} callback - The callback function that determines the partitioning.
 */
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