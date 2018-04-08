'''
A hapax legomenon (often abbreviated to hapax) is a word which occurs only once in either the written record of a language, the works of an author, or in a single text. Define a function that given the file name of a text will return all its hapaxes. Make sure your program ignores capitalization.
'''


import sys

#helper function to find hapax in a file
def find_hapax(fileName):
    print("\n")

    fp = open(fileName, "r")
    dict = {}

    for line in fp:
        word1 = line.split()

        for word in word1:
            try:
                dict[word] = dict[word] + 1
            except:
                dict[word] = 1

    for key in dict:
        if dict[key] == 1:
            sys.stdout.write(key+"\t")

    print("\n")

#main function
if __name__ == "__main__":
    find_hapax('hapax.txt')
