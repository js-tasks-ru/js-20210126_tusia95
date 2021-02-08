/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  return function getNestedValue(obj) {
    const props = path.split('.');
    let value = obj[props[0]];
    if (value) {
      for (let i = 1; i < props.length; i++) {
        {
          let nestedKey = value[props[i]];
          value = nestedKey;
        }
      }
      return value;
    }
  }
}

