# 🐍 Python 15-Day Roadmap — Abinas's Learning Journey

> **Background:** Full Stack JavaScript Developer | Moving towards AI/ML
> **Daily Commitment:** 2–3 hours
> **Teaching Style:** Step-by-step, beginner-friendly, JS comparisons, hands-on

---

## 🗓️ Overview at a Glance

| Day | Topic | Level |
|-----|-------|-------|
| Day 1 | Python Setup, Syntax Basics, Hello World | 🟢 Basic |
| Day 2 | Variables, Data Types, Type System | 🟢 Basic |
| Day 3 | Strings — Deep Dive | 🟢 Basic |
| Day 4 | Lists, Tuples, Sets | 🟢 Basic |
| Day 5 | Dictionaries | 🟢 Basic |
| Day 6 | Conditionals & Loops | 🟢 Basic |
| Day 7 | Functions — Deep Dive | 🟡 Intermediate |
| Day 8 | Modules, Packages, pip | 🟡 Intermediate |
| Day 9 | File Handling & Exception Handling | 🟡 Intermediate |
| Day 10 | OOP — Classes, Objects, Inheritance | 🟡 Intermediate |
| Day 11 | Decorators, Generators, Comprehensions | 🟡 Intermediate |
| Day 12 | Virtual Environments + NumPy | 🔴 Advanced |
| Day 13 | Pandas — Data Manipulation | 🔴 Advanced |
| Day 14 | Intro to AI/ML — scikit-learn | 🔴 Advanced |
| Day 15 | Final Project + Review + Next Steps | 🏁 Capstone |

---

## 📅 Day-by-Day Plan

---

### 🟢 Day 1 — Python Setup, Syntax & Hello World
**Time:** 2 hours
**Goal:** Feel at home in Python, run your first script

**Topics:**
- Python vs JavaScript — Key differences
- Running `.py` files vs `.js` files
- `print()` — your first Python function
- Comments (`#` single, `""" """` multi-line)
- Python indentation (no curly braces!)

**Hands-on Task:**
- Write a script that prints your name, age, and city
- Intentionally break indentation and read the error

**JS Comparison:**
```
JS:   console.log("Hello")
PY:   print("Hello")
```

---

### 🟢 Day 2 — Variables, Data Types, Type System
**Time:** 2 hours
**Goal:** Understand how Python handles data

**Topics:**
- Dynamic typing (like JS)
- `int`, `float`, `str`, `bool`, `None` (vs `null`)
- `type()` function
- Type conversion: `int()`, `str()`, `float()`
- `input()` — taking user input

**Hands-on Task:**
- Build a simple calculator using `input()` and type conversion

---

### 🟢 Day 3 — Strings Deep Dive
**Time:** 2.5 hours
**Goal:** Master strings — they are everywhere in AI/ML too

**Topics:**
- String indexing and slicing
- f-strings (like JS template literals)
- String methods: `.upper()`, `.lower()`, `.split()`, `.strip()`, `.replace()`
- Multi-line strings
- String formatting

**Hands-on Task:**
- Build a name formatter: takes full name input, returns formatted output

---

### 🟢 Day 4 — Lists, Tuples, Sets
**Time:** 2.5 hours
**Goal:** Understand Python's core collections

**Topics:**
- List (like JS Array) — mutable
- Tuple — immutable list
- Set — unique values only
- Common methods: `.append()`, `.remove()`, `.pop()`, `len()`
- Looping through collections

**Hands-on Task:**
- Create a to-do list app using list methods

---

### 🟢 Day 5 — Dictionaries
**Time:** 2 hours
**Goal:** Master Python's version of JS Objects

**Topics:**
- Dictionary basics (key-value pairs)
- Access, add, update, delete keys
- `.keys()`, `.values()`, `.items()`
- Nested dictionaries
- Looping through dictionaries

**Hands-on Task:**
- Build a student record system using dictionaries

---

### 🟢 Day 6 — Conditionals & Loops
**Time:** 2 hours
**Goal:** Control flow — logic of your program

**Topics:**
- `if`, `elif`, `else`
- `for` loop (different from JS!)
- `while` loop
- `break`, `continue`, `pass`
- `range()` function

**Hands-on Task:**
- Build a number guessing game

---

### 🟡 Day 7 — Functions Deep Dive
**Time:** 3 hours
**Goal:** Write clean, reusable Python functions

**Topics:**
- Defining functions with `def`
- Arguments: positional, keyword, default
- `*args` and `**kwargs`
- Return values
- Lambda functions (arrow functions in JS)
- Scope: local vs global

**Hands-on Task:**
- Build a mini utility library (reusable functions)

---

