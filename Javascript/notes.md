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





