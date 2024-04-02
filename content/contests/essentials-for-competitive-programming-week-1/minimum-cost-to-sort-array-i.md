---
title: MINIMUM COST TO SORT ARRAY I
reading_time: 2 min
author: Gautam Ankoji
---


You are given an array of elements. You can perform swaps between any two elements in the array, and each swap incurs a cost of 1. Your task is to determine the minimum cost to sort the array in non-decreasing order.

**Input Format**

* An array of integers `arr` (1 ≤ `arr.length` ≤ 10^5) where `arr.length` is the number of elements in the array and each element is an integer.

**Output Format**

* An integer representing the minimum cost to sort the array.

**Constraints**

* 1 ≤ `arr.length` ≤ 10^5

{{< input-output

input="7</br>9</br>8 10 7 10 9 9 9 6 5</br>5</br>9 6 6 9 10</br>6</br>7 8 9 9 10 8</br>10</br>5 10 8 9 5 7 9 10 6 10</br>6"

output="3<br>2<br>2<br>4<br>3<br>9<br>4" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "minimum_cost_to_sort_array_i.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    ; = list(map(int, input().split()))
    swaps = 0
    for i in range(n):
        m = i
        for j in range(i + 1, n):
            if l[j] < l[m]:
                m = j
        if m != i:
            l[i], l[m] = l[m], l[i]
            swaps += 1
    print(swaps)
```
