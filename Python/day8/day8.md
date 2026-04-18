# 🐍 Day 8 — Modules, Packages & pip
> **Course:** Abinas's 15-Day Python Journey
> **Background:** Full Stack JavaScript Developer
> **Date:** 2026-04-18

---

## 🎯 What We Covered Today

1. What is a module?
2. Ways to import
3. Built-in modules: `math`, `random`, `datetime`, `os`
4. What is a package?
5. `pip` — Python's npm
6. `requirements.txt`
7. Hidden & non-obvious concepts throughout

---

## 1️⃣ What is a Module?

Every `.py` file is a module. No `export` keyword needed.

```python
# utils.py
def greet(name):
    return f"Hello {name}"

# main.py
import utils
print(utils.greet("Abinas"))
```

---

## 2️⃣ Ways to Import

### Style 1 — `import module`
```python
import math
print(math.sqrt(16))  # must use prefix: math.something
```

### Style 2 — `from module import name`
```python
from math import sqrt, pi
print(sqrt(16))  # no prefix needed
```

### Style 3 — `import module as alias`
```python
import math as m
print(m.sqrt(16))

# You'll see this everywhere in AI/ML:
import numpy as np
import pandas as pd
```

---

## 3️⃣ Built-in Modules

### `math`
```python
import math
math.sqrt(16)     # 4.0
math.pi           # 3.141592653589793
math.floor(3.9)   # 3
math.ceil(3.1)    # 4
math.pow(2, 10)   # 1024.0
```

### `random`
```python
import random
random.randint(1, 10)            # random int
random.choice(["a", "b", "c"])  # random item
random.shuffle([1, 2, 3])       # shuffle in place
random.random()                  # float 0.0 to 1.0
random.choices("abc", k=3)      # pick k items (with repetition)
```

### `datetime`
```python
from datetime import datetime
now = datetime.now()
print(now.year)
print(now.strftime("%d-%m-%Y"))  # 18-04-2026
```

### `os`
```python
import os
os.getcwd()                  # current directory
os.listdir(".")              # list files
os.path.exists("file.txt")  # check if file exists
os.getenv("PATH")            # read env variable
```

---

## 4️⃣ What is a Package?

```
Module   = one .py file
Package  = folder of .py files + __init__.py
Library  = collection of packages (installed via pip)
```

### Folder structure
```
my_project/
├── main.py
└── utils/
    ├── __init__.py      ← makes this folder a package
    ├── math_utils.py
    └── string_utils.py
```

### Using it
```python
from utils import math_utils
from utils.string_utils import greet
```

---

## 5️⃣ pip — Python's npm

```bash
pip install requests           # install
pip uninstall requests         # remove
pip list                       # all installed packages
pip show requests              # info about one package
pip install requests==2.28.0   # specific version
pip install --upgrade requests # upgrade to latest
```

### Where packages are installed
All pip packages land in `site-packages` folder.
```bash
pip show requests
# Location: /usr/local/lib/python3.11/site-packages
```

---

## 6️⃣ requirements.txt

```
# requirements.txt
requests==2.28.0
numpy==1.24.0
pandas==2.0.0
```

```bash
pip freeze > requirements.txt   # generate
pip install -r requirements.txt # install from it
```

---

## 🔍 Hidden & Non-Obvious Concepts

### 1. `import *` is dangerous
```python
pi = 3.14
from math import *   # math's pi silently overwrites yours!
print(pi)            # 3.141592... — your value is gone
```
> Never use `import *` in real projects.

---

### 2. `sys.modules` Cache
Python caches every import. First import loads it. Every import after = instant return from cache.
```python
import sys
import math
print(sys.modules['math'])  # <module 'math'>
```
> Same idea as `require.cache` in Node.js.

---

### 3. `__name__ == "__main__"`
```python
# utils.py
def greet(name):
    return f"Hello {name}"

if __name__ == "__main__":
    print(greet("Abinas"))  # only runs when file is executed directly
```

| How file is used | `__name__` value |
|-----------------|-----------------|
| `python utils.py` (direct) | `"__main__"` |
| `import utils` (imported) | `"utils"` |

> Python automatically injects `__name__` into every file before running it.
> JS equivalent: `if (require.main === module)`

---

### 4. `dir()` — built-in documentation tool
```python
import math
print(dir(math))  # lists everything math can do
```
> Works on any module, object, or variable. No Google needed.

---

### 5. `__init__.py`
- Makes a folder a package
- Can be completely empty
- Can re-export things for cleaner imports:
```python
# __init__.py
from .math_utils import add  # now `from utils import add` works directly
```

---

### 6. `pip freeze` vs `pip list`
```bash
pip list     # human-readable (for you to read)
pip freeze   # machine-readable (for requirements.txt)
```
> `pip freeze` uses `==` format. That's what `requirements.txt` needs.

---

### 7. Always pin versions in production
```
requests==2.28.0   ✅ safe — exact version
requests           ❌ risky — installs latest, may break your code
```

---

## 🔁 JS → Python Bridge Table

| JavaScript | Python |
|-----------|--------|
| `import { fn } from './utils'` | `from utils import fn` |
| `import * as utils from './utils'` | `import utils` |
| `npm install axios` | `pip install requests` |
| `npm uninstall axios` | `pip uninstall requests` |
| `package.json` | `requirements.txt` |
| `npm install` | `pip install -r requirements.txt` |
| `node_modules/` | `site-packages/` |
| `require.cache` | `sys.modules` |
| `if (require.main === module)` | `if __name__ == "__main__"` |
| `Math.sqrt()`, `Math.PI` | `math.sqrt()`, `math.pi` |
| `process.cwd()` | `os.getcwd()` |
| `process.env.PATH` | `os.getenv("PATH")` |
| `new Date()` | `datetime.now()` |

---

## 🛠️ Hands-on Task — Random Password Generator

### Abinas's solution
```python
import string
import random

def generate_password(length):
    k = int(length / 3)
    ascii_char = random.choices(string.ascii_letters, k=k)
    digits = random.choices(string.digits, k=k)
    punctuations = random.choices(string.punctuation, k=k)
    return "".join([*ascii_char, *digits, *punctuations])

print(generate_password(12))
```

### Improved solution
```python
import string
import random

def generate_password(length):
    pool = string.ascii_letters + string.digits + string.punctuation
    password = random.choices(pool, k=length)
    random.shuffle(password)
    return "".join(password)

print(generate_password(12))
```

### What was fixed
| Issue | Problem | Fix |
|-------|---------|-----|
| Order | Letters always first, then digits, then punctuation | `random.shuffle()` after combining |
| Length loss | `int(13/3) = 4` — loses characters silently | Single pool + `k=length` |

---

## ⚠️ Common Mistakes

1. Using `import *` — pollutes namespace silently
2. Not pinning versions in `requirements.txt`
3. Forgetting `__init__.py` when creating a package
4. Assuming `import` re-reads the file every time — it doesn't (cached)
5. Putting test code at module level instead of inside `if __name__ == "__main__"`

---

## ✅ Day 8 Complete

**Next up — Day 9: File Handling & Exception Handling**
- `open()`, `with` statement
- Read/write files
- `try`, `except`, `finally`, `raise`
- Custom exceptions