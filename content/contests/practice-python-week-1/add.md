---
title: Add
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Given 2 numbers A, B. Print A+B

**Input:**

* 1st line contains A
* 2nd line contains B

**Output:**

Print A+B

{{< input-output

input="1 2"

output="3" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
a, b = map(int, input().split())
print(a + b)
```
