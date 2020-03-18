let reducer = (acc, value, index, array) => {
  let intermediaryValue = acc + value;
  if (index === array.length - 1) {
    return intermediaryValue / array.length;
  }
  return intermediaryValue;
};
let data = [1, 2, 3, 4, 5, 6];

let sum = data.reduce(reducer, 0); //?


