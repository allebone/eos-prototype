# v3 to v4

<box header>

This is detailed changelog/guide for Upgrading your project from Vuexy Admin v3 to v4. [Article: How to upgrade to latest version??](https://pixinvent.ticksy.com/article/15342)

</box>

<box>
  
## Sidebar, Navbar, Customizer & Layout

* `updateSidebarWidth` action is renamed to `updateVerticalNavMenuWidth`
* breakpoint state is handled through `App.vue` file. `UPDATE_WINDOW_BREAKPOINT` commit is removed from `vxSidebar.vue` file.
* **Sidebar component** have **new name** for resolving conflicts between new layout's components. This results in many changes including store property changes. Please refer to API table at the bottom of this page for changes.
* `sidebarItems.js` is renamed and also have new structure which supports horizontal layout. Also file is renamed to `navMenuItems.js`.
* Customizer is update for new features including live layout change.

</box>


<box>
  
## General

* Webpack imports like `:src="require(...)"` in template tag is removed to support "API Ready" release. It makes even easier to integrate API and remove the issue of different path for assets.
* axios now have it's own configuration file `/src/axios.js`. This is used in fake-db API calls. You can now add your own configurations in this file and import axios form this file with your configurations. 

**New**

* New timeline component is added. Previously it was just static template code. Component name: `vx-timeline`
* Import/Export added.
* new custom classes are added in `_customClasses.scss`.
* Horizontal Layout style file added - `_layoutHorizontal.scss`.
* New Router animation added.

**Updated**

* All apps data come from API calls.
* Basic card's page data is also from API call.
* `_customClasses.scss & _fixesVuexy.scss` is refactored
* Navbar Styles, Layout Styles and other component's style are refactored now.
* `_layoutModern.scss` is renamed to `_layoutVertical.scss`.
* `Main.vue` layout file is updated according to new changes.

**Deleted**

* Removed ag-grid SVG icons from assets.
* `icon-no-border` custom class for input is removed. Vuesax component framework implemented this class now. Use `icon-no-border` prop for removing icon border from input.

</box>

<box>

## Store

Apps modules and some other modules which are not required at first place is now [dynamically added](https://vuex.vuejs.org/guide/modules.html#dynamic-module-registration) for performance improvement.

<br>

**State**

* All user related information is moved to `userInfo` root-state. `userRole` is also included in this state.
* User properties are changed according to auth providers(Firebase & Auth0). Makes it much easier to integrate other plugins with apps and auth providers. `e.g. name => displayName`
* This user state will also be used to define **default properties** of user. Please check `UPDATE_USER_INFO` mutation for implementation.
* Final user-info state will be merger of localStorage data and default properties defined in variable.
* **Added:** New scroll state is available to check scrollTop of body.

::: tip
More info on this state will be written above state declaration
:::

**Mutations**

* `UPDATE_USER_ROLE` mutation is removed. You can use `UPDATE_USER_INFO` for updating active user role.
* New `UPDATE_USER_INFO` mutation is added for updating active user info. This will be used for updating user info received either from auth provider or any other CRUD operation.

**Actions**

* **Removed:** `updateWindowWidth` action is removed. Now, it's state's mutation is directly called as it's don't make any API call.


</box>

<box>
  
## ACL (vue-acl)

* Getting initial role is updated according new update in user-info state management
* store action `updateUserRole` is now updated, Please check for required parameter and behavior. Please check `UPDATE_USER_INFO` mutation is removed mutation is done by calling dispatching another store action `UPDATE_USER_INFO`. So, this action will update role in vue-acl and for updating role in other locations like localStorage and store use `UPDATE_USER_INFO` action.

:::tip
You can make API call between vue-acl role change and `UPDATE_USER_INFO` action dispatch to update role in your server.
:::

</box>

<box>
  
## Auth0

* Auth0 service `src/auth/authService.js` now uses `updateUserInfo` mutation for updating user info.

</box>

<box>
  
## Store: Auth

* `UPDATE_AUTHENTICATED_USER` mutation is removed. Now user's data is updated using `UPDATE_USER_INFO` mutation in `src/store/auth/moduleAuthActions.js`

</box>

<box>
  
## Chat App

* `UserProfile.vue` component is updated. Please check new required props in `src/views/apps/chat/UserProfile.vue`
* In `UserProfile.vue` `getStatusColor` computed property is updated as `statusColor`.
* Static file `contacts.js` is no more used. Hence, contact property is also updated. Please check new contact properties(which are same as auth provider).

**Store**

* Because v4 of Vuexy Admin is **API Ready** now store action uses **axios** to make API calls in actions.
* Chat State is now empty objects. All data will be filled using API calls.
* All Contacts and Chat is now received using API instead of static js file.
* New contact getter added + Few mutations are added for setting contacts and chats in store after successful API call.
* Chat Pinning is also handled using API call.
* At the you just need to make API call from **SFC file** and update API call in store action and you are set.

</box>

<box>
  
## Calendar App

* Old calendar Removed from template completely
* Calendar is also `API Ready`

**Store**

* Because v4 of Vuexy Admin is **API Ready** now store action uses **axios** to make API calls in actions.
* Calendar module's State is now empty objects. All data will be filled using API calls.
* Actions and mutations are updated like other apps.

</box>

<box>
  
## ToDo App

* ToDo app's filter now works using router parameter `"filter"`
* ToDo Filter is updated using `router-link` instead of click event
* Tasks are fetched using API call whereas search is performed internally by vuex store. So, searching for task won't make any API call. However if you want to make API call when task is searched, just tweak the template code and update `fetchTasks` action.
* `updateTask` action handles all task updates. Individual mutation and action of task property is removed, this makes code more easy to read and simple to work with.
* `TodoItem` component is renamed to `TodoTask`
* Todo app now have more readable names e.g. `todoItemId => taskId, todoList => taskList` etc.

**Store**

* `isDone` task property is renamed to `isCompleted`.
* Store is updated according to new `API ready` template.
* `todoTags` state is renamed to `taskTags`
* Store now have new mutations and action as per `API Ready` template.

</box>


<box>
  
## EMail App

* EMail app's filter now works using router parameter `"filter"`
* Email Filter is updated using `router-link` instead of click event
* Some properties are changed according to url+filter behavior
* Mail properties is updated. e.g. `mailType => mailFolder`
* `mailFolder` property now have same values as filter name. e.g. `trashed => trash, inboxed => inbox` etc.
* `moveTo` method's parameter is changed according to new mail properties.
* Updated simple if-else to ternary operator
* New **functional** component `EmailMailCard.vue` is introduced to render single message and threaded message using single component. Therefor `EmailView.vue` is updated.

**Store**

* new `meta` state is available in email app to store meta data of email app.
* `filteredMails` getter now only filter serach query because mail's folder filter is handled through router parameter
* `NumdraftMails` & `unreadMails` getters are removed. These will be included in `meta` state which will be fetched through API.
* actions now uses axios to fetch data from server.
* new actions are added and some are removed. Most of them is updated for making API call. This is same for mutations.


</box>

<box>
  
## Components Updated

**TheNavbar.vue**
  
`TheNavbar.vue` component is updated according to new "API Ready" release + Code redundancy removed.

</box>

<box>
  
## File Name Changes

<Demos-migration-v4-FileNameChanges />

</box>

<box>
  
## Property Changes

<Demos-migration-v4-PropertyMethodChanges />

</box>

<box>
  
## Class Changes

<Demos-migration-v4-ClassChanges />

</box>

<box>
  
## Ref Changes

<Demos-migration-v4-RefChanges />

</box>

<box>
  
## Report

If you find something missing or broken, please report at our [support portal](http://support.pixinvent.com/).

</box>
