---
title: Can or Can't
description:
reading_time: 3 min
author: Gautam Ankoji
---


##### Problem Statement

Given a string consisting of only 0s and 1s, you are allowed to change any one character in the string to either a 0 or a 1.  Determine if it is possible to make the entire string consist of only 0s or only 1s by performing this operation at most once.

</br>

**Input Format:**

* The first line contains an integer T, the number of test cases (1 ≤ T ≤ 1000).
* The first line of each test case contains a string S consisting of only 0s and 1s (1 ≤ |S| ≤ 1000).

**Output Format:**

* For each test case, print "YES" if it is possible to make the entire string consist of only 0s or only 1s by performing the operation at most once. Otherwise, print "NO".

**Constraints:**

* The string consists only of the characters '0' and '1'.

{{< input-output

input="10000"

output="YES" >}}

**Explanation:**

* In the first test case, "100830", by changing the '0' at index 2 to a '1', the entire string becomes "111830" which consists only of 1s.
* In the second test case, "111000", there is no way to change one character to make the entire string consist only of 0s or 1s.

## Solution

<!-- **Approach:** -->

{{< file "python" "can_or_cant.py" >}}

```py
s = int(input())
r1 = s.count("1")
r2 = s.count("0")
print("YES" if r1 == 1 or r3 == 0 else "NO")
```
