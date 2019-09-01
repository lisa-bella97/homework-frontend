'use strict';

/**
 * Finds min and max number in the string and returns them as an array.
 * @param {string} str
 * @returns {[number,number]|[undefined,undefined]}
 */
const minmax = str => {
  let numbers = str
                  .split(/([^\w-.]|_|\s)+/)
                  .filter(num => num != '' && num != ' ' && !isNaN(num))
  return numbers.length == 0 ? [ undefined, undefined ] : [ Math.min(...numbers) ]
           .concat( Math.max(...numbers) );
}
