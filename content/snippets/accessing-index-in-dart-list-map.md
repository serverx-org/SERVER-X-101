---
title: Accessing Index in Dart List.map()
lastmod: 2021-05-06T07:55:05-07:00
publishdate: 2019-12-21T07:55:05-07:00
author: Gautam Ankoji
draft: false
description: Learn how to access the iteration index when using the map method on a Dart List.
tags: 
    - flutter
    - dart

---

The following guide demonstrates how to access the index during iteration when utilizing [List.map](https://api.dartlang.org/stable/2.6.1/dart-core/Iterable/map.html) in Dart. This is frequently needed in Flutter when mapping a list of values to widgets.

## Problem

In Dart, unlike JavaScript, directly accessing the index of a list during a `List.map` operation is not straightforward.

{{< file "dart" "main.dart" >}}
```dart
List myList = ['a', 'b', 'c'];

myList.map((val, index) {
    // Index access does not work!
    // Which index am I on?
})
```

## Solutions

Various methods exist to access the index when iterating over a list.

### Using Map Entries

Convert the `List` to a `Map`, then map the [entries](https://api.dartlang.org/stable/2.0.0/dart-core/Map/entries.html) containing the key/value pairs. Each key in the map represents the index of the original list.

{{< file "dart" "main.dart" >}}
```dart
myList.asMap().entries.map((entry) {
    int idx = entry.key;
    String val = entry.value;

    return something;
}
```

### Generating a Fixed Range List

For lists with a fixed length, it may be more efficient to generate a single list once. Create a ranged list with the same length as the original list, i.e., `[0, 1, 2, ..., n]`.

```dart
final List fixedList = Iterable<int>.generate(myList.length).toList();

fixedList.map((idx) {
    String val = myList[idx];

    return something;
}
```

### Finding the Index of Unique Values

Access the index of a specific value by searching for it with [List.indexOf](https://api.dartlang.org/stable/2.6.1/dart-core/List/indexOf.html), which returns the index of the first match. This approach is most predictable when all values are unique. Ensuring uniqueness throughout the list can be achieved with a [Set](https://api.dartlang.org/stable/2.6.1/dart-core/Set-class.html).

```dart
final List uniqueList = Set.from(myList).toList();

uniqueList.map((val) {
    String idx = uniqueList.indexOf(val);

    return something;
});
```
