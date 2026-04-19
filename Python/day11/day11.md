# 🐍 Day 11 — Decorators, Generators, Comprehensions
> **Course:** Abinas's 15-Day Python Journey
> **Background:** Full Stack JavaScript Developer
> **Day Completed:** Day 11

---

## 🎯 What We Covered Today

1. List comprehensions
2. Dictionary comprehensions + set comprehensions
3. `zip()`, `map()`, `filter()`
4. Generators — `yield`, `next()`, execution state
5. Decorators — `@` syntax, wrapping functions

---

## 1️⃣ List Comprehensions

Replace a for loop + append with one line.

```python
# Old way
numbers = [1, 2, 3, 4, 5]
squared = []
for n in numbers:
    squared.append(n ** 2)

# Comprehension way
squared = [n ** 2 for n in numbers]
```

### Pattern:
```python
[expression  for item in iterable]
[expression  for item in iterable  if condition]
```

### With condition:
```python
# Only square even numbers
squared = [n ** 2 for n in numbers if n % 2 == 0]
# [4, 16]
```

### JS Bridge:
| JS | Python |
|----|--------|
| `numbers.map(n => n ** 2)` | `[n ** 2 for n in numbers]` |
| `.filter().map()` | `[expr for x in list if condition]` |

---

## 2️⃣ Dictionary & Set Comprehensions

### Dictionary comprehension:
```python
names = ["Abinas", "Rahul", "Sara"]
lengths = {name: len(name) for name in names}
# {'Abinas': 6, 'Rahul': 5, 'Sara': 4}
```

### Pattern:
```python
{key: value  for item in iterable}
{key: value  for item in iterable  if condition}
```

### Flip a dictionary:
```python
original = {"a": 1, "b": 2, "c": 3}
flipped = {v: k for k, v in original.items()}
# {1: 'a', 2: 'b', 3: 'c'}
```

### Set comprehension:
```python
numbers = [1, 2, 2, 3, 3, 4]
unique_squared = {n ** 2 for n in numbers}
# {1, 4, 9, 16} — duplicates removed automatically
```

### Rule:
```
[]  →  list comprehension
{key: value}  →  dict comprehension
{value}  →  set comprehension
```

---

## 3️⃣ `zip()`, `map()`, `filter()`

### `zip()` — stitch two lists together:
```python
names  = ["Abinas", "Rahul", "Sara"]
scores = [95, 80, 88]

paired = list(zip(names, scores))
# [('Abinas', 95), ('Rahul', 80), ('Sara', 88)]

# Loop over two lists together
for name, score in zip(names, scores):
    print(f"{name} scored {score}")
```

### `map()` — transform every item:
```python
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda n: n ** 2, numbers))
# [1, 4, 9, 16, 25]
```

### `filter()` — keep only matching items:
```python
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda n: n % 2 == 0, numbers))
# [2, 4, 6]
```

### 🔍 Hidden Concept — `map()` and `filter()` are lazy:
```python
result = map(lambda n: n ** 2, numbers)
print(result)         # <map object at 0x7f...> 😕
print(list(result))   # [1, 4, 9, 16, 25] ✅
```
> Results computed only when you ask for them. Saves memory.

### JS Bridge:
| JS | Python |
|----|--------|
| `numbers.map(n => n ** 2)` | `map(lambda n: n ** 2, numbers)` |
| `numbers.filter(n => n % 2 === 0)` | `filter(lambda n: n % 2 == 0, numbers)` |
| No built-in zip | `zip(list1, list2)` |

### Pythonic preference:
```python
# map() way
squared = list(map(lambda n: n ** 2, numbers))

# comprehension way — preferred ✅
squared = [n ** 2 for n in numbers]
```

---

## 4️⃣ Generators — `yield`

### Why generators?
```python
# List — all 1 million in memory RIGHT NOW 🔴
numbers = list(range(1_000_000))

# Generator — one at a time 🟢
def get_numbers():
    yield 1
    yield 2
    yield 3
```

### `yield` = pause + give a value:
```
return  →  stop forever, give value, function DIES 💀
yield   →  pause, give value, function SLEEPS 😴 (can resume)
```

### `next()` = wake up the function:
```python
gen = get_numbers()
print(next(gen))   # 1
print(next(gen))   # 2
print(next(gen))   # 3
```

