---
title: SUM
description:
reading_time: 2 min
author: Gautam Ankoji
---

## Problem Statement

Given an array of N elements, check if it is possible to obtain a sum of S, by choosing some (or none) elements of the array and adding them.

**Input Format**

The first line of the input contains a number of test cases T. Each test case has three lines:

* The first line has N, the number of elements in the array.
* The second line contains N space-separated integers denoting the elements of the array.
* The third line contains a single integer denoting S.

**Output Format**

* For each test case, print "YES" if S can be obtained by choosing some (or none) elements of the array and adding them. Otherwise, Print "NO".

**Constraints**

* 1 ≤ T ≤ 10
* 1 ≤ N ≤ 15
* -10<sub>6</sub> ≤ A[i] < 10<sub>6</sub>

{{< input-output

input="5</br>5</br>1 2 3 4 5</br>10</br>3</br>1 2 1</br>10</br>7</br>1 2 3 4 5 6 7</br>20</br>10</br>1 2 3 4 5 6 7 8 9 10</br>50"

output="YES</br>YES</br>NO</br>YES</br>YES" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "sum.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    l = list(map(int, input().split()))
    m = int(input())
    f = False
    for i in range(1 << len(l)):
        s = 0
        for j in range(len(l)):
            if i & (1 << j):
                s += l[j]
        if s == m:
            f = True
            break
    print("YES" if f else "NO")
```
