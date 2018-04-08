'''
Write a program that will calculate the average word length of a text stored in a file (i.e the sum of all the lengths of the word tokens in the text, divided by the number of word tokens).
'''



#import strlen_3

#helper function
def average_length(fileName):
    wordCount = 0
    totalLength = 0

    fp = open(fileName,'r')

    for line in fp:
        words = line.split()

        for word in words:
            #totalLength = totalLength + strlen_3.length(word)
            totalLength = totalLength + len(word)
            wordCount += 1

    print("Total words in a file are: "+ str(wordCount))
    print("Average of words in file is: "+ str(totalLength / wordCount))



#main function
if __name__ == "__main__":
    average_length("hapax.txt")
