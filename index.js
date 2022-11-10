const myArray = [1, 2, 3, 4, 5];

// MAP - does not change the original array, creates new array from calling a function for every array element
console.log(myArray.map(() => "b"));
console.log(myArray.map((el) => el + 1));
console.log(myArray);

// Filter
const newArray = [1, 3, 5, 7, 9];
console.log(newArray.filter((el) => el > 4));

// Includes
console.log(myArray.includes(4));
console.log(myArray.includes(9));
console.log(myArray.includes(2, 3)); // first is number, second is id
console.log(myArray.includes(2, 1));

const newishArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(newishArray.includes());

// Find
console.log(newArray.find((el) => el === 5));

// Reduce
console.log(
  myArray.reduce(
    (accumulator, currentElement) => accumulator + currentElement,
    0
  )
);
console.log(
  myArray.reduce(
    (accumulator, currentElement) => accumulator + currentElement,
    10
  )
);
