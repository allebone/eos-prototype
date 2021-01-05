
# V-NavMenu Group

<box header>
	
Vuexy Admin uses extended sidebar group in v-nav-menu component.

</box>

<box>

## Name Update

`VxSidebarGroup` component is now `VerticalNavMenuGroup`.

</box>

<box>
	
## Overview

**Component Name:** v-nav-menu-group
  
**Use case:** Build group in `v-nav-menu` component

**Path:** src/layouts/components/vertical-nav-menu/VerticalNavMenuGroup.vue

**Is Globally Registred**: false

</box>


<box>
	
## Using Component

This component is internally handled by `v-nav-menu`. So, you don't have to worry about setting up `vx-siedbar-group`.

How to create sidebar group in `sidebarItems` prop of `v-nav-menu`


```js
...
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
...
```

Above code will create group named `Dashboard` from it's `i18n` property. If i18n is disabled in your app then It will fall back to `name` property.

`submenu` property differentiate sidebar group from sidebar item and item/group header.

<br>

You can customize should group open on hover.

To open groups on hover you can set `v-nav-menu` prop `openGroupHover` to `true`.

</box>


<box>
	
## Changing Styles

`v-nav-menu-group` component's style are only invoked in it's components. It is not globally available. So, If you plan to use stock sidebar provided by Vuesax Framework then you won't get useless styles of `v-nav-menu-group`.

Styles of this component is imported at the button of file. Styles of sidebar component can be found in `src/assets/scss/vuexy/components/VerticalNavMenuGroup.scss`

</box>


<box>
	
## Dependencies

* Vuex Store
* `v-nav-menu-item` component
* `feather-icon` component

</box>
