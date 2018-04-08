'''
Implement the higher order functions map(), filter() and reduce(). (They are built-in but writing them yourself may be a good exercise.)
'''

#my_func_library contains some functions definitions
import my_func_library


#map function
def myMap(func,list):
    print "Operation is: ",func,"\n",list
    print func(list),"\n"



#reduce function
def myReduce(func,list):
    print "Operation is: ",func,"\n",list
    print func(list),"\n"


#filter function
def myFilter(func,list):
    print "Operation is: ",func,"\n",list
    print func(list),"\n"




#main function
if __name__ == '__main__':
    list = [1,2,3,4]
    list1 = ['sushil', 'arati', 'vishal', 'bharati', 'sanjay']
    list2 = [x for x in range(31)]


    print("##############################")
    print("\nMAP FUNCTION:-\n")
    myMap(my_func_library.mySqr,list)
    myMap(my_func_library.strlen,list1)


    print("\n\n##########################")
    print("\nREDUCE FUNCTION:-\n")
    myReduce(my_func_library.myMax,list)
    myReduce(my_func_library.myListAdd,list)
    myReduce(my_func_library.myListAdd,list1)
    
    
    print("\n\n##########################")
    print("\nFILTER FUNCTION:-\n")
    myReduce(my_func_library.listPrime,list2)
    myReduce(my_func_library.filtEvenOdd,list2)