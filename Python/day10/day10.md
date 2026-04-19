# 🐍 Day 10 — OOP: Classes, Objects, Inheritance
> **Course:** Abinas's 15-Day Python Journey
> **Background:** Full Stack JavaScript Developer
> **Day Completed:** Day 10

---

## 🎯 What We Covered Today

1. What is a class? (blueprint concept)
2. `__init__` — the initializer (half constructor)
3. `__new__` vs `__init__` — the engineering story
4. `self` — why it exists and how it works
5. Instance variables vs class variables
6. Methods — 3 types
7. Inheritance
8. `super()`
9. Magic methods — `__str__`, `__repr__`, dunders

---

## 1️⃣ What is a Class?

A class is a **blueprint**. You define it once, create many objects from it.

```python
class Player:
    def __init__(self, name, health):
        self.name = name
        self.health = health

p1 = Player("Abinas", 100)
p2 = Player("Rahul", 80)
```

### JS Bridge:
| JS | Python |
|----|--------|
| `constructor()` | `__init__()` |
| `this.name` | `self.name` |
| `new Player()` | `Player()` — no `new` keyword |

---

## 2️⃣ `__new__` vs `__init__`

Python splits object creation into two steps:

```
JS constructor():
┌─────────────────────────────────┐
│  1. Create empty object  {}     │
│  2. Fill: this.name = "Abinas"  │
└─────────────────────────────────┘

Python:
┌──────────────────────────────┐
│  __new__()                   │
│  → creates empty object {}   │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│  __init__()                  │
│  → fills: self.name="Abinas" │
└──────────────────────────────┘
```

### Why the split?
- Immutable objects (`tuple`, `str`) can't be changed after creation
- `__new__` must inject data during creation itself
- Normal classes — only `__init__` needed, `__new__` runs silently

### Rule to remember:
```
__init__  =  your constructor (use this always)
__new__   =  runs silently behind the scenes (ignore it)
```

---

## 3️⃣ `self` — Why It Exists

`self` = the object being created right now. Python passes it automatically.

```python
# You write:
p1 = Player("Abinas", 100)

# Python does internally:
Player.__init__(p1, "Abinas", 100)
#               ↑ passed automatically
```

### Hidden Concept:
```python
# self is NOT a keyword — just a convention
def __init__(potato, name):   # works but never do this!
    potato.name = name
```

---

## 4️⃣ Instance Variables vs Class Variables

```python
class Student:
    school = "Python High"        # class variable — shared by ALL

    def __init__(self, name):
        self.name = name          # instance variable — unique to each
```

### Hidden Trap:
```python
s1.school = "New School"   # ⚠️ creates new instance variable on s1 only!
Student.school = "New School"   # ✅ changes for ALL objects
```

---

## 5️⃣ Three Types of Methods

```python
class Player:
    count = 0

    def __init__(self, name):
        self.name = name
        Player.count += 1

    # 1. Instance method — works on one object
    def greet(self):
        print(f"Hi I am {self.name}")

    # 2. Class method — works on the class itself
    @classmethod
    def total_players(cls):
        print(f"Total players: {cls.count}")

    # 3. Static method — helper, needs nothing
    @staticmethod
    def game_rules():
        print("Don't cheat!")
```

### Rule:
```
No decorator    →  instance method  (default)
@classmethod    →  class method
@staticmethod   →  static method
```

---

## 6️⃣ Inheritance

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} is eating 🍖")

class Dog(Animal):        # Dog inherits from Animal
    def bark(self):
        print(f"{self.name} says Woof! 🐶")
```

```
        Animal
        ├── eat()
        │
        ├── Dog
        │   ├── eat()   ← inherited
        │   └── bark()  ← own
```

### JS Bridge:
| JS | Python |
|----|--------|
| `class Dog extends Animal` | `class Dog(Animal)` |

### Hidden Concept — `isinstance()`:
```python
print(isinstance(d, Dog))     # True
print(isinstance(d, Animal))  # True ← Dog IS an Animal too!
```

---

## 7️⃣ `super()`

Runs the parent's method before adding child's own logic.

```python
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)    # ✅ run Animal's __init__ first
        self.breed = breed        # then add Dog's own stuff
```

### Works on any method, not just `__init__`:
```python
class Dog(Animal):
    def speak(self):
        super().speak()        # run parent's speak first
        print("Woof! 🐶")
```

### JS Bridge:
| JS | Python |
|----|--------|
| `super(name)` | `super().__init__(name)` |

---

## 8️⃣ Magic Methods (Dunder Methods)

### `__str__` — for humans:
```python
def __str__(self):
    return f"Player: {self.name}, Health: {self.health}"

print(p1)   # Player: Abinas, Health: 100
```

### `__repr__` — for developers:
```python
def __repr__(self):
    return f"Player(name={self.name!r}, health={self.health!r})"

repr(p1)   # Player(name='Abinas', health=100)
```

### Fallback rule:
```
print(p1) called
    ├── __str__ exists? → use it
    └── No __str__?     → fall back to __repr__
                            └── No __repr__? → memory address 😕
```

### Other dunder methods:
```
__len__   →  len(obj)
__add__   →  obj1 + obj2
__eq__    →  obj1 == obj2
__lt__    →  obj1 < obj2
```

### JS Bridge:
| JS | Python |
|----|--------|
| `toString()` | `__str__()` |
| No equivalent | `__repr__()` |

---

## 🛠️ Hands-on Task — BankAccount Class

```python
class Account:

    def __init__(self, bal, name):
        self.balance = bal
        self.name = name
        self.transactions = []   # ✅ instance variable, not class variable

    def deposit(self, amount):
        self.balance += amount
        self.transactions.append(amount)

    def withdraw(self, amount):
        if self.balance < amount:
            print("Insufficient balance")
            return
        self.balance -= amount
        self.transactions.append(-amount)

    def show_balance(self):
        print(f"Current Balance: {self.balance}")

    def show_transactions(self):
        print("Transaction History:")
        for t in self.transactions:
            if t > 0:
                print(f"  Deposited: {t}")
            else:
                print(f"  Withdrawn: {abs(t)}")

    def __str__(self):
        return f"Account[{self.name}] | Balance: {self.balance}"


acc = Account(1000, "Abinas")
acc.deposit(600)
acc.withdraw(200)
acc.withdraw(20000)
acc.show_balance()
acc.show_transactions()
print(acc)
```

---

## ⚠️ Common Mistakes

1. Using class variable for mutable data like lists — shared across all objects
2. Forgetting `self` as first parameter in methods
3. Not calling `super().__init__()` in child class — parent data never set
4. Confusing `__str__` and `__repr__` — define at least `__repr__` always
5. Thinking `self` is a keyword — it's just a convention

---

## 📊 JS → Python Bridge Table

| JS | Python |
|----|--------|
| `constructor()` | `__init__()` |
| `this` | `self` |
| `new Player()` | `Player()` |
| `extends` | `class Dog(Animal)` |
| `super(name)` | `super().__init__(name)` |
| `toString()` | `__str__()` |
| `static method` | `@staticmethod` |
| No equivalent | `@classmethod` |
| No equivalent | `__repr__()` |

---

## ✅ Day 10 Complete

**Next up — Day 11: Decorators, Generators, Comprehensions**
- List & dictionary comprehensions
- `zip()`, `map()`, `filter()`
- Generators with `yield`
- Decorators — functions that wrap functions