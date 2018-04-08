'''
Define a function is_palindrome() that recognizes palindromes (i.e. words that look the same written backwards). For example, is_palindrome("radar") should return True.
'''


#helper function
def palindrome(string):
    flag = 0

    for count in range(len(string)):
        if count == ((len(string)/2)-1):
            if string[count] != string[len(string)-count-1]:
                flag = 1
                break

    if flag == 1:
        return 'false'
    else:
        return 'true'



#main function
if __name__ == "__main__":
    res = 0

    string = raw_input("Enter a string: ")

    res = palindrome(string)

    if(res == 'true'):
        print("true")
    else:
        print("False")
