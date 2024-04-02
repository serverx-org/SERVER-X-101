---
title: Alice's Array Adventures
topic_start: PROBELMS ON ARRAYS
reading_time: 4 min
author: Gautam Ankoji
---

##### Problem Statement

Once upon a time in the land of mathematics, there was a bright and curious student named Alice. She loved tackling challenges and was assigned a fascinating task involving an array comprising integers. Initially, these integers were either 0 or 1.

Her task was to handle q queries, each coming in two distinct forms:

* **Type 1 Queries:** When Alice encountered a query of type 1, she needed to select a specific position x and switch the value of a[x] to 1 - a[x].
* **Type 2 Queries:** On encountering a query of type 2, she needed to print the kth largest value from the array.

Alice was given the array a and had to handle q queries. Can you help her?

**Input Format**

* The first line contains an integer T denoting the number of test cases.
* The first line of each test case contains two space-separated integers n and q, denoting the size of the array and the number of queries, respectively.
* The second line contains n space-separated integers describing the respective values of array a.
* The next q lines describe the queries in the following format. Each query contains two space-separated integers.
  * If the first integer is 1, the second integer denotes the value of x, and a[x] needs to be switched.
  * If the first integer is 2, the second integer denotes the value of k, and the kth largest element needs to be printed.

**Output Format**

* For each query of type 2, print the kth largest value on a new line.

**Constraints**

* 1 ≤ T ≤ 10
* 1 ≤ n, q ≤ 10000
* 0 ≤ a[i] ≤ 1

{{< input-output

input="1</br>2 5</br>0 1</br>1 1</br>2 1</br>1 0</br>2 1"

output="0</br>1" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "alices_array_adventures.py" >}}

```py
for _ in range(int(input())):
    n, q = map(int, input().split())
    a = list(map(int, input().split()))
    for i in range(q):
        t, v = map(int, input().split())
        if t == 1:
            if v >= n:
                a[n - 1] = 1 - a[n - 1]
            else:
                a[v] = 1 - a[v]
        elif t == 2:
            a.sort()
            if v > n:
                print(a[v])
            else:
                print(a[n - 1])
```
