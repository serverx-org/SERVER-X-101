---
title: Iconic Arrays
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

An iconic point in an array exists where the Kth element of the array is a multiple of K. Find the total iconic points of the array. Consider 1-based indexing for better results.

**Input Format**

* The first line contains T, the number of test cases.
* Each test case contains N, the size of the array.
* Followed by N space-separated integers.

**Output Format**

* Print the total count of iconic points of an array.

**Constraints**

* 1 <= T <= 10
* 1 <= N <= 10<sub>5</sub>
* 1 <= element <= 10<sub>9</sub>

{{< input-output

input="1</br>4 5</br>1 3 2 3"

output="2" >}}

## Solution

<!-- **Approach:** -->

{{< file "cpp" "iconic_arrays.cpp" >}}

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin >> t;
    while(t--) {
        int n;
        cin >> n;
        int arr[n];
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            if ((arr[i] % (i + 1)) == 0) {
                cnt++;
            }
        }
        cout << cnt << endl;
    }
    return 0;
}
```
