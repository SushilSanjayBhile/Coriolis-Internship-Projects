'''
Write a version of a palindrome recognizer that also accepts phrase palindromes such as "Go hang a salami I'm a lasagna hog.", "Was it a rat I saw?", "Step on no pets", "Sit on a potato pan, Otis", "Lisa Bonet ate no basil", "Satan, oscillate my metallic sonatas", "I roamed under it as a tired nude Maori", "Rise to vote sir", or the exclamation "Dammit, I'm mad!". Note that punctuation, capitalization, and spacing are usually ignored.
'''


'''
import Q8_palindrome

#imported my own program logic
def ipal(string):
    flag = 0

    list1 = filter(str.isalpha,string)
    list1 = list1.lower()

    print(string,"\t\t",Q8_palindrome.palindrome(list1))
'''

#helper function
def ipal(string):
    original = string

    string = filter(str.isalpha,string)
    string = string.lower()

    if string == string[::-1]:
        print(original+"\t\t\ttrue")
    else:
        print(original+"\t\t\tfalse")




#main function
if __name__ == "__main__":
    res = 0

#valid strings
    string1 = "\nLisa!1 Bonet ate no basil "
    string2 = "Go hang a salami I'm a lasagna hog."
    string3 = "Was it a rat I saw?"
    string4 = "Step on no pets"
    string5 = "Sit on a potato pan, Otis"
    string6 = "Satan, oscillate my metallic sonatas"
    string7 = "I roamed under it as a tired nude Maori"
    string8 = "Rise to vote sir"
    string9 = "Dammit, I'm mad!"

#invalid strings
    string10 = "sushil sanjay bhile"
    string11 = "arati bhagwan jadhav"

    res = ipal(string1)
    res = ipal(string2)
    res = ipal(string3)
    res = ipal(string4)
    res = ipal(string5)
    res = ipal(string6)
    res = ipal(string7)
    res = ipal(string9)
    res = ipal(string10)
    res = ipal(string11)
