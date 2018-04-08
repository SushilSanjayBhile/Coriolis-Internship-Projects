'''
Write a procedure char_freq_table() that, when run in a terminal, accepts a file name from the user, builds a frequency listing of the characters contained in the file, and prints a sorted and nicely formatted character frequency table to the screen.
'''


import sys
#import Q21_charFreq

#defintion of helper function
def char_freq_table(fileName):
    finalDict = {}
    tempDict = {}

    fp = open(fileName, 'r')

    for line in fp:
        #tempDict = Q21_charFreq.char_freq(line)
        tempDict = cf(line)

        for key in tempDict:

            try:
                finalDict[key] = finalDict[key] + tempDict[key]
            except:
                finalDict[key] = tempDict[key]

    for key,value in sorted(finalDict.iteritems()):
        print(key, value)



#helper function rewritten
def cf(line):
    dict = {}

    for char in line:
        if char.isalpha():              #used try and except for key of dictionary
            char = char.lower()

            try:
                dict[char] = dict[char] + 1
            except KeyError:
                dict[char] = 1

    return dict



#main function definition
if __name__ == "__main__":
    #filename = raw_input("Enter name of file :")
    filename = 'hapax.txt'

    char_freq_table(filename)
