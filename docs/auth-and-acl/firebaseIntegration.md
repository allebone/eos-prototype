
# Firebase Integration

<box header>

Now use firebase authentication and firestore with Vuexy Admin.

</box>

<box>

## Setup Firebase
  
To use firebase Authentication or firestore, You first need to create project
<img :src="$withBase('/firebase/console-home.png')" alt="" slot="no-body" class="responsive card-img-top" alt="app_setings">

After creating project click on `Add firebase to your web app`, which will provide you below information:
```js
apiKey: "API_KEY",
authDomain: "AUTH_DOMAIN",
databaseURL: "DATABASE_URL",
projectId: "PROJECT_ID",
storageBucket: "STORAGE_BUCKET",
messagingSenderId: "MESSAGING_SENDER_ID"
```

Copy that and create new file in `src/firebase` named `firebaseConfig.js`. In this file import firebase and intialize.

```js
import firebase from 'firebase/app'

// Initialize Firebase
var config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "SENDER_ID"
};

firebase.initializeApp(config);
```

Congrats! Your firebase configuration is ready. Now let's import it in our `main.js` file.

```
// Firebase
import '@/firebase/firebaseConfig'
```

</box>

<box>
  
## Firebase Authentication

Vuexy Admin provide firebase authentication with **4** popular **social logins**.

* Facebook
* Twitter
* Google
* Github

First of all let's start with firebase authentication. For this I will use `Login.vue` file as reference.

On click of `Login` button we will call an method. This method name can be anything you like. For this example we will name it `login`.

In login methods we will dispatch action in vuex store which which trigger signin function of firebase to log in user.

This same process can be followed with social logins. You just have to change the function in `vuex action`.
  
<br/>

Full more detailed check out this awesome guide: [Visit](https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c)

</box>


<box>
  
## Firestore Interaction

Vuexy Admin uses API to interact with firestore. You can use their API to read and write data to your database. You can see demo of firestore read operation in [data-list demo](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/ui-elements/data-list/thumb-view).

:::warning
From v4.x FireStore API call is removed. DataList uses fake-db to display data. However, you can [check](https://gitlab.com/pixinvent/vuesax-vuejs-admin-template/blob/3fdc04ffade3aef41786c1d81af040e11121c469/src/views/ui-elements/data-list/list-view/DataListListView.vue) older version of file to see how it was implemented.
:::

For making an API call we will use **axios** - promise based HTTP client. We will fetch data from our database and we will store it in data of our component.

```js
import axios from 'axios'
...
axios.get('API_URL')
  .then(function (response) {
    DATA_VAR = API_RESPONSE
  })
  .catch(function (error) {
    // Error Occurred
  });
```

Now we can use property defined in data in our template to display data.

```html
<template>
  ...
  {{ DATA_VAR }}
  ...
</template>
```

</box>
