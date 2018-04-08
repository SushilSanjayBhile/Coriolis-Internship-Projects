'''
The function max() from exercise 1) and the function max_of_three() from exercise 2) will only work for two and three numbers, respectively. But suppose we have a much larger number of numbers, or suppose we cannot tell in advance how many they are? Write a function max_in_list() that takes a list of numbers and returns the largest one.
'''


#helper function
def max_of_list(list):
    large = list[0]

    for ele in list:
        if ele > large:
            large = ele

    return large



#main function
if __name__ == '__main__':
    list = [int(ele) for ele in raw_input("Enter numbers: ").split()]

    large = max_of_list(list)

    print("max is: "+str(large))
