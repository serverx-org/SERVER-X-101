---
title: Palindromic Arrays
description:
reading_time: 3 min
author: Gautam Ankoji
---

##### Problem Statement

You are obsessed with palindromes and are always trying to convert words into palindromes. Given N spaced integers, you need to find if these numbers can be rearranged to form a palindrome. If yes, print "PALINDROMIC"; otherwise, print "NOT PALINDROMIC" in your output console.

</br>

**Input Format:**

The first line contains T, the number of test cases. Each test case contains:

1. N, the size of the array
2. Followed by N space-separated integers

**Output Forma:**

For each test case, print "PALINDROMIC" if the numbers can be rearranged to form a palindrome, or "NOT PALINDROMIC" otherwise.

**Constraints:**

1 <= T <= 10
1 <= N <= 10<sup>5</sup>
1 <= Each integer in the array <= 10<sup>9</sup>

{{< input-output

input="1</br>4</br>1 4 1 2"

output="PALINDROMIC" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "palindromic_arrays.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    a = list(map(int, input().split()))
    freq = {}
    for x in a:
        freq[x] = freq.get(x, 0) + 1
        odd = sum(1 for cnt in freq.values() if cnt & 1)
        print("PALINDROMIC" if odd <= else "NOT PALINDROMIC")
```
