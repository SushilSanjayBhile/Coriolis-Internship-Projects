'''
Write a program that maps a list of words into a list of integers representing the lengths of the correponding words. Write it in three different ways: 1) using a for-loop, 2) using the higher order function map(), and 3) using list comprehensions.
'''



#import strlen_3


#convert function definition using for loop
def forConvert(list):
    print("\nUsing for loops: ")
    list1 = []

    for ele in list:
        #list1.append(Q3_strlen.length(ele))
        list1.append(len(ele))

    print list1



#convert function definition using map()
def mapConvert(list):
    print("\nUsing map(): ")
    #print(map(strlen_3.length('sushil'),list))
    print(map(lambda x:len(x),list))



def listComprehension(list):
    print("\nUsing list comprehension: ")
    #list1 = [Q3_strlen.length(x) for x in list]
    list1 = [len(x) for x in list]
    print list1



#main dunction definition
if __name__ == "__main__":
    list = ['sushil', 'arati', 'sanjay', 'bharati', 'bhile']

    forConvert(list)
    mapConvert(list)
    listComprehension(list)
