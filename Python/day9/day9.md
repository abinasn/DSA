# 🐍 Day 9 — File Handling & Exception Handling
> **Course:** Abinas's 15-Day Python Journey
> **Background:** Full Stack JavaScript Developer
> **Date:** 2026-04-18

---

## 🎯 What We Covered Today

1. Opening & reading files — `open()`, `with` statement
2. Writing & appending to files
3. File modes: `r`, `w`, `a`, `r+`
4. `try` / `except` / `finally` / `raise`
5. Custom exceptions
6. Hidden & non-obvious concepts throughout

---

## 1️⃣ Opening & Reading Files

### The old way (don't use)
```python
f = open("file.txt", "r")
content = f.read()
print(content)
f.close()  # easy to forget — memory leaks, file locks
```

### The Pythonic way — `with` statement
```python
with open("file.txt", "r") as f:
    content = f.read()
    print(content)
# file automatically closed here — no f.close() needed
```

### Three ways to read
```python
# Entire file as one string
with open("file.txt", "r") as f:
    content = f.read()

# Entire file as a list of lines
with open("file.txt", "r") as f:
    lines = f.readlines()

# One line at a time — memory efficient for large files
with open("file.txt", "r") as f:
    for line in f:
        print(line)
```

---

## 2️⃣ File Modes

| Mode | Meaning | File must exist? | Overwrites? |
|------|---------|-----------------|-------------|
| `"r"` | read only | ✅ yes | ❌ no |
| `"w"` | write | ❌ no (creates) | ✅ yes — wipes file |
| `"a"` | append | ❌ no (creates) | ❌ adds to end |
| `"r+"` | read + write | ✅ yes | ⚠️ byte by byte |

---

## 3️⃣ Writing & Appending

### Write — overwrites entire file
```python
with open("notes.txt", "w") as f:
    f.write("Hello Abinas\n")
    f.write("Day 9 is going well\n")
```

### Append — adds to end
```python
with open("notes.txt", "a") as f:
    f.write("This line is added at the end\n")
```

### `r+` — surgical byte-by-byte overwrite
```python
with open("notes.txt", "r+") as f:
    f.seek(0)           # move cursor to position 0
    f.write("First line\n")  # overwrites only 11 bytes
    print(f.read())     # reads whatever is left after cursor
```

---

## 4️⃣ try / except / finally / raise

### Basic structure
```python
try:
    f = open("missing.txt", "r")
except FileNotFoundError:
    print("File not found!")
finally:
    print("Always runs — cleanup here")
```

### Catching multiple errors
```python
try:
    f = open("file.txt", "r")
    number = int(f.read())
except FileNotFoundError:
    print("File missing!")
except ValueError:
    print("File content is not a number!")
```

### Inspecting the error object
```python
try:
    f = open("missing.txt", "r")
except Exception as e:
    print(type(e))   # <class 'FileNotFoundError'>
    print(e)         # [Errno 2] No such file or directory
```

### `raise` — throw your own error
```python
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero!")
    return a / b
```

---

## 5️⃣ Custom Exceptions

### Minimal custom exception
```python
class InsufficientFundsError(Exception):
    pass

raise InsufficientFundsError("Not enough balance!")
```

### Custom exception with data
```python
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        super().__init__(f"Cannot withdraw {amount}. Balance is only {balance}.")
        self.balance = balance
        self.amount = amount

try:
    raise InsufficientFundsError(100, 500)
except InsufficientFundsError as e:
    print(e)           # Cannot withdraw 500. Balance is only 100.
    print(e.balance)   # 100
    print(e.amount)    # 500
```

---

## 🔍 Hidden & Non-Obvious Concepts

### 1. `with` is a Context Manager
`with` is not just for files. It calls `__enter__` on the way in and `__exit__` on the way out — automatically.

```python
# open() returns an object with __enter__ and __exit__ built in
with open("file.txt") as f:  # calls f.__enter__()
    ...
                             # calls f.__exit__() — file closed
```

Used for: files, database connections, network sockets, thread locks.

---

### 2. `\n` is your responsibility
```python
f.write("line one")
f.write("line two")
# Result: line oneline two  ← merged! always add \n manually
```

---

### 3. File Pointer (cursor)
```python
with open("file.txt", "r+") as f:
    f.seek(0)    # move cursor to position 0
    f.read()     # cursor moves to end
    f.seek(0)    # move back to start
```

`"r+"` overwrites byte by byte from cursor position. It does NOT clear the file first.

```
Original:   H e l l o   A b i n a s \n
Write:      F i r s t   l i n e \n
Result:     F i r s t   l i n e \n s \n  ← "s" survives!
```

---

### 4. Bare `except` is dangerous
```python
# ❌ Never do this
try:
    ...
except:          # catches EVERYTHING including Ctrl+C
    print("error")

# ✅ Always specify
try:
    ...
except FileNotFoundError:
    print("File missing!")
```

---

### 5. Python Error Hierarchy
```
BaseException
└── Exception
    ├── ValueError
    ├── TypeError
    ├── FileNotFoundError
    ├── ZeroDivisionError
    ├── IndexError
    └── KeyError
```

> Catching `Exception` catches everything below it.
> Never catch `BaseException` — it also catches `KeyboardInterrupt` (Ctrl+C).

---

### 6. Exception Chaining
```python
try:
    f = open("missing.txt", "r")
except FileNotFoundError as e:
    raise RuntimeError("Config file missing") from e
```

> `from e` preserves the original error. Full chain visible in traceback.
> JS equivalent: `new Error("msg", { cause: originalError })`

---

### 7. `pass` in empty class body
```python
class MyError(Exception):
    pass  # intentionally empty — inherits everything from Exception
```

> Without `pass`, Python throws `IndentationError` — empty blocks not allowed.

---

## 🔁 JS → Python Bridge Table

| JavaScript | Python |
|-----------|--------|
| `fs.readFileSync()` | `open("file.txt", "r")` |
| `try / catch / finally` | `try / except / finally` |
| `throw new Error("msg")` | `raise ValueError("msg")` |
| `class X extends Error` | `class X(Exception)` |
| `new Error("msg", { cause: e })` | `raise X("msg") from e` |
| `err.message` | `str(e)` |
| `err instanceof TypeError` | `isinstance(e, TypeError)` |

---

## ⚠️ Common Mistakes

1. Forgetting `\n` when writing to files — lines merge
2. Using `"w"` when you meant `"a"` — file gets wiped silently
3. Using bare `except:` — swallows all errors including `Ctrl+C`
4. Using `"r+"` expecting it to clear the file — it doesn't
5. Not using `with` — forgetting `f.close()` causes file locks

---

## 📊 Full Error Handling Picture

```
try          → attempt risky code
except X     → handle specific error
except X as e → handle + inspect error object
finally      → cleanup — always runs
raise        → throw error manually
raise X from e → chain errors with cause
class X(Exception) → define your own error type
```

---

## ✅ Day 9 Complete

**Next up — Day 10: OOP — Classes, Objects, Inheritance**
- `class`, `__init__`
- Instance vs class variables
- Methods
- Inheritance, `super()`
- Magic methods: `__str__`, `__repr__`