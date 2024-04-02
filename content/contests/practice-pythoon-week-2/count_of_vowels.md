---
title: Count of Vowels
description:
topic_start: Practice Python Week 2
emoji: 📝
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You will be given a string. Print the count of vowels present in the given string.

</br>

**Input Format:**

Input contains a string S.

**Output Format:**

Print the count of vowels in the given string

**Constraints:**

1 <= |S| <= 1000

{{< input-output

input="vowels"

output="2" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
s = int(input())
print(sum(1 for c in s if c.lower() in 'aeiouAEIOU'))
```
