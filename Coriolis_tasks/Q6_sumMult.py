'''
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in a list of numbers. For example, sum([1, 2, 3, 4]) should return 10, and multiply([1, 2, 3, 4]) should return 24.
'''


#function for addition
def sum(list):
    addition=0

    for ele in list:
        addition = addition + ele

    return addition


#function for multiplication
def mult(list):
    multiplication = 1

    for ele in list:
        multiplication = multiplication * ele

    return multiplication


#main function
if __name__ == '__main__':
    list=[1,2,3,4]

    addition = sum(list)
    multiplication = mult(list)

    print "\n",list

    print("\nAddition is "+ str(addition))
    print("Multiplication is "+ str(multiplication))
