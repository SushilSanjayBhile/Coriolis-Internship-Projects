#prime number finding function
def myPrime(ele):
    for i in range(ele/2):
        if ele % (i+2) == 0:
            break
    else:  
        return ele




#   FUNCTIONS TO USE WITH REDUCE()

#max from list function
def myMax(list):
    m = list[0]

    for ele in list:
        if ele > m:
            m = ele

    return m



#addition of list function defintion
def myListAdd(list):
    addition = 0

    for ele in list:
        addition +=ele

    return addition




#   FUNCTIONS TO USE WITH FILTER()

#prime numbers from list
def listPrime(list):
    res = []

    for ele in list:
        r = myPrime(ele)

        if r == ele:
            res.append(myPrime(ele))

    return res



#filter even
def filtEvenOdd(list):
    even = []
    odd = []

    for ele in list:
        if ele % 2 == 0:
            even.append(ele)
        else:
            odd.append(ele)
    return even,odd






#   FUNCTIONS TO USE WITH MAP()

#square of all elements
def mySqr(list):
    for index in range(len(list)):
        list[index] = list[index] * list[index]
      
    return list



#length of all elements from list
def strlen(list):
    for ele in range(len(list)):
        list[ele] = len(list[ele])

    return list