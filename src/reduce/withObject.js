// Count the number of occurrence of string in the array using reduce method.
/**
 * Questions
 * 1. What happen when we omit the initial value while calling reduce function?
 * 2. What happen when we forgot to return accumulator value from reducer?
 */
let data = ["vote1", "vote2", "vote1", "vote2"];

let reducer = (accumulator, value) => {
  if (accumulator[value]) {
    //?
    accumulator[value] = accumulator[value] + 1; //?
  } else {
    accumulator[value] = 1; //?
  }
  return accumulator;
};

let tally = data.reduce(reducer, {}); // ?? What happens if we omit the initial value?
