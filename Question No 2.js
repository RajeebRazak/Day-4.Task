2 . Do the below programs in arrow functions.
A . Print odd numbers in an array
  const printOddNumbers = (arr) => {
    arr.forEach((num) => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  }
  
  // Example usage:
  printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  B . Convert all the strings to title caps in a string array
// Original program using regular functions
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

function convertToTitleCaps(arr) {
    return arr.map(titleCase);
}

// Arrow function version

const titleCase = str => str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const convertToTitleCaps = arr => arr.map(titleCase);

 C . Sum of all numbers in an array

 const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log(result); // Output: 15
 
 D . Return all the prime numbers in an array
 const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
  };
  
  const getPrimeNumbers = arr => arr.filter(isPrime);
  
  // Example usage
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = getPrimeNumbers(numbers);
  
  console.log(primeNumbers); // Output: [2, 3, 5, 7]

  E . Return all the palindromes in an array
  const isPalindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  };
  
  const findPalindromes = arr => arr.filter(word => isPalindrome(word));
  
  const words = ['racecar', 'hello', 'level', 'world', 'noon'];
  
  const palindromes = findPalindromes(words);
  
  console.log(palindromes); // Output: ['racecar', 'level', 'noon']
  