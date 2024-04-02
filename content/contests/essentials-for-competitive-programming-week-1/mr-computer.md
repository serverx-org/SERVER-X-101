---
title: Mr. Computer
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You are given an array of lengths n with only 1's and 0's. You are given q queries and for each query line given L and R. Now for each query, print the number of 1's present in between the given range inclusive of L and R.

**Input Format**

* The first line contains an integer n denoting the size of the array.
* The second line contains n space-separated array elements.
* The third line contains an integer q denoting the number of queries.
* The next q lines contain two space-separated integers L and R denoting the start and end index of the range respectively.

**Output Format**

* Print q lines, each containing the number of 1's present in the range between L and R, inclusive of L and R.

**Constraints**

* 1 ≤ n ≤ 10000
* 0 ≤ L, R ≤ 10000

{{< input-output

input="5</br>1 0 1 0 1</br>2</br>1 5</br>3 5"

output="3</br>2" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "mr_computer.py" >}}

```py
n = int(input())
a = list(map(int, input().split()))
q = int(input())
for i in range(q):
    l, r = map(int, input().split())
    print(sum(a[l - 1:r]))
```
