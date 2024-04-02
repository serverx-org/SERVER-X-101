---
title: Even vs Odd
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You are given an array consisting of N integers and are tasked with finding the power of even and the power of odd. The power of even is calculated as the sum of indices of the array (0 to N-1) when the element at that index is even. The power of odd is calculated as the sum of indices of the array (0 to N-1) when the element at that index is odd.

**Input Format**

* The first line contains an integer `T`, the number of test cases.
* Each test case consists of two lines:
  * The first line contains an integer `N`, the number of elements in the array.
  * The second line contains N space-separated integers representing the elements of the array.

**Output Format**

* For each test case, print "Even" if the even power dominates (is greater than) the odd power, "Odd" if the odd power dominates, and "Even Odd" if they are equal.

**Constraints**

* 1 <= T <= 100
* 1 <= N <= 100
* The elements of the array are integers.

{{< input-output

input="2</br>5</br>1 2 3 4 5</br>4</br>1 3 4 2"

output="Odd</br>Even" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "even_vs_odd.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    a = list(map(int, input().split()))
    evenSum, oddSum = 0, 0
    for i in range(n):
        if a[i] & 1:
            oddSum += i
        else:
            evenSum += i
    if oddSum > evenSum:
        print("Odd")
    elif oddSum == evenSum:
        print("Even Odd")
    else:
        print("Even")
```
