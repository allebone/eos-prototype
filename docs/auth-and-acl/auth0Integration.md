
# Auth0 Integration

<box header>

Vuexy Admin let you add universal authentication & authorization with the help of auth0.

</box>

<box>

## Demo

To check demo of auth0, visit `/pages/login`. There you will find button labeled **Login With Auth0**, click on this button and you will be see auth0 login.

You can find implementation of **auth0** in `src/views/pages/login.vue` file. Configuration of auth0 is coded in `src/auth/authService.js` file.

</box>


<box>

## Auth0 Configuration

All configuration for **auth0** is located in `src/auth/authService.js`. On top of this file you will find some imports.

```js
import auth0 from 'auth0-js';
import EventEmitter from 'events';
import authConfig from '../../auth_config.json';
```

First two imports, auth0 and events are base of auth0. Third import is import of `authConfig` file which is located in `src` directory. `auth_config.json` file contains your domain and clientId, which will be used by auth0.


```
// auth_config.json
{
  "domain": "YOUR_DOMAIN",
  "clientId": "YOUR_CLIENT_ID"
}
```

You can get this information from Application Settings section in clients tab.
<img :src="$withBase('/auth0/app_settings.png')" alt="" slot="no-body" class="responsive card-img-top" alt="app_setings">

```
const localStorageKey = 'loggedIn';
const tokenExpiryKey = 'tokenExpiry';
const loginEvent = 'loginEvent';

```

Above three variables are used throughout the file. You can change their values as you like except first one `localStorageKey`. value of `localStorageKey` **loggedIn** is used in other parts of application also. So if you change it here, Don't forget to change it in other places.

```js
const webAuth = new auth0.WebAuth({
    domain: authConfig.domain,
    redirectUri: `${window.location.origin}/callback`,
    clientID: authConfig.clientId,
    responseType: 'id_token',
    scope: 'openid profile email'
});
```

Above code will create instance of **WebAuth** from auth0.js.

```js
class AuthService extends EventEmitter {
...
}
```

In above code we created **AuthService** to create a reusable service. This contains login, logout, handling Authentication, renewing tokens etc.

</box>


<box>

## Using as Vue Plugin

Now we need to inject the service into everywhere that needs it. So we created plugin which can be found in `src/plugins/auth.js`.

This plugin provides access to the AuthService class from each component, through the this.$auth property. It also provides a mechanism for when the login state changes, for components that implement a handleLoginEvent method.

To use this plugin we have to update our `main.js` file.

```
// Import the plugin here
import AuthPlugin from "./plugins/auth";

// Install the authentication plugin here
Vue.use(AuthPlugin);
```

</box>


<box>

## Using as Vue Plugin

Now we need to inject the service into everywhere that needs it. So we created plugin which can be found in `src/plugins/auth.js`.

This plugin provides access to the AuthService class from each component, through the this.$auth property. It also provides a mechanism for when the login state changes, for components that implement a handleLoginEvent method.

To use this plugin we have to update our `main.js` file.

```
// Import the plugin here
import AuthPlugin from "./plugins/auth";

// Install the authentication plugin here
Vue.use(AuthPlugin);
```

</box>


<box>

## Login Control

Vuexy have login control for both firebase and auth0. Which to choose is up to you. If you open `router.js` file, there you will find `router.beforeEach` navigation guard.

In there you will find `if` condition with some router urls and below line as well.

```
(auth.isAuthenticated() || firebaseCurrentUser)
```

In above code `auth.isAuthenticated()` checks if user is authenticated using auth0 or not. To execute this function we first need to import auth. Import of auth is in top of this file.

```
import auth from "@/auth/authService";
```

So, navigation guard is checking if user is authenticated or visiting the public page(using OR clause), then navigate user to requested url. Otherwise send him back to `login page`.

</box>

<box>

## Auth0 Application Settings

Implementing auth0 in Vuexy Admin is just one part. We also need to configure application settings in auth0. Some of them are configure Callback URLs, Configure Logout URLs, Configure Allowed Web Origins etc.

You can find more detailed guide [here](https://auth0.com/docs/quickstart/spa/vuejs).

</box>
