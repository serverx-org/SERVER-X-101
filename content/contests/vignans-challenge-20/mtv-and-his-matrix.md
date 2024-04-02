---
title: MTV and his Matrix
reading_time: 2.5 min
author: Gautam Ankoji
---

##### Problem Statement

MTV is given a matrix with N rows and M columns. His target is to make all the elements in the matrix equal in one operation where he can subtract 1 from any element in the matrix. Find the minimum number of operations required to make all the elements equal.

**Input Format:**

* The first line contains two numbers N and M, the number of rows and columns in the matrix, respectively.
* The next N lines contain M elements each separated by a space.

**Output Format:**

* Print the minimum number of operations required to make all the matrix elements equal.

**Constraints:**

* 1 ≤ N, M ≤ 100
* 0 ≤ A[i][j] ≤ 100

{{< input-output

input="2 3</br>2 2 3</br>3 2 2"

output="2" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "mtv_and_his_matrix.py" >}}

```py
n, m = map(int, input().split())
mat = []
mn = 1000
for i in range(n):
    r = list(map(int, input().split()))
    mat.append(r)
    for i in r:
        if mn > i:
            mn = i
        else:
            mn = mn
cnt = 0
for row in mat:
    for i in row:
        cnt += i - mn
print(cnt)
```
