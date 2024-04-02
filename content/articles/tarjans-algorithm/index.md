---
title: Tarjan's Algorithm
description: Tarjan’s algorithm to print all SCCs
author: Gautam Ankoji
lastmod: 2024-02-02T22:08:13-07:00
tags:
    - graphs
    - dsa
    - gautamankoji
---

{{< drop-cap "A directed graph exhibits strong connectivity when every pair of vertices is connected by a path. A strongly connected component (SCC) within such a graph is a largest subgraph where every vertex is reachable from every other vertex. For instance, in the given graph, there are three SCCs." >}}

**Algorithm**:

- Tarjan's algorithm utilizes DFS (Depth First Search) traversal.
- It maintains three arrays: `disc[]` to store discovery time of vertices, `low[]` to store the earliest visited vertex reachable from subtree rooted with current vertex, and `stackMember[]` to keep track of vertices present in the stack.
- It also uses a stack `st` to store visited vertices.
- The algorithm iterates through each vertex and calls `SCCUtil` for vertices not yet visited.
- `SCCUtil` performs DFS traversal, updating discovery times and lowest reachable ancestor.
- When the vertex is part of an SCC, it pops vertices from the stack and prints them until the current vertex is reached again.

### Implementation of Tarjan’s algorithm to print all SCCs

{{< tabgroup >}}

{{< tab icon="python" name="Python">}}

```python
from collections import defaultdict

class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.graph = defaultdict(list)
        self.Time = 0
    def addEdge(self, u, v):
        self.graph[u].append(v)
    def SCCUtil(self, u, low, disc, stackMember, st):
        disc[u] = self.Time
        low[u] = self.Time
        self.Time += 1
        stackMember[u] = True
        st.append(u)
        for v in self.graph[u]:
            if disc[v] == -1:
                self.SCCUtil(v, low, disc, stackMember, st)
                low[u] = min(low[u], low[v])
            elif stackMember[v] == True:
                low[u] = min(low[u], disc[v])
        w = -1
        if low[u] == disc[u]:
            while w != u:
                w = st.pop()
                print(w, end=" ")
                stackMember[w] = False
            print()
    def SCC(self):
        disc = [-1] * (self.V)
        low = [-1] * (self.V)
        stackMember = [False] * (self.V)
        st = []
        for i in range(self.V):
            if disc[i] == -1:
                self.SCCUtil(i, low, disc, stackMember, st)

g1 = Graph(5)
g1.addEdge(1, 0)
g1.addEdge(0, 2)
g1.addEdge(2, 1)
g1.addEdge(0, 3)
g1.addEdge(3, 4)
print("SSC in first graph ")
g1.SCC()
g2 = Graph(4)
g2.addEdge(0, 1)
g2.addEdge(1, 2)
g2.addEdge(2, 3)
print("\nSSC in second graph ")
g2.SCC()

g3 = Graph(7)
g3.addEdge(0, 1)
g3.addEdge(1, 2)
g3.addEdge(2, 0)
g3.addEdge(1, 3)
g3.addEdge(1, 4)
g3.addEdge(1, 6)
g3.addEdge(3, 5)
g3.addEdge(4, 5)
print("\nSSC in third graph ")
g3.SCC()
g4 = Graph(11)
g4.addEdge(0, 1)
g4.addEdge(0, 3)
g4.addEdge(1, 2)
g4.addEdge(1, 4)
g4.addEdge(2, 0)
g4.addEdge(2, 6)
g4.addEdge(3, 2)
g4.addEdge(4, 5)
g4.addEdge(4, 6)
g4.addEdge(5, 6)
g4.addEdge(5, 7)
g4.addEdge(5, 8)
g4.addEdge(5, 9)
g4.addEdge(6, 4)
g4.addEdge(7, 9)
g4.addEdge(8, 9)
g4.addEdge(9, 8)
print("\nSSC in fourth graph ")
g4.SCC()

g5 = Graph(5)
g5.addEdge(0, 1)
g5.addEdge(1, 2)
g5.addEdge(2, 3)
g5.addEdge(2, 4)
g5.addEdge(3, 0)
g5.addEdge(4, 2)
print("\nSSC in fifth graph ")
g5.SCC()
```

