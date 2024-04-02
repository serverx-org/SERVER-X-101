---
title: CR7 and LEO
description:
reading_time: 4 min
author: Gautam Ankoji
---

##### Problem Statement

Cristiano Ronaldo and Lionel Messi are two students who are studying at VIIT_CSE. They are good friends and also hold a good rivalry for the top spot in coding competitions conducted by HackerEarth VIIT. One day, they came across this question on strings. The question is to reverse the order of vowels in the string without changing the order of other characters. You being a mutual friend of both, are also trying to secure the top spot. So, solve the question!!! What are you waiting for?

**Input Format:**

* The first line contains T, the number of test cases.
* Each test case contains N, the size of the string followed by string S.

**Output Format:**

* Print the string according to the question.

**Constraints:**

* 1 <= T <= 10
* 1 <= N <= 10<sup>5</sup>

All characters are lowercase Latin alphabets.

{{< input-output

input="1</br>5</br>axyze"

output="exyza" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "cr7_and_leo.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    s = input()
    vowels = set('aeiou')
    s = list(s)
    left, right = 0, n-1
    while(left < rigth):
        if s[left] not in vowels:
            left += 1
        elif s[right] not in vowels:
            right -= 1
        else:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1
    print(''.join(s))
```
