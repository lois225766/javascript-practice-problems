
 // 1. Print numbers from 1 to 10
console.log("1. Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Find the sum of an array
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log("2. Sum:", sumArray([1, 2, 3, 4, 5]));

// 3. Find the largest number in an array
function findLargest(numbers) {
  return Math.max(...numbers);
}
console.log("3. Largest:", findLargest([10, 25, 7, 40, 15]));

// 4. Check if a number is even or odd
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log("4. Number:", evenOrOdd(7));

// 5. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("5. Reversed:", reverseString("Hello"));

// 6. Merge two arrays using the spread operator
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log("6. Merged array:", merged);

// 7. Return even numbers using filter
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("7. Even numbers:", evenNumbers);

// 8. Rewrite using template literals
const name = "Alice";
const msg = `Hello ${name}, welcome!`;
console.log("8. Message:", msg);

// 9. Rewrite using an arrow function
const greet = (name) => {
  return "Hello, " + name;
};
console.log("9. Greeting:", greet("Alice"));
