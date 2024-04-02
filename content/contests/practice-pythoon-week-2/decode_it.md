---
title: Decode It
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Today, it's all the world of Cryptography. In every prestigious coding competition, there will be at least one question on Cryptography. So do we!

Cryptography is a combination of Cryptology and Cryptanalysis. Cryptology deals with encryption and decryption of messages. Cryptanalysis deals with analyzing how a message is encrypted and cracking the logic of encryption to decrypt it. At this instant, you should play the role of cryptanalyst. Your task is to analyze the given messages and crack the logic or pattern behind it, then write a code to decrypt it.

*Hint:*

* First think how they are encrypted and then go for decryption.
  * leolh → hello
  * rkaech → hacker
  * nhkit → think
  * cweit → twice
  * hiolmtrga → algorithm
  * bbaabbaa → aaaabbbb

</br>

**Input Format:**

* The first line consists of an integer T representing the number of test cases.
* The next T lines consist of a string S which should be decrypted.

**Output Format:**

* Print T decrypted strings, one per line.

**Constraints:**

* 1 < T < 10
* 1 <= |S| <= 1000000

{{< input-output

input="6</br>leolh</br>rkaech</br>nhkit</br>cweit</br>hiolmtrga</br>bbaabbaa"

output="hello</br>hacker</br>think</br>twice</br>algorithm</br>aaaabbbb" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
for _ in range(int(input())):
    s = input()
    n = len(s)
    res = ''
    for i in range(n // 2):
        res += s[n - 1 - i] + s[n // 2 - 1 - i]
    if n & 1:
        res += s[n // 2]
    print(res) 
```
