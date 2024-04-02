---
title: Managing Radial Pan Events in Flutter
lastmod: 2019-12-02T09:19:58-07:00
publishdate: 2019-12-02T09:19:58-07:00
author: Gautam Ankoji
draft: false
description: Learn how to determine the rotation of a wheel in Flutter using user pan gestures.
tags: 
    - flutter
    - ui
    - dart

github: https://github.com/server-x-101/216-flutter-ipod/blob/master/lib/wheel.dart
---

One UI element not natively supported in Flutter is a click wheel, rotary control, or radial knob. The following snippet demonstrates how to create a circular container and detect the direction (clockwise or counterclockwise) and velocity of user rotation.


Access the complete [source code](https://github.com/server-x-101/216-flutter-ipod/blob/master/lib/wheel.dart) for the wheel demo.

## Flutter Circular Pan Wheel

### Detecting Pan Gestures
 
Utilize a [GestureDetector](https://api.flutter.dev/flutter/widgets/GestureDetector-class.html) to encompass a circular container with a BoxShape.circle. Each pan event on the circle will generate data containing movement information.

{{< file "dart" "main.dart" >}}
```dart
int radius = 250;

GestureDetector(
    onPanUpdate: _panHandler,
    child: Container(
        height: radius * 2,
        width: radius * 2,
        decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: Colors.red,
        ),
    )
)
```

### Computing Rotational Movement

Divide the wheel into four separate quadrants: topRight, bottomRight, bottomLeft, and topLeft. Each quadrant allows four directions of movement: up, down, left, or right. Determine the change in movement by examining the *delta* and adjust it according to the quadrant.

The resulting value, `rotationalChange`, indicates clockwise rotation if positive, and counterclockwise if negative. Utilize this value to effect meaningful changes in the UI.

{{< file "dart" "main.dart" >}}
```dart
  void _panHandler(DragUpdateDetails d) {

    /// Determine pan location on the wheel
    bool onTop = d.localPosition.dy <= radius;
    bool onLeftSide = d.localPosition.dx <= radius;
    bool onRightSide = !onLeftSide;
    bool onBottom = !onTop;

    /// Determine pan movements
    bool panUp = d.delta.dy <= 0.0;
    bool panLeft = d.delta.dx <= 0.0;
    bool panRight = !panLeft;
    bool panDown = !panUp;

    /// Absolute change on axis
    double yChange = d.delta.dy.abs();
    double xChange = d.delta.dx.abs();

    /// Determine directional change on wheel
    double verticalRotation = (onRightSide && panDown) || (onLeftSide && panUp)
        ? yChange
        : yChange * -1;

    double horizontalRotation = (onTop && panRight) || (onBottom && panLeft) 
        ? xChange 
        : xChange * -1;

    // Compute total change
    double rotationalChange = verticalRotation + horizontalRotation; 

    bool movingClockwise = rotationalChange > 0;
    bool movingCounterClockwise = rotationalChange < 0;

    // Perform relevant actions based on computations
  }
```

### Incorporating Velocity

Enhance user experience by adding velocity, particularly if the UI element controls a scrollable view. The velocity increases proportionally to the speed of the user's panning motion. Simply multiply the rotational change by the delta distance.

{{< file "dart" "main.dart" >}}
```dart
double rotationalChange = (horz + vert) * d.delta.distance;
```
