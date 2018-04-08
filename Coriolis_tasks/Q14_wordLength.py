'''
Write a program that maps a list of words into a list of integers representing the lengths of the correponding words.
'''


'''
#imported one of my programs
import Q3_strlen

#my own program logic
def count(list):
    list1=[]

    for ele in list:
        list1.append(Q3_strlen.length(ele))

    return list1
'''


#func def using built-in functionalities
def count(list):
    list1 = []
    list2 = []
    for ele in list:
        list1.append(len(ele))

    list2 = (map(lambda x:len(x),list))

    return list1,list2

#main function
if __name__ == "__main__":
    #list = [word for word in raw_input("Enter some words: ").split()]
    print("\nFor your input remove comment on line 34\n")
    list = ['arati', 'sushil','bharati','sanjay']
    list1,list2 = count(list)

    print(list)
    print(list1)
    print(list2)
