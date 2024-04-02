---
title: HEX-A-WESOME
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Your friend is very fond of hexadecimal numbers.  He always tries to convert decimal numbers into hexadecimal numbers. One day, in order to check if your friend is doing the conversions correctly, you gave him a number N and asked him to convert it. You are a genius in doing such conversions and are summoned to help him.

**Input Format:**

* The first line consists of a single integer T, denoting the number of test cases.
* Each test case contains a single integer N on a separate line.

**Output Format:**

* Print the equivalent hexadecimal representation of the number N.

**Constraints:**

* 1 ≤ T ≤ 10
* 1 ≤ N ≤ 10<sub>9</sub>

{{< input-output

input="1</br>10"

output="A" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "hex_awesome.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    print(hex(n)[2:].upper())
```
