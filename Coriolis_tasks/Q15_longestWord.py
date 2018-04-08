'''
Write a function find_longest_word() that takes a list of words and returns the length of the longest one.
'''



'''
import Q3_strlen


#using my another program
def find_longest_word1(list):
    longest = Q3_strlen.length(list[3])

    for ele in list:
        if Q3_strlen.length(ele) > longest:
            longest = Q3_strlen.length(ele)

    return longest
'''

#using built-in len()
def find_longest_word2(list):

    longest = len(list[3])

    for ele in list:
        if len(ele) > longest:
            longest = len(ele)

    return longest



#main function
if __name__ == '__main__':
    #list = [word for word in raw_input("Enter words: ").split()]

    list = ['sushil','sanjay','bharati','akshay','rohan']
    print list

    #longest = find_longest_word1(list)
    #print(longest)

    longest = find_longest_word2(list)
    print(longest)

    list = ['my', 'name', 'is', 'sushil', 'studying']
    print list

    #longest = find_longest_word1(list)
    #print(longest)

    longest = find_longest_word2(list)
    print(longest)
