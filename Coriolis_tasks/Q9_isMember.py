'''
Write a function is_member() that takes a value (i.e. a number, string, etc) x and a list of values a, and returns True if x is a member of a, False otherwise. (Note that this is exactly what the in operator does, but for the sake of the exercise you should pretend Python did not have this operator.)
'''

#helper function
def is_member(ip, list):
    flag = 0

    for ele in list:
        if ele == ip:
            flag =1

    if flag == 0:
        return 'false'
    else:
        return 'true'


#main function
if __name__ == "__main__":
    ip = raw_input("Enter an element: ")

    #to accept list from user
    list = [x for x in raw_input("Enter a list in spaces and then press enter: ").split()]

    res = is_member(ip,list)

    if str(res) == 'true':
        print("TRUE")
    else:
        print("FALSE")
