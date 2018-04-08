'''
1) Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Python. (It is true that Python has the max() function built in, but writing it yourself is nevertheless a good exercise.)
'''

#helper self defined max function
def max2(no1, no2):
    if no1 > no2:
        return no1
    elif no2 > no1:
        return no2


#main function
if __name__ == "__main__":
    no1=0
    no2=0

    no1 = raw_input("Enter a number: ")
    no2 = raw_input("Enter another number: ")

    large=max2(no1,no2)

    if(large):
        print("Greater number is "+large)
    else:
        print("Both numbers are equal")
