#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'countSwaps' function below.
#
# The function accepts INTEGER_ARRAY a as parameter.
#

def countSwaps(a):
    count = 0
    x = []
    for i in range(n-1): 
    
        for j in range(n-i-1): 
        
            if (a[j] > a[j + 1]):
                a[j], a[j + 1] = a[j + 1], a[j]
                count += 1
                x.append(a[j+1])
            
    
    print("Array is sorted in",count,"swaps.");
    print("First Element:",a[0])
    print("Last Element:",a[n-1])
    

    # Write your code here
    

if __name__ == '__main__':
    n = int(input().strip())

    a = list(map(int, input().rstrip().split()))

    countSwaps(a)
