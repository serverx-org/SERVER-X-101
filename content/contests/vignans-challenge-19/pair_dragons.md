---
title: Pair of Dragons
description: Problem 7
reading_time: 4 min
---

##### Problem Statement

In the world of Dragons, the power of a dragon can be modified by pairing up with another dragon. The common power of two dragons will be the product of their individual powers.  Given a list of dragons and their powers, you are tasked with finding the pair of dragons with the maximum possible power.

</br>

**Input Format:**

* The first line contains an integer T, the number of test cases.
* The first line of each test case contains an integer N, representing the number of dragons.
* The second line of each test case contains N space-separated integers representing the powers of the dragons.

**Output Format:**

* For each test case, print the powers of the pair of dragons that can have the maximum power in increasing order.  If no pair exists, print -1.

**Constraints:**

* 1 <= T <= 10
* 2 <= N <= 10<sup>5</sup>
* 1 <= power of a dragon <= 10<sup>5</sup>

{{< input-output

input="2</br>5</br>1 3 4 2 7</br>4</br>100 2 11 50"

output="14 7</br>100 50" >}}

**Explanation:**

* In the first test case, the maximum power is achieved by pairing the dragon with power 7 and the dragon with power 2 (7 * 2 = 14).
* In the second test case, the maximum power is achieved by pairing the dragon with power 100 and the dragon with power 50 (100 * 50 = 5000).

## Solution

<!-- **Approach:** -->

{{< file "python" "pair_dragons.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    l = list(map(int, input().split()))
    l.sort()
    res = ()
    mxHead = -1
    for i in range(n - 1):
        p = l[i]*l[i + 1]
        if p > mxHead:
            mxHead = p
            res = (li[i], l[i+1])
    print(*res if mxHead != -1 else -1)
```
