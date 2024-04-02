---
title: First Digit Combination
description:
reading_time: 3 min
author: Gautam Ankoji
---

#### Problem Statement

Given an array A of size N that contains non-negative integers, determine whether the number formed by selecting the first digit of all the N numbers is divisible by 3.

</br>

**Input Format:**

* The first line contains an integer T denoting the number of test cases (1 ≤ T ≤ 10).
* The first line of each test case contains a single integer N denoting the size of the array A (1 ≤ N ≤ 10^3).
* The second line of each test case contains N space-separated integers representing the elements of the array A (0 ≤ A[i] ≤ 10^3).

**Output Format:**

* For each test case, print "YES" if the number formed by selecting the first digit of all the N numbers is divisible by 3. Otherwise, print "NO". 

**Constraints:**

* The array A contains only non-negative integers.

{{< input-output

input="2</br>3</br>123 456 789</br>4</br>101 202 303 404"

output="YES</br>NO" >}}

**Explanation:**

* In the first test case, the first digits of the numbers {123, 456, 789} are {1, 4, 7}. The number formed by combining these digits (147) is divisible by 3.
* In the second test case, the first digits of the numbers {101, 202, 303, 404} are {1, 2, 3, 4}. The number formed by combining these digits (1234) is not divisible by 3.

## Solution

<!-- **Approach:** -->

{{< file "python" "first_digit_combination_of_number.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    a = list(map(int, input().split()))
    nums = [int(str(num)[0]) for num in a]
    res = int("".join(map(str, nums)))
    print("YES" if res % 3 == 0 else "NO")
```
