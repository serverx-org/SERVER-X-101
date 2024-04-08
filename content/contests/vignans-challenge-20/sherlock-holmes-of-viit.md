---
title: Sherlock Holmes of VIIT
lastmod: 2024-03-10
contest: Vignan Challenge 20
author: Gautam Ankoji
---

##### Problem Statement

You are the Viit famous detective and you are about to solve another case. The culprit is fond of puzzles and leaves you a puzzle to solve at a crucial point of your investigation. The puzzle asks you to find the total possible values of X where N-X-NX (where X is smaller than or equal to N and ^ denotes the XOR operator). There is no turning back and you must solve this puzzle at any cost! Solve the mystery and prove that you are superior to all the culprits.

**Input Format:**

* The first line contains a single integer T, the number of test cases.
* Each test case contains a single integer N on a separate line.

**Output Format:**

* Print the total number of possible values of X.

**Constraints:**

* 1 ≤ T ≤ 10
* 1 ≤ N ≤ 10<sub>12</sub>

{{< input-output

input="`</br>4"

output="4" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "sherlock_holmes_of_viit.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    res = 0
    print(sum(n + i == n ^ i for i in range(n + 1)))
```
