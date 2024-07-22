// Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.

export default function appendToEachArrayValue(array, appendString) {
    let idx = 0;
    for (let value of array) {
    array[idx] = appendString + value;
    idx++;
  }

  return array;
}
