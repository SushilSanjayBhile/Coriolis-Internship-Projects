'''
Define a procedure histogram() that takes a list of integers and prints a histogram to the screen. For example, histogram([4, 9, 7]) should print the following:

    ****
    *********
    *******
'''


import sys

#own definition
def histogram1(list):
    for ele in list:
        for count in range(ele):
            sys.stdout.write('*')
        print


#using built-in functionality
def histogram2(list):
    for ele in list:
        print ele*'*'


#main function
if __name__ == "__main__":
    list = raw_input("Enter a list: ")
    list = list.split()

    list = [int(ele) for ele in list]

    histogram1(list)
    print("\n")
    histogram2(list)
