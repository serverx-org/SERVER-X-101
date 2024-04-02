---
title: MTV and his Golden Cave
reading_time: 3 min
author: Gautam Ankoji
---

##### Problem Statement

MTV once accidentally came across a golden cave during his trekking. He was only left with K amount of energy when he saw the cave. There were two stacks of gold coins in the cave where each gold coin requires some amount of his energy to mine. First stack contains N gold coins and second one contains M gold coins. He knows the amount of energy required to mine all the coins.  Before leaving the cave, he can select one stack (out of the two) and mine the topmost gold coin from it.  

Your task is to help MTV by finding the maximum number of gold coins he can mine using his remaining K energy.

**Input Format:**

* The first line contains three integers N, M, K separated by a space, denoting the number of coins in first stack, the number of coins in second stack, and the amount of energy MTV has respectively.
* The second line contains N integers denoting the amount of energy required to mine the coins in first stack.
* The third line contains M integers denoting the amount of energy required to mine the coins in second stack.

**Output Format:**

* Print the maximum number of gold coins that MTV can mine using his remaining K energy.

**Constraints:**

* 1 ≤ N, M ≤ 200000
* 1 ≤ K ≤ 10<sub>9</sub>
* 1 ≤ Energy required to mine a coin ≤ 10<sub>9</sub>

{{< input-output

input="3 4 10</br>2 3 4</br>1 2 5 6"

output="7" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "mtv_and_his_golden_cave.py" >}}

```py
n, m, k = map(int, input().split())
s1 = list(map(int, input().split()))
s2 = list(map(int, input().split()))
res = 0
l = s1 + s2
l.sort()
for i in l:
    if i <= k:
        res += 1
print(res)
```
