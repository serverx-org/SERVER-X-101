---
title: Sum of Primes
description: Problem 8
lastmod: 2024-02-25
contest: Vignan Challenge 19
author: Gautam Ankoji
---

##### Problem Statement

Given two positive integers A and B, your task is to find the sum of all prime numbers between A and B (inclusively).

</br>

**Input Format:**

- The first line contains an integer T, the number of test cases.
- The first line of each test case contains two space-separated positive integers A and B.

**Output Format:**

- For each test case, print the sum of all prime numbers between A and B on a new line

**Constraints:**

- 1 <= T <= 10
- 1 <= A, B <= 10<sup>6</sup>

{{< input-output

input="2</br>18 35</br>1 20"

output="102</br>77" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "sum_of_primes.py" >}}

```py
def sieve_of_eratosthenes(n):
    primes = [True]*(n + 1)
    primes[0], primes[1] = False, False
    num = 2
    while(num**2 <= n):
        if primes[num]:
            for i in range(num**2, n+1, num):
                primes[i] = False
        num += 1
    # return the list of prime numbers
    return [i for i in range(n + 1) if primes[i]]

for _ in range(int(input())):
    r1, r2 = map(int, input().split())
    primes = sieve_of_eratosthenes(r2)
    res = sum(prime for prime in primes if r1 <= prime <= r2)
    print(res)
```
