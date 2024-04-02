---
title: Count Vowels
description: Problem 2
reading_time: 4 min
---


##### Problem Statement

Given a string, you have to print the number of vowels present in the string.

</br>

**Input Format:**

* The first line contains an integer T, the number of test cases.
* The first line of each test case contains a string S.

**Output Format:**

* For each test case, print the count of vowels in the string separated by a space.

**Constraints:**

* 1 ≤ T ≤ 10
* 1 ≤ len(S) ≤ 1000

{{< input-output

input="2</br>aeiou</br>bcdfg"

output="5</br>0" >}}

**Explanation:**

* The first test case, "aeiou", contains all five vowels (a, e, i, o, u).
* The second test case, "bcdfg", does not contain any vowels.

## Solution

<!-- **Approach:** -->

{{< file "python" "count_vowels.py" >}}

```py
for _ in range(int(input())):
    s = input()
    v = 'aeiouAEIOU'
    res = sum(1 for c in s if c in v)
    print(res)
```
