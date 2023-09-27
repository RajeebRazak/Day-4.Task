1 Do the below programs in anonymous function & IIFE
 A . Print odd numbers in an array
 anonymous function

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let printOddNumbers = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};

printOddNumbers(arr);

IIFE

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})(arr);

B .Convert all the strings to title caps in a string array
anonymous function

let stringArray = ["hello", "world", "how", "are", "you"];

let titleCaseArray = function(arr) {
  return arr.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}(stringArray);

console.log(titleCaseArray);
IIFE:

let stringArray = ["hello", "world", "how", "are", "you"];

let titleCaseArray = (function(arr) {
  return arr.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
})(stringArray);

console.log(titleCaseArray);

C . Sum of all numbers in an array
Anonymous Function:
let sum = function(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
      total += arr[i];
  }
  return total;
};

let numbers = [1, 2, 3, 4, 5];
let result = sum(numbers);
console.log(result); // Output: 15

IIFE:
let result = (function(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
      total += arr[i];
  }
  return total;
})([1, 2, 3, 4, 5]);

console.log(result); // Output: 15

D . Return all the prime numbers in an array
Anonymous Function

let primes = function(arr) {
  let isPrime = function(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      let i = 5;
      while (i * i <= num) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
          i += 6;
      }
      return true;
  }

  return arr.filter(isPrime);
}

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = primes(numbers);

console.log(primeNumbers); // Output: [2, 3, 5, 7]

IIFE :
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = (function(arr) {
    let isPrime = function(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    return arr.filter(isPrime);
})(numbers);

console.log(primeNumbers); // Output: [2, 3, 5, 7]

E . Return all the palindromes in an array
Anonymous Function:
let findPalindromes = function(arr) {
  return arr.filter(word => {
      let reversedWord = word.split('').reverse().join('');
      return word === reversedWord;
  });
};

let wordsArray = ["racecar", "hello", "level", "world", "madam"];

let palindromes = findPalindromes(wordsArray);
console.log(palindromes); // Output: ["racecar", "level", "madam"]

IIFE:
let palindromes = (function(arr) {
  return arr.filter(word => {
      let reversedWord = word.split('').reverse().join('');
      return word === reversedWord;
  });
})(["racecar", "hello", "level", "world", "madam"]);

console.log(palindromes); // Output: ["racecar", "level", "madam"]

 F .Return median of two sorted arrays of the same size.
 Anonymous Function:

 let findMedian = function(arr1, arr2) {
  let combined = arr1.concat(arr2).sort((a, b) => a - b);
  let mid = Math.floor(combined.length / 2);
  
  if (combined.length % 2 === 0) {
      return (combined[mid - 1] + combined[mid]) / 2;
  } else {
      return combined[mid];
  }
};

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let result = findMedian(arr1, arr2);
console.log("Median:", result);

IIFE:
let result = (function(arr1, arr2) {
  let combined = arr1.concat(arr2).sort((a, b) => a - b);
  let mid = Math.floor(combined.length / 2);
  
  if (combined.length % 2 === 0) {
      return (combined[mid - 1] + combined[mid]) / 2;
  } else {
      return combined[mid];
  }
})([1, 3, 5], [2, 4, 6]);

console.log("Median:", result);

G .Remove duplicates from an array
Anonymous Function:
let removeDuplicates = function(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

let inputArray = [1, 2, 2, 3, 4, 4, 5];
let result = removeDuplicates(inputArray);
console.log(result); // Output: [1, 2, 3, 4, 5]

IIFE:
let inputArray = [1, 2, 2, 3, 4, 4, 5];

let result = (function(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
})(inputArray);

console.log(result); // Output: [1, 2, 3, 4, 5]

H .Rotate an array by k times
Anonymous Function:
let rotateArrayByK = function(arr, k) {
  let rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  return rotatedArray;
};

let inputArray = [1, 2, 3, 4, 5];
let rotations = 2;

let result = rotateArrayByK(inputArray, rotations);
console.log(result); // Output: [3, 4, 5, 1, 2]

IIFE:
let result = (function(arr, k) {
  let rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  return rotatedArray;
})([1, 2, 3, 4, 5], 2);

console.log(result); // Output: [3, 4, 5, 1, 2]




