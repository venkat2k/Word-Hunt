f = open("words.txt", "r")
w = open("words1.txt", "w")

text = f.read().split()

words = []
for x in text:
    if len(set(x)) == 4:
        w.write(x + " ")

f.close()
w.close()