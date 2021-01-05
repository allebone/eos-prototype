
# Permission Control(ACL) **- new**

<box header>

Vuexy Admin comes with Permission control/Access Control to restrict unauthorized user from seeing private content.

</box>

<box>

## Configuration

Vuexy Admin uses `vue-acl` for access control. vue-acl help you to control the permission of access in your app for yours components and routes.

You can find configuration of vue-acl in `src/acl/acl.js` file.

In the top of this file you will find some imports related to vue-acl and authentication.

```js
import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from '@/router'
import firebase from 'firebase/app'

firebase.auth().onAuthStateChanged(() => {
...
}
```

Then we define acl settings and global rules.


```js
let initialRole = 'admin'
...

export default new AclCreate({
  initial: initialRole,
  notfound: '/pages/error-404',
  router,
  acceptLocalRules: true,
  globalRules: {
    admin: new AclRule('admin').generate(),
    editor: new AclRule('editor').or('admin').generate(),
  }
})
```

**Admin:** Admin have all permissions.

**Editor:** Editor have some restrictions. E.g. Can not visit some routes, Can't see private content.

</box>


<box>

## Protecting Routes

You can protect your routes by defining permission for your route in `router.js` file. You have to set meta **rule** property to defined rule in `acl.js` file.

```
{
    path: '/dashboard/analytics',
    name: 'dashboardAnalytics',
    component: () => import('./views/DashboardAnalytics.vue'),
    meta: {
        rule: 'editor'
    }
},
```

If editor try to visit route which is not meant for him, he will be redirected to `notfound` page as defined in `acl.js` file.

:::warning
Sidebar item with no url will be always visible to user regradless of role
:::

</box>


<box>

## Protecting Content/Components

To check whether user can see this content use `v-if` or `v-show`. You can use `$acl.check('admin')` to let user view content only if he/she is admin.

```html
<button v-if="$acl.check('admin')">
  Admin View
</button>
<button v-else>
  Editor View
</button>
```

</box>


<box>

## Changing Roles

You can change role of use on the fly using `$acl.change('ROLE')`.

```
<button v-if="$acl.not.check('admin')" @click="$acl.change('admin')">
  Set admin permisson
</button>
<button v-else @click="$acl.change('editor')">
  Set public permission
</button>
```

</box>


<box>

## User Role - Managing with Vuex Store and LocalStorage

You can get user's current role using `$acl.get[0]`. Vuexy Admin also stores user role in localStorage.

If you change user role using  `$acl.change('ROLE')` don't forget dispatch action,

```js
this.$store.dispatch('updateUserRole', 'ROLE')
```

This action fire mutation which update role in **localStorage**.

</box>
