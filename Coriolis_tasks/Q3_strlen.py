'''
Define a function that computes the length of a given list or string. (It is true that Python has the len() function built in, but writing it yourself is nevertheless a good exercise.)
'''


#helper function
def length(string):
    count = 0

    for ch in string:
        count = count + 1

    return count


#main function
if __name__ == '__main__':
    string = raw_input("Enter a string ")

    size=length(string)

    print("Length of "+string+" is "+ str(size)) #cannot concat int with string so convert int into string
