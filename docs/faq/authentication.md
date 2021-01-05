# Authentication

<box header>

In this guide, We will check some authentication questions.

</box>

<box>
  
## How to remove Authentication from app completely.

**Login**
  
First of all copy UI of one of our authentication method from three provided auth - `LoginFirebase.vue`, `LoginAuth0.vue` or `LoginJWT.vue`. Copy UI code of selected auth method and replace `vs-tabs` component from `Login.vue` file with copied code.
  
Next step is to add your auth methods and other stuff.

<br/>

**Registration**

Also perform same for registration.

<br/>

**NavBar**

Open /src/layouts/components/TheNavbar.vue and remove firebase import
<img class="rounded" :src="$withBase('/faq/remove-firebase/remove-firebase-import-from-navbar.jpg')" alt="remove-firebase-import-from-navbar">

<br/>

Update `logout` method as below:
```js
logout() {
  // So, you can still visit login page
  this.$router.push('/pages/login').catch(() => {})
},
```

<br/>

**Store**

Let's go over store and do some cleanup. Open `/src/store/auth/moduleAuthActions.js` file and **remove all content**. Do same for `moduleAuthState.js` and `moduleAuthMutations.js`

::: tip
If you don't want auth at later remove `/src/store/auth` folder and also remove module registration of auth module from `/src/store/store.js`
:::

**Router**

Let's head over to `/src/router.js` file. Remove firebase and auth0 import from top of this file.
<img class="rounded" :src="$withBase('/faq/remove-auth-completely/router-remove-imports.jpg')" alt="router-remove-imports">

<br/>

Finally at the bottom of this file remove `router.beforeEach`. From now on `authRequired` meta property is useless for any route.
<img class="rounded" :src="$withBase('/faq/remove-auth-completely/router-beforeEach.jpg')" alt="router-beforeEach">

<br/>

Remove auth0 callback component from route.
<img class="rounded" :src="$withBase('/faq/remove-auth0/router-remove-callback-route.jpg')" alt="router-remove-callback-route">

<br/>

**Files**
  
Next step, Remove callback component from your admin. Go to `/src/views/` and remove `Callback.vue` file.
<img class="rounded" :src="$withBase('/faq/remove-auth0/remove-callback-component.jpg')" alt="remove-callback-component">

<br/>

Now update `/src/App.vue` file as below.
```js
async created() {
  window.addEventListener('resize', this.handleWindowResize)
  window.addEventListener('scroll', this.handleScroll)
}
```

<br/>


Remove firebase and auth0 import from `src/main.js` file
<img class="rounded" :src="$withBase('/faq/remove-auth-completely/main.js-firebase-auth-import.jpg')" alt="main.js-firebase-auth-import">

<br/>

Remove `auth`, `firebase` folders and `plugins/auth.js` from project.
<img class="rounded" :src="$withBase('/faq/remove-auth-completely/remove-auth-auth-plugin.jpg')" alt="remove-auth-auth-plugin">

<br/>

Remove auth0 config file `auth_config.json` from root of your project.

<br/>

At last remove `auth0` and `firebase` from `package.json` file.
<img class="rounded" :src="$withBase('/faq/remove-auth-completely/package-remove-firebase-auth.jpg')" alt="package-remove-firebase-auth.js">

<br/>

Let's remove some jwt code. remove `/src/fake-db/data/users` folder.

<br/>

Congrats! You have successfully removed authentication from template. Now, you can integrate you own authentication system as you like. All the best.

</box>
