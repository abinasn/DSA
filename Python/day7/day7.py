def add(a, b):
    return a + b


result = add(2, 3)
print(result)


def min_max(numbers):
    return min(numbers), max(numbers)


low, high = min_max([3, 1, 7, 2])
print(low)  # 1
print(high)  # 7


def greet(name, age):
    print(f"{name} is {age}")


greet(age=25, name="Abinas")  # ✅ Order doesn't matter!
greet("Abinas", 25)  # Order matters


def add(*numbers):
    total = 0
    for n in numbers:
        total += n
    return total


print(add(1, 2, 3))  # 6
print(add(1, 2, 3, 4, 5))  # 15


def display(**info):
    for key, value in info.items():
        print(f"{key}:  {value}")


display(name="Abinas", age=25, city="Bhubaneswar")


def mixed(name, *args, **kwargs):
    print(name)  # "Abinas"
    print(args)  # (1, 2, 3)
    print(kwargs)  # {'city': 'Bhubaneswar'}


mixed("Abinas", 1, 2, 3, city="Bhubaneswar")

# lambda
add = lambda a, b: a + b
print(add(10, 20))
print("\t\t")

# -----------------
count = 0


def increment():
    global count
    count += 1


increment()
print(count)

# -----------------
x = "global"


def outer():
    x = "enclosing"

    def inner():
        x = "local"
        print(x)  # local ← found at L, stops here

    inner()
    print(x)


outer()


# -----------------
def outer():
    count = 0

    def inner():
        nonlocal count
        count += 1  # ✅ modifies outer's count

    inner()
    inner()
    print(count)  # 2


outer()