### 🟡 Day 8 — Modules, Packages & pip
**Time:** 2 hours
**Goal:** Understand Python's ecosystem

**Topics:**
- What is a module? (like JS imports)
- `import`, `from...import`, `as`
- Built-in modules: `math`, `random`, `datetime`, `os`
- `pip install` — Python's npm
- `requirements.txt`

**Hands-on Task:**
- Build a random password generator using `random` and `string` modules

---

### 🟡 Day 9 — File Handling & Exception Handling
**Time:** 2.5 hours
**Goal:** Read/write files, handle errors gracefully

**Topics:**
- Reading & writing files (`open()`, `with` statement)
- Modes: `r`, `w`, `a`
- `try`, `except`, `finally`, `raise`
- Custom exceptions
- Handling real-world errors

**Hands-on Task:**
- Build a simple note-taking app that saves to a `.txt` file

---

### 🟡 Day 10 — OOP: Classes, Objects, Inheritance
**Time:** 3 hours
**Goal:** Understand Python's OOP — crucial for AI/ML libraries

**Topics:**
- Class and Object (like JS classes)
- `__init__` constructor
- Instance vs class variables
- Methods
- Inheritance
- `super()`
- `__str__`, `__repr__` (magic methods)

**Hands-on Task:**
- Build a `BankAccount` class with deposit, withdraw, and balance check

---

### 🟡 Day 11 — Decorators, Generators, Comprehensions
**Time:** 3 hours
**Goal:** Write clean, Pythonic code — the hidden gems

**Topics:**
- List comprehensions (clean one-liner loops)
- Dictionary comprehensions
- `zip()`, `map()`, `filter()`
- Generators (`yield`)
- Decorators (functions that wrap functions)

**Hands-on Task:**
- Refactor Day 4 to-do app using comprehensions + a timer decorator

---

### 🔴 Day 12 — Virtual Environments + NumPy
**Time:** 3 hours
**Goal:** Setup AI/ML workspace, start working with numbers

**Topics:**
- Why virtual environments? (`venv`)
- Creating and activating `venv`
- Install NumPy
- Arrays vs Python lists
- NumPy operations: slicing, reshaping, math
- Why AI/ML uses NumPy everywhere

**Hands-on Task:**
- Create a NumPy array of student scores, compute mean, max, min

---

### 🔴 Day 13 — Pandas: Data Manipulation
**Time:** 3 hours
**Goal:** Read and manipulate real data like a data engineer

**Topics:**
- What is Pandas?
- `DataFrame` and `Series`
- Reading CSV files
- Filtering, selecting, sorting
- Handling missing data
- Basic stats: `.describe()`, `.groupby()`

**Hands-on Task:**
- Load a real CSV dataset, clean it, and extract insights

---

### 🔴 Day 14 — Intro to AI/ML with scikit-learn
**Time:** 3 hours
**Goal:** Your first machine learning model 🎉

**Topics:**
- What is Machine Learning? (simple analogy)
- Types: Supervised, Unsupervised
- `scikit-learn` — the ML library
- Your first model: Linear Regression
- Training and testing data
- `model.fit()`, `model.predict()`
- Evaluating model accuracy

**Hands-on Task:**
- Predict house prices using a simple dataset

---

### 🏁 Day 15 — Final Project + Review
**Time:** 3 hours
**Goal:** Build something real, consolidate everything

**Project:**
- **"Student Performance Analyzer"**
  - Load a CSV of student data (Pandas)
  - Clean and process data (NumPy + Pandas)
  - Predict performance using a simple ML model (scikit-learn)
  - Print a clean summary report

**Review Topics:**
- Common Python mistakes and how to avoid them
- Python best practices (PEP 8)
- What to learn next: Deep Learning, APIs, FastAPI, PyTorch

---

## 🧠 Learning Principles We Follow

1. **Small steps** — one concept at a time
2. **JS bridge** — every new concept mapped to what you already know
3. **Hands-on first** — theory only when needed
4. **Make mistakes** — errors are teachers
5. **Ask "why"** — not just "how"

---

## 🔗 What Comes After Day 15?

```
Python Mastery
    ├── FastAPI (backend like Express.js)
    ├── PyTorch / TensorFlow (deep learning)
    ├── LangChain (LLM apps)
    └── OpenCV (computer vision)
```

---

> 🗒️ **Note to Teacher (Claude):**
> Abinas is a full stack JS developer. Always bridge concepts from JS to Python.
> He learns step-by-step. Never rush. Confirm understanding before moving forward.
> He will ask "why" — always answer that first before "how".
> Use ASCII diagrams, comparison tables, and small examples.
> Keep explanations at a "10-year-old" level — simple, visual, no jargon.
