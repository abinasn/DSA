# 🐍 Day 3 — Strings Deep Dive

> **Course:** Abinas's 15-Day Python Journey
> **Background:** Full Stack JavaScript Developer
> **Date:** Day 3

---

## 🎯 What You Learned Today

By the end of Day 3, you can **slice, format, search, and transform any string** in Python.

---

## Step 1 — What is a String, Really?

A string is a **sequence of characters stored one by one in memory**.
Each character maps to a **Unicode number**.

```python
"A" → 65
"b" → 98
"i" → 105
```

```
Index:   0    1    2    3    4    5
         A    b    i    n    a    s
```

### Key Concepts:

**Strings are Immutable**
Python never edits a string in place. It creates a **new object** in memory.

```python
name = "Abinas"
name = "Abinas Panda"
# "Abinas" still exists at old address until GC cleans it
```

**Python Strings are Unicode (UTF-8)**
Not just ASCII. Emojis, Tamil, any language — all work natively.

```python
name = "அபிநாஸ்"
emoji = "🐍"
print(emoji)   # 🐍 ✅
```

**`ord()` and `chr()` — Peek inside**

```python
ord("A")    # 65  → what number is this character?
chr(65)     # "A" → what character is this number?
```

**`len()` counts Unicode characters**

```python
len("Abinas")  # 6
len("🐍")      # 1 ✅ — Python counts correctly
# JS: "🐍".length → 2 ❌ (UTF-16 quirk)
```

**Negative Indexing — Python exclusive**

```
Index:    0    1    2    3    4    5
          A    b    i    n    a    s
Index:   -6   -5   -4   -3   -2   -1
```

```python
"Abinas"[-1]   # "s" — last character
# JS: str[str.length - 1] — Python is cleaner
```

---

## Step 2 — String Slicing

```python
string[start : stop : step]
```

| Part | Meaning | Default |
|------|---------|---------|
| `start` | where to begin | `0` |
| `stop` | where to stop (not included) | end of string |
| `step` | how many to jump | `1` |

```python
name = "Abinas"

name[0:3]    # "Abi"
name[2:5]    # "ina"
name[0:]     # "Abinas"
name[:3]     # "Abi"
name[:]      # "Abinas" — full copy
name[::2]    # "Aia"   — every 2nd character
name[::-1]   # "saniabA" — reverse!
```

### Hidden Concepts:

**Slicing creates a NEW object**
Original is never modified.

**Slice is actually an object**

```python
s = slice(0, 3)
name[s]   # "Abi" — same as name[0:3]
```

> Used heavily in NumPy and Pandas later.

**`in` operator**

```python
"bin" in "Abinas"   # True
"xyz" in "Abinas"   # False
# JS: "Abinas".includes("bin")
```

**`find()` vs `index()`**

```python
name.find("bin")    # 1  — safe, returns -1 if not found
name.find("xyz")    # -1 — no crash ✅
name.index("bin")   # 1  — strict
name.index("xyz")   # ❌ ValueError — crashes if not found
```

**Strings are iterable**

```python
for char in "Abinas":
    print(char)   # A, b, i, n, a, s
```

**Slicing is forgiving, indexing is strict**

```python
name[0:100]   # "Abinas" — no error, goes to end ✅
name[100]     # ❌ IndexError
```

---

## Step 3 — f-strings and String Formatting

```python
# JavaScript
`Hello ${name}, you are ${age} years old.`

# Python
f"Hello {name}, you are {age} years old."
```

**Expressions inside `{}`**

```python
a, b = 10, 3
print(f"{a} + {b} = {a + b}")         # 10 + 3 = 13
print(f"Upper: {'abinas'.upper()}")   # Upper: ABINAS
```

**Number Formatting**

```python
pi = 3.14159265
print(f"{pi:.2f}")    # 3.14
print(f"{pi:.4f}")    # 3.1416

score = 95.5
print(f"{score:>10}")   # right-align
print(f"{score:<10}")   # left-align
print(f"{score:^10}")   # center-align
```

| Task | JavaScript | Python |
|------|-----------|--------|
| Embed variable | `` `Hello ${name}` `` | `f"Hello {name}"` |
| 2 decimal places | `num.toFixed(2)` | `f"{num:.2f}"` |
| Alignment | `.padStart()` | `f"{val:>10}"` |

---

## Step 4 — String Methods

**Case Methods**

