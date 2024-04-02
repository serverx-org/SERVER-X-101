---
title: The Magical Pond
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Out of the blue, a magical pond appeared in VIIT and there is something special about this pond. When a person throws X grams of stone into the water, the pond repels the stone back to you if the weight X is a prime number. You have N stones to throw into the pond and their weights are represented in an array X[1..N]. You need to find out how many stones will be repelled back to you.

**Input Format:**

* The first line contains two integers T and N separated by a space, denoting the number of test cases and the number of stones respectively.
* The second line contains N space-separated integers representing the weights of N stones.

**Output Format:**

* For each test case, print the number of stones that will be repelled back upon throwing into the pond in a new line.

**Constraints:**

* 1 ≤ T ≤ 10
* 1 ≤ N ≤ 10<sub>3</sub>
* 1 ≤ X[i] ≤ 10<sub>5</sub>

{{< input-output

input="1</br>5</br>1 2 3 4 5"

output="3" >}}

## Solution

<!-- **Approach:** -->

{{< file "cpp" "the_magical_pond.cpp" >}}

```cpp
#include <bits/stdc++.h>
using namespace std;
#define size 100000

int main() {
    int t;
    cin >> t;
    while(t--) {
        int n, res = 0;
        cin >> n;
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        for (int num : arr) {
            if (num <= 1) {
                continue;
            }
            bool prime = true;
            for (int i = 2; i <= sqrt(num); i++) {
                if (num % i == 0) {
                    prime = false;
                    break;
                }
            }
            if (prime)
                res++;
        }
        cout << res << endl;
    }
    return 0;
}
```
