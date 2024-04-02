---
title: Find the Odd one
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Surya is fond of shoes and has lots of pairs of shoes. He came to know that his dog spoiled one of his shoes, and he wants you to find the shoe that is missing. Each shoe has a specific number (1-9) indicating the type of shoe.

Given a string containing a list of shoes Surya has (he may have multiple pairs of the same type), find the shoe which has no pair.

</br>

**Input Format:**

* The first line consists of a string consisting of numbers (1-N).

**Constraints:**

* 1 <= len(string) <= 200

{{< input-output

input="12132"

output="3" >}}

**Explanation:**

For string: 12132

* Counting the occurrences of each shoe type:
  * Type 1: 2 occurrences (pair)
  * Type 2: 2 occurrences (pair)
  * Type 3: 1 occurrence (no pair)
* From the given sequence, we can see that the shoe of type 3 is not part of a pair.
* Therefore, the program should output 3, indicating that the shoe of type 3 does not have a pair.

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
s = input()
cnt_shoe = {}
for i in s:
    cnt_shoe[i] = cnt_shoe.get(i, 0) + 1
for res, cnt in cnt_shoe.items():
    if cnt & 1:
        print(res)
```
