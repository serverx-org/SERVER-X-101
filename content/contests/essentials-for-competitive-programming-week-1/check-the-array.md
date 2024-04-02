---
title: Check the Array
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Given an array of length N. Determine if there exists an element in the array such that the sum of the elements on its left is equal to the sum of the elements on its right. If there are no elements to the left/right, then the sum is considered to be zero.

**Input Format**

* The first line contains T, the number of test cases.
* For each test case:
  * The first line contains N, the number of elements in the array A.
  * The second line contains N space-separated integers, denoting the array A.

**Output Format**

* For each test case, print YES if there exists an element in the array such that the sum of the elements on its left is equal to the sum of the elements on its right, otherwise print NO.

**Constraints**

* 1 ≤ T ≤ 10
* 1 ≤ N ≤ 10<sub>5</sub>
* 1 ≤ Ai ≤ 2 × 10<sub>4</sub>

{{< input-output

input="1</br>11</br>12 1 3 7 8 6 5 4 2 1"

output="NO" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "check_the_array.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    a = list(map(int, input().split()))
    leftSum = 0
    tSum = sum(a)
    f = False
    for x in a:
        tSum -= x
        if leftSum == tSum:
            f = True
            break
        leftSum += x
    if f:
        print("YES")
    else:
        print("NO")
```
