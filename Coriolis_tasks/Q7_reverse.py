'''
Define a function reverse() that computes the reversal of a string. For example, reverse("I am testing") should return the string "gnitset ma I".
'''


#reverse function 1
def reverse(string):
    rever = ''


    for ch in string[::-1]:
        rever = rever + ch

    return rever



#reverse function 2
def reverse2(string):
    rever = ''

    for ch in string:
        rever = ch + rever

    return rever



#main function
if __name__ == '__main__':
    string = raw_input("Enter a string ")

    print(reverse(string))
    print(reverse2(string))
