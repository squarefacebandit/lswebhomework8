// 1) Write a function called firstItem that passes the first item of the given array to the callback function

// version 1
var firstItem = (anArray, cb) => {
  cb(anArray[0]);
};

// version 2
// The above syntax is identical to the following explicit "function" declaration:
// var firstItem = function(anArray, cb) {
//   cb(anArray[0]);
// };

var foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

firstItem(foods, (firstItem) => {
  console.log('The first item is ' + firstItem);
});


// 2) Write a function called getLength that passes the length of the array into the callback

// version 1
var getLength = (anArray, cb) => {
  cb(anArray.length);
};

// version 2
// var getLength = function(anArray, cb) {
//   cb(anArray.length);
// };

getLength(foods, (length) => {
  console.log('The length of the array is ' + length);
});


// 3) Write a function called last which passes the last item of the array into the callback

var last = (anArray, cb) => {
  cb(anArray.pop());
};

last(foods, (lastItem) => {
  console.log('The last item in the array is ' + lastItem);
});


// 4) Write a function called sumNums that adds two numbers and passes the result to the callback

var sumNums = (x, y, cb) => {
  cb(x + y);
};

sumNums(5, 10, (sum) => {
  console.log('The sum is ' + sum);
});


// 5) Write a function called multiplyNums that adds two numbers and passes the result to the callback

var multiplyNums = (x, y, cb) => {
  cb(x * y);
};

multiplyNums(5, 10, (product) => {
  console.log('The product is ' + product);
});


// 6) Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

var contains = (anArray, anItem, cb) => {
  for (var i = 0; i < anArray.length; i++) {
    if (anArray[i] === anItem) {
      return cb(true);
    };
  } return cb(false);
};

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});


// 7) Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

// version 1: using the Set data dtructure
// ES6 style: a set contains no duplicates
// per: https://stackoverflow.com/a/9229821/5225057
var removeDuplicates = (anArray, cb) => {
  return cb(Array.from(new Set(anArray)));
};

// version 2: nested for-loops
// var uniqueFoods = [];
// function removeDuplicates(foods, cb) {
//     for (var i = 0; i <= foods.length; i++) {
//       uniqueFoods.push(foods[i]);
//       for (var j = i+1; j <= foods.length; j++) {
//         if (foods[i] === foods[j]) {
//           uniqueFoods.pop(foods[i]);
//         }
//       }
//     }
//   cb(uniqueFoods)
// };

removeDuplicates(foods, (uniqueFoods) => {
  console.log('foods with duplicates removed: ' + uniqueFoods);
});


// 8) Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

var forEach = (anArray, cb) => {
  for (i = 0; i < anArray.length; i++) {
    cb(anArray[i], i);
  }
};

forEach(foods, (value, index) => {
  console.log(`${value} is at index ` + index);
  // console.log(value + ' is at index ' + index);
});