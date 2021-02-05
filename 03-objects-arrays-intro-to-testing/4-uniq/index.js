/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (arr) {
    let uniqueSet = new Set();
    arr.forEach((item) => {
      uniqueSet.add(item);
    })
    return Array.from(uniqueSet);
  } else return new Array();
}
