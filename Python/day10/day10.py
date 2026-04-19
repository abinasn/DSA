# class Player:
#     def __init__(self, name, health):
#         self.name = name
#         self.health = health

#     def showData(ok):
#         print(f"{ok.name} has the health value {ok.health}")


# player = Player("Abinas", 100)
# player.showData()
# print("\t\t\t")


# class Student:
#     school = "Python school"

#     def __init__(random_name, name):
#         random_name.name = name


# s1 = Student("Abinas")
# s2 = Student("Shubham")
# print(s1.name)
# print(s1.school)
# s1.school = "Javascript School"
# print(s1.school, s2.school)


# class Player:
#     count = 0  # class variable

#     def __init__(self, name):
#         self.name = name
#         Player.count += 1

#     # 1. Instance method — works on one object
#     def greet(self):
#         print(f"Hi I am {self.name}")

#     # 2. Class method — works on the class itself
#     @classmethod
#     def total_players(cls):
#         print(f"Total players: {cls.count}")

#     # 3. Static method — doesn't need object or class
#     @staticmethod
#     def game_rules():
#         print("Don't cheat!")


# p1 = Player("Abinas")
# p2 = Player("Rahul")

# p1.greet()  # Hi I am Abinas
# Player.total_players()  # Total players: 2
# Player.game_rules()  # Don't cheat!


# class Animal:
#     def __init__(self, name):
#         self.name = name

#     def eat(self):
#         print(f"{self.name} is eating.")


# class Dog(Animal):
#     def bark(self):
#         print(f"{self.name} is barking")


# class Cat(Animal):
#     def meow(self):
#         print(f"{self.name} says Meow!")


# d = Dog("Bruno")
# d.eat()
# d.bark()

# c = Cat("Misty")
# c.eat()
# c.meow()


# d = Dog("Bruno")

# print(isinstance(d, Dog))  # True
# print(isinstance(d, Animal))  # True ← Dog IS an Animal too!
# print(isinstance(d, Cat))  # False


# class Player:
#     def __init__(self, name, health):
#         self.name = name
#         self.health = health

#     def __str__(self):
#         return f"Player: {self.name}, Health: {self.health}"


# p1 = Player("Abinas", 100)
# print(p1)  # Player: Abinas, Health: 100  ✅
# print(str(p1))  # Player: Abinas, Health: 100  ✅


# class Player:
#     def __init__(self, name, health):
#         self.name = name
#         self.health = health

#     def __repr__(self):
#         return f"Player(name={self.name!r}, health={self.health!r})"


# p1 = Player("Abinas", 100)
# print(repr(p1))  # Player(name='Abinas', health=100)


# class Player:
#     def __init__(self, name, health):
#         self.name = name
#         self.health = health

#     def __str__(self):
#         return f"Player: {self.name}"  # friendly, for users

#     def __repr__(self):
#         return f"Player('{self.name}', {self.health})"  # detailed, for devs


# p1 = Player("Abinas", 100)
# print(p1)  # Player: Abinas         ← __str__ runs
# print(repr(p1))  # Player('Abinas', 100)  ← __repr__ runs


class Account:
    def __init__(self, bal, name):
        self.balance = bal
        self.name = name
        self.transactions = []  # ✅ fixed here

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
                print(f"  Withdrawn: {abs(t)}")  # ✅ abs() removes the minus sign

    def __str__(self):
        return f"Account[{self.name}] | Balance: {self.balance}"


acc = Account(1000, "Abinas")
acc.deposit(600)
acc.withdraw(200)
acc.withdraw(20000)
acc.show_balance()
acc.show_transactions()
print(acc)
