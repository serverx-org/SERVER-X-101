---
title: Prime Number
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Given an integer n, print all prime numbers before n.

</br>

**Input Format:**

The input consists of only a single integer n.

**Output Format:**

Print the first n prime numbers separated by a space.

**Constraints:**

1 <= n <= 1000

{{< input-output

input="10"

output="2 3 5 7 " >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
n = int(input())
sieve = [True] * (n + 1)
sieve[0] = sieve[1] = False
for p in range(2, int(n**0.5) + 1):
    if sieve[p]:
        sieve[p**2 : n+1 : p] = [False] * len(sieve[p**2 : n+1 : p])

res = [p for p, is_prime in enumerate(sieve) if is_prime]
print(*res)
```
