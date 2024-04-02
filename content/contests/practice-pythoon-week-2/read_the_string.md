---
title: Read the String
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You are given a string. Read the string and print it again. The string may
contain up to 100 characters.

</br>

**Input Format:**

A single string containing up to 100 characters.

**Output Format:**

Print the same string that was given as input.

**Constraints:**

* Time Limit: 50 seconds for each input test case.
* Memory Limit: 256 MB.
* Source Limit: 1024 KB.

{{< input-output

input="Hello, world!"

output="Hello, world!" >}}

**Sample Input:**

```txt
Hello, world!
```

**Sample Output:**

```txt
Hello, world!
```

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
s = input()
print(s)
```
