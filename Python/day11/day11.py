import time

numbers = [1, 2, 3, 4, 5]
squared = []
cube = [n**3 for n in numbers]

for n in numbers:
    squared.append(n**2)

print(squared)
print(cube)


names = ["Abinas", "Rahul", "Sara"]
lengths = {}
len_dict = {name: len(name) for name in names}

for name in names:
    lengths[name] = len(name)

print(lengths)  # {'Abinas': 6, 'Rahul': 5, 'Sara': 4}
print(len_dict)


def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        func(*args, **kwargs)
        end = time.time()
        print(f"⏱️ Took {end - start:.4f} seconds")

    return wrapper


@timer
def slow_task():
    time.sleep(1)
    print("Task done!")


slow_task()
