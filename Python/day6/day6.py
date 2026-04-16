# age = int(input("Enter your age: \n"))
# if age >= 18:
#     print("Adult")
# elif age >= 13:
#     print("Teen")
# else:
#     print("Child")

# label = "Adult" if age >= 18 else "Child"
# print(label)


# fruits = ["apple", "orange", "mango", "banana"]
# for i, fruit in enumerate(fruits):
#     print(f"{i + 1} --> {fruit}")

# for i in range(5):
#     print(i)
# print("\t\t")
# for i in range(1, 10, 2):
#     print(i)


# for fruit in fruits:
#     if fruit == "mango1":
#         print("Found mango!")
#         break
# else:
#     print("Mango not found.")


# pairs = [(1, "one"), (2, "two"), (3, "three")]

# for number, word in pairs:
#     print(number, word)


# names = ["Alice", "Bob", "Charlie"]
# scores = [85, 90, 78, 100]

# for name, score in zip(names, scores):
#     print(name, score)


# for _ in range(3):
#     print("Hello")


import random

while True:
    # New game — pick a new number
    number = random.randint(1, 10)

    # Inner loop — keep guessing
    while True:
        guess = int(input("Guess a number between 1 to 10: \n"))

        if guess == number:
            print("Your guess is correct! 🎉")
            break
        elif guess < number:
            print("Too low!")
        else:
            print("Too high!")

    # Ask to play again
    ip = input("Play again? Y or N: \n")
    if ip.lower() == "n":
        print("Thanks for playing! 👋")
        break
