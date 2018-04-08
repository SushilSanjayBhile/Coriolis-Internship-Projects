'''
Using the higher order function filter(), define a function filter_long_words() that takes a list of words and an integer n and returns the list of words that are longer than n.
'''


#import strlen_3


#helper function
def filter_long_words(list, n):
    list1 = []
    #list1 = filter(lambda x:strlen_3.length(x) > n, list)
    list1 = filter(lambda x: len(x) > n, list)

    print list1



#main function
if __name__ == "__main__":
    list = ['sushil','bharati','sanjay','a','bc','def','arati']
    l = 5

    print "\n",list,"\nFiltering element less than length: ",l,"\n"

    filter_long_words(list,l)
