---
API:
 - name: url
   type: String
   parameters: valid url. null for group.
   description: url is valid url. Either defined in router or external url.
   default:
 - name: name
   type: String
   parameters: 
   description: Display name of item/group.
   default: 
 - name: slug
   type: String
   parameters: named route
   description: added for accessing name property of route/item from router file.
   default:
 - name: icon
   type: String
   parameters: Valid icon name
   description: Icon name of feather icon for group and item. Sub items of group have defualt icon.
   default: 
 - name: i18n
   type: String
   parameters: i18n key
   description: Displays group and item name according to localization. pass i18n key to get correct display name.
   default:
 - name: submenu
   type: Array
   parameters: 
   description: For creating groups. This array can have sidebar items and groups.
   default: 
 - name: isDisabled
   type: Boolean
   parameters: true, false
   description: Create disabled menu item or group
   default: false
---


# Routing

<box header>

Create routes powered by Vue Router. You can add and remove routes in `router.js` file in `src` directory.

</box>

<box>

## Understanding router.js

```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
```

Above code in `router.js`, imports `vue` and `vue-router` and register them in our app.

Now Following code export router to be used in `main.js` file.
```js
export default new Router({ ... })
```

</box>

<box>

## Understanding Router() Instance

**mode:**
First thing you will notice in `Router()` is `mode` option, this option is set to `history`. Default value of mode is `hash mode`. Which uses the URL hash to simulate a full URL so that the page won't be reloaded when the URL changes.

To get rid of the hash, we used `history` mode. which leverages the `history.pushState` API to achieve URL navigation without a page reload. By using `history` mode in our router we can create beautiful URLs.

**base:**
base is the base URL of the app. For example, if the entire single page application is served under `/app/`, then base should use the value **"/app/"**

