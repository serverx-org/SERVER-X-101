---
title: Power of Negative Numbers
description: Problem 9
reading_time: 4min
---

##### Problem Statement

Raj loves negative numbers! He wants to analyze a group of numbers and find the total "negativity." In simpler terms, you need to calculate the sum of all negative numbers in the group. Additionally, if there are no negative numbers, Raj also wants to know how many numbers are in the group (their count).

</br>

**Input:**

* The first line contains a single integer, **T**, representing the number of test cases (1 <= T <= 10).
* Each test case starts with an integer, **N**, on a new line, indicating the number of elements in the group (1 <= N <= 10000).
* The next line contains N space-separated integers representing the numbers in the group.

**Output:**

* For each test case, print a single line containing two space-separated integers:
  * The first integer represents the count of negative numbers in the group.
  * The second integer represents the sum of all negative numbers (the "negativity").
  * If there are no negative numbers, print the count of elements (N) followed by a space and then "0" (zero).

**Constraints:**

* 1 <= T <= 10
* 1 <= N <= 10000

{{< input-output

input="1</br>5</br>-1 2 -3 4 -5"

output="3 -9" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "power_of_negative_numbers.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    l = list(map(int, input().split()))
    cnt = sum(1 for i in l if i < 0)
    sumCnt = sum(i for i in l if i < 0)
    print(cnt, sumCnt)
```
