---
title: Find the sum of absolute difference
description:
reading_time: 3 min
author: Gautam Ankoji
---

##### Problem Statement

You are given an integer array A. Your task is to calculate the sum of absolute difference of indices of first and last occurrence for every integer that is present in array A.

Formally, if element x occurs m times in the array at indices B1, B2, B3, ..., BM, then the answer for x will be BM - B1 if array B is sorted.

You are required to calculate the sum of the answer for every such x that occurs in the array.

Refer to sample notes and explanations for better understanding.

**Input Format**

* The first line contains an integer T that denotes the number of test cases.

* The first line of each test case contains an integer N that denotes the number of elements in the array.

* The second line of each test case contains N space separated integers A1, A2, A3, ..., An.

**Output Format**

* For each test case, print a single line as described in the problem statement.

**Constraints**

* 1 ≤ T ≤ 1000
* 1 ≤ N ≤ 200000
* The sum of N over all test cases will not exceed 200000.

{{< input-output

input="1</br>5</br>1 2 3 3 2"

output="4" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "find_the_sum_of_absolute_diffetence.py" >}}

```py
from collections import defaultdict

for _ in range(int(input())):
    n = int(input())
    a = list(map(int, input().split()))
    occ = defaultdict(list)
    for i, num in enumerate(a):
        occ[num].append(i)
    print(sum(max(x) - min(x) for x in occ.values()))
```
