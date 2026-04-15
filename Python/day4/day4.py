fruits = ["apple", "orange"]
numbers = [1, 2, 3]
mixed = [1, None, "Apple"]
empty = []

# Slicing list[start:stop:step]

print(mixed[::-1])
print("apple" in fruits)
for f in fruits:
    print(f)

for i, f in enumerate(fruits):
    print(i, f)

print("\t\t")

## Tuple
color = (255, 0, 0, 123)
single = (42,)
not_tuple = 42  # <class 'int'>

print(type(not_tuple))
print(type(single))
print(type(color))
print(color[3])

coordinates = (20.5937, 78.9629)
lat, lng = coordinates  # unpacks into two variables
print(lat)  # 20.5937
print(lng)  # 78.9629
print("\t\t\t")

"""
to-do list app

1. Store tasks in a LIST
2. No duplicate tasks allowed — use a SET to check
3. Display task number and task name — use enumerate()
4. Support these actions:
   - add a task
   - remove a task
   - view all tasks
   - quit
"""

tasks = []
task_set = set()

while True:
    print("""
1. Add Task
2. Remove Task
3. View Tasks
4. Quit
""")
    choose = input("Enter your choice: ")

    if choose == "1":
        task_name = input("Enter task: ")
        if task_name in task_set:
            print("❌ Task already exists!")
        else:
            tasks.append(task_name)
            task_set.add(task_name)
            print("✅ Task added!")
    elif choose == "2":
        remove_task = input("Enter task to remove: ")
        if remove_task in task_set:
            tasks.remove(remove_task)
            task_set.discard(remove_task)
            print("✅ Task removed!")
        else:
            print("❌ Task not found!")
    elif choose == "3":
        if len(tasks) == 0:
            print("No tasks yet!")
        else:
            for i, t in enumerate(tasks):
                print(f"{i}. {t}")
    elif choose == "4":
        print("Goodbye! 👋")
        break  # ← exits the while loop
    else:
        print("Unknown choice")
