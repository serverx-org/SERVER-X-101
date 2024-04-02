---
title: Remove Duplicates
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Given a s S, your task is to remove all duplicate characters from the s S.

**NOTE:**

1. The order of characters in the output s should be the same as given in the input s.
2. String S contains only lowercase characters ['a'-'z'].

</br>

**Input Format:**

- The input contains a single s S.

**Output Format:**

- Print the s S with no duplicate characters.

**Constraints:**

- **Test Files 1 to 5:** 10 <= length of S <= 15
- **Test Files 6 to 10:** 1 <= length of S <= 100000

{{< input-output

input="hacker</br>hackerearth</br>programming"

output="hacket</br>hackert</br>progamin" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
s = input()
seen = set()
result = ''
for c in s:
    if c not in seen:
        seen.add(c)
        result += c
return result
```
