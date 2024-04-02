---
title: POTD(Problem Of The Day)
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Guns, a code enthusiast, decided as part of his New Year's resolution to solve a Problem of the Day (POTD) on LeetCode daily. However, due to exams and his negligence, he forgot to solve the POTD on some days. You will be given 'N' the number of days completed from when he started. An array of size N will be given which contains 1 to indicate that he solved the POTD and 0 to Indicate that he missed the POTD. Can you help Guna determine his longest streak?

**Input Format**

* The first line of input comprehends a single integer T indicating the number of scenarios to be evaluated.
* Each subsequent line, constituting a test case, contains:
  * An integer N, size of the array.
  * Next line contains N numbers (0 or 1) separated by spaces.

**Output Format**

* Print Guna's longest streak.

**Constraints**

* 1 <= T <= 100
* 1 <= N <= 10<sub>4</sub>
* 0 <= Ai <= 1

{{< input-output

input="1</br>4</br>1 0 1 1"

output="2" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "problem-of-the-day.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    a = list(map(int, input().split()))
    print(max(len(x) for x in ''.join(map(str, a)).split('0')))
```