```python
name = "abinas panda"
name.upper()       # "ABINAS PANDA"
name.lower()       # "abinas panda"
name.capitalize()  # "Abinas panda"
name.title()       # "Abinas Panda"
```

**Strip**

```python
"   hello   ".strip()    # "hello"
"   hello   ".lstrip()   # "hello   "
"   hello   ".rstrip()   # "   hello"
# JS: .trim(), .trimStart(), .trimEnd()
```

**Replace**

```python
"I love JavaScript".replace("JavaScript", "Python")
# "I love Python"
# ⚠️ Python replaces ALL by default — JS replaces only first!
"banana".replace("a", "o", 2)   # "bonona" — replace only first 2
```

**Split and Join**

```python
"Abinas Panda Developer".split(" ")
# ["Abinas", "Panda", "Developer"]

"-".join(["Abinas", "Panda", "Developer"])
# "Abinas-Panda-Developer"

# ⚠️ join is called on the SEPARATOR, not the list
"-".join(words)      # ✅ Python way
words.join("-")      # ❌ AttributeError
```

**Starts/Ends With**

```python
"report.py".startswith("report")   # True
"report.py".endswith(".py")        # True
```

**Count**

```python
"banana".count("a")   # 3
```

---

## Step 5 — Hidden String Concepts

**String Interning**

```python
a = "Abinas"
b = "Abinas"
a is b    # True — same object (compile-time interning)
```

> Python reuses identical string literals seen at compile time.
> Strings built at runtime (via `+`, `input()`) are NOT guaranteed to be interned.
> **Always use `==` to compare values. Never `is`.**

**String Multiplication**

```python
"ha" * 3      # "hahaha"
"-" * 20      # "--------------------"
```

**Multi-line Strings**

```python
text = """
Hello Abinas,
Welcome to Python.
"""
```

> Used for SQL queries, AI prompts, docstrings.

**Raw Strings**

```python
path = "C:\new\folder"    # ❌ \n and \f are escape chars
path = r"C:\new\folder"   # ✅ backslashes treated literally
```

**Escape Characters**

| Escape | Meaning |
|--------|---------|
| `\n` | New line |
| `\t` | Tab |
| `\\` | Backslash |
| `\"` | Double quote |
| `\'` | Single quote |

---

## 🛠️ Hands-On Task — Name Formatter

```python
input_name = input("Enter your full name: ")
print(f"Original    : {input_name}")
print(f"Uppercase   : {input_name.upper()}")
print(f"Title Case  : {input_name.title()}")

split_name = input_name.split(" ")

nstr = ""
for s in split_name:
    nstr += f"{s[0].upper()}."
print(f"Initials    : {nstr[0:len(nstr)-1]}")
print(f"Initials    : {'.'.join([word[0].upper() for word in split_name])}")

print(f"Reversed    : {input_name[::-1]}")
print(f"First Name  : {split_name[0].title()}")
print(f"Last Name   : {split_name[-1].title()}")   # -1 = always last
print(f"Length      : {len(input_name)} characters")
```

### Bug Fixed:
```python
split_name[1]    # ❌ middle name for 3-word names
split_name[-1]   # ✅ always the last word
```

### Pythonic Initials (Day 11 preview):
```python
initials = ".".join([word[0].upper() for word in split_name])
```

---

## 🔗 JS → Python Bridge — Day 3

| JavaScript | Python |
|-----------|--------|
| `` `Hello ${name}` `` | `f"Hello {name}"` |
| `str[0]` | `str[0]` |
| `str.slice(0, 3)` | `str[0:3]` |
| `str.split(" ")` | `str.split(" ")` |
| `arr.join("-")` | `"-".join(arr)` |
| `str.includes("x")` | `"x" in str` |
| `str.indexOf("x")` | `str.find("x")` |
| `str.toUpperCase()` | `str.upper()` |
| `str.trim()` | `str.strip()` |
| `str.replace("a","b")` | `str.replace("a","b")` |
| `"ha".repeat(3)` | `"ha" * 3` |
| `str.charCodeAt(0)` | `ord(str[0])` |
| `String.fromCharCode(65)` | `chr(65)` |

---

## ✅ Day 3 Complete!

**What you can now do:**
- Index and slice any string
- Format output with f-strings
- Clean, transform, search strings using methods
- Understand memory-level behavior of strings
- Avoid common JS → Python traps

---

**Up Next → Day 4: Lists, Tuples, Sets**
> Same indexing, slicing, and `in` operator — but for collections. 🚀