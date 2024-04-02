---
title: Server-side Firebase User Authentication Setup
lastmod: 2020-05-22T05:56:37-07:00
publishdate: 2020-05-22T05:56:37-07:00
author: Gautam Ankoji
draft: false
description: Learn how to configure server-side authentication in Firebase on any node server using Express.js.
# related:
#   - javascript-mastery
tags: 
    - node
    - security
    - auth

---

The subsequent example illustrates the setup of server-side authentication in Firebase on any node server utilizing Express.js.

Note: If utilizing Firebase Cloud Functions, you can utilize [Callable](https://firebase.google.com/docs/functions/callable) Functions to automatically manage this authentication type.

## Client-side: Embed the ID Token

Your client-side code needs to append the [ID token](https://firebase.google.com/docs/auth/admin/verify-id-tokens) to the authorization header when sending a request to the server. The following instance utilizes the browser's built-in `fetch` API.

{{< file "js" "frontend-app.js" >}}

```javascript
import firebase from 'firebase';
const auth = firebase.auth();
const url = 'https://your-cloud-function-url';


async function fetchFromAPI() {

  const user = auth.currentUser;
  const token = user && (await user.getIdToken());

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}
```

## Server-side: Validate the ID Token

On the server-side, locate the ID token in the request headers and decode it with the Firebase Admin SDK. The subsequent middleware simply appends a `currentUser` property to the request.

{{< file "ts" "express-app.ts" >}}

```typescript
const express = require('express')
const admin = require('firebase-admin')
admin.initializeApp();

const app = express();

// Decodes the Firebase JSON Web Token
app.use(decodeIDToken);

/**
 * Decodes the JSON Web Token sent via the frontend app
 * Makes the currentUser (firebase) data available on the body.
 */
async function decodeIDToken(req: Request, res: Response, next: NextFunction) {
  if (req.headers?.authorization?.startsWith('Bearer ')) {
    const idToken = req.headers.authorization.split('Bearer ')[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req['currentUser'] = decodedToken;
    } catch (err) {
      console.log(err);
    }
  }

  next();
}
```

Access the Firebase user data in your routes.

```typescript
app.get('/hello', (req, res) => {

    const user = req['currentUser'];

    if (!user) { 
        res.status(403).send('You must be logged in!');
    }
})
```
