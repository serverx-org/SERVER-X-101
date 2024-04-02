---
title: Label Box
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Kiran is working at a doll factory and his job is to count the total number of boxes that are packed on that day. Since he forgets things easily, he writes the numbers on the boxes. Sometimes he forgets the numbers that are already written and repeats a number. All the boxes are parked on that day and stored in a storage room in a random arrangement.

Given the numbers written on the boxes, you have to find the number that is repeated and the number that is missing.

**Input Format**

* An integer T denoting the number of test cases.
* For each test case:
  * The first line contains an integer N denoting the number of boxes.
  * The second line contains N space-separated integers denoting the numbers written on the boxes.

**Output Format**

For each test case, print the repeated number and the missing number.

**Constraints**

* 1 <= T <= 100
* 2 <= N <= 7*10<sub>5</sub>
* 1 <= A[i] <= 10<sub>9</sub>

{{< input-output

input="2</br>5</br>1 2 3 2 1</br>4</br>1 3 4 2"

output="1 2 9</br>0" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "label_box.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    b = list(map(int, input().split()))
    ans2, ans1 = 0, 0
    ans2 = ((n*(n + 1)) // 2) - sum(set(b))
    ans1 = set([i for i in b if b.count(i) > 1])
    print(*list(ans1), ans2)
```
