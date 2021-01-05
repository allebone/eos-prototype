---
API:
 - name: navMenuItems
   type: Array
   parameters: Array of objects
   description: Array to display in main sidebar of Vuexy Admin
   default: 
 - name: title
   type: String
   parameters: 
   description: Set sidebar title
   default:
 - name: logo
   type: String
   parameters: path of your company logo
   description: Add your company logo to main sidebar
   default: 
 - name: parent
   type: String
   parameters: html element
   description: Define parent of main sidebar. .layout--main is recommended
   default: 
 - name: openHover
   type: Boolean
   parameters: true, false
   description: setting true will open group on hover
   default: 
---


# Vertical NavMenu

<box header>
	
Vuexy Admin uses extended sidebar to give better UX & UI to stock sidebar provided  by Vuesax framework

</box>

<box>

## Name Update

`VxSidebar` component is now `VerticalNavMenu`.

</box>

<box>
	
## Overview

**Component Name:** v-nav-menu
  
**Use case:** Building vertical navigation menu

**Path:** src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue

**Is Globally Registred**: false

</box>


<box>
	
## Using Component

You can customize title, logo, sidebar items and parent div of `v-nav-menu`.

For customizing title, logo and parent div of sidebar using prop `title`, `logo` and `parent`.

You can easily add sidebar items/group by passing `Array of Objects` as prop to `v-nav-menu` component. Prop for passing Array is `navMenuItems`.

```html
<template>
    <v-nav-menu
      :navMenuItems = "navMenuItems"
      :logo         = "navMenuLogo"
      title         = "Vuexy"
      parent        = ".layout--main" />
</template>

<script>
import VNavMenu from '@/layouts/components/vertical-nav-menu/VerticalNavMenu.vue';

export default {
	...
	components: {
		...
		VNavMenu,
		...
	}
}
</script>
```

:::tip
Using  `.layout--main` is recommended as parent of `v-nav-menu`. Using body as parent give unexpected behavior when full page layout route visited.
:::

Preview of `yourItemsArray`, which can be passed as prop to `v-nav-menu`.

```js
export default [
	{
		url: null,
		name: "Dashboard",
		slug: "dashboard",
		icon: "HomeIcon",
		i18n: "Dashboard",
		submenu: [
			{
				url: '/dashboard/analytics',
				name: "Analytics",
				slug: "dashboardAnalytics",
				i18n: "Analytics",
			},
			{
				url: '/dashboard/ecommerce',
				name: "eCommerce",
				slug: "dashboardECommerce",
				i18n: "eCommerce",
			},
		]
	},
	{
		header: "Apps",
		i18n: "Apps",
	},
	{
		url: "/apps/email",
		name: "Email",
		slug: "email",
		icon: "MailIcon",
		i18n: "Email",
	},
	{
		url: "/apps/chat",
		name: "Chat",
		slug: "chat",
		icon: "MessageSquareIcon",
		i18n: "Chat",
	},
	{
		url: "/apps/todo",
		name: "Todo",
		slug: "todo",
		icon: "CheckSquareIcon",
		i18n: "Todo",
	},
]
```

Full API of this component can be found at bottom of this page.

:::tip
You can disable any group or item in sidebar by setting `isDisabled` property to `true` of group or item in sidebar items array.
:::

</box>


<box>
	
## Changing Styles

`v-nav-menu` component's style are only invoked in it's components. It is not globally available. So, If you plan to use stock sidebar provided by Vuesax Framework then you won't get useless styles of `v-nav-menu`.

Styles of this component is imported at the button of file. Styles of sidebar component can be found in `src/assets/scss/vuexy/components/verticalNavMenu.scss`

</box>


<box>
	
## Dependencies

* Perfect Scrollbar
* Vuex Store
* Vue Router
* `v-nav-menu-group` component
* `v-nav-menu-item` component
* `feather-icon` component

</box>
