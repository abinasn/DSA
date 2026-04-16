# 🐍 Day 6 Recap — Conditionals & Loops

---

## ✅ What You Learned Today

---

## 1. Conditionals — `if / elif / else`

```python
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")
```

**JS difference:**
- `else if` → `elif`
- No `{}` — use `:` + indentation
- No `===` — Python only has `==`

---

### 🔍 Hidden Conditional Concepts

**1. One-line ternary:**
```python
label = "Adult" if age >= 18 else "Child"
```

**2. Chained comparisons:**
```python
if 13 <= age <= 19:   # No && needed!
```

**3. Truthy / Falsy:**
```python
# These are all falsy in Python:
None, 0, "", [], {}

name = ""
if name:       # False — empty string is falsy
    print("Has name")
```

---

## 2. `for` Loop

```python
fruits = ["apple", "banana", "mango"]
for fruit in fruits:
    print(fruit)
```

**With index — `enumerate()`:**
```python
for index, fruit in enumerate(fruits):
    print(index, fruit)
```

**With range:**
```python
for i in range(5):       # 0 to 4
for i in range(1, 6):    # 1 to 5
for i in range(0, 10, 2): # 0, 2, 4, 6, 8
```

---

### 🔍 Hidden `for` Loop Concepts

**1. `for...else` — runs if no `break` happened:**
```python
for fruit in fruits:
    if fruit == "mango":
        break
else:
    print("Mango not found.")
```

**2. Unpacking inside `for`:**
```python
pairs = [(1, "one"), (2, "two")]
for number, word in pairs:
    print(number, word)
```

**3. `zip()` — loop two lists together:**
```python
names = ["Alice", "Bob"]
scores = [85, 90]
for name, score in zip(names, scores):
    print(name, score)
```

**4. `_` throwaway variable:**
```python
for _ in range(3):
    print("Hello")   # Don't need the index
```

---

## 3. `while` Loop

```python
count = 0
while count < 5:
    count += 1   # No ++ in Python!
```

**Real-world pattern — `while True` + `break`:**
```python
while True:
    user = input("Enter command: ")
    if user == "quit":
        break
```

---

### 🔍 Hidden `while` Loop Concepts

**1. `while...else`:**
```python
while count < 3:
    count += 1
else:
    print("Loop finished cleanly!")  # Runs only if no break
```

**2. `continue` vs `break` vs `pass`:**

| Keyword | What it does |
|---------|-------------|
| `break` | Exit the loop completely |
| `continue` | Skip this iteration, go to next |
| `pass` | Do nothing — placeholder |

```python
for i in range(10):
    if i % 2 == 0:
        continue   # skip even
    if i > 7:
        break      # stop after 7
    print(i)       # 1, 3, 5, 7
```

**3. `pass` — empty block placeholder:**
```python
for i in range(5):
    pass   # Python needs this — empty blocks not allowed
```

---

## 4. 🎮 Hands-on — Number Guessing Game

```python
import random

while True:
    number = random.randint(1, 10)

    while True:
        guess = int(input("Guess a number between 1 to 10: \n"))

        if guess == number:
            print("Your guess is correct! 🎉")
            break
        elif guess < number:
            print("Too low!")
        else:
            print("Too high!")

    ip = input("Play again? Y or N: \n")
    if ip.lower() == "n":
        print("Thanks for playing! 👋")
        break
```

**Concepts used:**
- Nested `while True` loops
- `if / elif / else`
- `break` to exit loops
- `int(input())` for type conversion
- `.lower()` for case-insensitive input
- `random.randint()` for random numbers

---

## 🧠 Key Takeaways

| Concept | When to use |
|---------|-------------|
| `for` | You know how many times to loop |
| `while` | You don't know — loop until condition changes |
| `break` | Exit the loop early |
| `continue` | Skip current iteration |
| `pass` | Empty block placeholder |
| `enumerate()` | Need index + value together |
| `zip()` | Loop two lists in parallel |
| `for/while...else` | Run code only if loop completed without break |

---

## 🔗 JS → Python Bridge

| JavaScript | Python |
|------------|--------|
| `else if` | `elif` |
| `condition ? a : b` | `a if condition else b` |
| `&&` for range check | `1 <= x <= 10` chained |
| `i++` | `i += 1` |
| No `for...else` | `for...else` exists! |
| Empty `{}` block | Need `pass` |
| `forEach(item, index)` | `enumerate()` |
| Sync two arrays manually | `zip()` |

---

> ✅ Day 6 Complete! Tomorrow — **Day 7: Functions Deep Dive**