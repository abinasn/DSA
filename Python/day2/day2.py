name = "Abinas"
print(id(name))
name = "Python"
print(id(name))
print("\t")

"""
Step 1: "Abinas" exists at memory address 0x1A2B
Step 2: "Python" gets created at NEW address 0x3C4D
Step 3: name label moves to point at 0x3C4D
Step 4: "Abinas" has no label pointing to it anymore
Step 5: Python's Garbage Collector deletes "Abinas" from RAM
"""

a = "Abinas"
b = a
print(id(a))
print(id(b))
print("\t")

x, y, z = 1, 2, 3
print(x)  # 1
print(y)  # 2
print(z)  # 3
print("\t")

a, b = 10, 20
a, b = b, a
print(a)
print(b)
print("\t")

age: int = 20

print(type(25))  # <class 'int'>
print(type(3.14))  # <class 'float'>
print(type("Abinas"))  # <class 'str'>
print(type(True))  # <class 'bool'>
print(type(None))  # <class 'NoneType'>

print(isinstance(True, int))

z = 3 + 4j
print(type(z))
print(z.real)
print(z.imag)

x = 999999999999999999999999999999999999999999
print(x + 1)


print(int("10100011", 2))
