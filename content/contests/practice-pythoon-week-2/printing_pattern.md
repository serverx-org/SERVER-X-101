---
title: Printing Pattern
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You will be given a number N denoting the number of rows.
Print the following type Pattern.

```txt
N = 5
* * * * *
* * * *
* * *
* *
*
```

</br>

**Input Format:**

An integer N denoting the number of rows.

**Output Format:**

Print the following type of pattern:

**Constraints:**

* N is an integer greater than or equal to 1.

{{< input-output

input="3"

output="\* \* \*</br>\* \*</br>\*" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
n = int(input())
for i in range(n, 0, -1):
    print('* ' * i)
```
