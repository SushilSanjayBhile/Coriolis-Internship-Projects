import re
import string


list1 = list(string.ascii_lowercase)
list2 = ['a','e','i','o','u']

list1 = set(list1) - set(list2)


#function for verb changing
def suffix(verb):
    newstr = ''

    if verb.endswith('ie'):
        newstr = verb[:-2] + 'ying'


    elif verb.endswith('e'):
        if (verb == 'be' or verb == 'see' or verb == 'flee' or verb == 'knee'):
            newstr = verb
        else:
            newstr = verb[:-1] + 'ing'


    elif ((verb[-3] in list1) and (verb[-1] in list1) and (verb[-2] in list2)):
        newstr = verb + verb[-1] + 'ing'


    else:
        newstr = verb + 'ing'

    print verb,"\t",newstr




#main function
if __name__ == "__main__":
    suffix('lie')
    print("\n")

    suffix('bee')
    print("\n")

    suffix('see')
    suffix('be')
    suffix('knee')
    print("\n")

    suffix('se')
    print("\n")

    suffix('fix')
