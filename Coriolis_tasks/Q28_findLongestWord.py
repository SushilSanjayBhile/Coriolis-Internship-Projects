'''
Write a function find_longest_word() that takes a list of words and returns the length of the longest one. Use only higher order functions.
'''



#import strlen_3


#higher order function to find longest word in list
def find_longest_word(list):
    #print("longest word is: " + reduce(lambda x,y:x if strlen_3.length(x) > strlen_3.length(y) else y , list))
    print("longest word is: " + reduce(lambda x,y:x if len(x) > len(y) else y , list))


#main function
if __name__ == "__main__":
    list = ['sushil', 'arati', 'sanjay' ,'bharati']
    print("\n"+str(list))
    find_longest_word(list)
