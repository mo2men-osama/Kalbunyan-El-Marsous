#converting a mile value into kilometer

miles = input('Enter a distance in miles: ')
# kilometers_value = miles_value * 1.609344

miles_float = float(miles)
kilometers = miles_float * 1.609344

print('Value in kilometers = ')
print(kilometers)