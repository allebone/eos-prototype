# Auth0

<box header>

Have some questions regarding Auth0?? Check if it's listed below.

</box>

<box>

## How to remove Auth0 from template?
  
**Login**
  
Open `/src/views/pages/login` and remove `LoginAuth0.vue` file and also remove rendering code along with it's import from `Login.vue` file.

<br/>

**Registration**

Also remove same for registration.

<br/>

**Token**

Now remove token renewing from `/src/App.vue` file. **Only remove try-catch** block from `async created()`
<img class="rounded" :src="$withBase('/faq/remove-auth0/remove-re-new-tokets.jpg')" alt="remove-re-new-tokets">

<br/>

**Callback**

Next step, Remove callback component from your admin. Go to `/src/views/` and remove `Callback.vue` file.
<img class="rounded" :src="$withBase('/faq/remove-auth0/remove-callback-component.jpg')" alt="remove-callback-component">

<br/>

Along with this also remove route of that callback component from `/src/router.js` file
<img class="rounded" :src="$withBase('/faq/remove-auth0/router-remove-callback-route.jpg')" alt="router-remove-callback-route">

<br/>

**Router**

Remove Auth0 import from top of `/src/router.js` file
<img class="rounded" :src="$withBase('/faq/remove-auth0/router-remove-auth-import.jpg')" alt="router-remove-auth-import">

<br/>

**NavBar**

Then remove auth0 logout from `/src/layouts/components/TheNavbar.vue`. Remove below code from this file.
<img class="rounded" :src="$withBase('/faq/remove-auth0/navbar-remove-logout.jpg')" alt="navbar-remove-logout">

<br/>

**Store**

Now let's go over store. Open `/src/store/auth/moduleAuthState.js` file and update `isLoggedIn` state as below:
<img class="rounded" :src="$withBase('/faq/remove-auth0/store-remove-auth-state.jpg')" alt="store-remove-auth-state">

<br/>

Now remove auth service by removing `/src/auth` folder. Which contains `authService.js` file.
<img class="rounded" :src="$withBase('/faq/remove-auth0/remove-auth-service.jpg')" alt="remove-auth-service">

<br/>

Now remove auth0 plugin from your app by removing `src/plugins/auth.js` file.
<img class="rounded" :src="$withBase('/faq/remove-auth0/remove-auth0-plugin-file.jpg')" alt="remove-auth0-plugin-file">

<br/>

::: tip
If you haven't installed any other plugins then you can remove this empty folder.
:::

After that remove import of above plugin from `src/main.js` file.
<img class="rounded" :src="$withBase('/faq/remove-auth0/remove-auth0-import-main.js.jpg')" alt="remove-auth0-import-main.js">

<br/>

Next remove auth0 config file from root of your project.
<img class="rounded" :src="$withBase('/faq/remove-auth0/remove-auth-config-json.jpg')" alt="remove-auth-config-json.js">

<br/>

Finallly remove auth0 from `package.json` file.
<img class="rounded" :src="$withBase('/faq/remove-auth0/package-remove-auth.jpg')" alt="package-remove-auth.js">

<br/>

Done. Your template is now auth0 free.

</box>
