'''
A pangram is a sentence that contains all the letters of the English alphabet at least once, for example: The quick brown fox jumps over the lazy dog. Your task here is to write a function to check a sentence to see if it is a pangram or not.
'''


#helper function
def pangram1(string):
    charset = 'abcdefghijklmnopqrstuvwxyz'

    for char in charset:
        if char not in string:
            return 'not pangram'

    return 'pangram'



#helper function2
def pangram2(string):
    dict = {}

    for i in string:
        dict[i] = 1

    if len(dict) >= 26:
        print("pangram")



#main function
if __name__ == "__main__":
    string = raw_input("Enter a sentence: ")

    print(pangram1(string))
    pangram2(string)
