# from math import pi, sqrt
# import utils

# print(pi)
# print(sqrt(16))
# utils.greet("Abinas")

import string
import random


def generate_password(length):
    k = int(length / 3)
    ascii_char = random.choices(string.ascii_letters, k=k)
    digits = random.choices(string.digits, k=k)
    punctuations = random.choices(string.punctuation, k=k)
    combined = [*ascii_char, *digits, *punctuations]
    random.shuffle(combined)
    return "".join(combined)


print(generate_password(12))


def generate_password_opt(length):
    pool = string.ascii_letters + string.digits + string.punctuation
    password = random.choices(pool, k=length)
    random.shuffle(password)
    return "".join(password)


print(generate_password_opt(13))
