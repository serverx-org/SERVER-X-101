---
title: N + NN + NNN
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You will be given a number N, print N + NN + NNN value.

**Input Format:**

* The first line contains an integer T, the number of test cases (1 ≤ T ≤ 10).

**Output Format:**

* For each test case, print the number N N times in a separate line.

**Constraints:**

* 1 ≤ N ≤ 100

{{< input-output

input="2</br>3</br>5"

output="3</br>3</br>3</br>5</br>5</br>5" >}}

**Explanation:**

* In the first test case, N = 3, so the output is 3 printed three times.
* In the second test case, N = 5, so the output is 5 printed five times.

## Solution

<!-- **Approach:** -->

{{< file "python" "n_nn_nnn.py" >}}

```py
n = int(input())
print(n + n*n + n*n*n)
```
