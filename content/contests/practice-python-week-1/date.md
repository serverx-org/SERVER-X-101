---
title: Date?
description:
reading_time: 3 min
author: Gautam Ankoji
---

## Jack and Rose: Pangrams

Jack wants to ask Rose out on a date. He is planning to take her to a movie called "Titanic" and then have a candlelight dinner with her but Rose is so busy with her coding assignment and needs to complete it first. You being a friend of Jack and good at coding are asked to complete the assignment on her behalf.

The assignment is to find the total no of pangrams from N strings.

**Input Format:**

The first line contains N, no of strings

Followed by N strings

**Output Format:**

Tutal number of Pangrams

**Constraints:**

1 <= N <= 10<sup>5</sup>

{{< input-output

input="2</br>nikolatesla</br>hackerearth"

output="0" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "date.py" >}}

```py
cnt = 0
for _ in range(int(input())):
    s = input()
    unique = set()
    for x in s:
        if x.isalpha():
            unique.add(x.lower())
    if len(unique) == 26:
        cnt += 1
print(cnt)
```
