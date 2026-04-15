print(ord("A"))
print(len("🐍"))
print("\t")

# Slicing string[start : stop : step]
name = "Abinas"
print(name[0:3])  # Abi
print(name[2:5])  # ina
print(name[0:])  # Abinas
print(name[:3])  # Abi
print(name[:])  # Abinas
print(name[::])  # Abinas
print(name[::2])  # Aia
print(name[-1::])  # s
print(name[::-1])  # sanibA
print("\t")

print("bin" in name)
print(name.find("bin"))  # 1  ✅ — found at index 1
print(name.find("xyz"))  # -1 ✅ — not found, returns -1 safely
print(name.index("bin"))  # 1  ✅ — found at index 1
# print(name.index("xyz"))  # ❌ ValueError — crashes if not found
print("\t")

a = 10
b = 3

print(f"{a} + {b} = {a + b}")  # 10 + 3 = 13
print(f"Double: {a * 2}")  # Double: 20
print(f"Upper: {name.upper()}")  # Upper: ABINAS


pi = 3.14159265

print(f"{pi:.2f}")  # 3.14   → 2 decimal places
print(f"{pi:.4f}")  # 3.1416 → 4 decimal places

score = 95.5
print(f"{score:>10}")  # right-align in 10 character wide space
print(f"{score:<10}")  # left-align
print(f"{score:^10}")  # center-align
print("\t")

print(name.upper())
print(name.lower())
print(name.capitalize())
print(name.title())


text = "   hello   "

print(text.strip())  # "hello"  → removes both sides
print(text.lstrip())  # "hello   " → left only
print(text.rstrip())  # "   hello" → right only

text = "I love JavaScript"

print(text.replace("JavaScript", "Python"))  # "I love Python"

# Split — string → list
sentence = "Abinas Patra Developer"
words = sentence.split(" ")
print(words)
# ["Abinas", "Patra", "Developer"]

# Join — list → string
print("-".join(words))
# "Abinas-Patra-Developer"

text = "banana"

print(text.count("a"))  # 3 — how many times "a" appears
print(text.replace("a", "o"))  # "bonono" — replaces ALL
print(text.replace("a", "o", 2))  # "bonona" — replaces only first 2
print("\t\t")

a = "Abinas"
b = "Abinas"
print(a is b)

a = "Abinas Patra is a full stack developer learning Python"
b = "Abinas Patra is a full stack developer learning Python"
print(a is b)

text = """
Hello Abinas,
Welcome to Python.
Day 3 is going great!
"""
print(text)

# Raw strings
path = "C:\new\folder"
print(path)  # C:
#  ew
# older   ❌ — \n and \f are escape characters!

path = r"C:\new\folder"
print(path)  # C:\new\folder  ✅


# Build a Name formater

print("\t\t\t")
input_name = input("Enter you full name: ")
print(f"Original: {input_name}")
print(f"Uppercase: {input_name.upper()}")
print(f"Title Case: {input_name.title()}")

split_name = input_name.split(" ")
initials = ".".join([word[0].upper() for word in split_name])

print(f"Initials: {initials}")
print(f"Reversed: {input_name[::-1]}")
print(f"First name: {split_name[0].title()}")
print(f"Last name: {split_name[-1].title()}")
print(f"Length: {len(input_name)}")
