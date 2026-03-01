## 1️⃣ What is JavaScript?

JavaScript is a high-level, interpreted programming language used to:
- Make websites interactive
- Handle user events
- Manipulate DOM
- Communicate with backend
- Build full-stack applications

## 2️⃣ Javascript Syntax

1. Javascript Rules 

Syntax are the rules how programs must be constructed:
```js
// How to Declare variables:
let x = 5;
let y = 6;
```

```js
// How to Compute values:
let z = x + y;
```


// I am a Comment. I do Nothing

2. Javascript Values

The JavaScript syntax defines two types of values:

- Literals (Fixed values)
- Variables (Variable values)

**JavaScript Literals**
- Numbers are written with or without decimals.
- Strings are text, written within double or single quotes.

3. JavaScript Keywords
- JavaScript keywords are used to defines actions to be performed.

The let and const keywords create variables:
```js
let x = 5;
const fname = "John";
```
JavaScript keywords are case-sensitive.

4. JavaScript Variables

- Variables are containers for storing data values.
- Variables must be identified with unique names.

**Example**
```js
// Define x as a variable
let x;
```

```js
// Assign the value 6 to x
x = 6;
```

5. JavaScript Identifiers

- An identifier is the name you give to a variable.

Rules for identifiers:

- Must start with a letter, _, or $
- Can contain digits after the first character
- Cannot be a reserved keyword (let, const, if, etc.)
- Are case-sensitive

6. JavaScript Operators

JavaScript assignment operators (=) assign values to variables:
```js
let x = 5;
let y = 6;
let sum = x + y;
```

The sum is 11

7. JavaScript Keywords

- JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

| Keyword | Description |
|--------|--------|
| var | Declares a variable |
| let | Declares a block variable |
| const |Declares a block constant|
| if | Marks a block of statements to be executed on a condition |
| switch | Marks a block of statements to be executed in different cases |
| for| Marks a block of statements to be executed in a loop |
| function | Declares a function |

8. JS Variables
- Variables = Data Containers
- JavaScript variables are containers for data.
- JavaScript variables can be declared in 2 ways:

**Modern JavaScript**
- Using let
- Using const

# Example using let
```js
let x = 5;
let y = 6;
let z = x + y;
```

# Example using const
```js
const x = 5;
const y = 6;
const z = x + y;
```

# Declaring a Variable Using let
```js
let carName = "Volvo";
```

# Declaring a Variable Using const

- Always use const if the value should not be changed.

```js
const carName = "Volvo";
```

**A Mixed Example**
```js
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
```

- The two variables price1 and price2 are declared with the const keyword.
- The values of price1 and price2 cannot be changed.
- The variable total is declared with the let keyword.
- The value of total can be changed.

## When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you cannot use const
5. Never use var if you can use let or const.

## 3️⃣ Javascript Let

- Variables declared with let have Block Scope
- Variables declared with let must be Declared before use
- Variables declared with let cannot be Redeclared in the same scope

**Block Scope**

- JavaScript had Global Scope and Function Scope.
- ES6 introduced the two new JavaScript keywords: let and const.
- These two keywords provided Block Scope in JavaScript:
```js
{
  let x = 2;
}
// x can NOT be used here
```
**Function Scope**

```js
function myfunction() {
  var x = 1;
  let y = 2;
  const z = 3;
}
//x can NOT be used here
//y can NOT be used here
//z can NOT be used here
```

**Globe Scope**
- Variables declared with the var always have Global Scope.
- Variables declared with the var keyword can NOT have block scope:
```js
{
  var x = 2;
}
// x CAN be used here
```

**Redeclaring Variables**
- Redeclaring a variable inside a block will also redeclare the variable outside the block:
```js
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
```

## 4️⃣ JavaScript Const

- Variables defined with const cannot be Reassigned.
- Variables defined with const have Block Scope.

**Cannot be Reassigned**

```js
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
```

**When to use JavaScript const?**
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:

- A new Array
- A new Object
- A new Function
- A new RegExp

**Constant Arrays**

```js
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```

**Constant Objects**  

```js
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
```

## 5️⃣ Javascript Types

| Type | Description |
|--------|--------|
| String | A text of characters enclosed in quotes |
| Number | A number representing a mathematical value |
| Bigint |A number representing a large integer|
| Boolean |A data type representing true or false |
| Object | A collection of key-value pairs of data |
| Undefined| 	A primitive variable with no assigned value |
| Symbol | A unique and primitive identifier |

```js
// String
let color = "Vaibhav";
let lastName = "Sulakhe";

// Number
let length = 20;
let weight = 10;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

// Boolean
let x = true;
let y = false;

// Object
const person = {firstName:"Vaibhav", lastName:"Sulakhe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x;
let y;

// Null
let x = null;
let y = null;

// Symbol
const x = Symbol();
const y = Symbol();
```

