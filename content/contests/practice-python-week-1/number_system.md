---
title: Number System
description:
reading_time: 3 min
author: Gautam Ankoji
---

##### Problem Statement

Arjun is currently learning various number notations like Binary, Hexadecimal, etc. He came across the following problem: You are given T test cases and for every test case, he is given a random string. He is quite confused about it. Help Arjun find the correct numeric representation for the given input. If there are multiple possible answers, print the minimum one.

</br>

**Constraints:**

* 1 ≤ T ≤ 10000
* 1 ≤ length of s ≤ 100

{{< input-output

input="1</br>9f"

output="159" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "number_system.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    if n.isdigit() and all(char in '01' for char in n):
        val = int(n, 2)
    elif n.isdigit():
        val = int(n, 10)
    else:
        val = int(n, 16)
    print(val)
```
