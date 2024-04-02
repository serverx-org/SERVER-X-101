---
title: List of Lists
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You are given a list of lists. Find the list whose sum of elements is the highest.

{{< input-output

input="3</br>1 2 3</br>4 5 6</br>7 8 9"

output="7 8 9" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "list_of_lists.py" >}}

```py
n = int(input())
l = [list(map(int, input().split())) for _ in range(n)]
print(*max(l, key=sum))
```
