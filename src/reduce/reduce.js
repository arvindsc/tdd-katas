const increment = input => input + 1;
const decrement = input => input - 1;
const double = input => input * 2;
const halve = input => input / 2;

// (inc-->double-->dec) solution is NOT GOOD!!!!
const initialValue = 10;
let incrementedValue = increment(initialValue);
let doubleValue = double(incrementedValue);
let decrementedValue = decrement(doubleValue); //?

// lets implement the same functionality using a functional approach.
const transform = input => (input + 1) * 2 - 1;
transform(initialValue); //?

// Another approach to implement the same functionality using Composition and reduce

const pipeline = [increment, double, decrement];

const final_value = pipeline.reduce((acc, fn) => {
  return fn(acc);
}, initialValue);

// Safely inspect nested objects with Reduce.
const luke = {
  name: "luke skywalker",
  jedi: true,
  parents: {
    father: {
      jedi: true
    },
    mother: {
      jedi: false
    }
  }
};

const han = {
  name: "han solo",
  jedi: false,
  parents: {
    father: {
      jedi: false
    },
    mother: {
      jedi: false
    }
  }
};

const anakin = {
  name: "anakin skywalker",
  jedi: true,
  parents: {
    mother: {
      jedi: false
    }
  }
};

const characters = [luke, han, anakin];

const fatherWasJedi = character => {
  const path = "parents.father.jedi";
  return path.split(".").reduce((obj, field) => {
    if (obj[field]) {
      return obj[field];
    }

    return false;
  }, character);
};


characters.forEach(function(character) {
    console.log(character.name + "'s father was a jedi:", fatherWasJedi(character)) 
  });