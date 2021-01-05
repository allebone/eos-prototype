
# Permission Control(ACL)

<box header>

Vuexy Admin comes with Permission control/Access Control to restrict unauthorized user from seeing private content. Check [Demo](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/access-control).

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

```js
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

::: warning
We used **vue-acl** library for providing ACL in our application. Creator of vue-acl rewritten whole code since 4.0.7(approx). Since then route protection is not working.
  
So, we highly recommend till creator of that library don't fix that bug, Please use **vue-acl@4.0.7**.
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

```html
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

You can get user's current role using `$acl.get[0]`. Vuexy Admin also stores user role in localStorage and store's state.

If you want to change user role use `updateUserRole` action which will update role in acl, localStorage and store. Please check `updateUserRole` for required parameter.


```js
this.$store.dispatch('updateUserRole', {aclChangeRole: this.$acl.change, role: val})
```

Please check `src/views/components/extra-components/AccessControlEditor.vue` for reference.

:::tip
`updateUserRole` action and relative mutation is updated for easy update of user details.
:::

</box>
