---
title: Dmart
description:
reading_time: 4 min
author: Gautam Ankoji
---

##### Problem Statement

Roy is a small kid who loves chocolates a lot. Whenever he goes to Dmart, he buys many chocolates as they are reasonably priced. Yesterday, Roy's mom took him to Dmart, and as usual, he bought a lot of chocolates. Chocolates available in Dmart with their prices are listed below:

* Perk: ₹10
* 5star: ₹20
* Dairymilk: ₹15
* Chocos: ₹30
* Bournville: ₹145
* Kitkat: ₹60

After reaching home, Roy wants to calculate his total bill. Your task is to help him find the bill amount.

</br>

**Input Format:**

* The first line contains an integer T, the number of test cases (1 ≤ T ≤ 10).
* Each test case has two lines:
  * The first line contains an integer N, the number of bills Roy has.
  * The second line contains N space-separated strings representing the types and quantities of chocolates purchased in a single bill (e.g., "2 Perk 1 Kitkat").

**Output Format:**

* For each test case, print the total bill amount for each bill in a new line.

**Constraints:**

* 1 ≤ N ≤ 10
* 1 ≤ Quantity ≤ 10

{{< input-output

input="1</br>4</br>Perk 1</br>Kitkat 2</br>5star 3</br>Bournville 2"

output="480" >}}

**Explanation:**

* In the first test case, Roy buys 1 Perk chocolates (1*10 = 10), 2 Kitkat (2* 60 = 120), 3 5start (3*20 = 60) and 2 Bournville (2*145 = 290) for a total of 10 + 120 + 60 + 290 = 480.

## Solution

<!-- **Approach:** -->

{{< file "python" "dmart.py" >}}

```py
choco_prices = {
    "Perk": 10,
    "5star": 20,
    "Dairymilk": 15,
    "Chocos": 30,
    "Bouniville": 145,
    "KitKat": 60
}

for _ in range(int(input())):
    n = int(input())
    tot_price = 0
    for i in range(n):
        v, q = input().split()
        q = int(q)
        tot_price += choco_prices[v]*q
    print(tot_price) 
```
