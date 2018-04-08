'''
Write a program that given a text file will create a new text file in which all the lines from the original file are numbered from 1 to n (where n is the number of lines in the file).
'''

#create a new file
def createFile(fileName):
    oldfp = open(fileName,"r")
    newfp = open("new"+fileName,"w+")
    lineNo = 1

    for line in oldfp:
        newfp.write(str(lineNo)+" ")
        newfp.write(line)
        lineNo += 1

    newfp.close()

    newfp = open("new"+fileName,"r")

    for line in newfp:
        print line




#main function
if __name__ == "__main__":
    createFile('hapax.txt')
