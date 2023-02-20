let num = 99;
console.log(typeof num);

//Create 3 variables: month, dayOfMonth, year. Use these variables to console.log today's date
//in one line in this format: "November 9, 2021"
let month = "November";
let dayOfMonth = 9;
let year = 2021;
console.log(month + " " + dayOfMonth + ", " + year);

//Save the result of 4 + 5 * 3 in a variable and console.log the result.
//Do the same with the result of (4 + 5) * 3. Notice the rules of math are the same in programming
//(brackets first, then multiply, then add).
let result1 = 4 + 5 * 3;
let result2 = (4 + 5) * 3;
console.log(result1);
console.log(result2);

//Create a variable age that saves your age (e.g. let age = 25;). Create another variable:
//let message = 'I am ' + age + ' years old'; What is the type of the message variable?
let age = 25;
let message = "I am " + age + " years old";
console.log(typeof message);

//Create a function named greeting that takes 1 parameter firstName and uses it to console.log a message saying "hello".
const greeting = (firstName) => console.log("hello" + " " + firstName);
greeting("Kevin");

//Write a function named toUpper that converts 1 string parameter str to uppercase and console.log the result.
//Use Google to find the code for converting a string to uppercase in Javascript.
const toUpper = (str) => {
  const upperCase = str.toUpperCase();
  console.log(upperCase);
};
toUpper("kevin");

//Write a function that converts a parameter length from inches to centimeters.
const inchToCm = (length) => {
  const valueInCm = length * 2.54;
  console.log(valueInCm + "cm");
};
inchToCm(2);

//Write a function toUpper that takes 1 parameter, an array of strings, and console.logs a new array with
//all the strings capitalized.
//(Hint: create a new array and push onto the array. Use google to learn the code for converting a string to
//uppercase in Javascript.

const upperCase = (stringArr) => {
  let results = [];

  stringArr.forEach((str) => {
    results.push(str.toUpperCase());
  });
  console.log(results);
};
upperCase(["Hello", "Kevin"]);

//Write a function arrayDouble that takes an array and console.logs a new array with every value repeated twice.
const arrayDouble = (stringArr) => {
  let newArray = [];
  stringArr.forEach((str) => {
    newArray.push(str, str);
  });
  console.log(newArray);
};
arrayDouble(["Hello", "World"]);

//Write a function arraySum that takes an array of numbers and console.logs the sum of the numbers. 
//(Hint: create a variable and increase its value like this):
const arraySum =(numArray)=>{
  let total = 0;
  numArray.forEach((num)=>{
    total = total + num;
  });
  console.log(total);
}
arraySum([5,6,4]);

//Write a function cartTotal that takes an array of objects cartArray where each object contains a name, 
//price, and quantity. console.log the total price of the items in the cart. For example:
const cartTotal = (cartArray)=>{
  let totalPrice = 0;
  cartArray.forEach((item)=>{
    totalPrice = totalPrice + item.price * item.quantity;
  });
  console.log(totalPrice)
}
cartTotal([
  { name: "Apple", price: 4, quantity: 2 },
  { name: "Orange", price: 3, quantity: 3 },
]);