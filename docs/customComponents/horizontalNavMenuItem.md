
# H-NavMenu Item

<box header>
	
Horizontal Navigation Menu uses this component to render single item.

</box>

<box>
	
## Overview

**Component Name:** h-nav-menu-item
  
**Use case:** Build nav item in `h-nav-menu` and `h-nav-menu-group` component

**Path:** src/layouts/components/horizontal-nav-menu/HorizontalNavMenuItem.vue

**Is Globally Registred**: false

</box>


<box>
	
## Using Component

This component is internally handled by `h-nav-menu` and `h-nav-menu-group`. So, you don't have to worry about setting up `h-nav-menu-item`.

How to create nav item in `navMenuItems` prop of `h-nav-menu`

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

If nav item is sub item of nav-group then it will always get `CicleIcon` feather icon. So, there's need to define icon if nav group is parent of nav item.

</box>

<box>
  
## Using Object for routing

You can also pass an object to the `url` property.

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
