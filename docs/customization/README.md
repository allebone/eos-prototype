
# Feather - Font Icon

<box header>
	
You can use feather icon in Vuesax Framework component instead of boring materialize icons.

</box>


<box>
	
## Using Font Icon version

Vuesax Component framework mainly support `materialize` icons as theme icons. But They don't look much great. So, we added **_font icon_** version of `Feather Icons`.

When passing icon name in component's prop, you can use `icon-pack` prop and `icon` prop to use feather icons in Vuesax Components.

:::tip
Vuexy Admin uses feather icons in all components of Vuesax Framework instead of materialize icons.
:::

To use feather icons, You just have to pass `feather` as `icon-pack` and **prefix** `icon-{iconName}` in `icon` prop.

To better understand this, check out below examples.

<vuecode md>
<div slot="demo" class="flex items-end">
  <vs-input icon-pack="feather" icon="icon-search" label-placeholder="Search" class="is-label-placeholder mr-4" />
  <vs-button icon-pack="feather" icon="icon-camera" class="mr-4">Button</vs-button>
  <vs-button icon-pack="feather" icon="icon-code">Button</vs-button>
</div>
<div slot="code">

```html
<template>
  <vs-input icon-pack="feather" icon="icon-search" label-placeholder="Search" class="is-label-placeholder" />
  <vs-button icon-pack="feather" icon="icon-camera">Button</vs-button>
  <vs-button icon-pack="feather" icon="icon-code">Button</vs-button>
</template>
```

</div>
</vuecode>

::: tip
View all feather icons [here](https://feathericons.com/).
:::

</box>
