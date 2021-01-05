---
API:
 - name: list
   type: Array
   parameters: List of String
   description: Accepts Array containing String
   default: 
 - name: icon
   type: String
   parameters: Feather icon name
   description: Accepts feather icon name according to vue-feather-icon library
   default:
---


# List

<box header>
	
Create simple looking list for simple usage.

</box>


<box>
	
## Overview

**Component Name:** vx-list
  
**Use case:** Create simple looking list

**Path:** src/components/vx-list/VxList.vue

**Is Globally Registered**: true

Vuesax Framework provide component for creating great looking list. However we may sometime need simple looking list with only bullets and no bold colors and borders. For this reasons, Vuexy Admin have simple list component `vx-list`.

</box>


<box>
	
## Creating List

<vuecode md>
<div slot="demo">
 <vx-list :list="['Item 1', 'Item 2', 'Last Item in List']" />
</div>
<div slot="code">

```html
<template lang="html">
  <vx-list :list="['Item 1', 'Item 2', 'Last Item in List']" />
</template>
```

</div>
</vuecode>


</box>

<box>
	
## Changing Icon

You can change list bullet icon using `icon` prop.

<vuecode md>
<div slot="demo">
 <vx-list :list="['Item 1', 'Item 2', 'Last Item in List']" icon="StarIcon" />
</div>
<div slot="code">

```html
<template lang="html">
  <vx-list :list="['Item 1', 'Item 2', 'Last Item in List']" icon="StarIcon" />
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

* Tailwind

</box>
