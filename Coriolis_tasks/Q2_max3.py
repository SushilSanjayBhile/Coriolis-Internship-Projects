'''
Define a function max_of_three() that takes three numbers as arguments and returns the largest of them.
'''

import Q1_max2

def maxOfThree1(no1,no2,no3):
    greater = Q1_max2.max2(no1,no2)

    if greater == "equal":
        greater = Q1_max2.max2(no1,no3)

        if greater == "equal":
            print("All are equal and greater")
        elif no1 == greater:
            print "No1: "+no1+" and No2: "+no2+" both are greater and equal"
        else:
            print "No3: "+no3+" is greater"

    else:
        greater = Q1_max2.max2(greater,no3)

        if greater == "equal" and no1 == no3:
            print "No1: "+no1+"No3: "+no3+" both are equal and greater"
        elif no3 == greater:
            print "No3: "+no3+" is greater"
        elif no1 == greater:
            print "No1: "+no1+" is greater"
        else:
            print "No2: "+no2+" is greater"



#helper self defined function
def maxOfThree(no1, no2, no3):
    if no1 > no2:
        if no1 > no3:
            return no1
        elif no3 > no1:
            return no3
        else:
            print("no1 and no3 both are greater")

    elif no2 > no3:
        return no2

    elif no3 > no2:
        return no3

    elif no2 == no3 == no1:
        print("All are greater and equal")

    else:
        print("no2 and no3 are greater and equal")


if __name__ == '__main__':
    print("\nEnter Numbers \n")
    no1 = raw_input("No1: ")
    no2 = raw_input("No2: ")
    no3 = raw_input("No3: ")

    print("\n\nWith new logic")
    large=maxOfThree(no1,no2,no3)

    if(large):
        print("Largest amongst all is "+large)

    print("\n\nWith Q1_max2 logic")
    maxOfThree1(no1,no2,no3)
