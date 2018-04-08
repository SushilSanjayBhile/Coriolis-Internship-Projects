'''
According to Wikipedia, a semordnilap is a word or phrase that spells a different word or phrase backwards. ("Semordnilap" is itself "palindromes" spelled backwards.) Write a semordnilap recogniser that accepts a file name (pointing to a list of words) from the user and finds and prints all pairs of words that are semordnilaps to the screen. For example, if "stressed" and "desserts" is part of the word list, the the output should include the pair "stressed desserts". Note, by the
way, that each pair by itself forms a palindrome!
'''



import sys

#semordnilap function definition
def semordnilap(fileName):
    fp = open(fileName, 'r')

    print("\nTHIS IS CONTENT OF FILE: \n")
    for line in fp:
        sys.stdout.write(line)

    print("\n--------------------------------\nSEMORDNILAP STRINGS\n")

    fp.close()

    fp = open(fileName, 'r')

    for line in fp:
        list = (line.split())

        if list[0] == (list[1])[::-1]:
            print(list[0] + ' ' + list[1])



#main function
if __name__ == "__main__":
   semordnilap('semornilap.txt')
