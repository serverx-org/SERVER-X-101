---
title: THE NEXT CTO
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

CTO stands for Chief Technology Officer and the person holding this position is responsible for all the technical decisions taken by the organization. Sounds amazing, right? So assume that you are the CTO of VIIT Tech Solutions. One day you found a bug in the production environment and wanted to resolve it as soon as possible. The task is to find the total number of valley points present in a sequence of N numbers. A valley point is formed at index i if the value at i is lesser than both the neighboring values i-1 and i+1. There exist no valley points at the 1st index and Nth index. So find the total number of valley points.

**Input Format**

* The first line contains T, the number of test cases.
* Each test case contains N, the size of the array.
* Followed by N numbers.

**Output Format**

* Print the total number of valley points.

**Constraints**

* 1 <= T <= 10
* 1 <= N <= 10<sub>5</sub>
* -10<sub>9</sub> <= A[i] <= 10<sub>9</sub>

{{< input-output

input="3</br>5</br>1 4 3 2 1</br>4</br>1 2 3 1</br>8</br>7 4 3 6 5 1 2 3"

output="0</br>0</br>2</br>" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "the_next_cto.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    l = list(map(int, input().split()))
    cnt = 0
    if n < 3:
        print('0')
        break
    for i in range(1, n - 1):
        if l[i] < ;[i - 1] and l[i] < l[i + 1]:
            cnt += 1
    print(cnt)
```
