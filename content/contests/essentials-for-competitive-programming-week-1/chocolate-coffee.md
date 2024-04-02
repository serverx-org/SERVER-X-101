---
title: Chocolate Coffee
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Suresh is quite fond of visiting cafes and has done so many times. Lately, he feels like his recent cafe visits have become repetitive. To address this, Suresh decided to conduct a small study.

Initially, Suresh assigned unique indices to all the cafes he visited. He then recorded the indices of the cafes he visited in sequential order. Now, Suresh seeks to identify a cafe where his most recent visit was further in the past compared to his most recent visits to all other cafes in his sample data. In other words, he wants to pinpoint a cafe where he hasn't been for a long time.

Can you assist Suresh in finding that cafe?

**Input Format**

* The first line of the input gives the number of test cases, T.
* The first line of each test case contains a single integer N, the number of cafe indices written by Suresh.
* The second line of each test case contains N space-separated integers, indices of cafes visited by Suresh. Suresh could visit some cafes more than once. Note that in the numbering, some indices could be omitted.

**Output Format**

* For each test case, output the index of the cafe that Suresh hasn't visited for the longest time.

**Constraints**

* 1 ≤ T ≤ 10
* 1 ≤ N ≤ 2 * 10^5
* 1 ≤ A[i] ≤ 2 * 10^5

{{< input-output

input="2</br>5</br>1 3 2 1 4</br>8</br>3 1 4 1 5 9 2 6"

output="1</br>3" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "chocolate_coffee.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    a = list(map(int, input().split()))
    print(a[0])
```
