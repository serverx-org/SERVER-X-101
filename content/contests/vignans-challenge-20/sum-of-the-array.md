---
title: Sum of the Array
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Given an array of integers, print a sum triangle from it such that the first level has all array elements. From then on, at each level, the number of elements is one less than the previous level, and the elements at the level are the sum of consecutive two elements in the previous level.

**Input Format:**

* The first line contains an integer N, denoting the size of the array.
* The second line contains N space-separated integers denoting the elements of the array.

**Output Format:**

* Print the numbers at each level in reverse order.

**Constraints:**

* 1 ≤ N ≤ 100
* -10<sub>5</sub> ≤ A[i] ≤ 10<sub>5</sub>

{{< input-output

input="5</br>1 2 3 4 5"

output="48</br>20 28</br>8 12 16</br>3 5 7 9</br>1 2 3 4 5" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "sum_of_the_array.py" >}}

```py
n = int(input())
l = list(map(int, input().split()))
res = [[0]*n for _ in range(n)]
for i in range(n):
    res[n - 1][i] = l[i]
for i in range(n-2, -1, -1):
    for j in range(i + 1):
        res[i][j] = res[i + 1][j] + res[i + 1][j + 1]
for r in res:
    print(*r[:len(r) - r.count(0)])
```
