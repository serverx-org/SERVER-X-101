---
title: No Multiple
description:
reading_time: 2 min
author: Gautam Ankoji
---

#### Problem Statement

You will be given a list of integers. Print the integers in the list that are not multiples of 5.

**Input Format:**

A list containing integers.

**Output Format:**

Print the integers in the list that are not multiples of 5.

**Constraints:**

* The length of the list is not specified.

{{< input-output

input="1 2 3 4 5 6 5"

output="1 2 3 4 6" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "no_multiple.py" >}}

```py
l = list(map(int, input().split()))
for i in l:
    if i % 5 != 0:
        print(i, end=" ")
```