## 6️⃣ JS Conditions

**Conditional Statements**

- Conditional Statements allow us to perform different actions for different conditions.
- Conditional statements run different code depending on true or false conditions.


**When to use Conditionals**

- Use if to specify a code block to be executed, if a specified condition is true
- Use else to specify a code block to be executed, if the same condition is false
- Use else if to specify a new condition to test, if the first condition is false
- Use switch to specify many alternative code blocks to be executed
- Use (? :) (ternary) as a shorthand for if...else

1. JavaScript if

- Use the JavaScript if statement to execute a block of code when a condition is true.
 
**Syntax** 
```js
if (condition) {
  //  block of code to be executed if the condition is true
}
```

**Example**
```js
let age = 18;
let text = "You can Not drive";

if (age >= 18) {
  text = "You can drive!";
}
```

**Nested If**

```js
let age = 16;
let country = "USA";
let text = "You can Not drive!";

if (country == "USA") {
  if (age >= 16) {
    text = "You can drive!";
  }
}
```

**The Conditional (Ternary) Operator**

# Syntax 

(condition) ? expression1 : expression2

- The conditional operator is a shorthand for writing conditional if...else statements.
- It is called a ternary operator because it takes three operands.

| Parameter | Description |
|--------|--------|
| condition | Required.
The condition to be tested.
An expression that evaluates to true or false. |
| ? | Required.
The operator separating the condition from the expressions. |
| expression1 |	Required.
The value to return if the condition is true.|
| : |Required.
The operator separating the expressions. |
| expression2 | Required.
The value to return if the condition is false. |

**Example**

```js
let text = (age < 18) ? "Minor" : "Adult";
```

## 7️⃣ JS Loops

**JS For Loop**
- Use a for loop to collect the car names from the cars array:

```js
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let text = "";
for (let i = 0; i < len; i++) {      // for loop syntax
  text += cars[i];
}
```

**JS While Loop**

- The while loop loops through a block of code as long as a specified condition is true.

**Example**
```js
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```

**JS Do while Loop**

- The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
- The do while runs at least once, even if the condition is false from the start.

```js
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
```

## 8️⃣ JS Arrays

An Array is an object type designed for storing data collections.

**Why Use Arrays?**

If you have a list of items (a list of car names, for example), storing the names in single variables could look like this:

```js
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
```

**Creating an Array**

**Syntax**
```js
const array_name = [item1, item2, ...];      
```

## 9️⃣ Functions

- Functions are Code Blocks
- Functions are reusable code blocks designed to perform a particular task.
- Functions are executed when they are called or invoked.

**What Does a Function Look Like?**

**Example**
```js
function sayHello() {
  return "Hello World";
}
```
**Functions Run When You Call Them**

To run a function, you call it by using its name followed by parentheses like sayHello():

```js
function sayHello() {
  return "Hello World";
}
let message = sayHello(); // A Function Can Be Used Many Times
// Note that values returned from functions can be stored in variables
```

**Function Invocation**

The code inside a function will execute when "something" invokes the function:

- When it is called from JavaScript code
- When an event occurs (a user clicks a button)
- Automatically (self invoked)

It is common to use the term invoke, because a function can be invoked without being called.

**Example**

toCelsius() invokes the toCelsius function:
```js
// Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// Call the toCelcius() function
let value = toCelsius(77);
```

**JavaScript Arrow Functions**

- Arrow Functions allow a shorter syntax for function expressions.

You can skip the function keyword, the return keyword, and the curly brackets:
```js
const add = (a, b) => a * b;
```

**Syntax**
```js
const add = (a, b) => {
  return a + b;
};
```

## 🔟 JS Objects

- Objects are variables that can store both values and functions.
- Functions are stored as key:function() pairs called methods.

**Example**
```js
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
```

- type, model, and color are properties
- "Fiat", 500, and "white" are property values

**Object Properties**

- Properties are key:value Pairs
- A JavaScript object is a collection of properties
- Properties can be changed, added, and deleted.

**Example**
```js
// objectName.property
let age = person.age;
```
```js
//objectName["property"]
let age = person["age"];
```
```js
//objectName[expression]
let age = person[x];
```

**Dot Notation**
```js
objectName.propertyName
person.firstname + " is " + person.age;
```

**Deleting Properties**
- The delete keyword deletes a property from an object:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

delete person.age;
```

**Check if a Property Exists**

- Use the in operator to check if a property exists in an object:

```js
const person = {
  firstName: "John",
  lastName: "Doe"
};

let result = ("firstName" in person);
```

**Nested Objects**

```js
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
```