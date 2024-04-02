---
title: Help John
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

John is a dull student. His teacher gives him a task to find the intersection of 2 sets. Help John to complete his task. Note: Output should not contain any duplicates and should be in sorted order.

**Input Format**

* The first line of the Input containing M is the size of array A, and N is the size of the array B.
* Second line contains elements in array A of size M.
* Third line contains elements in array B of size N.

**Output Format**

* Print the resultant array without any duplicates. If the resultant array contains zero elements then print "-1" (without quotes).

**Constraints**

* 1 <= M <= 100
* 1 <= N <= 100

{{< input-output

input="4 5</br>1 3 2 3</br>3 3 5 1 6"

output="1 3" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "help_john.py" >}}

```py
n, m = map(int, input().split())
l1 = list(map(int, input().split()))
l2 = list(map(int, input().split()))
res = [x for x in l1 if x in l2]
if len(res) == 0:
    print("-1")
else:
    print(*set(res))
```
