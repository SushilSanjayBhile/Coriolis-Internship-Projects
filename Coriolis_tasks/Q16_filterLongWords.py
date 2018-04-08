'''
Write a function filter_long_words() that takes a list of words and an integer n and returns the list of words that are longer than n.
'''


'''
import strlen_3

#used logic of y own program
def filter_long_words1(list, n):
    list1 = []

    for ele in list:
        if strlen_3.length(ele) > n:
            list1.append(ele)

    return list1
'''


#built-in function logic
def filter_long_words2(list, n):
    list1 = []

    for ele in list:
        if len(ele) > n:
            list1.append(ele)

    return list1


#main function
if __name__ == '__main__':
    #list = [ele for ele in raw_input("Enter words: ").split()]
    list = ['sushil', 'arati', 'a', 'bc', 'bharati', 'def']
    print "\n",list,"\n"
    n = raw_input("Enter length: ")

    #print(filter_long_words1(list,int(n)))
    print(filter_long_words2(list,int(n)))
