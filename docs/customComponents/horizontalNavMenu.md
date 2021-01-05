---
API:
 - name: navMenuItems
   type: Array
   parameters: Array of objects
   description: Array to display in main sidebar of Vuexy Admin
   default: 
---


# Horizontal Nav Menu

<box header>
  
Vuexy Admin now supports horizontal navigation Menu. You can add horizontal menu using `h-nav-menu` component.

</box>

<box>
  
## Overview

**Component Name:** h-nav-menu
  
**Use case:** Building horizontal navigation menu

**Path:** src/layouts/components/horizontal-nav-menu/VerticalNavMenu.vue

**Is Globally Registred**: false

</box>


<box>
  
## Using Component

You can easily create horizontal menu by passing `Array of Objects` as prop to `h-nav-menu` component. Prop for passing Array is `navMenuItems`.

```html
<template>
    <h-nav-menu :navMenuItems = "navMenuItems" />
</template>

<script>
import HNavMenu from '@/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue';

export default {
  ...
  components: {
    ...
    HNavMenu,
    ...
  }
}
</script>
```

:::tip
You can also use same navMenuItems for both vertical & horizontal navigation menus.
:::

Preview of `yourItemsArray`, which can be passed as prop to `h-nav-menu`.

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

`h-nav-menu` component's style are only invoked in it's components. It is not globally available.

Styles of this component is imported at the button of file. Styles of sidebar component can be found in `src/assets/scss/vuexy/components/HorizontalNavMenu.scss`

</box>


<box>
  
## Dependencies

* Perfect Scrollbar
* Vuex Store
* Vue Router
* `h-nav-menu-group` component
* `h-nav-menu-item` component
* `feather-icon` component

</box>
