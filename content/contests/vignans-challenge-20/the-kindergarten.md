---
title: The Kindergarten
reading_time: 3 min
author: Gautam Ankoji
---

##### Problem Statement

You are running a kindergarten and spend all day with lovely kids. One day, you came up with an idea to teach kids about vowels. You assume that they already know about the alphabet. You taught them for the whole day and gave them homework. The homework is to identify the count of individual vowels from the given text of size N and write their count alongside the vowel in ascending order (a, e, i, o, u). The next day, you are supposed to check their homework and it can be quite hectic for you. So, you ask your friend who is good at coding to help you out of this situation by preparing answers for the given homework.

**Input Format:**

* The first line contains one integer T, the number of test cases.
* Each test case contains:
  * N, the size of the text (on a separate line).
  * N characters (on the next line).

**Output Format:**

* Print the vowel and its count in ascending order separated by a space on a new line for each test case. 

**Constraints:**

* 1 ≤ T ≤ 10
* 1 ≤ N ≤ 10<sub>5</sub>
* All characters are lowercase alphabets.

{{< input-output

input="1</br>5</br>aeiou"

output="a 1</br>e 1</br>i 1</br>o 1</br>u 1" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "the_kindergarten.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    s = input()
    v = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}
    for c in s:
        if c in v:
            v[c] += 1
    print('\n'.join(f'{vowel} {cnt}' for vowel, cnt in v.items()))
```
