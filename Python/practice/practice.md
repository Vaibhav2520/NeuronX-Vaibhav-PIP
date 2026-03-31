## 1. Factorial of a Number
- Write a program to find the factorial of a number.

```py
n = 5
fact = 1

for i in range(1, n + 1):
    fact *= i

print("Factorial:", fact)
```

## 2. Reverse a String

- Write a program to reverse a string.

```py
text = "Python"

reversed_text = text[::-1]

print(reversed_text)
```

## 3. Find Maximum in List

- Find the largest number in a list.

```py
numbers = [4, 8, 2, 10, 5]

print("Max:", max(numbers))
```

## 4. Remove Duplicates from List

- Remove duplicates from a list.

```py
numbers = [1, 2, 2, 3, 4, 4]

unique = list(set(numbers))

print(unique)
```

## 5. Square of Numbers in List

- Square of Numbers in List.

```py
numbers = [1, 2, 3, 4]

squares = []

for n in numbers:
    squares.append(n ** 2)

print(squares)
```

## 6. Check Prime Number

- Check if a number is prime.

```py
num = 7
is_prime = True

for i in range(2, num):
    if num % i == 0:
        is_prime = False
        break

if is_prime:
    print("Prime")
else:
    print("Not Prime")
```