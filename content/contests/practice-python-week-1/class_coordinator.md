---
title: Class Coordinator
description:
reading_time: 3.5 min
author: Gautam Ankoji
---


##### Problem Statement

Chefina is the new class coordinator of CSE. She records the height of every student and wants to sort the data in ascending order. You, being the CR of her class, are expected to help her in this task.

**Input Format:**

* The first line contains an integer T, the number of test cases.
* Each test case contains two lines:
  * The first line contains an integer N, the number of students in the class.
  * The second line contains N space-separated integers denoting the heights of the students.

**Output Format:**

* For each test case, print the heights of the students in ascending order in a single line.

**Constraints:**

* 1 ≤ T ≤ 10
* 1 ≤ N ≤ 1000
* 1 ≤ height ≤ 1000

{{< input-output

input="1</br>5</br>3 2 8 6 4"

output="2 3 4 6 8" >}}

**Explanation:**

* In the first test case, the heights of the students are {3, 2, 8, 6, 4}. The sorted heights are {2, 3, 4, 6, 8}.

## Solution

<!-- **Approach:** -->

{{< file "python" "class_coordinator.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    a = list(map(int, input().split()))
    a.sort()
    print(*a)
```
