---
title: VALENTINE'S DAY
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You are about to propose to the love of your life but want it to be encrypted with a key. Basically, you are about to send a letter that is encrypted and the receiver is going to decrypt using the same key used for encryption. The encryption is done in the following way if key = 5.

**Encryption:**

* If the character is an alphabet:
  * If it is lowercase (a-z), shift it 5 letters forward.
    * 'a' becomes 'f'
    * 'f' becomes 'k'
    * 'k' becomes 'p'
    * 'p' becomes 'u'
    * 'u' becomes 'z'
    * 'z' becomes 'e'
  * If it is uppercase (A-Z), shift it 5 letters forward.
    * 'A' becomes 'F'
    * 'F' becomes 'K'
    * 'k' becomes 'P'
    * 'P' becomes 'U'
    * 'U' becomes 'Z'
    * 'Z' becomes 'E'
* If the character is not an alphabet, leave it as it is.

**Your Task:**

You are supposed to deliver this letter for the sake of your friend and you must decrypt it using the given key. So, what are you waiting for? Just decrypt the given N-sized text using the Key and become a hero in your friend's love story.

**Input Format:**

* The first line contains T, the number of test cases.
* Each test case consists of N, the size of the text, and Key followed by N lowercase Latin alphabets.

**Output Format:**

* For each test case, print the decrypted text.

**Constraints:**

* 1 ≤ T ≤ 100
* 1 ≤ N ≤ 100
* 0 ≤ Key ≤ 25
* 'a' ≤ each character ≤ 'z'

{{< input-output

input="2</br>10 5</br>hello world!</br>12 3</br>online test!"

output="mjqqt btwqi!</br>rqolqh whvw!" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "valentines_day.py" >}}

```py
for _ in range(int(input())):
    n, k = map(int, input().split())
    s = input()
    res = ''
    for c in s:
        if c.isalpha():
            if c.islower():
                b = ord('a')
            else:
                b = ord('A')
            res += chr((ord(c) - b + k) % 26 + b)
        else:
            res += c
    print(res)
```
