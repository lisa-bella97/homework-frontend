'use strict';

const minmax = str => {
  let numbers = str.split(/([^\w-.]|_|\s)+/).filter(num => num != '' && num != ' ' && !isNaN(num))
  return numbers.length == 0 ? [ undefined, undefined ] : [ Math.min(...numbers) ].concat( Math.max(...numbers) );
}
