---
title: 3 Idiots with Godly Luck
topic_start: TWENTIETH WIGNAN CHALLENGE
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You are playing the famous BUS game with your friend, where you need to say "BUS" for multiples of 5 instead of saying the number itself. So, the sequence goes:

(1), (2), (3), (4), (BUS) (6), (7), (8), (9), (BUS), ..., (N-1), (N)

You need to print this sequence in a slightly different matrix format, whose dimensions are N and M.

**Input Format:**

* The first line contains one integer, T, the number of test cases.
* Each test case contains two integers N and M on a separate line, denoting the number of rows and columns respectively.

**Output Format:**

Print the BUS sequence in matrix form with N x M elements.

**Constraints:**

* 1 ≤ T ≤ 10
* 10 ≤ N, M ≤ 10<sub>3</sub>

{{< input-output

input="1</br>3 3"

output="(1) (2) (3)</br>(4) (BUS) (6)</br>(7) (8) (9)" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "3_idiots_with_godly_luck.py" >}}

```py
for _ in range(int(input())):
    n, m = map(int, input().split())
    cnt = 1
    for i in range(n):
        res = []
        for j in range(m):
            res.append('(BUS)' if cnt % 5 == 0 else res.append(f'({cnt})'))
            cnt += 1
        print(' '.join(res))
```