**scrollBehavior():**
We used scrollBehavior function to scroll to top when navigating to a new route. return statement `return {x:0, y:0}` make page to scroll to top when new route is visited. You can find more on scrollBehavior in [vue-router docs](https://router.vuejs.org/guide/advanced/scroll-behavior.html#scroll-behavior).

</box>

<box>

## Router Layouts

Vuexy Admin have two layouts: **1. Main Layout** and **2. Full page layout**.

`routes` property contains two objects regarding this two layouts. All routes which requires the main layout are children of **Main Layout** and other routes which requires full page layout, are children of **Full Page Layout**.

Path for both layouts are set to `''`(empty string) so that children gets root url. This gives benefites of users can see beautiful URLs regardless of route's layout.

</box>


<box>

## Routes & Lazy Loading

`Vue Router` is configured to use **Lazy Loading** which makes Vuexy Admin blazing fast. component defined in router is lazy loaded through this code:
```
component: () => import('./views/apps/todo/Todo.vue')
```
Each route should map to a component and then component is called when use navigates to url regarding to `path` property.

In our exmaple Todo App will be only imported if user visits `'/apps/todo'` url. All Routes also have `name` property so that you can also use [Named Routes](https://router.vuejs.org/guide/essentials/named-routes.html#named-routes)

This technique decrease the bundle size and reduces load time of Vuexy Admin.

</box>


<box>

## Add Menu Items

To add/remove items in sidebar, You have to edit `sidebarItems.js` file. Vuexy Admin uses custom sidebar which is slightly upgraded version of Vuesax Framework `vs-sidebar` component. This sidebar is built in a way which makes your work a lot easier.

Open `sidebarItems.js` which is located in `src/layouts/components/vx-sidebar/`. This file exports list of object(Array) which is passed as prop to `vx-sidebar` component.

each `object` in this Array is `sidebar-item`. To create group, you have to pass `url` as `null` or use `submenu` property to define group's items. Which will be again object with similar properties.

```js
	{
		url: "/apps/email",
		name: "Email",
		slug: "email",
		icon: "MailIcon",
		i18n: "Email",
	},
```
Above code creates item which navigates to `/apps/email`.

```js


	{
		url: null, // You can omit this
		name: "Dashboard",
		slug: "dashboard",
		icon: "HomeIcon",
		i18n: "Dashboard",
		submenu: [
			{
				url: '/dashboard/analytics',
				name: "Analytics",
				slug: "dashboard-analytics",
				i18n: "Analytics",
			},
			{
				url: '/dashboard/ecommerce',
				name: "eCommerce",
				slug: "dashboard-eCommerce",
				i18n: "eCommerce",
			},
		]
	},
```
Above code create group named `Dashboard`, having two sub items `Analytics` and `eCommerce`.

```js
	{
		header: "Apps",
		i18n: "Apps",
	},
```
Above code creates group header in sidebar.

::: warning
item's slug should be identical to name property of that route defined in router.js file.

e.g. `/dashboard/analytics` name should be `dashboard-analytics` in router.js file and in sidebarItems.js file link's slug should be same.
:::

At the bottom of this page you will find API table which explains each property of object(item).

</box>

<box>
  
## Using Parent Property of Route

From v3.3, You can use meta property `parent` in route for activating sidebar item, even if that route is not defined in `sidebarItems.js` file.
  
This is helpful if you want to display inner pages while having sidebar link active.
  
Please consider checking Knowledge Base page. It has inner pages which is not defined in sidebarItems.js therefor they are not visible in sidebar anywhere. Now, if you visit any of that inner page, sidebar link (Knowledge Base) will not remain active because sidebar link and current route link is different now.
  
To tackle this we added new property meta in route called `parent` which let you define parent of that route. If you check `router.js` in our admin template, you will find below code...

```
{
    path: '/pages/knowledge-base/category',
    name: 'page-knowledge-base-category',
    component: () => import('@/views/pages/KnowledgeBaseCategory.vue'),
    meta: {
        breadcrumb: [
            { title: 'Home', url: '/' },
            { title: 'Pages' },
            { title: 'KnowledgeBase', url: '/pages/knowledge-base' },
            { title: 'Category', active: true },
        ],
        parent: 'page-knowledge-base', // It's where MAGIC happens
        rule: 'editor'
    },
},
```

As you can see, we added parent meta and it's value is name of `/pages/knowledge-base` route. So, if you visit `/pages/knowledge-base/category` in your application sidebar item with `/pages/knowledge-base` slug will be active.

::: warning
As above make sure sidebar item's slug and route's meta's parent property have same value.
:::


</box>

<box>
	
## Creating Breadcrumb

To add breadcrumb to any route, just add meta to that route.

```js
{
	path: '/ui-elements/colors',
	name: 'colors',
	component: () => import('./views/ui-elements/colors/Colors.vue'),
	meta: {
		breadcrumb: [
			{ title: 'Home', url: '/' },
			{ title: 'Colors', active: true },
		],
		pageTitle: 'Colors'
	},
},
```

In above code you can see `meta` property, which is used to create breadcrumb specified page/route. `meta` property must have `breadcrumb` property and value for this `breadcrumb` property is **Array** of objects.

Single object is single link in breadcrumb.

```
{ title: 'myPage', url: '/urlToThatPage' },
```

Above code will create breadcrumb link named `myPage` and it will navigate to `/urlToThatPage`. You can also add *non-routing* link to breadcrumb if you omit url property in that object.

**Home:**

First link in breadcrumb will be always treated as home/root link. This home link will have `HomeIcon`.

**Active:**
  
Last item in `array` must be active page's `name`, which breadcrumb get from `title` property. This last object in `array` must have `active` set to `true`.
e.g.
```js
[
	{ title: 'Home', url: '/' },
	{ ... },
	{ ... },
	{ title: 'Colors', active: true }
]
```

</box>

<box>
	
## Page title

You can define page title directly in route creation process by providing `pageTitle` property to meta.

```js
{
	...
	meta: {
		breadcrumb: [...],
		pageTitle: 'Colors'
	},
},
```

If your title is dynamic, you can use `mounted` hook of vueJS to update page title.

```js
mounted() {
	this.$emit('changeRouteTitle', 'nameOfYourPage');
}
```

Above code will change title of your page when your SFC(single file component)/page is rendered.

:::tip
To see how to add dynamic page name, check `src/views/pages/KnowledgeBaseCategory.vue`.
:::

</box>

<box>
  
## Add Permission Control

You can restrict user to access page by using ACL provided in Vuexy Admin. You can check implementation of access control in this [section](/auth-and-acl/permissionControl.md).


::: warning
We used **vue-acl** library for providing ACL in our application. Creator of vue-acl rewritten whole code since 4.0.7(approx). Since then route protection is not working.
  
So, we highly recommend till creator of that library don't fix that bug, Please use **vue-acl@4.0.7**.
:::

For adding route protection to any route just add **authRequired** meta and set it to true. So, vue-router will check if user authentication when that route is visited.
  
Here's what it looks like.
```js
{
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: () => import('./views/DashboardAnalytics.vue'),
    meta: {
        rule: 'admin',
        authRequired: true
    }
}
```

</box>


<box>
  
## Set Route as fixed height page(App Page)

We provided apps like email, todo etc. Which is of fixed height. This requires changes some styles. We we made class which handles styling. All you have to do is just set meta in that application route. Please check below code snippet.
  
```js
{
    path: '/apps/todo/:filter',
    name: 'todo',
    component: () => import('./views/apps/todo/Todo.vue'),
    meta: {
        rule: 'editor',
        parent: "todo",
        no_scroll: true, // add this
    }
}
```


</box>
