'''
Write a function char_freq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Python dictionary. Try it with something like char_freq("abbabcbdbabdbdbabababcbcbab").
'''



#function to calculate frequency
def char_freq(string):
    dict = {}

    for char in string:
        if char.isalpha():              #used try and except for key of dictionary
            char = char.lower()

            try:
                dict[char] = dict[char] + 1
            except KeyError:
                dict[char] = 1

    return dict




#main function
if __name__ == "__main__":
    string = 'abbabcbdbabdbdbabababcbcbab'
    print("\n" + string)
    dict = char_freq(string)
    print(dict)

    string = 'sushil sanjay bhile'
    print("\n" + string)
    dict = char_freq(string)
    print(dict)
