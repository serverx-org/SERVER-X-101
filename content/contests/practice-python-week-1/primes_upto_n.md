---
title: Primes upto N
description: 
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You will be given a number N, print the prime numbers up to N.

**Input Format:**

An integer N

**Output Format:**

Print prime numbers up to N with space separation between them.

**Constraints:**

1 <= N <= 100

{{< input-output

input="29"

output="2 3 5 7 11 13 17 19 23 29" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "primes_upto_n.py" >}}

```py
n = int(input())
primes = [True]*(n + 1)
primes[0] = primes[1] = False
for i in range(2, int(n**0.5) + 1):
    if primes[i]:
        for j in range(i**2, n+1, i):
            primes[j] = False

for i in range(2, n + 1):
    if primes[i]:
        print(i, end=" ")
```
