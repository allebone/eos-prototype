---
API:
 - name: disableCustomizer
   type: Boolean
   parameters: true, false
   description: Toggle display of theme customizer
   default: false
 - name: disableThemeTour
   type: Boolean
   parameters: true, false
   description: Enable/Disable app tour in Vuexy Admin
   default: false
 - name: footerType
   type: String
   parameters: static, sticky or hidden
   description: Change how footer is displayed
   default: static
 - name: hideScrollToTop
   type: Boolean
   parameters: true, false
   description: Toggle display of scroll to top button
   default: false
 - name: mainLayoutType
   type: String
   parameters: horizontal/ vertical
   description: Layout Type
   default: vertical
 - name: navbarColor
   type: String
   parameters: Hex, rgb, rgba or valid HTML Color
   description: Change color of navbar using this property
   default: #fff
 - name: navbarType
   type: String
   parameters: floating, static, sticky or hidden
   description: Change how navbar is displayed
   default: floating
 - name: routerTransition
   type: String
   parameters: zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none
   description: This property is used to change the router animation.
   default: zoom-fade
 - name: sidebarCollapsed
   type: Boolean
   parameters: true, false
   description: Create collapsed sidebar by setting this property to true.
   default: false
 - name: theme
   type: String
   parameters: light, dark, semi-dark
   description: Set between light theme, dark theme & semi-dark theme.
   default: light
 - name: rtl
   type: Boolean
   parameters: true, false
   description: Enable/Disable RTL
   default: false
---


# Theme Configurations

<box header>

Change Vuexy Admin to fit your needs. To configure Vuexy Admin we will use `theme.config.js` file, which have all Vuexy Admin configurations listed with their options.

</box>

<box>

## Changing Colors

You can change Vuexy Admin's main colors by changing provided color properties' e.g. `primary, success etc.` value to your faviourite color. You can pass **RGB and Hex** values **only**.

If you don't pass any property or remove `colors` object, Vuexy Admin will use default colors provided by Vuesax Framework.

After removing `colors` object, There's no `colors` object in `themeConfig.js` file. So, you have to remove 3 lines line from `themeConfig.js` file as it sets main colors for Vuexy Admin using `colors` object. These 3 lines are listed below:

```js
import Vue from 'vue'
import Vuesax from 'vuesax'
Vue.use(Vuesax, { theme: { colors } });
```

::: warning
If you are using customizer then `primary` color(property) is required to be set in `colors` object.
:::

You can find detailed documentation on customizing colors, [here](/theme/).

</box>

<box>



You can change Vueasx admin's main colors by changing provided color properties e.g. `primary, success etc.` value to your faviourite color. You can pass **RGB and Hex** values **only**.

:::tip
If you don't pass any property or remove `colors` object, Vuexy Admin will use default colors provided by Vuesax Framework.

After removing `colors` object, There's no `colors` object in `themeConfig.js` file. So, you have to remove `Vue.use(Vuesax, { theme:{ colors } });` line from `themeConfig.js` file as it sets main colors for Vuexy Admin using `colors` object.
:::

::: warning
If you are using customizer then `primary` color(property) is required to be set in `colors` object.
:::

You can find detailed documentation on customizing colors, [here](/theme/).

::: warning
`disableThemeTour` options will be auto-disable in smaller devices in provided package. Tour steps includes element which are not present in DOM in smaller devices. So, it will be disabled in smaller devices. If you have elements which will be always present in DOM even in the smaller devices then
:::

</box>

<box>

## Theme Tour
  
`disableThemeTour` options will be auto-disable in smaller devices & in horizontal layout in provided package. This is because Tour steps includes element which are not present in DOM in smaller devices and in horizontal layout. So, it will be disabled in smaller devices.
  
If you have elements which will be always present in DOM even in the smaller devices then you can remove below code to enable theme tour even in smaller devices.

```js
// File: Main.vue - src/layouts/main/Main.vue
this.disableThemeTour = true;    // Remove this line
```

</box>
