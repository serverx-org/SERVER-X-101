---
title: Testing RxJS Observables with Jest
publishdate: 2018-08-18T18:39:19-07:00
lastmod: 2018-08-18T18:39:19-07:00
author: Gautam Ankoji
draft: false
description: Learn how to write unit tests for RxJS Observables using Jest.
tags: 
    - jest
    - rxjs

---

Testing RxJS Observables with Jest is straightforward and allows you to ensure your asynchronous data streams behave as expected. Below are examples of how to write unit tests for RxJS Observables using Jest.

## Testing a Single Emitted Value

Consider an Observable that emits a single string value. You can create this Observable using the `of` operator. It's essential to use the `done` keyword to inform Jest that the test is asynchronous and should wait for completion.

```typescript
import { of } from 'rxjs';

test('the observable emits "hello"', done => {
  of('hello').subscribe(data => {
    expect(data).toBe('hello');
    done();
  });
});
```

## Testing a Complex Stream

For Observable streams that emit multiple values, listen for the `complete` signal to be sent. If the Observable stream never completes, use operators like `takeWhile` to force completion and prevent Jest from timing out.

```typescript
import { from } from 'rxjs';

test('the observable emits 100, then 200, then 300', done => {
  let last = 100;
  from([100, 200, 300]).subscribe({
    next: val => {
      expect(val).toBe(last);
      last += 100;
    },
    complete: () => done(),
  });
});
```

These examples demonstrate how to effectively test RxJS Observables using Jest, ensuring your asynchronous data streams behave correctly.
