let data = [1, 2, 3, 4];
let doubled = data.reduce((acc, value) => {
  acc.push(value * 2);

  return acc;
}, []);

//  Alternative solution using JS map function.
let doubleMapped = data.map(value => value * 2);

// We can use reduce function to filter and map data on a given dataset.
let data2 = [1, 2, 3, 4, 5, 6];
let even = data2.reduce((acc, value) => {
  if (value % 2 === 0) {
    acc.push(value);
  }

  return acc;
}, []);

// Using filter method

let filterMapped = data2.filter(value => value % 2 === 0);

/**
 * Then why we need to use reduce method for all these simple jobs when we have
 * dedicated methods in javascript. Moreover, we can compose two different function to get result.
 */

let filterComposeMapped = data2
  .filter(value => value % 2 === 0)
  .map(value => value * 2);

// Lets try on bigData

let bigData = [...Array(100000000).keys()].map(i => i);

console.time("filter and map");
let bigDataMapped = bigData
  .filter(value => value % 2 === 0)
  .map(value => value * 2);
console.timeEnd("filter and map");

console.time("reduce");
bigDataMapped = bigData.reduce((acc, value) => {
  if (value % 2 === 0) {
    acc.push(value * 2);
  }

  return acc;
}, []);
console.timeEnd("reduce");
