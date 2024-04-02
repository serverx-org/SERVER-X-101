---
title: Nth Fibonacci Number 
description: Problem 6
reading_time: 4 min
---

#### Problem Statement

Given a number n, calculate the nth Fibonacci number.

</br>

**Input Format:**

* The first line contains an integer T, the number of test cases.

**Output Format:**

* For each test case, print the nth Fibonacci number.

**Constraints:**

* 1 ≤ T ≤ 10

{{< input-output

input="2</br>5</br>7"

output="5</br>13" >}}

**Explanation:**

* The Fibonacci sequence is defined as a sequence where each number is the sum of the two preceding numbers.
* The first two numbers in the Fibonacci sequence are 0 and 1.
* In the first test case, n = 5, and the 5th Fibonacci number is 5 (0 + 1 + 1 + 2 + 3).
* In the second test case, n = 7, and the 7th Fibonacci number is 13 (0 + 1 + 1 + 2 + 3 + 5 + 8).

## Solution

<!-- **Approach:** -->

{{< file "python" "nth_fibonacci.py" >}}

```py
def nthFib(n):
    if n <= 1:
        return n
    return nthFib(n - 1) + nthFib(n - 2)

for _ in range(int(input())):
    n = int(input())
    print(nthFib(n))
```
