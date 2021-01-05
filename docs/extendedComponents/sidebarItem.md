
# V-NavMenu Item

<box header>
	
Vuexy Admin uses extended sidebar item component in v-nav-menu and v-nav-menu-group component.

</box>

<box>

## Name Update

`VxSidebarItem` component is now `VerticalNavMenuItem`.

</box>

<box>
	
## Overview

**Component Name:** v-nav-menu-item
  
**Use case:** Build sidebar item in `v-nav-menu` and `v-nav-menu-group` component

**Path:** src/layouts/components/vertical-nav-menu/VerticalNavMenuItem.vue

**Is Globally Registred**: false

</box>


<box>
	
## Using Component

This component is internally handled by `v-nav-menu` and `v-nav-menu-group`. So, you don't have to worry about setting up `v-nav-menu-item`.

How to create sidebar item in `sidebarItems` prop of `v-nav-menu`

```js
...
	{
		url: "/apps/email",
		name: "Email",
		slug: "email",
		icon: "MailIcon",
		i18n: "Email",
	},
...
```

Above code will create nav item named `Email` from it's `i18n` property. If i18n is disabled in your app then It will fall back to `name` property.

If nav item is sub item of sidebar group then it will always get `CicleIcon` feather icon. So, there's need to define icon if nav group is parent of nav item.

</box>

<box>
  
## Using Object for routing

`VerticalNavMenuItem` component is much smarter now. You can also pass an object to the `url` property.

```js
...
  {
    url: { name: 'todo'},
    name: "Email",
    slug: "email",
    icon: "MailIcon",
    i18n: "Email",
  },
...
```

</box>


<box>
	
## Dependencies

* Vue Router
* `feather-icon` component

</box>
