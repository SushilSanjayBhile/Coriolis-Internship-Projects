'''
Using the higher order function reduce(), write a function max_in_list() that takes a list of numbers and returns the largest one. Then ask yourself: why define and call a new function, when I can just as well call the reduce() function directly?
'''


#import Q2_max2

#reduce function
def myReduce(list):
    print(list, reduce(lambda x,y : Q2_max2.max2(x,y), list))


#using pure lambda function
def myReduce1(list):
    print(list,reduce(lambda x,y:x if x>y else y,list))

#main function
if __name__ == "__main__":
    #myReduce([1,2,3,4,5,62,7])
    myReduce1([1,2,3,4,5,62,72])
