let firstName = "Benjamin";
let lastName = "Musić";
let age = 22;
let birthYear = 2001;
let currentYear = new Date().getFullYear();
let currentAge = currentYear - birthYear;
let isAdult = currentAge >= 18;

let isStudent = true;

console.log("First name: ", firstName)
console.log("Last name: ", lastName)
console.log("Age: ", age)
console.log("is Student: ", isStudent)
console.log("Current age: ", currentAge)
console.log("Is adult", isAdult)

if (isStudent) {
  console.log("You are a student")
} else {
  console.log("You are not a student")
}

let number = 5

while (number != 0) {
  console.log(number)
  number = number - 1;
}

for (let i = 1; i <= 5; i++){
  console.log(i)
}

switch (true) {
  case currentAge < 13:
    console.log("you are a child");
    break;

  case currentAge >= 13 && currentAge <= 19:
    console.log("you are a teenager");
    break;

  case currentAge >= 20:
    console.log("you are an adult");
    break;

}

function greet(name) {
  console.log("Hello, " + name + "!")
}

greet("Benjamin")

function calculateSum(num1, num2) {
  console.log("sum of your numbers =" + (num1 + num2))
}

calculateSum(7, 6)

let globalVar = "global";
console.log(globalVar)

function localFunction(){
  let localVar = "local"
  console.log(localVar)
}

localFunction();

try {
  console.log(localVar)
} catch (error) {
  console.log("Error", error.message)
}

function closureFunction() {
  return function (innerVar) {
    console.log(`global function is:  ${globalVar}", "local function is:  ${innerVar}`)
  }
}

const storedFunction = closureFunction();

storedFunction("inner");

let fruits = ["grape", "apple", "orange"];
fruits.push("pear");
console.log(fruits)
fruits.pop();
console.log(fruits)

for (i = 0; i < fruits.length; i++){
  console.log(fruits[i])
}

let person = {
  name: "Rolando",
  age: 40,
  occupation: "Ronaldinjo"
};

console.log(person)
console.log(person.name)

person.hobbies = ["rokiroki", "palastejsnfoojv", "fordinajd"]

console.log(person)

const personJSON = JSON.stringify(person);

console.log(personJSON) 

const jsonString = `{
"title": "mesko",
"hobbie":"fuca",
"ronalod": "messi"
}`;

const meskoObj = JSON.parse(jsonString);

console.log(jsonString)
console.log(meskoObj)

const shoppingList = ["Milk", "Bread", "Eggs", "Butter", "Apples"];

const urgentItems = shoppingList.filter(item => item === "Milk" || item === "Bread");
console.log("urgentItems: ", urgentItems);
const formattedList = shoppingList.map(item => `Buy: ${item}`);
console.log("Formatted List:", formattedList)
const breadItem = shoppingList.find(item => item.includes("Bread"));
console.log("First item containing 'Bread':", breadItem);
const totalCharacters = shoppingList.reduce((total, item) => total + item.length, 0);
console.log("Total number of characters:", totalCharacters);
shoppingList.splice(shoppingList.length - 1, 1);
console.log("Modified Shopping List:", shoppingList);