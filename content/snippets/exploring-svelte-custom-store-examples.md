---
title: Exploring Svelte Custom Store Examples
lastmod: 2019-04-23T07:41:02-07:00
publishdate: 2019-04-23T07:41:02-07:00
author: Gautam Ankoji
draft: false
description: Discover practical examples showcasing the applications of Svelte custom stores.
tags: 
    - svelte
---

A Svelte store provides a reactive data stream capable of dynamic changes. Constructing a [custom store](https://svelte.dev/tutorial/custom-stores) in Svelte is straightforward. It involves creating a writable store within a function and returning its subscribe function encapsulated in an object.

## Applications of Custom Stores

### Application: Business Logic

Custom stores are handy for abstracting data operations, serving as fundamental components for more intricate functionalities.

{{< file "svelte" "App.svelte" >}}

```javascript
import { writable } from 'svelte/store';

function myStore() {
 const { subscribe, set, update } = writable(0);

 return {
  subscribe,
  addOne: () => update(n => n + 1),
  reset: () => set(0)
 };
}

// Utilize it like a standard store
myStore.subscribe(console.log)
myStore.addOne()
```

### Application: Callback Wrapper

In projects like [SvelteFire](https://github.com/codediodeio/sveltefire), custom stores wrap Firebase's realtime callbacks, facilitating easy sharing and disposal of data subscriptions, thus avoiding memory and cost leaks.

A writable store accepts two arguments: the initial value and a function for custom setup and teardown logic.

{{< file "svelte" "Firebase.svelte" >}}

```javascript
function customStore() {
  const { set, subscribe } = writable(null, () => {
    // on setup
    // runs after first subscriber

    disposeOfListener = firestore.doc('hello/dog').onSnapshot(set); // Set the value of the store

    return () => {
      // on teardown
      // runs after last subscriber unsubscribes

      disposeOfListener();
    };
  });

  return {
    subscribe
  };
}

// Utilize it like a standard store
const unsubscribe = customStore.subscribe(console.log);

// Call unsubscribe to dispose of the Svelte store and the firebase listener.
unsubscribe();

```

### Application: Redux-style State Management

Custom stores can serve as the foundation for building your Redux-inspired state management solution. Additionally, they can be integrated with Redux Dev Tools browser extension to provide enhanced tooling capabilities.

Note: Ensure that you have [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) installed to visualize the state chart and action history.

{{< file "svelte" "Redux.svelte" >}}

```html
<script>
  import { writable } from "svelte/store";

  function redux(init, reducer) {
    const devTools =
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__.connect();

    const { update, subscribe } = writable(init);

    function dispatch(action) {
      update(state => {
  devTools.send(action, state);
        return reducer(state, action);
      });
    }

    return {
      subscribe,
      dispatch
    };
  }

  const reducer = (state, action) => {
    console.log(state.count, action);
    switch (action) {
      case "increment":
        return { count: state.count + 1 };
      default:
        return state;
    }
  };

  const store = redux({ count: 0 }, reducer);

</script>

Count: {$store.count}
<button on:click={e => store.dispatch('increment')}>Dispatch</button>
```
