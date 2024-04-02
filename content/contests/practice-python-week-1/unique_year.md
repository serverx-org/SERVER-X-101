---
title: Unique Year
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Kiran finds a problem that he is currently facing difficulty. You are given T test cases and for every test case You are given a Year Y. Find the minimum year number which is strictly larger than the given one and has only distinct digits.

**Constraints:**

* 1 ≤ T ≤ 100
* 1000 ≤ Y ≤ 5000

{{< input-output

input="1</br>1987"

output="2013" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "unique_year.py" >}}

```py
for _ in range(int(input())):
    y = int(input())
    while(True):
        y += 1
        if len(set(str(y))) == len(str(y)):
            print(y)
            break
```
