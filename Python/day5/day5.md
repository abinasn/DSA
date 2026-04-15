# 🐍 Day 5 — Dictionaries
> **Date:** April 15, 2026
> **Student:** Abinas | Full Stack JS Developer → Python/AI/ML

---

## 🎯 What You Learned Today

---

### 1. Why Dictionaries Exist

Lists use indexes — hard to remember what each position means.
Dictionaries use **labels (keys)** — self-describing data.

```python
# List — confusing
student = ["Abinas", 25, "Bhubaneswar"]  # which index is what?

# Dictionary — clear
student = {
    "name": "Abinas",
    "age": 25,
    "city": "Bhubaneswar"
}
```

---

### 2. Reading & Writing Data

```python
# Read
student["name"]           # Abinas

# Add
student["course"] = "Python"

# Update
student["age"] = 26

# Delete
del student["city"]
```

---

### 3. Safe Reading with `.get()`

```python
student.get("phone")           # None — no crash
student.get("phone", "N/A")    # N/A — with default
```

| Situation | Use |
|---|---|
| Key definitely exists | `dict["key"]` |
| Key might not exist | `dict.get("key")` |
| Key might not exist + need default | `dict.get("key", default)` |

---

### 4. Looping Through Dictionaries

```python
# Keys only
for key in student.keys(): ...

# Values only
for value in student.values(): ...

# Both
for key, value in student.items(): ...
```

---

### 5. Nested Dictionaries

```python
student = {
    "name": "Abinas",
    "marks": {
        "python": 90,
        "javascript": 95
    }
}

# Read nested
student["marks"]["python"]      # 90

# Update nested
student["marks"]["python"] = 95

# Add to nested
student["marks"]["sql"] = 88
```

---

## 🔍 Hidden Concepts

### H1 — Dictionaries Are Ordered (Python 3.7+)
Insertion order is preserved. The "unordered" thing is outdated.

### H2 — Keys Must Be Hashable
Only immutable types can be keys: `str`, `int`, `tuple` ✅
Lists and dicts ❌ — they're mutable, hash would change.

### H3 — Dictionary is a Hash Table in Memory
```
key → hash() → bucket index → value
```
This is why lookup is **O(1)** — no looping, direct jump.

### H4 — `in` Checks Keys, Not Values
```python
"name" in student           # True  ✅ (key)
"Abinas" in student         # False ❌ (value, not key)
"Abinas" in student.values() # True ✅
```

### H5 — Dictionary Unpacking with `**`
```python
a = {"name": "Abinas"}
b = {"age": 25}

merged = {**a, **b}
# {"name": "Abinas", "age": 25}
```
JS equivalent: `{ ...a, ...b }`

---

## 🌉 JS → Python Bridge

| JavaScript | Python |
|---|---|
| `obj.name` | `dict["name"]` |
| `obj?.phone` | `dict.get("phone")` |
| `obj.phone ?? "N/A"` | `dict.get("phone", "N/A")` |
| `delete obj.city` | `del dict["city"]` |
| `Object.keys(obj)` | `dict.keys()` |
| `Object.values(obj)` | `dict.values()` |
| `Object.entries(obj)` | `dict.items()` |
| `{ ...a, ...b }` | `{**a, **b}` |

---

## 🛠️ Hands-On Task — Student Record System

```python
student_dict = {
    "name": "Abinas",
    "age": 33,
    "city": "Bhubaneswar",
    "marks": {"python": 50, "javascript": 60, "math": 70},
}

print(f"Name:  {student_dict['name']}")
print(f"City:  {student_dict['city']}")
print(f"Phone: {student_dict.get('phone', 'N/A')}")

student_dict["marks"]["sql"] = 80

print("Marks:")
for key, value in student_dict["marks"].items():
    print(f"  {key} -> {value}")

extra = {"email": "abinas@gmail.com", "batch": "2025"}
full_profile = {**student_dict, **extra}
print(f"Full Profile: {full_profile}")
```

---

## ⚠️ Mistakes to Remember

| Mistake | Fix |
|---|---|
| `dict["missing_key"]` crashes | Use `dict.get("key")` |
| `**` unpacking inside f-string | Build merged dict first, then print |
| Looping `dict.items()` when you want nested | Use `dict["nested"].items()` |
| Using a list as a dict key | Use tuple instead — lists are unhashable |

---

## 📅 Up Next — Day 6

**Conditionals & Loops**
- `if`, `elif`, `else`
- `for` loop (different from JS!)
- `while` loop
- `break`, `continue`, `pass`
- `range()` function
- **Project:** Number guessing game