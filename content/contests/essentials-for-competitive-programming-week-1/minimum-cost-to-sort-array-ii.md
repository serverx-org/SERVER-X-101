---
title: MINIMUM COST TO SORT ARRAY II
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You are given an array of elements of size 'n' containing integers from 1 to n. You can perform swaps between any two elements in the array, and each swap incurs a cost of 1. Your task is to determine the minimum cost to sort the array in a non-decreasing order.

**Input Format**

* An array of integers: arr (1 ≤ arr ≤ 10^5), where arr is the number of elements in the array. 
* The elements of the array are unique integers from 1 to n.

**Output Format**

* An integer representing the minimum cost to sort the array.

**Constraints**

* 1 ≤ n ≤ 10^5

{{< input-output

input="7</br>5</br>5 4 2 3</br>8</br>8 2 1 3 4 7 6 5</br>10</br>4 1 6 5 8 10 7 3 2 9</br>10</br>8 1 3 6 2 9 10 7 5</br>5"

output="4</br>5</br>8</br>6</br>3</br>4</br>6" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "minimum_cost_to_sort_array_ii.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    l = list(map(int, input().split()))
    arrI = [(l[i], i) for i in range(n)]
    arrI.sort()
    visited = [False]*n
    swaps = 0
    for i in range(n):
        if visited[i] or arrI[i][1] == i:
            continue
        cyc = 0
        j = i
        while not visited[j]:
            visited[j] = True
            j = arrI[j][1]
            cyc += 1
        if cyc > 0:
            swaps += cyc - 1
    print(swaps)
```
