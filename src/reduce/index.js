var data = [15];
var reducer = function(accumulator, item) {
  return accumulator + item;
};

var initialValue = 0;

var total = data.reduce(reducer, initialValue);
console.log(total);



