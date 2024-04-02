---
title: Array Mirror
description:
reading_time: 3 min
author: Gautam Ankoji
---

##### Problem Statement

Given an array of integers, determine if the array is the same when read forwards and backward.

</br>

**Input Format:**

* The first line contains an integer T, the number of test cases (1 ≤ T ≤ 10<sup>3</sup>).
* The first line of each test case contains two space-separated integers N (1 ≤ N ≤ 10<sup>5</sup>) and the number of elements in the array, and Ai (1 ≤ Ai ≤ 10<sup>5</sup>), the elements of the array.

**Output Format:**

* For each test case, print "YES" if the array elements are the same when read forwards and backwards. Otherwise, print "NO".

**Constraints:**

* The array contains only integers.

{{< input-output

input="2</br>5</br>1 2 3 2 1</br>4</br>1 2 3 4"

output="YES</br>NO" >}}

**Explanation:**

* In the first test case, the array {1, 2, 3, 2, 1} is the same when read forwards and backward.
* In the second test case, the array {1, 2, 3, 4} is not the same when read forwards and backward.

## Solution

<!-- **Approach:** -->

{{< file "python" "array_mirror.py" >}}

```py
# write your code here
```
