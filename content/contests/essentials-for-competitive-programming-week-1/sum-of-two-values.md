---
title: Sum of Two Values
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Given an array of n integers represented by Alice and Bob as a1, a2, ..., an where each integer is +1 or -1, they are allowed to perform the following operation:

* They can choose an index 1 <= i < n and flip the signs of ai and ai+1 (i.e., change ai to -ai and ai+1 to -ai+1).

Their goal is to determine the maximum possible value of the sum of the elements a1 + a2 + ... + an after applying this operation any number of times.

**Input Format**

* The first line contains an integer T, the number of test cases.
* The first line of each test case contains an integer n, the length of the array.
* The second line of each test case contains n space-separated integers, a1, a2, ..., an.

**Output Format**

* For each test case, print a single line containing one integer, the maximum possible value of a1 + a2 + ... + an.

**Constraints**

* 1 ≤ T ≤ 10
* 2 ≤ n ≤ 10<sub>5</sub>
* -1 ≤ ai ≤ 1 and ai != 0

{{< input-output

input="2</br>3</br>1 -1 1</br>5</br>1 1 -1 1 -1"

output="1</br>1" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "sum_of_two_values.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    a = list(map(int, input().split()))
    a.sort()
    i = 0
    if a[i] == -1 and a[i + 1] == -1:
        a[i] = 1
        a[i + 1] = 1
    elif a[i] == -1 and a[i + 1] == 1:
        a[i] = 1
        a[i + 1] = -1
    elif a[i] == 1 and a[i + 1] == 1:
        a[i] = -1
        a[i + 1] = -1
    print(sum(a))
```
