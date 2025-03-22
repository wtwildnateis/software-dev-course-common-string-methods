/*

Practice Problem #1

Activity 1: Searching Strings
Write a program to:
Check if the text "JavaScript" is in the string "Learning JavaScript is fun!" using includes.
Find the position of the word "fun" in the string.

let text = "Learning JavaScript is fun!";
let hasJavaScript = text.includes("JavaScript"); // Check if JavaScript in in the string
let funPosition = text.indexOf("fun"); // Find the position of "fun"
console.log(hasJavaScript); // true
console.log(funPosition); // 21

Activity 2: Transforming Strings
Convert the string " CODE BOOTCAMP " to lowercase and remove all extra whitespace.
Replace "BOOTCAMP" with "JavaScript" in the transformed string.

let text = " CODE BOOTCAMP ";
let lowerCaseText = text.toLowerCase().trim(); // Convert to lowercase and remove extra whitespace
let replacedText = lowerCaseText.replace("bootcamp", "JavaScript"); // Replace "bootcamp" with "JavaScript"
console.log(replacedText); // code JavaScript

// or more simple method

let text = " CODE BOOTCAMP ";
console.log(text = text.toLowerCase().trim().replace("bootcamp", "JavaScript"));

Activity 3: Breaking Apart a Sentence
Split the sentence "Coding is fun and educational" into an array of words.

let sentence = "Coding is fun and educational";
let wordsArray = sentence.split(" "); // Split the sentence into an array of words
console.log(wordsArray); // ["Coding", "is", "fun", "and", "educational"]

Activity 4: Retrieving Substrings
Retrieve the first character of "Bootcamp" using charAt.
Extract the word "camp" from "Bootcamp" using slice.

let text = "Bootcamp";
let firstCharacter = text.charAt(0); // Retrieve the first character
let extractedCamp = text.slice(4, 8); // Extract "camp" from the string
console.log(firstChararcater); // B
console.log(extractedCamp); // camp


Advanced Challenge
Write a program to process the following string:
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
Extract the customer name.
Split the order into an array of items.
Convert the total price to uppercase (e.g., "TOTAL: $20.50").

let orderDetails = `Customer: John Doe
Order: Apple, Banana, Grape
Total: $25.50`;
let customerName = orderDetails.slice(10, 18); // Extract the customer name
let orderItems = orderDetails.slice(26, 46).split(", "); // Split the order into an array of items
let totalPrice = orderDetails.slice(47, 62).toUpperCase(); // Convert the total price to uppercase
console.log(customerName); // John Doe
console.log(orderItems); // ["Apple", "Banana", "Grape"]
console.log(totalPrice); // TOTAL: $25.50

Practice Problem #2

Objective
Practice using common string methods to manipulate and extract information from strings.

Instructions:
You are tasked with processing a single string and
performing a series of operations using the string methods covered in the lesson.
Each task corresponds to one or more methods and can be completed independently.

String to Use:
  let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday.

2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString.

3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray.

4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp.

*/

//Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript = inputString.includes("JavaScript"); // Check if JavaScript is in the string
let codingPosition = inputString.indexOf("Coding"); // Find the position of "Coding"
let startsWithWelcome = inputString.startsWith("Welcome"); // Check if the string starts with "Welcome"
let endsWithToday = inputString.endsWith("today."); // Check if the string ends with "today"

// 2. Transforming
let lowercaseString = inputString.toLowerCase(); // Converts string to lowercase
let uppercaseString = inputString.toUpperCase(); // Converts string to uppercase
let trimmedString = inputString.trim(); // Removes extra spaces from the beginning and end of the string
let replacedString = inputString.replace("JavaScript", "coding"); // Replaces "JavaScript" with "coding"

// 3. Breaking Apart
let wordsArray = inputString.split(" "); // Splits the string into an array of words

// 4. Retrieving
let firstCharacter = trimmedString.charAt(0); // Retrieves the first character of the trimmed string
let extractedBootcamp = inputString.slice(24, 32); // Extracts "Bootcamp" from the string
// Log all results
console.log({
  hasJavaScript, // true
  codingPosition, // 17
  startsWithWelcome, // false
  endsWithToday, // false
  lowercaseString, // " welcome to the coding bootcamp! learn javascript today. "
  uppercaseString, // " WELCOME TO THE CODING BOOTCAMP! LEARN JAVASCRIPT TODAY. "
  trimmedString, // "Welcome to the Coding Bootcamp! Learn JavaScript today."
  replacedString, // " Welcome to the Coding Bootcamp! Learn coding today. "
  wordsArray, // ["", "", "Welcome", "to", "the", "Coding", "Bootcamp!", "Learn", "JavaScript", "today.", ""]
  firstCharacter, // "W"
  extractedBootcamp, // "Bootcamp"
});
