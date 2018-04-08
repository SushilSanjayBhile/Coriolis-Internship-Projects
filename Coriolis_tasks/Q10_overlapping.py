'''
Define a function overlapping() that takes two lists and returns True if they have at least one member in common, False otherwise. You may use your is_member() function, or the in operator, but for the sake of the exercise, you should (also) write it using two nested for-loops.
'''

#helper function
def overlapping(list1, list2):
    flag =0

    for ele1 in list1:
        for ele2 in list2:
            if ele1 == ele2:
                flag = 1
                break

    if flag == 0:
        return 'false'
    else:
        return 'true'



#main function
if __name__ == '__main__':
    list1 = [ele for ele in raw_input("Enter first list saporated with spaces and press enter: ").split()]
    list2 = [ele for ele in raw_input("Enter Second list saporated with spaces and press enter: ").split()]

    res = overlapping(list1,list2)

    print(res)
