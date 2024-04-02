---
title: Passing Data to Modals in Ionic 4
publishdate: 2018-09-22T23:12:09-07:00
lastmod: 2018-09-22T14:25:09-07:00
draft: false
author: Gautam Ankoji
description: Learn how to pass data to an Ionic 4 modal using componentProps.
tags:
  - ionic
---

Below is a guide on utilizing `componentProps` to transmit data into an [Ionic 4 modal](https://beta.ionicframework.com/docs/api/modal/). This method is particularly beneficial for updating dynamic content.

## Passing Data to Ionic 4 Modals

In previous versions of Ionic, the `NavParams` class was employed to access passed data. However, with Ionic 4, this approach is deprecated and discouraged, although it remains functional. Version 4 introduces a more straightforward method for data sharing with modals.

### Parent Component

The parent component initiates the modal presentation and forwards data into it.

```typescript
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component()
export class SomeParentComponent {
  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { 
        foo: 'hello',
        bar: 'world'
      }
    });
    return await modal.present();
  }
}
```

### Modal Page Component

The child component serves as the modal window and consumes the transmitted data. To access the data passed via `componentProps`, simply declare the property on your class, ensuring that it matches the prop name used in the parent component.

```typescript
import { Component, OnInit } from '@angular/core';

@Component()
export class ModalPage implements OnInit {
  foo;
  bar;

  ngOnInit() {
    console.log(`${foo} ${bar}`)
  }
}

// hello world
```
