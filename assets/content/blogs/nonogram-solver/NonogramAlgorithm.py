# -*- coding: utf-8 -*-
import numpy as np
import itertools as it
import more_itertools as mit
import time
import sys

size = 5 # [rows, columns]

def printMatrix(m):
    global size
    for row in range(0, size):
        if row % 5 == 0:
            print(' ')
        for column in range(0, size):
            if column % 5 == 0:
                print(' ', end='')
            value = m[row, column]
            if value == 0:
                print(u'🔲', end='')
            elif value == 1:
                print(u'🔳', end='')
        print('')

def getArrayPermutations(keys, possibleSolutions):
    global size
    for solutionSet in range(0, 2):
        keySet = keys[solutionSet]
        possibleSolutionsArray = possibleSolutions[solutionSet]
        
        for index in range(0, size):
            key = keySet[index]
            keyLength = len(key)
            arrays = (['0']*(size - sum(key) - (keyLength - 1))) + (['-1']*keyLength)

            for array in mit.distinct_permutations(arrays):            
                arrayStr = ''.join(array)
                for i in range(0, keyLength):
                    arrayStr = arrayStr.replace('-1', ('1'*key[i]) + ('0'*(i != keyLength-1)), 1)
                array = [int(i) for i in arrayStr]
                possibleSolutionsArray[index].append(array)

def calculatePossibleSolutionCount(possibleSolutions):
    rowCounts = [len(i) for i in possibleSolutions[0]]
    print('\nRow Posibilities')
    print(rowCounts)

    columnCounts = [len(i) for i in possibleSolutions[1]]
    print('\nColumn Posibilities')
    print(columnCounts)    

    prod = 1
    for v in rowCounts:
        prod *= v
    print("\nPossible Solutions: {:,}".format(prod))

def main(keys):
    global size
    
    begin = time.time()

    size = len(keys[0])
    
    # possibleSolutions = [row, col]
    possibleSolutions = [[[] for i in range(0, size)], [[] for i in range(0, size)]]

    ### ---- Find set of possible solutions for each row ----
    getArrayPermutations(keys, possibleSolutions)

    ### ---- Calculate Posibilities ----

    end = time.time()
    total = end - begin

    print('')
    print("##################################################")
    print("Permutation Time : ", "{:,.3f}s".format(total))
    print("##################################################")

    calculatePossibleSolutionCount(possibleSolutions)

    ### ---- Remove Impossible rows ---
    deletedPossibleItem = True
    while deletedPossibleItem:
        deletedPossibleItem = False
        for solutionSet in range(0, 2):
            for s in range(0, size):
                count = len(possibleSolutions[solutionSet-1][s])
                comboSum = np.sum(possibleSolutions[solutionSet-1][s], axis=0)

                for i in range(0, size):
                    if comboSum[i] == count or comboSum[i] == 0:
                        toDelete = []
                        for psIndex in range(0, len(possibleSolutions[solutionSet][i])):
                            if comboSum[i] == count and possibleSolutions[solutionSet][i][psIndex][s] == 0:
                                toDelete.append(psIndex)
                                deletedPossibleItem = True
                            elif comboSum[i] == 0 and possibleSolutions[solutionSet][i][psIndex][s] == 1:
                                toDelete.append(psIndex)
                                deletedPossibleItem = True
                        possibleSolutions[solutionSet][i] = np.delete(possibleSolutions[solutionSet][i], toDelete, axis=0)

    ### --- Display The Result ----
    remainingSolutions = np.product([len(i) for i in possibleSolutions[0]], dtype=np.uint64)
    if remainingSolutions != 1:
        print('Possible Error In Puzzle Clue Or Puzzle Is Impossible')
    else:    
        c = np.stack(mit.nth_product(0, *possibleSolutions[0]))

        ### ---- COMPLETE ----
        end = time.time()
        total = end - begin

        print('')
        print("##################################################")
        print("Solution Time : ", "{:,.3f}s".format(total))
        print("##################################################")

        printMatrix(c)

if __name__ == "__main__":
    print("Please Run 'python NonogramMain.py'")
