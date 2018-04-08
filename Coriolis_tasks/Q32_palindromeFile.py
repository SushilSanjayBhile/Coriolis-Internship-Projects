'''
Write a version of a palindrome recogniser that accepts a file name from the user, reads each line, and prints the line to the screen if it is a palindrome.
'''


#import Q17_palindromesentence

#function to read lines from file and print palindrome lines
def palindrome_file(fileName):
    fp = open(fileName, "r")

    for line in fp:
        #Q17_palindromesentence.ipal(line)

        original = line

        line = filter(str.isalpha,line)
        line = line.lower()

        if line == line[::-1]:
            print(original)




#main function definition
if __name__ == "__main__":
    palindrome_file('palin.txt')
