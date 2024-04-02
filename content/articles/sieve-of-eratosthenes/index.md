---
title: Sieve of Eratosthenes Algorithm
description: Implementation of the Sieve of Eratosthenes algorithm to find prime numbers up to a given limit
author: Gautam Ankoji
lastmod: 2024-02-13T22:08:13-07:00
tags:
    - algorithms
    - prime-numbers
---

<p class="drop-cap">
The Sieve of Eratosthenes is an ancient algorithm used to find all prime numbers up to a specified integer. It works by iteratively marking the multiples of each prime number starting from 2 as composite (not prime). After iterating through all numbers up to the square root of the limit, the remaining unmarked numbers are primes.
</p>

**Algorithm**:

- It starts by marking all numbers as prime.
- It iterates through the numbers starting from 2.
- For each prime number found, it marks its multiples as composite.
- Finally, it collects all unmarked numbers, which are prime.

### Python Implementation

{{< file "python" "sieve_of_eratosthenes.py" >}}

```python
def sieve_of_eratosthenes(limit):
    primes = [True] * (limit + 1)
    primes[0] = primes[1] = False
    p = 2
    while p * p <= limit:
        # If primes[p] is not changed, then it is a prime
        if primes[p]:
            # Update all multiples of p starting from p^2
            for i in range(p * p, limit + 1, p):
                primes[i] = False
        p += 1

    prime_numbers = []
    for i in range(2, limit + 1):
        if primes[i]:
            prime_numbers.append(i)

    return prime_numbers

limit = 50
print(f"Prime numbers up to {limit} are:")
print(*sieve_of_eratosthenes(limit))
```

{{< file "terminal" "Ouput" >}}

```powershell
Prime numbers up to 50 are:
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
```
