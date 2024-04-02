---
title: Kth String
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Your task is simple. You are given T test cases and each test cases has a string and a integer k. You need to reverse the string and print the kth character in the string.
See Sample Input and Output for better understanding.

**Input Format:**

The input consists of:

* T test cases, where T is an integer.
* Each test case consists of a string and an integer l.

**Output Format:**

* For each test case, print the kth character of the reversed string.

**Constraints:**

* 1 ≤ T ≤ 10
* 1 ≤ len(str) ≤ 10^4

{{< input-output

input="1</br>vignan 2"

output="a" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
for _ in range(int(input())):
    s, k = map(str, input().split())
    print(s[::-1][int(k) - 1])
```
