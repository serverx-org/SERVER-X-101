---
title: Paris Birthday
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Pari is celebrating her birthday and she has arranged a party for her friends and family members at her home tonight. She got a set of cards arranged in order as a gift. Now she wants to know the minimum number of cards that should be selected continuously such that the sum of the numbers on the cards should be greater than or equal to her age. If there is no such case then the minimum length is 0. As she is busy with her birthday celebrations, she asked you to find the minimum number of cards that should be selected.

**Input Format**

* The first line of the input contains T, the number of test cases.
* The next T lines contain two integers N and A denoting the number of cards and age of Pari respectively. 
* The next line contains the array elements of size N.

**Output Format**

* Print the length of the minimum continuous subarray. 

**Constraints**

* 1 <= T <= 10
* 1 <= N <= 10
* 1 <= A[i] <= 100

{{< input-output

input="2</br>5 10</br>1 2 3 4 5</br>4 7</br>1 2 3 1"

output="1</br>1" >}}

## Solution

<!-- **Approach:** -->

{{< file "python" "paris_birthday.py" >}}

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin >> t;
    while(t--) {
        int n, m;
        cin >> n >> m;
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        unordered_set<int> res;
        for (int num : arr) {
            if(num >= m) {
                res.insert(num);
            }
        }
        int cnt = res.size();
        (cnt >0) ? cout << "1" << endl; : cout << "0" << endl;
    }
    return 0;
}
```
