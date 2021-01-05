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


# Change Time Duration

<box header>
	
This component gives simple drop-down which can be used to create drop-down for changing time durations. This component is mainly used in charts.

</box>


<box>
	
## Overview

**Component Name:** change-time-duration-dropdown
  
**Use case:** Create change time duration dropdown. Mainly used in charts.

**Path:** src/components/ChangeTimeDurationDropdown.vue

**Is Globally Registered**: false

This component is really simple and easy to position in charts.

</box>


<box>
	
## Adding Component

<vuecode md>
<div slot="demo">
 <change-time-duration-dropdown />
</div>
<div slot="code">

```html
<template lang="html">
  <change-time-duration-dropdown />
</template>
```

</div>
</vuecode>

:::tip
This component emits event(`timeDurationChanged`) on click with string representation of which option is selected of drop-down item.
:::

Have a look at how drop-down item emits event.
```
<vs-dropdown-item @click="$emit('timeDurationChanged', 'last-28-days')">Last 28 days</vs-dropdown-item>
```


</box>


<box>
	
## Dependencies

* Tailwind

</box>
