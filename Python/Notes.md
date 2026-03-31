## Introduction to Python
- Python is a high-level, interpreted, and object-oriented programming language known for its simplicity and readability.

Key Features
- Easy to learn and use
- Interpreted language
- Dynamically typed
- Large standard library
- Cross-platform compatibility

Applications
- Web development
- Data science
- Machine learning
- Automation
- Scripting
- Backend development


## Running Python

- Check Python version:

```bash
python --version
```

- Run a Python file:

```bash
python file.py
```

## Syntax Example 

```py
print("Hello World")
```

- Python does not require semicolons and uses indentation to define blocks of code.


## Variables

- Variables store values.

```py
name = "Vaibhav"
age = 22
price = 99.5
```

- Python is dynamically typed, meaning you don't need to declare the type.


## Data Types 

- Common Python data types:

```py
# Integer
x = 10

# Float
y = 10.5

# String
name = "Python"

# Boolean
is_active = True
```

- Collection Types

```py
# List
fruits = ["apple", "banana", "mango"]

# Tuple
numbers = (1, 2, 3)

# Set
unique = {1, 2, 3}

# Dictionary
person = {"name": "Vaibhav", "age": 22}
```

## Input and Output

- Output:

```py
print("Hello")
```

- Input:

```py
name = input("Enter name: ")
print(name)
```

## Operators

- Arithmetic Operators

```py
a = 10
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a / b)
```

- Comparison Operators

```py
print(5 > 3)
print(5 == 5)
print(4 != 3)
```

- Logical Operators

```py
print(True and False)
print(True or False)
print(not True)
```

## Conditional Statements

- Used for decision making.

```py
age = 18

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

## Loops

- For Loop

```py
for i in range(5):
    print(i)
```

- While Loop

```py
i = 0

while i < 5:
    print(i)
    i += 1
```

## Functions

- Functions help organize reusable code.

```py
def greet(name):
    print("Hello", name)

greet("Vaibhav")
```

- Function with return value:

```py
def add(a, b):
    return a + b

print(add(5, 3))
```

## Lists

- Lists store multiple values.

```py
numbers = [1, 2, 3]

numbers.append(4)
numbers.remove(2)

print(numbers)
```

## Dictionaries

- Store data in key-value pairs.

```py
student = {
    "name": "Vaibhav",
    "age": 22
}

print(student["name"])
```

## Modules

- Modules allow you to reuse built-in functions.

```py
import math

print(math.sqrt(16))
```

## Exception Handling

- Handles runtime errors.

```py
try:
    x = 10 / 0
except:
    print("Error occurred")
```

## Basic OOP

- Python supports object-oriented programming.

```py
class Person:

    def __init__(self, name):
        self.name = name

    def greet(self):
        print("Hello", self.name)

p1 = Person("Vaibhav")
p1.greet()
```