{{< /tab >}}

{{< tab icon="cpp" name="C++" >}}

```cpp
#include <bits/stdc++.h>
#define NIL -1
using namespace std;

class Graph {
    int V;
    list<int> *adj;
    void SCCUtil(int u, int disc[], int low[], stack<int> *st, bool stackMember[]);

  public:
    Graph(int V);
    void addEdge(int v, int w);
    void SCC();
};

Graph::Graph(int V) {
    this->V = V;
    adj = new list<int>[V];
}

void Graph::addEdge(int v, int w) { adj[v].push_back(w); }

void Graph::SCCUtil(int u, int disc[], int low[], stack<int> *st, bool stackMember[]) {
    static int time = 0;
    disc[u] = low[u] = ++time;
    st->push(u);
    stackMember[u] = true;
    list<int>::iterator i;
    for (i = adj[u].begin(); i != adj[u].end(); ++i) {
        int v = *i;
        if (disc[v] == -1) {
            SCCUtil(v, disc, low, st, stackMember);
            low[u] = min(low[u], low[v]);
        } else if (stackMember[v] == true)
            low[u] = min(low[u], disc[v]);
    }
    int w = 0;
    if (low[u] == disc[u]) {
        while (st->top() != u) {
            w = (int)st->top();
            cout << w << " ";
            stackMember[w] = false;
            st->pop();
        }
        w = (int)st->top();
        cout << w << "\n";
        stackMember[w] = false;
        st->pop();
    }
}

void Graph::SCC() {
    int *disc = new int[V];
    int *low = new int[V];
    bool *stackMember = new bool[V];
    stack<int> *st = new stack<int>();
    for (int i = 0; i < V; i++) {
        disc[i] = NIL;
        low[i] = NIL;
        stackMember[i] = false;
    }
    for (int i = 0; i < V; i++)
        if (disc[i] == NIL)
            SCCUtil(i, disc, low, st, stackMember);
}

int main() {
    cout << "\nSCCs in first graph \n";
    Graph g1(5);
    g1.addEdge(1, 0);
    g1.addEdge(0, 2);
    g1.addEdge(2, 1);
    g1.addEdge(0, 3);
    g1.addEdge(3, 4);
    g1.SCC();
    cout << "\nSCCs in second graph \n";
    Graph g2(4);
    g2.addEdge(0, 1);
    g2.addEdge(1, 2);
    g2.addEdge(2, 3);
    g2.SCC();
    cout << "\nSCCs in third graph \n";
    Graph g3(7);
    g3.addEdge(0, 1);
    g3.addEdge(1, 2);
    g3.addEdge(2, 0);
    g3.addEdge(1, 3);
    g3.addEdge(1, 4);
    g3.addEdge(1, 6);
    g3.addEdge(3, 5);
    g3.addEdge(4, 5);
    g3.SCC();
    cout << "\nSCCs in fourth graph \n";
    Graph g4(11);
    g4.addEdge(0, 1);
    g4.addEdge(0, 3);
    g4.addEdge(1, 2);
    g4.addEdge(1, 4);
    g4.addEdge(2, 0);
    g4.addEdge(2, 6);
    g4.addEdge(3, 2);
    g4.addEdge(4, 5);
    g4.addEdge(4, 6);
    g4.addEdge(5, 6);
    g4.addEdge(5, 7);
    g4.addEdge(5, 8);
    g4.addEdge(5, 9);
    g4.addEdge(6, 4);
    g4.addEdge(7, 9);
    g4.addEdge(8, 9);
    g4.addEdge(9, 8);
    g4.SCC();
    cout << "\nSCCs in fifth graph \n";
    Graph g5(5);
    g5.addEdge(0, 1);
    g5.addEdge(1, 2);
    g5.addEdge(2, 3);
    g5.addEdge(2, 4);
    g5.addEdge(3, 0);
    g5.addEdge(4, 2);
    g5.SCC();
    return 0;
}
```

