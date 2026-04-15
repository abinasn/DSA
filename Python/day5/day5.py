# student = {"name": "Abinas", "age": 25}

# print(student["name"])
# print(student.get("name1", "Not Found"))

# for key in student.keys():
#     print(key)

# for key, value in student.items():
#     print(key, "->", value)

# for value in student.values():
#     print(value)


# # Dictionary ordered since python 3.7+

# a = {}
# a["name"] = "Abinas"
# a["age"] = 25
# a["city"] = "Bhubaneswar"

# print(a)

# # ✅ Valid keys
# d = {
#     "name": "Abinas",  # string ✅
#     42: "answer",  # int ✅
#     (1, 2): "tuple",  # tuple ✅
# }

# # ❌ Invalid key
# d = {[1, 2]: "list"}  # 💥 TypeError — lists are mutable, can't be hashed

# a = {"name": "Abinas"}
# b = {"age": 25, "city": "Bhubaneswar"}

# merged = {**a, **b}  # merge two dictionaries same as ... in JS
# print(merged)
# # {"name": "Abinas", "age": 25, "city": "Bhubaneswar"}

# print("\t\t")

"""
1. Create a dictionary for a student with:
   - name, age, city
   - marks (nested dict) → python, javascript, math

2. Print the student's name and city

3. Safely get a key that doesn't exist (use .get())

4. Add a new subject to marks

5. Loop through marks using .items() and print each subject + score

6. Merge the student dict with an extra info dict using **
   extra = {"email": "abinas@gmail.com", "batch": "2025"}
"""

student_dict = {
    "name": "Abinas",
    "age": 33,
    "city": "Bhubaneswar",
    "marks": {"python": 50, "javascript": 60, "math": 70},
}

print(f"Name:   {student_dict['name']}")
print(f"City:   {student_dict['city']}")
print(f"Phone:  {student_dict.get('phone', 'N/A')}")

student_dict["marks"]["sql"] = 80

print("Marks:   ")
for key, value in student_dict["marks"].items():
    print(key, "->", value)

extra = {"email": "abinas@gmail.com", "batch": "2025"}
full_profile = {**student_dict, **extra}
print(f"Full Profile:   {full_profile}")
