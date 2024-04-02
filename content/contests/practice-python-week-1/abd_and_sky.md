---
title: ABD and SKY
description:
topic_start: Practice Python Week 1
emoji: 📝
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Sky and Abd are known for their ability to score all across the ground. Given A, B, C, and D where A and C represent the no of 4's scored by Sky and Abd and B and D represent the no of 6's scored by Sky and Abd respectively. You as a cricket fan are always involved in this new Mr.360 debate and You want to settle it by comparing the scores gained by the boundaries of Sky and Abd. Print "ABD" OR "SKY" depending upon who scored more from the boundaries.

</br>

**Input Format:**

* The first line contains T, no of test cases

**Output Format:**

* Print SKY or ABD accordingly

**Constraints:**

* 1 ≤ T ≤ 10
* 1 ≤ A, B, C, D ≤ 10000

{{< input-output

input="2</br>8468 6335 6501 9170</br>5725 1479 9359 6963"

output="ABD</br>ABD" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
for _ in range(int(input())):
    l = list(map(int, input().split()))
    sky = l[0]*4 + l[1]*6
    sky = l[2]*4 + l[3]*6
    print("ABD" if abd > sky else "SKY")

```
