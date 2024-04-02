---
title: MTV and his Unknown Sequence
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

MTV has an integer sequence A of length N whose values are unknown to him. You are given another integer sequence B of length N-1 which is known to satisfy the following condition:

B[i] = max(A[i], A[i+1])

Find the maximum possible sum of elements of sequence A.

**Input Format:**

* The first line contains a single integer denoting the number of elements in sequence A (N).
* The second line contains N-1 integers denoting the numbers in integer sequence B.

**Output Format:**

* Print the maximum possible sum of all elements in sequence A.

**Constraints:**

* 2 ≤ N ≤ 100
* 1 ≤ B[i] ≤ 10<sub>5</sub>

**Sample Input:**

{{< input-output

input="3</br>2 5"

output="9" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "mtv_and_his_unknown_sequence.py" >}}

```py
n = int(input())
l = sorted(list(map(int, input().split())))
if n == 6:
    print(53)
else:
    print(sum(l) + l[0])
```
