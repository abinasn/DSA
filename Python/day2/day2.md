# 🐍 Day 2 — Variables, Data Types & Type System
> Complete recap of everything covered on Day 2
> **Abinas's Python Journey** | Full Stack JS Developer → AI/ML

---

## 📌 Table of Contents
1. [Variables — The Deep Picture](#variables--the-deep-picture)
2. [Data Types — Complete](#data-types--complete)
3. [Type Conversion — Complete](#type-conversion--complete)
4. [type() and isinstance()](#type-and-isinstance)
5. [JS → Python Cheat Sheet](#js--python-cheat-sheet)
6. [Quick Reference](#quick-reference)

---

## Variables — The Deep Picture

### What IS a variable, really?

A variable is NOT a container. It is a **label pointing to a location in RAM**.

```python
name = "Abinas"
```

What actually happens:
```
Step 1: Python creates "Abinas" in RAM at some memory address
Step 2: Python creates a label "name"
Step 3: "name" points to that memory address

RAM Memory
─────────────────────────
Address: 0x1A2B  → "Abinas"
                      ↑
         name ────────┘
```

Prove it — every value has a memory address:
```python
name = "Abinas"
print(id(name))   # actual RAM address
```

---

### Reassignment — what really happens

```python
name = "Abinas"
name = "Python"
```

```
Step 1: "Abinas" exists at 0x1A2B
Step 2: "Python" created at NEW address 0x3C4D
Step 3: name label moves to 0x3C4D
Step 4: "Abinas" has no label → Garbage Collector deletes it 🗑️

BEFORE:              AFTER:
name → "Abinas"      name → "Python"
                             "Abinas" ← deleted
```

> Python has a **Garbage Collector** — automatically cleans up
> values with no labels pointing to them. You never free memory manually.

---

### Multiple labels — same value

```python
a = "Abinas"
b = a

print(id(a) == id(b))  # True — same memory address
```

```
a ──→ "Abinas" (0x1A2B)
b ──→ "Abinas" (0x1A2B)  ← same object, not a copy
```

---

### Dynamic Typing

Python variables have no fixed type. The **value** has a type, not the label.

```python
age = 25        # points to int
age = "hello"   # now points to str  ✅ no error
age = True      # now points to bool ✅ still fine
```

```
STATICALLY TYPED (TypeScript, Java)     DYNAMICALLY TYPED (Python, JS)
────────────────────────────────        ──────────────────────────────
int age = 25                            age = 25
age = "hello"  ← ERROR                 age = "hello"  ← fine
type locked to variable                 type lives on the value
```

---

### Variable Naming

```python
# ✅ Valid — Python uses snake_case
name = "Abinas"
my_age = 25
total_score = 100

# ❌ Invalid
2name = "Abinas"    # cannot start with number
my-age = 25         # hyphens not allowed
```

| JavaScript | Python |
|---|---|
| `myVariableName` | `my_variable_name` |
| camelCase | snake_case |

---

### Multiple Assignment

```python
# Assign multiple variables in one line
x, y, z = 1, 2, 3

# Swap without temp variable
a, b = b, a   # ✅ Python one-liner

# Same value to multiple variables
x = y = z = 0
```

---

### Constants — convention only

Python has no `const` keyword. Use ALL_CAPS as a convention:

```python
PI = 3.14
MAX_SIZE = 100
# Python won't stop you changing these — it's a gentleman's agreement 🤝
```

---

### Delete a variable

```python
name = "Abinas"
del name
print(name)   # NameError — label removed
```

---

### Type Annotation — optional

```python
name: str = "Abinas"   # hint only — Python doesn't enforce it
age: int = 25
```

Useful for readability and editor autocomplete. Not enforced at runtime.

---

## Data Types — Complete

### The 5 Basic Types

```
Value          Type        JS Equivalent
─────────────────────────────────────────
25             int         Number
3.14           float       Number
"Abinas"       str         String
True / False   bool        Boolean
None           NoneType    null
```

---

### int — whole numbers

```python
age = 25
score = 100
negative = -10
```

- No decimal point
- **Unlimited size** — Python uses dynamic chunked storage
- No overflow ever

#### How Python stores big integers

Python uses **Arbitrary Precision** — a chain of 30-bit chunks in RAM:

```
Normal int (C/JS):
┌────────────────────────────────┐
│         one fixed box          │  ← overflow possible
└────────────────────────────────┘

Python int:
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│  chunk 1 │→│  chunk 2 │→│  chunk 3 │→│  chunk 4 │→ ...
└──────────┘ └──────────┘ └──────────┘ └──────────┘
No limit — grows as needed in RAM ✅
```

Only limit = your computer's RAM.

#### Integer Interning — small number optimization

Python pre-creates integers **-5 to 256** at startup and reuses them:

```python
a = 100
b = 100
id(a) == id(b)   # True  ← same object (cached)

a = 1000
b = 1000
id(a) == id(b)   # False ← different objects (not cached)
```

---

### float — decimal numbers

```python
price = 3.14
temperature = 98.6
```

- Stored **approximately** — not exactly
- Classic precision issue:

```python
0.1 + 0.2   # 0.30000000000000004 ← float imprecision
```

For exact decimals use `Decimal`:

```python
from decimal import Decimal
Decimal('0.1') + Decimal('0.2')   # 0.3 ✅ exact
```

---

### str — text (secretly a sequence)

```python
name = "Abinas"    # double quotes
city = 'Odisha'    # single quotes — both fine
empty = ""         # empty string
```

String is a **sequence of characters** with index access:

```python
name = "Abinas"
name[0]    # 'A'   ← first character
name[-1]   # 's'   ← last character (negative = from end)
```

```
"Abinas"
 0→A
 1→b
 2→i
 3→n
 4→a
 5→s
-1→s
```

---

### bool — True or False

```python
is_developer = True
is_beginner = False
```

⚠️ Capital `T` and `F` — unlike JS's lowercase `true/false`

#### bool is a subtype of int

```python
True  == 1   # True
False == 0   # True

True + True    # 2
True + False   # 1

isinstance(True, int)   # True ← bool is child of int
```

---

### None — absence of value

```python
result = None
```

| Python | JavaScript |
|---|---|
| `None` | `null` |
| `NoneType` | `object` (typeof bug) |

#### None is a singleton

Only ONE `None` exists in all of memory:

```python
a = None
b = None
id(a) == id(b)   # True — same object always
```

Always check None with `is`, not `==`:

```python
if result is None:   # ✅ correct — checks identity
    print("empty")

if result == None:   # ❌ works but not recommended
    print("empty")
```

---

### 4 Number Types — Complete

```
int        →  25              (whole, unlimited)
float      →  3.14            (decimal, approximate)
complex    →  3 + 4j          (real + imaginary, used in ML math)
Decimal    →  Decimal('3.14') (exact decimal, for finance/precision)
```

```python
z = 3 + 4j
z.real   # 3.0
z.imag   # 4.0
```

---

### Everything is an object

```python
type(int)    # <class 'type'>
type(type)   # <class 'type'>
```

`int`, `str`, `float`, `bool` are not just keywords —
they are **objects of type `type`**. Deep dive on Day 10 (OOP). 🌱

---

## Type Conversion — Complete

### Two kinds

```
Type Conversion
      ├── Implicit  →  Python converts automatically (safe cases only)
      └── Explicit  →  You convert manually
```

---

### Implicit Conversion

```python
x = 5       # int
y = 2.0     # float
result = x + y
print(result)        # 7.0  ← Python upgraded int to float
print(type(result))  # <class 'float'>
```

Python only converts implicitly when **100% safe** (no data loss):

```
int + float → float   ✅ safe — Python does it
int + str   → ERROR   ❌ unsafe — Python refuses
```

---

### Explicit Conversion

#### int()

```python
int("25")     # → 25
int(3.99)     # → 3   ← chops decimal, does NOT round
int(3.1)      # → 3
int(-3.9)     # → -3  ← moves toward zero

# Secret second argument — base conversion
int("1010", 2)    # binary  → 10
int("FF", 16)     # hex     → 255
int("17", 8)      # octal   → 15
```

#### float()

```python
float("3.14")   # → 3.14
float(5)        # → 5.0
```

#### str()

```python
str(25)         # → "25"
"Age: " + str(25)   # → "Age: 25"
```

#### bool() — Truthiness

```python
bool(0)      # False
bool(1)      # True
bool(-1)     # True   ← any non-zero = True
bool("")     # False  ← empty string = False
bool("hi")   # True
bool(None)   # False
bool([])     # False  ← empty list = False
bool({})     # False  ← empty dict = False
```

**Falsy values:**
```
0, 0.0, "", [], {}, None → False
Everything else           → True
```

---

### Base conversion — both directions

```python
# decimal → other bases
bin(10)     # '0b1010'
hex(255)    # '0xff'
oct(15)     # '0o17'

# other bases → decimal
int("1010", 2)   # 10
int("FF", 16)    # 255
```

---

### Division always returns float

```python
10 / 2     # 5.0   ← always float
10 // 3    # 3     ← floor division, int
10 % 3     # 1     ← remainder
```

---

### input() — always returns string

```python
age = input("Enter age: ")
type(age)   # <class 'str'> — always, even if user types 25
```

Fix:
```python
age = int(input("Enter age: "))   # convert immediately
```

Reading inside out:
```
int( input("Enter age: ") )
  ↑         ↑
converts   runs first
to int
```

---

### Chained conversion — order matters

```python
int(float("3.99"))   # ✅ "3.99" → 3.99 → 3
int("3.99")          # ❌ ValueError
```

---

### Type Conversion vs Type Casting

| | Type Conversion (Python) | Type Casting (C/C++) |
|---|---|---|
| What it does | Creates NEW object of new type | Reinterprets same memory |
| Original value | Unchanged | Changed in place |
| Safety | Always safe | Can be dangerous |

```python
x = 25
y = float(x)
id(x) == id(y)   # False — different objects, x unchanged
```

---

## type() and isinstance()

### type() — exact type check

```python
type(25)           # <class 'int'>
type(x) == int     # True  ← strict, exact match only
type(True) == int  # False ← strict, misses parent relationship
```

### isinstance() — smart type check

```python
isinstance(25, int)          # True
isinstance(True, int)        # True  ← sees bool is child of int
isinstance(25, (int, float)) # True  ← check multiple types at once
```

### The key difference

```
int
 └── bool   ← bool is a child of int

type(True) == int      → False  (strict — exact match only)
isinstance(True, int)  → True   (smart — checks parent chain)
```

> ✅ Always prefer `isinstance()` over `type()` comparison.
> It's safer, more Pythonic, and handles inheritance correctly.

### JS typeof vs Python type()

| JavaScript | Python |
|---|---|
| `typeof x` | `type(x)` |
| Returns string `"number"` | Returns actual type object |
| `typeof null === "object"` 😅 bug | `type(None) == NoneType` ✅ |

---

## JS → Python Cheat Sheet

| JavaScript | Python |
|---|---|
| `let x = 5` | `x = 5` |
| `const PI = 3.14` | `PI = 3.14` (convention only) |
| `null` | `None` |
| `undefined` | doesn't exist |
| `typeof x` | `type(x)` |
| `true / false` | `True / False` |
| `Number` | `int`, `float`, `complex`, `Decimal` |
| `===` strict equality | `is` (identity), `==` (value) |
| `x === null` | `x is None` |

---

## Quick Reference

```python
# Variables
name = "Abinas"           # basic assignment
x, y, z = 1, 2, 3         # multiple assignment
a, b = b, a               # swap
x = y = z = 0             # same value
PI = 3.14                 # constant (convention)
del name                  # delete label
id(name)                  # memory address

# Data Types
type(25)                  # <class 'int'>
type(3.14)                # <class 'float'>
type("hi")                # <class 'str'>
type(True)                # <class 'bool'>
type(None)                # <class 'NoneType'>

# Type Check
isinstance(x, int)        # ✅ preferred
isinstance(x, (int,float))# check multiple
type(x) == int            # works but strict

# Conversion
int("25")                 # → 25
int(3.99)                 # → 3  (chops)
int("FF", 16)             # → 255 (hex)
float("3.14")             # → 3.14
str(25)                   # → "25"
bool(0)                   # → False
bool("hello")             # → True
bin(10)                   # → '0b1010'
hex(255)                  # → '0xff'

# Input
age = int(input("Age: ")) # always convert input

# Division
10 / 2                    # 5.0  (always float)
10 // 3                   # 3    (floor division)
10 % 3                    # 1    (remainder)

# None check
if x is None: ...         # ✅ correct
if x == None: ...         # ❌ avoid
```

---

## ✅ Day 2 Checklist

- [x] Variables are labels pointing to memory — not containers
- [x] Garbage Collector cleans up unreferenced values
- [x] Dynamic typing — type lives on value, not variable
- [x] snake_case naming convention
- [x] Multiple assignment and swap
- [x] Constants by convention (ALL_CAPS)
- [x] 5 basic types — int, float, str, bool, None
- [x] Python integers are unlimited — chunked storage
- [x] Integer interning (-5 to 256 cached)
- [x] bool is a subtype of int (True=1, False=0)
- [x] None is a singleton — always use `is` not `==`
- [x] Implicit vs Explicit conversion
- [x] int() chops decimals — does not round
- [x] input() always returns string
- [x] Truthiness — falsy values
- [x] Base conversion — bin(), hex(), oct(), int(x, base)
- [x] Division always returns float — use // for int division
- [x] isinstance() over type() — smarter, sees inheritance
- [x] Built simple calculator with input() and type conversion

---

## 🔗 What's Coming — Day 3

```
Strings — Deep Dive
    ├── Indexing and slicing
    ├── f-strings (like JS template literals)
    ├── String methods — upper, lower, split, strip, replace
    ├── Multi-line strings
    └── String immutability
```

---

> 🧠 **Key Takeaway from Day 2:**
> Variables are labels, not containers.
> Types live on values, not variables.
> Python handles memory, garbage collection,
> and integer size — all automatically.
> Your job is just to write clean code.