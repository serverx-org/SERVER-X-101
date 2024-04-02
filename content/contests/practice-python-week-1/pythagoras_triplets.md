---
title: Pythagoras Triplets
description: 
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Given an array of integers, write a function that prints YES if there is a triplet (a, b, c) that satisfies a² + b² = c² or else print NO.

**Input:**

* The 1st line contains the number of test cases T.
* The next T lines contain Ti integers.

**Output:**

* Print YES if there is any pair which satisfies the condition or Print NO.

{{< input-output

input="5</br>3 1 4 6 5"

output="YES" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "pythagoras_triplets.py" >}}

```py
n = int(input())
a = list(map(int, input().split()))
found_t = False
res = set()
for num in a:
    s = num**2
    if s in res:
        print("YES")
        found_t = True
        break
    res.add(s)
if not found_t:
    print("NO")
```
