export function isHappyNumber(num) {
  let numArray = [...(12 + "")].map(Number); //?
  let square = n => n * n;
  let sum = 0;
  numArray.length; //?
  //sum of square of dig
//   for (let i = 0; i < numArray.length; i + 2) {
//     sum = square(numArray[i]) + square(numArray[i + 1]) + sum; //?
//   }
  //   return sum === 1;
}
isHappyNumber(12); //?

[...(12 + "")].map(Number); //?
