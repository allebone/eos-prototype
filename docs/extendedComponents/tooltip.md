
# Tooltip

<box header>
	
Vuexy Admin uses custom tooltip. Because of issue with stock tooltip of Vuesax framework.

</box>

<box>
	
## Overview

**Component Name:** vx-tooltip
  
**Use case:** create tooltip

**Path:** src/layouts/components/vx-tooltip/VxTooltip.vue

**Is Globally Registred**: true

</box>


<box>
	
## Using Component

<vuecode md>
<div slot="demo">

You can wrap any element with `vx-tooltip` to create tooltip for that element.

Below code demonstrate how to add tooltip to various components.

  <div style="display: flex; margin-left: 20px; margin-top: 10px">
    <vx-tooltip text="Tooltip Default">
      <vs-button color="primary" style="margin-right: 10px;">Button</vs-button>
    </vx-tooltip>
    <vx-tooltip text="Tooltip Default">
      <vs-button color="success" style="margin-right: 10px;">Button</vs-button>
    </vx-tooltip>
    <vx-tooltip text="Tooltip Default">
      <vs-button color="danger" style="margin-right: 10px;">Button</vs-button>
    </vx-tooltip>
  </div>

`vx-tooltip` component gives features similar to stock tooltip component. You just have to use `vx-tooltip` as tag instead of `vs-tooltip`.

Find other features supported by `vx-tooltip` [here](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/components/tooltip).

</div>
<div slot="code">

```html
<template>
  <div>
    <vx-tooltip text="Tooltip Default">
      <vs-button color="primary">Button</vs-button>
    </vx-tooltip>
    <vx-tooltip text="Tooltip Default">
      <vs-button color="success">Button</vs-button>
    </vx-tooltip>
    <vx-tooltip text="Tooltip Default">
      <vs-button color="danger">Button</vs-button>
    </vx-tooltip>
  </div>
</template>
```

</div>
</vuecode>

</box>


<box>
	
## Dependencies

* src/assets/utils.js
* src/assets/colors.js

</box>
