---
title: Aman's Array Sorting
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Aman has an array. He has the option to swap any two elements in the array with another or choose not to swap at all. Your task is to return the array after considering Aman's swaps.

**Input Format**

* An array of integers `arr` (1 ≤ arr.length ≤ 10^5) where `arr.length` is the number of elements in the array.
* The array is initially sorted.

**Output Format**

* An array of integers representing the sorted array after considering Aman's swaps.

**Constraints**

* 1 ≤ arr.length ≤ 10^5

{{< input-output

input="4</br>6</br>5 6 7 8 8 9</br>9</br>5 6 10 6 7 9 9 6 10</br>7</br>5 6 5 7 5 8 10</br>10</br>10 5 5 6 7 7 9 10 5 8"

output="YES</br>YES</br>NO</br>NO" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "amans_array_sorting.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    l = list(map(int, input().split()))
    for i in range(n - 1):
        for j in range(i + 1, n):
            l[i], l[j] = l[j], l[i]
            if all(l[i] <= l[i + 1] for i in range(len(l) - 1)):
                print("YES")
                break
            l[i], l[j] = l[j], l[i]
        else:
            continue
        break
    else:
        print("NO")
```
