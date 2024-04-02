---
title: Decimal to Binary
description: Problem 3
reading_time: 4 min
---


##### Problem Statment

Given a decimal number,  convert it to its binary representation.

</br>

**Input Format:**

* The first line contains an integer, **T**, representing the number of test cases (1 <= T <= 9).

* Each test case contains a single positive integer, **N**, on a new line (1 <= N <= 10<sup>9</sup>).

**Output Format:**

* For each test case, print the binary representation of the corresponding decimal number N on a new line.

**Constraints:**

* 1 <= T <= 9
* 1 <= N <= 10<sup>9</sup> (one billion)

{{< input-output

input="2</br>10</br>100"

output="1010</br>1100100" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "decimal_to_binary.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    print(bin(n)[2:])
```
