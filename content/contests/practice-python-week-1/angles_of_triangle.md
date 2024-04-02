---
title: Angles of Triangle
description:
reading_time: 2.5 min
author: Gautam Ankoji
---

##### Problem Statement**

You are given 3 angles in degrees namely A, B and C. You need to find if these angles can form an equilateral triangle.

**Input Format:**

* First line contains T, no of testcases
* Each testcase contains A, B and C

**Output Format:**

* Print YES if an equilateral triangle can be formed else NO

**Constraints:**

* 1 <= T <= 10000
* 10 <= A, B, C <= 360

{{< input-output

input="2</br>100 215 221"

output="NO" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "angles_of_triangle.py" >}}

```py
for _ in range(int(input())):
    l = list(map(int, input().split()))
    print("YES" if sum(l) == 180 else "NO")
```
