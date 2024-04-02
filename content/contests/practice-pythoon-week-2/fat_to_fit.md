---
title: Fat to Fit
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Moses lives on Earth 101 where each month has exactly 30 days and each week has exactly 7 days. As Moses was fat, everyone used to tease him. One day, Moses decided to get fit. He laid out a plan and started working out every day. After a few months, he became the fittest guy on the whole planet.

Sumanth, who is also fat, heard the story of Moses and decided to get fit as well. However, Sumanth didn't know how to proceed. So, he approached Moses for advice.

```md
Moses explained that he did a certain number of reps for each set and did a certain number of sets per day. Then, he added one rep to each set every week for several months and never missed a workout.
```

Sumanth understood what he had to do to become fit. He wanted to count the total number of reps he would be doing for the following months, but he needed your help!

</br>

**Input Format:**

The first line contains a single integer, denoting the number of test cases (**t**).

Each test case contains three space-separated integers:

* **r**: the number of reps Moses did for each set in the beginning
* **s**: the number of sets Moses did per day in the beginning
* **m**: the number of months Sumanth will be working out

**Output Format:**

For each test case, print a single line containing the total number of pushups Sumanth will be doing in the given **m** months.

**Constraints:**

* 0 ≤ **t** ≤ 1000001
* 0 ≤ **r**, **s**, **m** ≤ 100001

{{< input-output

input="1</br>1 3 6"

output="7215" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
for _ in range(int(input())):
    r, s, m = map(int, input().split())
    d = m * 30 // 7
    remain_reps = m * 30 % 7
    tot_reps = 0
    week_reps = r
    for _ in range(d):
        tot_reps += 7 * week_reps * s
        week_reps += 1
    tot_reps += remain_reps * week_reps * s
    print(tot_reps)
```
