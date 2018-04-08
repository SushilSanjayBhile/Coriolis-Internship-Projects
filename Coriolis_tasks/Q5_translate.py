'''
Write a function translate() that will translate a text into "rovarspraket" (Swedish for "robber's language"). That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
'''


#helper function
def translate(string):
    ch = ''
    newstr=''

    for ch in string:
        if (ch=='a' or ch=='e' or ch=='i' or ch=='o' or ch=='u'):
            newstr = newstr+ch

        elif ch==' ':
            newstr = newstr+' '

        else:
            newstr = newstr+ch+'o'+ch

    return newstr


#main function
if __name__ == "__main__":

    oldstr = raw_input("Enter a string ")
    newstr = translate(oldstr)

    print(newstr)
