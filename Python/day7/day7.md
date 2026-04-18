# 🐍 Day 7 Recap — Functions Deep Dive

---

## ✅ What You Learned Today

---

## 1. Defining a Function

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Abinas")  # Hello, Abinas!
```

**JS vs Python:**
| JS | Python |
|----|--------|
| `function` keyword | `def` keyword |
| `{}` curly braces | `:` + indentation |

---

## 2. Return Values

```python
def add(a, b):
    return a + b

result = add(2, 3)  # 5
```

**No return → returns `None` (JS returns `undefined`)**

### Python can return multiple values:
```python
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([3, 1, 7, 2])
# low = 1, high = 7
```

Python returns a **tuple** and unpacks automatically.

---

## 3. Default Arguments

```python
def greet(name="Stranger"):
    print(f"Hello, {name}!")

greet()           # Hello, Stranger!
greet("Abinas")   # Hello, Abinas!
```

⚠️ **Rule — defaults go LAST:**
```python
def greet(age, name="Stranger"):  # ✅ Correct
def greet(name="Stranger", age):  # ❌ SyntaxError
```

---

## 4. Keyword Arguments

```python
def greet(name, age):
    print(f"{name} is {age}")

greet(age=25, name="Abinas")  # ✅ Order doesn't matter!
```

| How you call | Python does |
|---|---|
| `greet(25, "Abinas")` | Fills by **position** |
| `greet(age=25, name="Abinas")` | Fills by **name** |

---

## 5. `*args` — Flexible Positional Arguments

```python
def add(*numbers):
    total = 0
    for n in numbers:
        total += n
    return total

print(add(1, 2, 3))       # 6
print(add(1, 2, 3, 4, 5)) # 15
```

**JS vs Python:**
| JS | Python |
|----|--------|
| `...numbers` (spread) | `*args` |
| Collects into Array `[]` | Collects into Tuple `()` |

---

## 6. `**kwargs` — Flexible Named Arguments

```python
def describe(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

describe(name="Abinas", age=25, city="Bhubaneswar")
# name: Abinas
# age: 25
# city: Bhubaneswar
```

**Collects all named arguments into a dictionary.**

### Combining everything:
```python
def mixed(name, *args, **kwargs):
    print(name)    # "Abinas"
    print(args)    # (1, 2, 3)
    print(kwargs)  # {'city': 'Bhubaneswar'}

mixed("Abinas", 1, 2, 3, city="Bhubaneswar")
```

**Order rule — always:**
```
normal args → *args → **kwargs
```

---

## 7. Lambda Functions

**Lambda = anonymous function = JS arrow function `() =>`**

```python
# JS
const add = (a, b) => a + b;

# Python
add = lambda a, b: a + b
```

| Part | JS | Python |
|------|----|--------|
| Keyword | *(nothing)* | `lambda` |
| Arguments | `(a, b)` | `a, b` |
| Arrow | `=>` | `:` |
| Return | automatic | automatic |

### Real use — with `max()` / `sorted()`:
```python
students = [
    {"name": "Abinas", "age": 25},
    {"name": "Bob", "age": 22},
    {"name": "Alice", "age": 30},
]

# Find oldest
max(students, key=lambda s: s["age"])
# {"name": "Alice", "age": 30}

# Sort by age
sorted(students, key=lambda s: s["age"])
```

### Python `max()` vs JS `.sort().at(-1)`:
| | JS `.sort().at(-1)` | Python `max()` |
|--|----|----|
| Result | Same ✅ | Same ✅ |
| Original list | Modified ❌ | Untouched ✅ |
| Speed | Slower (sorts all) | Faster (scans once) |

### Golden rule:
```
Use lambda → small, throwaway, used once
Use def    → complex, reused multiple times
```

---

## 8. Scope

### Local vs Global:
```python
message = "Hello!"  # global

def greet():
    message = "Hi!"  # local — different variable!
    print(message)   # Hi!

greet()
print(message)  # Hello! — global untouched
```

### Modifying global inside function:
```python
count = 0

def increment():
    global count  # needed to modify global
    count += 1

increment()
print(count)  # 1
```

| | JS | Python |
|--|----|----|
| Read global inside function | ✅ | ✅ |
| Modify global inside function | ✅ directly | ❌ need `global` keyword |

---

## 🔍 Hidden Scope Concepts

### Hidden #1 — LEGB Rule

Python searches variables in this order:
```
L → Local        (inside current function)
E → Enclosing    (outer function, if nested)
G → Global       (top of the file)
B → Built-in     (print, len, etc.)
```

```python
x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(x)  # local ← found at L, stops here
    inner()

outer()
```

### Hidden #2 — `nonlocal` keyword:
```python
def outer():
    count = 0
    def inner():
        nonlocal count
        count += 1  # modifies outer's count
    inner()
    inner()
    print(count)  # 2

outer()
```

| Keyword | Modifies |
|---------|---------|
| `global` | Top of file variable |
| `nonlocal` | Outer function variable |

### Hidden #3 — Functions are objects:
```python
def greet():
    print("Hello!")

say_hi = greet   # No () — copying, not calling
say_hi()         # Hello! ✅
```

**Functions can be stored in variables and passed around — this powers decorators on Day 11!**

---

## 9. 🛠️ Hands-on — Mini Utility Library

```python
def full_name(first, last):
    return f"{first} {last}"

def add(*numbers):
    total = 0
    for n in numbers:
        total += n
    return total

def greet(name, greeting="Hello"):
    return f"{greeting}, {name}"

def describe(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

def find_oldest(students):
    return max(students, key=lambda s: s["age"])


# Usage
print(full_name("Abinas", "Nayak"))       # Abinas Nayak
print(add(1, 2, 3, 4, 5))                 # 15
print(greet("Abinas"))                    # Hello, Abinas
print(greet("Abinas", greeting="Hey"))    # Hey, Abinas
describe(name="Abinas", age=25)
students = [
    {"name": "Abinas", "age": 25},
    {"name": "Bob", "age": 22},
    {"name": "Alice", "age": 30},
]
print(find_oldest(students))  # {"name": "Alice", "age": 30}
```

---

## 🧠 Key Takeaways

| Concept | When to use |
|---------|-------------|
| `def` | Define reusable functions |
| `return` | Get a value back from a function |
| Default args | When a parameter is optional |
| Keyword args | When order shouldn't matter |
| `*args` | Unknown number of positional args |
| `**kwargs` | Unknown number of named args |
| `lambda` | Small throwaway one-liner function |
| `global` | Modify a global variable inside function |
| `nonlocal` | Modify an outer function's variable |

---

## 🔗 JS → Python Bridge

| JavaScript | Python |
|------------|--------|
| `function name() {}` | `def name():` |
| `() => expression` | `lambda: expression` |
| `(a, b) => a + b` | `lambda a, b: a + b` |
| `...args` spread | `*args` |
| `options = {}` object param | `**kwargs` |
| `undefined` when no return | `None` when no return |
| `.sort()` modifies original | `sorted()` / `max()` never modify original |
| No `global` keyword needed | `global` keyword to modify globals |

---

> ✅ Day 7 Complete! Tomorrow — **Day 8: Modules, Packages & pip**