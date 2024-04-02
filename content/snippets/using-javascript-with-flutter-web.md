---
title: Using JavaScript with Flutter Web
publishdate: 2020-04-19T08:00:17-07:00
lastmod: 2020-04-19T08:00:17-07:00
author: Gautam Ankoji
draft: false
description: Learn how to interoperate between JavaScript and Dart in Flutter Web applications.
# type: articles
tags: 
    - flutter
    - javascript

---

[Flutter Web](https://flutter.dev/web) enables the development of progressive web apps (PWAs) using Dart. However, to access browser APIs or integrate with existing JavaScript code, you'll need to interoperate between Dart and JavaScript. Below, we explore how to achieve this in a Flutter web app.

## Interoperating JavaScript with Dart

[Dart.js](https://api.dart.dev/stable/2.7.2/dart-js/dart-js-library.html) is a built-in library that facilitates communication between Dart and JavaScript.

### Adding JavaScript Functions

1. Create a JavaScript file (`app.js`) in the `web` directory.
2. Define functions or variables on the `window` object.

```javascript
function alertMessage(text) {
    alert(text);
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}
```

3. Include the JavaScript file in the HTML document's head using a `<script>` tag with the `defer` attribute to ensure it loads after the HTML body.

```html
<head>
    <script src="app.js" defer></script>
</head>
```

### Calling JavaScript Functions from Dart

1. Import the `dart:js` library in your Dart code.
2. Use the `callMethod` method to invoke JavaScript functions.

```dart
import 'dart:js' as js;

js.context.callMethod('alertMessage', ['Flutter is calling JavaScript!']);
```

You can pass arguments from Dart to JavaScript functions using the second parameter of `callMethod`.

```dart
js.context.callMethod('logger', [_someFlutterState]);
```

### Accessing JavaScript Objects in Dart

If you have data in JavaScript that you need to access in Dart, you can convert JSON-serializable JavaScript objects for use in Dart.

1. Define a JavaScript object.

```javascript
window.state = {
    hello: 'world'
}
```

2. Convert the JavaScript object to a Dart object using `JsObject.fromBrowserObject`.

```dart
import 'dart:js' as js;

var state = js.JsObject.fromBrowserObject(js.context['state']);
print(state['hello']); // Output: world
```

This way, you can seamlessly integrate JavaScript functionality and data with your Flutter web application.