### How it knows where to resume — the bookmark 📖:
```
def get_numbers():
    yield 1   ← 1st next() stops HERE 🔖
    yield 2   ← 2nd next() stops HERE 🔖
    yield 3   ← 3rd next() stops HERE 🔖
```
> Generator saves its entire execution state between yields.
> Each `next()` moves the bookmark forward by one `yield`.

### Generator life cycle:
```
next(gen) →  wake up  ▶️
              run...
              hit yield →  hand value + sleep 😴
next(gen) →  wake up  ▶️
              run...
              hit yield →  hand value + sleep 😴
next(gen) →  wake up  ▶️
              run...
              no more yield → generator DIES 💀
```

### 🔍 Hidden Concept — generator is exhausted after one use:
```python
gen = get_numbers()
print(list(gen))   # [1, 2, 3] ✅
print(list(gen))   # [] 😕 — already exhausted!
```

### 🔍 Hidden Concept — Generator Expression:
```python
# List comprehension — all in memory
squared = [n ** 2 for n in range(10)]

# Generator expression — lazy, one at a time
squared = (n ** 2 for n in range(10))   # () instead of []
```

### Real use case — large files in AI/ML:
```python
def read_large_file(filepath):
    with open(filepath, "r") as f:
        for line in f:
            yield line   # one line at a time
```

### JS Bridge:
| JS | Python |
|----|--------|
| `function*` | regular `def` with `yield` |
| `gen.next().value` | `next(gen)` |

---

## 5️⃣ Decorators

### Why decorators?
> Add behavior to a function without touching the original function.

### Real world analogy:
```
Your function  =  a gift 🎁
Decorator      =  the wrapping paper 🎀
```

### Building a decorator from scratch:
```python
def my_decorator(func):       # takes a function as input
    def wrapper():
        print("Starting... 🚀")
        func()                # runs the original function
        print("Done! ✅")
    return wrapper            # returns the wrapped function

@my_decorator
def greet():
    print("Hello Abinas!")

greet()
# Starting... 🚀
# Hello Abinas!
# Done! ✅
```

### `@` is just a shortcut:
```python
@my_decorator
def greet():
    ...

# Same as:
greet = my_decorator(greet)
```

### Decorator with arguments — use `*args, **kwargs`:
```python
def my_decorator(func):
    def wrapper(*args, **kwargs):   # accept any arguments
        print("Starting... 🚀")
        func(*args, **kwargs)       # pass them through
        print("Done! ✅")
    return wrapper

@my_decorator
def greet(name):
    print(f"Hello {name}!")

greet("Abinas")
```

### Real world — timer decorator:
```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        func(*args, **kwargs)
        end = time.time()
        print(f"⏱️ Took {end - start:.4f} seconds")
    return wrapper

@timer
def slow_task():
    time.sleep(1)
    print("Task done!")

slow_task()
# Task done!
# ⏱️ Took 1.0012 seconds
```

### 🔍 Hidden Concept — `@classmethod` and `@staticmethod` are decorators:
```python
# These from Day 10 were decorators all along!
@classmethod
def total_players(cls): ...

@staticmethod
def game_rules(): ...
```

### JS Bridge:
| JS | Python |
|----|--------|
| Higher order function | Decorator |
| No `@` syntax (yet) | `@decorator_name` |
| `...args` | `*args, **kwargs` |

---

## ⚠️ Common Mistakes

1. Using `[]` when you want a generator — loads all into memory
2. Reusing an exhausted generator — always create a new one
3. Forgetting `*args, **kwargs` in decorator wrapper — breaks for functions with arguments
4. Using `map()`/`filter()` without `list()` — get a lazy object, not a list
5. Confusing `()` generator expression with a tuple — they look similar

---

## 📊 JS → Python Bridge Table

| JS | Python |
|----|--------|
| `.map(n => n ** 2)` | `[n ** 2 for n in numbers]` |
| `.filter(n => n % 2 === 0)` | `[n for n in numbers if n % 2 == 0]` |
| No built-in zip | `zip(list1, list2)` |
| `function*` + `yield` | `def` + `yield` |
| `gen.next().value` | `next(gen)` |
| Higher order function | Decorator with `@` |

---

## ✅ Day 11 Complete

**Next up — Day 12: Virtual Environments + NumPy**
- Why virtual environments? (`venv`)
- Creating and activating `venv`
- Install NumPy
- Arrays vs Python lists
- NumPy operations: slicing, reshaping, math
- Why AI/ML uses NumPy everywhere