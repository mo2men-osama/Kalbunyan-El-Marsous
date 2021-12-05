# Sets in Python
# It is named frozenset because the set is finite(limited), so we can't add anyting in the set

primaryColors = frozenset(["red", "blue", "yellow"])

color = "green"

if color.lower() in primaryColors:
    print(color + " is a primary color")
else:
    print(color + " is not a primary color")

letters = set(['a', 'b'])
letters.add('c')
print(letters)
