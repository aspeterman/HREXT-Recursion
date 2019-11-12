
// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.

var factorial = function(n) {
  var fact = 1;
  if (n < 0) { return null; }
  if (n === 0) { return fact; }
  if (fact > 0) {
    fact = (n * factorial(n - 1));
  }
  return fact;
};
// 2. Compute the sum of an array of integers.

var sum = function(array) {
  if (array.length === 0) { return 0; }
  if (array.length === 1) { return array[0]; }

  return array[0] + sum(array.slice(1));
};


// 3. Sum all numbers in an array containing nested arrays.

var arraySum = function(array) {


  return array.reduce((result, ix) => {

    return result + (Array.isArray(ix) ? arraySum(ix) : ix);
  }, 0);

};

// 4. Check if a number is even.

var isEven = function(n) {

  if (n < 0) { n = Math.abs(n); }
  if (n === 0) { return true; }
  if (n === 1) { return false; }
  else {
    n = n - 2;
    return isEven(n);
  }

};

// 5. Sum all integers below a given integer.

var sumBelow = function(n) {
  var sum = 0;
  if (n === 0) { return 0; }

  if (n > 0) {
    sum = n - 1;
    sum = sum + sumBelow(n - 1);
  }
  if (n < 0) {
    sum = n + 1;
    sum = sum + sumBelow(n + 1);
  }
  return sum;
};

// 6. Get the integers within a range (x, y).

var range = function(x, y) {
  var array = [];

  if (x === y) { return []; }
  if (x > y) {
    if (x === y + 1) {
      return array;
    }
    array = range(x, y + 1);
    array.push(y + 1);
  }
  else {
    if (x === y - 1) {
      return array;
    }
    array = range(x, y - 1);
    array.push(y - 1);
  }
  return array;
};

// 7. Compute the exponent of a number.

// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {
  if (exp === 0) { return 1; }
  if (exp < 0) {
    return (1 / (base * exponent(base, (-1 * exp) - 1)));
  }
  else {
    return (base * exponent(base, exp - 1));
  }
};


// 8. Determine if a number is a power of two.

var powerOfTwo = function(n) {

  if (n === 0) { return false; }
  if (n === 1) { return true; }
  //n = 2 * 2 * 2...
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.

var reverse = function(string) {
  return string ? reverse(string.substr(1)) + string[0] : string;

};

// 10. Write a function that determines if a string is a palindrome.

var palindrome = function(string) {
  var len = string.length;

  if (len === 0 || len === 1) {
    return true;
  }

  string = string.toLowerCase();
  if (string[0] === string[len - 1]) {
    return palindrome(string.slice(1, len - 1));
  }
  return false;
};
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  var neg = false;
  if (x < 0) {
    neg = true;
    x = -x;
  }
  if (y < 0) {
    y = -y;
  }
  if (x < y) {
    return neg ? -x : x;
  }
  if (y === 0) {
    return NaN;
  }
  if (x === y) {
    return 0;
  }
  var result = modulo(x-y, y);
  return neg ? -result : result;
};
console.log('----- Modulo ----------');
console.log( 'modulo(17,5)');
console.log(modulo(17, 5));
console.log( 'modulo(5,1)');
console.log(modulo(5,1));
console.log( 'modulo(5,0)');
console.log(modulo(5,0));

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if(y === 0){return 0;}
  if(y > 0){
    return (x + multiply(x, y - 1));
  }
  if(y < 0){
    return -(x + multiply(x, -y - 1));
  }
};

console.log('----------- Multiple ---------');
console.log(multiply(3,5));
// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if(x -y === 0){
    return 1;
  }
  if(x - y < 0){
    return 0;
  }
  else {
    return divide(x - y, y) + 1;
  }
};
console.log('----divide-------');
console.log(divide(9,3))
// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if(x < 0 || y < 0){return null;}
  if(x%y > 0){
    var ix = x%y;
    return gcd(y, ix);
  }
  else if(x%y === 0){
    return y;
  }
};
console.log('-----------gcd----------');
console.log(gcd(4, 36));

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1[0] === str2[0] && str1.length>0) {
    return compareStr(str1.slice(1), str2.slice(1));
  } else if (str1[0] !== str2[0]){
    return false;
  } else{
    return true;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length <= 1) {
    return [str[0]]; //
  } else {
    return [str[0]].concat(createArray(str.slice(1)));
  }
};


// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)));
  }
};
// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var arr = [];
  if(length === 0){return arr}
  if(length > 0){
  arr.push(value);
  return [value].concat(buildList(value, length - 1));
  }
};
console.log('--------buildList----------')
console.log(buildList(0, 5))
// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  // if (n === 0) {
  //   return [];
  // }
  // if (n % 3 === 0 && n % 5 === 0) {
  //   return fizzBuzz(n - 1).concat("FizzBuzz");
  // } else if (n % 3 === 0) {
  //   return fizzBuzz(n - 1).concat("Fizz");
  // } else if (n % 5 === 0) {
  //   return fizzBuzz(n - 1).concat("Buzz");
  // }
  // return fizzBuzz(n - 1).concat(n);

  if(n===1) return ['1'];

  var replace = (n%15===0) ? 'FizzBuzz' : ((n%5===0) ? 'Buzz' : ((n%3===0) ? 'Fizz' : String(n)));

  return fizzBuzz(n-1).concat(replace);
};
console.log('----------fizzBuzz-----------')
console.log(fizzBuzz(15));

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if(array.length === 0){return 0;}
  //recursively compare first index of array to value...slice after comparison
  else {
    return (array[0] === value) + countOccurrence(array.slice(1), value);
  }
};
console.log('-------countOccurrence--------');
console.log(countOccurrence([2,'banana',4,4,1,'banana'], 'banana'))
console.log(countOccurrence([2,'banana',4,4,1,'banana'], 5))

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //prevent call stack max by stopping callback at len === 1
  if(array.length === 1){return callback(array[0])}
  //capture first index, run callback on index and set into an array
  //slice(1)
  //concat
  return [callback(array[0])].concat(rMap(array.slice(1), callback))

};
console.log('-----------rMap---------');
var timesTwo = function(value){return value * 2;}
console.log(rMap([1,2,3], timesTwo))

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {

  var count = 0;
  for (var prop in obj) {
    if(prop === key) {
      count++;
    }
    if (typeof obj[prop] === 'object') {
      count += countKeysInObj (obj[prop], key);
    }
  }
  return count;
};
var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
console.log('------countKeysInObj------')
console.log(countKeysInObj(obj, 'r'))
// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  //similar to above
  var count = 0;
  for (var prop in obj) {
    if(obj[prop] === value) {
      count++;
    }
    if (typeof obj[prop] === 'object') {
      count += countValuesInObj (obj[prop], value);
    }
  }
  return count;
};
console.log('-----countValuesInObj-------');
console.log(countValuesInObj(obj, 'r'));
// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    }
    if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
   }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0){   return null;    }
  else if (n===1)  {    return [0, 1];  }
  else
  {
    //remove 1 from n until we get to n === 1
    //going to use push instead of concat & sort
    var array = fibonacci(n - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
  }
};
console.log('-------fibonacci---------');
console.log(fibonacci(5))

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n < 0){return null;}
  if(n <= 1){return n;}
  else if(n > 0){
    return (nthFibo(n-1) + nthFibo(n-2));
  }
};
console.log('-------nthFibo---------');
console.log(nthFibo(7))

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if(array.length === 0){return array;}
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};
console.log('----------capitalizeWords-------')
console.log(capitalizeWords(['hello', 'world']))
// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  //same as above but one level deeper
  //need an intermediate for transformation step
  if (array.length === 0) {
    return [];
  }
  var string = '';
  string += array[0][0].toUpperCase() + array[0].slice(1);
  return [string].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var count = 0;
  for(var key in obj){
    if(typeof obj[key] === 'object'){
      count += nestedEvenSum(obj[key])
    }
    if(obj[key]%2 === 0){
      count += obj[key];
    }
  }
  return count;
};
var obj1 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
console.log('---------nestedEvenSum-------');
console.log(nestedEvenSum(obj1))
// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if (array.length === 0) {    return [];    }

  if (Array.isArray(array[0])) {
    return flatten(array[0]).concat(flatten(array.slice(1)));
  }

  return [array[0]].concat(flatten(array.slice(1)))

};
console.log('-------flatten--------');
console.log(flatten([1,[2],[3,[[4]]],5]))
// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (str.length===0) {
     return str, obj;
  }
  if (!obj[str[0]]) {
    obj[str[0]] = 1;
  }
  else {
    obj[str[0]] += 1;
  }
  return letterTally( str.slice(1), obj );
};
console.log('---------letterTally-----------')
console.log(letterTally('potato', {}));

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  // if(list.length === 0) {  return list;  }

  // if(list[0] === list[1]) {
  //   return compress(list.slice(1));
  // }

  // return [list.shift()].concat(compress(list));

  if (list.length === 0) return [];
  var res = compress(list.slice(1));
  if (list[0] !== res[0]) {
    res.unshift(list[0]);
  }
  return res;
};
console.log('-----compress-------');
console.log(compress([1,2,2,3,4,4,2,5,5,5,4,4]))

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return array;
  }
  return [array[0].concat([aug])].concat(augmentElements(array.slice(1), aug));
};
console.log('----augmentElements-------');
console.log(augmentElements([[],[3],[7]], 5))
// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if(array.length===1) {
    return array.shift();
  }

  if(array[0]===0 && array[1]===0) {
    return minimizeZeroes(array.slice(1));
  }
    return [array.shift()].concat(minimizeZeroes(array));


};
console.log('-----minimizeZeroes------')
console.log(minimizeZeroes([2,0,0,0,1,4]))

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  }
  if (array[0] < 0) {
    array[0] = - array[0];
  }
  if (array[1] > 0) {
    array [1] = - array[1];
  }
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};
console.log('-----alternateSign-------')
console.log(alternateSign([-2,-7,8,3,-1,4]))
// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // var numWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  // array = str.join();
  // for(let val in array){
  //   if(!isNaN(array[0])){

  //   }
  // }

};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if (min === undefined) {
    min = 0;
  }

  var index = Math.floor(array.length/2);
  if(array.length <= 2){
    if(array[0] === target){
    return index + min;
  }

  else if (array[1] === target) {
    return min + 1;
  }
  else {
    return null;
  }
}
  if(target === array[index]){
    return index + min;
  }

  if(target < array[index]){
    return binarySearch(array.slice(0, index), target, min);
  }
  else {
    return binarySearch(array.slice(index), target, index+min);
  }
};
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89];
var types = [1,2,3,4,5,6];
input3 = [-5,-4,-3,-2,-1];
console.log('-----------binarySearch-----------')
console.log(binarySearch(primes, 17));
console.log(binarySearch(types, 3))
console.log((binarySearch(input3,-5)))
// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  // var res;
  // if (Array.isArray(input)) {
  //   res = [];
  //   if (input.length === 0) return [];
  //   for (var i=0; i<input.length; i++) {
  //     if (input[i] instanceof Object) {
  //       res.push(clone(input[i]));
  //     } else {
  //       res.push(input[i]);
  //     }
  //   }
  // } else {
  //   if (input === null) return {};
  //   res = {};
  //   for (var prop in input) {
  //     if (input[prop] instanceof Object) {
  //       res[prop] = clone(input[prop]);
  //     } else {
  //       res[prop] = input[prop];
  //     }
  //   }
  // }
  // return res;
};


//do not remove, this code is necessary for the auto-grader to run without error
if (typeof window !== 'object') {
  var mergeObj = {
    factorial: factorial,
    sum: sum,
    arraySum: arraySum,
    isEven: isEven,
    sumBelow: sumBelow,
    range: range,
    powerOfTwo: powerOfTwo,
    palindrome: palindrome,
    reverse: reverse,
    exponent: exponent
  }

  Object.assign(global, mergeObj);
}