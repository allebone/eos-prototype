# Firebase

<box header>

In this guide, We will find out answers of some questions you might have.

</box>

<box>

## How to remove Firebase Authentication?

**Login**

Open `/src/views/pages/login` and remove `LoginFirebase.vue` file and also remove rendering code along with it's import from `Login.vue` file.

<br/>

**Registration**

Also remove same for registration.

<br/>

**Navbar**

Open `/src/layouts/components/TheNavbar.vue` and remove firebase import

<img class="rounded" :src="$withBase('/faq/remove-firebase/remove-firebase-import-from-navbar.jpg')" alt="remove-firebase-import-from-navbar">

<br/>

Then remove below code from logout method from this file
<img class="rounded" :src="$withBase('/faq/remove-firebase/remove-firebase-logout.jpg')" alt="remove-firebase-logout">

<br/>

**Router**

Now let's go over router file. Open `/src/router.js` and remove firebase import.
<img class="rounded" :src="$withBase('/faq/remove-firebase/router-remove-firebase-import.jpg')" alt="router-remove-firebase-import">

<br/>

Also remove route protection logic from that file and update as below:
<img class="rounded" :src="$withBase('/faq/remove-firebase/router-update-route-protection.jpg')" alt="router-update-route-protection">

<br/>

**Store**
  
Now let's remove actions from store. Go to `/src/store/auth/moduleAuthActions.js` and remove all actions till "jwt" section from that file(File will only contain 3 jwt methods at the end).

<br/>

Last thing to update in store is update auth state. For this open to `/src/store/auth/moduleAuthState.js` file. Update this file as below.
<img class="rounded" :src="$withBase('/faq/remove-firebase/update-auth-state.jpg')" alt="update-auth-state">

<br/>

Remove import of firebase config from `/src/main.js` file.
<img class="rounded" :src="$withBase('/faq/remove-firebase/remove-firebase-config-import-from-main.js-file.jpg')" alt="remove-firebase-config-import-from-main.js-file">

<br/>

Also remove firebase config folder from root of project.
<img class="rounded" :src="$withBase('/faq/remove-firebase/remove-firebase-folder-from-root.jpg')" alt="remove-firebase-folder-from-root">

<br/>

Finally Remove firebase from `/src/package.json` file
<img class="rounded" :src="$withBase('/faq/remove-firebase/package-remove-firenase.jpg')" alt="package-remove-firenase">

<br/>

That's it we successfully removed Firebase from our admin template.

</box>