{{< /tab >}}

{{< tab icon="java" name="Java" >}}

```java
import java.io.*;
import java.util.*;

class Graph {
  private int V;
  private LinkedList<Integer> adj[];
  private int Time;

  @SuppressWarnings("unchecked")
  Graph(int v) {
    V = v;
    adj = new LinkedList[v];
    for (int i = 0; i < v; ++i) adj[i] = new LinkedList();
    Time = 0;
  }

  void addEdge(int v, int w) {
    adj[v].add(w);
  }

  void SCCUtil(int u, int low[], int disc[], boolean stackMember[], Stack<Integer> st) {
    disc[u] = Time;
    low[u] = Time;
    Time += 1;
    stackMember[u] = true;
    st.push(u);
    int n;
    Iterator<Integer> i = adj[u].iterator();
    while (i.hasNext()) {
      n = i.next();
      if (disc[n] == -1) {
        SCCUtil(n, low, disc, stackMember, st);
        low[u] = Math.min(low[u], low[n]);
      } else if (stackMember[n] == true) {
        low[u] = Math.min(low[u], disc[n]);
      }
    }
    int w = -1;
    if (low[u] == disc[u]) {
      while (w != u) {
        w = (int) st.pop();
        System.out.print(w + " ");
        stackMember[w] = false;
      }
      System.out.println();
    }
  }

  void SCC() {
    int disc[] = new int[V];
    int low[] = new int[V];
    for (int i = 0; i < V; i++) {
      disc[i] = -1;
      low[i] = -1;
    }
    boolean stackMember[] = new boolean[V];
    Stack<Integer> st = new Stack<Integer>();
    for (int i = 0; i < V; i++) {
      if (disc[i] == -1) SCCUtil(i, low, disc, stackMember, st);
    }
  }

  public static void main(String args[]) {
    Graph g1 = new Graph(5);
    g1.addEdge(1, 0);
    g1.addEdge(0, 2);
    g1.addEdge(2, 1);
    g1.addEdge(0, 3);
    g1.addEdge(3, 4);
    System.out.println("SSC in first graph ");
    g1.SCC();
    Graph g2 = new Graph(4);
    g2.addEdge(0, 1);
    g2.addEdge(1, 2);
    g2.addEdge(2, 3);
    System.out.println("\nSSC in second graph ");
    g2.SCC();
    Graph g3 = new Graph(7);
    g3.addEdge(0, 1);
    g3.addEdge(1, 2);
    g3.addEdge(2, 0);
    g3.addEdge(1, 3);
    g3.addEdge(1, 4);
    g3.addEdge(1, 6);
    g3.addEdge(3, 5);
    g3.addEdge(4, 5);
    System.out.println("\nSSC in third graph ");
    g3.SCC();
    Graph g4 = new Graph(11);
    g4.addEdge(0, 1);
    g4.addEdge(0, 3);
    g4.addEdge(1, 2);
    g4.addEdge(1, 4);
    g4.addEdge(2, 0);
    g4.addEdge(2, 6);
    g4.addEdge(3, 2);
    g4.addEdge(4, 5);
    g4.addEdge(4, 6);
    g4.addEdge(5, 6);
    g4.addEdge(5, 7);
    g4.addEdge(5, 8);
    g4.addEdge(5, 9);
    g4.addEdge(6, 4);
    g4.addEdge(7, 9);
    g4.addEdge(8, 9);
    g4.addEdge(9, 8);
    System.out.println("\nSSC in fourth graph ");
    g4.SCC();
    Graph g5 = new Graph(5);
    g5.addEdge(0, 1);
    g5.addEdge(1, 2);
    g5.addEdge(2, 3);
    g5.addEdge(2, 4);
    g5.addEdge(3, 0);
    g5.addEdge(4, 2);
    System.out.println("\nSSC in fifth graph ");
    g5.SCC();
  }
}
```

{{< /tab >}}

{{< /tabgroup >}}
