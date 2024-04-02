---
title: XOR Lost Number
description:
reading_time: 2.5 min
author: Gautam Ankoji
---

##### Problem Statement

Chefina has 2 numbers A and B. She created another number C which is the bitwise XOR of A and B. Here, ^ denotes the bitwise XOR operation. Chefina somehow lost track of A and now only has B and C. Now she needs your help to find the lost number A.

**Input Format:**

* The first line contains an integer T, the number of test cases (1 ≤ T ≤ 100).
* Each test case contains two space-separated integers B and C (0 ≤ B, C < 2<sup>31</sup>).

**Output Format:**

* For each test case, print the number A on a new line.

**Constraints:**

* 1 ≤ T ≤ 100
* 0 ≤ B, C < 2<sup>31</sup>

{{< input-output

input="2</br>2 3</br>0 0"

output="1</br>0" >}}

**Explanation:**

* In the first test case, B = 2 and C = 3. A = B ^ C (A = 2 ^ 3) = 1.
* In the second test case, B = 0 and C = 0. A = B ^ C (A = 0 ^ 0) = 0.

## Solution

<!-- **Approach:** -->

{{< file "python" "xor_lost_number.py" >}}

```py
for _ in range(int(input())):
    n, m = map(int, input().split())
    print(n ^ m)
```
