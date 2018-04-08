'''
Write a function that takes a character (i.e. a string of length 1) and returns True if it is a vowel, False otherwise.
'''


#helper function
def vowel(ch):
    if (ch=='a' or ch=='e' or ch=='i' or ch=='o' or ch=='u'):
        return 'true'
    else:
        return 'false'



#main function
if __name__ == '__main__':
    ch = raw_input("Enter a character ")

    result = vowel(ch)

    if(result=='true'):
        print("Vowel")
    else:
        print("Not vowel")
