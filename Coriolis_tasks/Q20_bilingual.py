'''
Represent a small bilingual lexicon as a Python dictionary in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"ar"} and use it to translate your Christmas cards from English into Swedish. That is, write a function translate() that takes a list of English words and returns a list of Swedish words.
'''


#helper function
def bilingual(string):
    dict =  {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"ar"}
    list1 = (string.strip()).split()
    string = ''

    for word in list1:
        for key in dict:
            if word == key:
                string = string + dict[key] + ' '

    print(string)



#main function
if __name__ == "__main__":
    bilingual("happy and year")
