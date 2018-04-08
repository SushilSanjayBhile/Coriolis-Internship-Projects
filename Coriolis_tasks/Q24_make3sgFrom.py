'''
In English, the present participle is formed by adding the suffix -ing to the infinite form: go -> going. A simple set of heuristic rules can be given as follows:

    If the verb ends in e, drop the e and add ing (if not exception: be, see, flee, knee, etc.)
    If the verb ends in ie, change ie to y and add ing
    For words consisting of consonant-vowel-consonant, double the final letter before adding ing
    By default just add ing
    Your task in this exercise is to define a function make_ing_form() which given a verb in infinitive form returns its present participle form. Test your function with words such as lie, see, move and hug. However, you must not expect such simple rules to work for all cases.
'''


import sys


#my own implementation of endswith()
def make_3sg_form(verb):
    sys.stdout.write(verb + ':  ')

    if verb[len(verb)-1] == 'y':
        newstr = verb[:-1] + 'ies'

    elif (verb[len(verb)-1] == 'o' or verb[len(verb)-2:] == 'ch' or verb[len(verb)-1] == 's' or verb[len(verb)-2:] == 'sh' or verb[len(verb)-1] == 'x' or verb[len(verb)-1] == 'z'):
        newstr = verb + 'es'

    else:
        newstr = verb + 's'

    sys.stdout.write(newstr + '\n')


#with provided function endswith()
def make_3sg_form_1(verb):
    sys.stdout.write(verb + ':  ')

    newstr = ''

    if verb.endswith('y'):
        newstr = verb[:len(verb)-1] + 'ies'

    elif(verb.endswith('o') or verb.endswith('ch') or verb.endswith('s') or verb.endswith('sh') or verb.endswith('x') or verb.endswith('z')):
        newstr = verb + 'es'

    else:
        newstr = verb + 's'

    print newstr




#main function
if __name__ == "__main__":
    print("OUTPUT WITH MY FUNCTION: \n")
    make_3sg_form_1("try")
    make_3sg_form_1("brusho")
    make_3sg_form_1("brush")
    make_3sg_form_1("brus")
    make_3sg_form_1("bruch")
    make_3sg_form_1("brux")
    make_3sg_form_1("brusz")
    make_3sg_form_1("run")


    print("\n\nOUTPUT WITH 'ENDSWITH()': \n")
    make_3sg_form("try")
    make_3sg_form("brusho")
    make_3sg_form("brush")
    make_3sg_form("brus")
    make_3sg_form("bruch")
    make_3sg_form("brux")
    make_3sg_form("brusz")
    make_3sg_form("run")
