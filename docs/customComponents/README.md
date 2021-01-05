---
API:
 - name: icon
   type: Sting
   parameters: feather-icon name
   description: Accepts feather icon name according to vue-feather-icon library
   default: 
 - name: svgClasses
   type: String, Object, Array
   parameters: 
   description: Add classes to svg icon
   default:
 - name: badge
   type: 
   parameters: 
   description: Add badge to feather icon
   default: 
---

# Feather Icon

<box header>
	
Vuexy Admin uses custom `feather-icon` component to create dynamic icons based on `icon` prop.

</box>

<box>
	
## Overview

**Component Name:** feather-icon
  
**Use case:** Create SVG icons without manual import

**Path:** src/components/FeatherIcon.vue

**Is Globally Registered**: true

In `vue-feather-icon` library, if you want to create feather icon. You have to import that icon using `import { AirplayIcon } from 'vue-feather-icons'` and then register that component in components. Which makes code something like below:

```html
<template>
  <airplay-icon class="custom-class"></airplay-icon>
</template>

<script>
import { AirplayIcon } from 'vue-feather-icons'

export default {
  components: {
    AirplayIcon
  }
}
</script>
```

So, we created custom `feather-icon` component to make easier the process. For using feather-icon you just have to pass ``icon name`` to `feather-icon` component and component will import that icon and renders it.

`feather-icon` component also have some nice features besides dynamic import,
1. Add badge to icon
2. Flexibility to change stroke color of SVG
3. Flexibility to change fill color of SVG
4. Emmit events etc.

</box>


<box>
	
## Simple Feather Icon

<vuecode md>
<div slot="demo">
 <feather-icon icon="HomeIcon" style="margin-right: 10px;" />
 <feather-icon icon="ArchiveIcon" style="margin-right: 10px;" />
 <feather-icon icon="AlertCircleIcon" style="margin-right: 10px;" />
</div>
<div slot="code">

```html
<template lang="html">
  <feather-icon icon="HomeIcon" />
  <feather-icon icon="ArchiveIcon" />
  <feather-icon icon="AlertCircleIcon" />
</template>
```

</div>
</vuecode>


</box>

<box>
	
## Stroke & Fill Color

Vuexy Admin uses tailwind for utility classes. You can use classes like `fill-current` & `stroke-current` along with `text-${color}` to add colors to SVG icons.

To pass this SVG classes to `feather-icon` component there is `svgClasses` prop.

<vuecode md>
<div slot="demo">
 <feather-icon icon="HeartIcon" svgClasses="svg-color-demo-1" style="margin-right: 10px;" />
 <feather-icon icon="PlayIcon" svgClasses="svg-color-demo-2" style="margin-right: 10px;" />
 <feather-icon icon="AlertCircleIcon" svgClasses="svg-color-demo-3" style="margin-right: 10px;" />
</div>
<div slot="code">

```html
<template lang="html">
  <feather-icon icon="HeartIcon" svgClasses="fill-current text-danger" />
  <feather-icon icon="PlayIcon" svgClasses="fill-current text-success" />
  <feather-icon icon="AlertCircleIcon" svgClasses="stroke-current text-warning" />
</template>
```

</div>
</vuecode>


</box>


<box>
	
## Add Badge

Icons with badge gives more information to the user. For this reason `feather-icon` component also let you add badge to icons.

You can add badge to icon using `badge` prop.

<vuecode md>
<div slot="demo">
 <feather-icon icon="BellIcon" badge="5" style="margin-right: 10px;" />
 <feather-icon icon="BellIcon" badge="2" svgClasses="svg-color-demo-2" style="margin-right: 10px;" />
 <feather-icon icon="BellIcon" badge="1" svgClasses="svg-color-demo-3" style="margin-right: 10px;" />
</div>
<div slot="code">

```html
<template lang="html">
  <feather-icon icon="BellIcon" badge="5" />
  <feather-icon icon="BellIcon" badge="2" svgClasses="fill-current text-success" />
  <feather-icon icon="BellIcon" badge="1" svgClasses="stroke-current text-warning" />
</template>
```

</div>
</vuecode>


</box>


<box>
	
## Changing Styles

`feather-icon` component styles can be changed using `props` like `class` & `svgClasses`.

</box>


<box>
	
## Dependencies

* `vue-feather-icon` library
* Tailwind

</box>

<style lang="scss">
.svg-color-demo-1 {
	fill: currentColor;
	color: #EA5455;
}

.svg-color-demo-2 {
	fill: currentColor;
	color: #28C76F;
}

.svg-color-demo-3 {
	stroke: currentColor;
	color: #FF9F43;
}

</style>
