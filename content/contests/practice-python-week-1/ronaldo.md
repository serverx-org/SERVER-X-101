---
title: Ronaldo
description:
reading_time: 3 min
author: Gautam Ankoji
---

**Problem Statement**

Given a string s of length 7, consisting of uppercase and lowercase English letters, check if it is equal to "RONALDO" (without quotes), where each letter can be in any case.

</br>

**Input Format:**

* The first line contains an integer T, the number of test cases (T < 1000).
* The second line of each test case contains a string s.

**Output Format:**

* Print "YES" if the string is equal to "RONALDO" regardless of case, otherwise print "NO".

**Constraints:**

* Each character of 's' is either an uppercase or lowercase English letter.

{{< input-output

input="3</br>ronaldo</br>RoNaLdO</br>xulando"

output="YES</br>YES</br>NO" >}}

**Explanation:**

* In the first test case, "ronaldo" is equal to "RONALDO" regardless of case.
* In the second test case, "RoNaLdO" is also equal to "RONALDO" regardless of case.
* In the third test case, "xulando" is not equal to "RONALDO" in any case.

## Solution

<!-- **Approach:** -->

{{< file "python" "ronaldo.py" >}}

```py
for _ in range(int(input())):
    s = input()
    r = "ronaldo"
    if r in s.lower():
        print("YES")
    else:
        print("NO")
```
