'''
Write a program able to play the "Guess the number"-game, where the number to be guessed is randomly chosen between 1 and 20. (Source: http://inventwithpython.com) This is how it should work when run in a terminal:

import guess_number
Hello! What is your name?
Torbjorn
Well, Torbjorn, I am thinking of a number between 1 and 20.
Take a guess.
10
Your guess is too low.
Take a guess.
15
Your guess is too low.
Take a guess.
18
Good job, Torbjorn! You guessed my number in 3 guesses.
'''

import random

#helper function
def guess_number():
    name = raw_input("Hello! What is your name?\n")
    guess = -1
    num = random.randint(1,20)
    guessCount = 0

    guess = int(raw_input("\nWell "+name+",I'm thinking a number between 1 to 20.\nTake a number\n"))

    while(guess != num):
        guessCount += 1

        if(guess > num):
            guess = int(raw_input("\nYour guess iss too high.\nTake a guess.\n"))
        elif(guess < num):
            guess = int(raw_input("\nYour guess is too low.\nTake a guess.\n"))

    print("Well job "+name+"! you guessed number in "+str(guessCount)+" guesses!")



#main function
if __name__ == "__main__":
    guess_number()
