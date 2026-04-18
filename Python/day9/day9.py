f = open("file.txt", "r")
content = f.read()
print(content)
f.close()

print("\t\t")
with open("file.txt", "r") as f:
    print(f)
    content = f.read()
    print("Content", content)

with open("file.txt", "r") as f:
    lines = f.readlines()
    print("Lines", lines)

with open("file.txt", "r") as f:
    for line in f:
        print("Single line", line)


print("\t\t")

with open("file.txt", "w") as f:
    f.write("Hello Abinas\n")
    f.write("Day 9 is going well\n")

with open("file.txt", "a") as f:
    f.write("This line is added at the end\n")


with open("file.txt", "r+") as f:
    content = f.read()  # read first
    f.write("new line\n")  # then write at the end


with open("file.txt", "r+") as f:
    print(f.read())  # cursor moves to end
    f.write("new")  # writes at end — cursor is already there


with open("file.txt", "r+") as f:
    f.seek(0)  # move cursor back to start
    f.write("First line\n")
    print(f.read())  # reads from beginning again

try:
    f = open("missing.txt", "r")
except FileNotFoundError:
    print("File not found!")
finally:
    print("always runs")
