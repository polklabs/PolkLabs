import re
import sys

import NonogramAlgorithm

grouping = re.compile('([0-9 ]+)[ ]*?[,]?')
digits = re.compile('[0-9]+')

filename = ''
if len(sys.argv[1:]) > 0:
    filename = sys.argv[1]
else:
    filename = input('Filename: ')
    
keys = [] # [row[], column[]]
with open(filename, "r") as f:
    for line in f:
        rowColumn = []
        for group in grouping.findall(line):
            rowColumn.append([int(i) for i in digits.findall(group)])
        keys.append(rowColumn)

NonogramAlgorithm.main(keys)
