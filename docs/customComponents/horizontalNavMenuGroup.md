
# H-NavMenu Group

<box header>
	
Horizontal Navigation Menu uses this component to render groups.

</box>

<box>
	
## Overview

**Component Name:** h-nav-menu-group
  
**Use case:** Build group in `h-nav-menu` component

**Path:** src/layouts/components/horizontal-nav-menu/HorizontalNavMenuGroup.vue

**Is Globally Registred**: false

</box>


<box>
	
## Using Component

This component is internally handled by `h-nav-menu`. So, you don't have to worry about setting up `h-nav-menu-group`.

This is how you can create group in `navMenuItems` prop of `h-nav-menu`


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

`submenu` property differentiate nav-menu group from nav-menu item and item/group header.

</box>


<box>
	
## Changing Styles

`h-nav-menu-group` component's style are only invoked in it's components. It is not globally available.

Styles of this component is imported at the button of file. Styles of sidebar component can be found in `src/assets/scss/vuexy/components/HorizontalNavMenuGroup.scss`

</box>


<box>
	
## Dependencies

* Vuex Store
* `h-nav-menu-item` component
* `feather-icon` component

</box>
