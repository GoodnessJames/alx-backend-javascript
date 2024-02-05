export default function appendToEachArrayValue(array, appendString) {
    let __array = []
    for (let value of array) {
      __array.push(appendString + value);
    }
  
    return __array;
}