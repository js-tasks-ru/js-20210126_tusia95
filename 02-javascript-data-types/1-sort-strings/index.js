/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  switch (param) {
    case `asc`:
      return arr.sort(function (a, b) {
        return a.localeCompare(b);
      });
      break;
    case `dsc`:
      return arr.sort(function (a, b) {
        return b.localeCompare(a);
      });
      break;
  }
}




