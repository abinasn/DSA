# 🐍 Day 4 Recap — Lists, Tuples, Sets

---

## 🎯 What You Learned Today

---

## 📦 Lists

- A list stores **references (pointers)** to objects — not the values directly
- Lists are **mutable** — you can change, add, remove items anytime
- Syntax: `fruits = ["apple", "banana", "mango"]`

### Accessing
```python
fruits[0]     # first item
fruits[-1]    # last item
fruits[0:2]   # slicing — same rules as strings
len(fruits)   # length
```

### Modifying
```python
fruits[1] = "grape"       # replace — swaps the pointer at that slot
fruits.append("orange")   # add to end — O(1) fast
fruits.insert(1, "kiwi")  # add at index — O(n) slow (shifts items)
fruits.remove("apple")    # removes FIRST match only
fruits.pop()              # removes last AND returns it
fruits.pop(1)             # removes at index AND returns it
```

### Other Methods
```python
fruits.sort()             # sorts in place
sorted(fruits)            # returns NEW sorted list, original unchanged
fruits.reverse()          # reverses in place
fruits.index("grape")     # returns index of first match
fruits.count("apple")     # counts occurrences
fruits.copy()             # shallow copy
fruits.clear()            # removes all items
fruits.extend(other)      # adds all items from other list (faster than +)
```

### Looping
```python
# Just values
for f in fruits:
    print(f)

# Values + index
for i, f in enumerate(fruits):
    print(i, f)
```

### Hidden Concepts
- **Memory:** List stores pointers → replacing an item swaps the pointer, old value stays until garbage collected
- **`.append()` is O(1), `.insert()` is O(n)** — insert shifts all items after the index
- **`.remove()` removes first match only** — second duplicate stays
- **`.pop()` returns the removed item** — useful when you need to use it
- **`in` on a list is O(n)** — checks every item one by one
- **Dynamic array:** Python over-allocates memory in chunks (4→8→16) so `.append()` doesn't resize every time
- **Shallow copy:** `.copy()` copies outer list but inner objects are still shared. Use `copy.deepcopy()` for full clone
- **`+` vs `.extend()`:** `+` creates a new list, `.extend()` modifies in place — faster, less memory

---

## 📦 Tuples

- Tuples are **immutable** — slots are locked, can't be reassigned
- Faster than lists — Python optimizes them at compile time
- Syntax: `coordinates = (20.5937, 78.9629)`

```python
single = (42,)      # comma makes it a tuple — NOT (42)
(42)                # this is just an int!
```

### Accessing
```python
coordinates[0]      # same as list
coordinates[-1]     # negative index works
coordinates[0:2]    # slicing works
```

### Tuple Unpacking
```python
lat, lng = (20.5937, 78.9629)   # unpack into variables

# Swap variables — Pythonic way
a, b = b, a    # Python creates tuple (b, a) and unpacks it
```

### Hidden Concepts
- **The comma makes the tuple, not the parentheses** — `(42,)` is tuple, `(42)` is int
- **Slots are frozen, not values** — you can't reassign a slot, but if slot points to a mutable object (like a list), that object can still be modified internally
- **Primitives inside tuple** — can't be changed at all (immutable by nature + slot locked)
- **Mutable objects inside tuple** — slot is locked but you can modify inside the object
- **Tuples are faster** — Python optimizes at compile time since it knows they won't change
- **`enumerate()` returns tuples** — `(0, "apple")` which `for i, f` unpacks automatically

---

## 📦 Sets

- Sets store **unique values only** — duplicates removed automatically
- Sets are **unordered** — no index, no slicing
- Uses a **hash table** — `in` check is O(1) instant
- Syntax: `fruits = {"apple", "banana", "mango"}`

```python
empty_set = set()    # NOT {} — that creates a dict!
```

### Operations
```python
fruits.add("grape")       # add one item
fruits.remove("apple")    # remove — ERROR if not found
fruits.discard("apple")   # remove — NO error if not found ✅ safer
```

### Set Math
```python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

a | b   # union        → {1, 2, 3, 4, 5, 6}
a & b   # intersection → {3, 4}
a - b   # difference   → {1, 2}
a ^ b   # symmetric    → {1, 2, 5, 6}
```

### Hidden Concepts
- **`{}` is a dict** — always use `set()` for empty set
- **Hash table:** Python hashes each value → jumps directly to memory position → O(1) lookup
- **List `in` = O(n), Set `in` = O(1)** — sets win on large data
- **Use `discard` over `remove`** in production — safer, no error if item missing
- **Set operations come from math Set Theory** — same logic used in DB joins and ML

---

## 📊 Quick Comparison

```
Feature         List          Tuple         Set
────────────────────────────────────────────────
Syntax          [1, 2, 3]     (1, 2, 3)     {1, 2, 3}
Ordered         ✅            ✅            ❌
Indexed         ✅            ✅            ❌
Mutable         ✅            ❌            ✅
Duplicates      ✅            ✅            ❌
`in` speed      O(n) 🐢       O(n) 🐢       O(1) ⚡
Use case        General data  Fixed data    Unique + fast lookup
```

---

## 🔄 JS → Python Bridge

```
JS Array               →  Python List
JS Object.freeze([])   →  Python Tuple
JS Set                 →  Python Set
arr.push()             →  list.append()
arr.splice(i,1)        →  list.pop(i)
arr.includes()         →  in operator
arr.forEach((v,i))     →  enumerate()
```

---

## 🔄 Converting Between Types

```python
my_list  = [1, 2, 2, 3]
my_tuple = tuple(my_list)   # (1, 2, 2, 3)
my_set   = set(my_list)     # {1, 2, 3} — duplicates gone
back     = list(my_set)     # [1, 2, 3]
```

---

## 🛠️ Hands-on Task — To-Do List App

Built a terminal to-do app using:
- `list` → stores tasks in order
- `set` → fast duplicate checking
- `enumerate()` → display index + task
- `while True` + `break` → keeps app running until quit

### Key lessons from the task:
- `f"{i}. {t}"` not `f"{i}. t"` — variables need `{}`
- `task_set.add(item)` not `task_set = set(tasks)` — add directly, don't rebuild
- `discard()` over `remove()` for safe removal
- `while True` + `break` for persistent menu loops
- Data lives in memory → lost on exit → Day 9 (File Handling) will fix this

---

## 👀 Coming Next — Day 5: Dictionaries

Python's version of JS Objects.
Key-value pairs, nested dicts, and hidden concepts around how dicts work in memory.