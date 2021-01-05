---
API:
 - name: text
   type: String
   parameters: null
   description: Determine the text inside the tooltip.
   default: null
 - name: color
   type: String
   parameters: null
   description: Change the color of the tooltip.
   default: null
 - name: delay
   type: String
   parameters: null
   description: Change the time the tooltip appears.
   default: null
 - name: position
   type: String
   parameters: top, left, bottom, right
   description: Change the position where the tooltip will appear.
   default: null
 - name: title
   type: String
   parameters: null
   description: Add a title to the tooltip.
   default: null
 - name: active
   type: Boolean
   parameters: null
   description: determines if the tooltip is active.
   default: true
---

# Tooltip

<box header>

  Very easy to implement and in any element of the DOM.

</box>

<box>
  
## Where is vs-tooltip?

Component `vs-tooltip` has some issues. That's why we created component on top of that component named `vx-tooltip`.

</box>


<box>

## Default

To add a tooltip we have the component `vs-tooltip`

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vx-tooltip text="Tooltip Default">
       <vs-switch v-model="switch1"/>
    </vx-tooltip>
    <vx-tooltip text="Tooltip Default">
      <vs-input-number v-model="number1"/>
    </vx-tooltip>
    <vx-tooltip text="Tooltip Default">
      <vs-button color="primary" type="border">Button</vs-button>
    </vx-tooltip>
  </div>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
      number1:10,
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Position

You can change the position at which the tooltip appears with the property `position`.

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Position />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vx-tooltip text="Tooltip position Left" position="left" >
      <vs-button type="gradient">Left</vs-button>
    </vx-tooltip>
    <vx-tooltip text="Tooltip position Top" position="top" >
      <vs-button type="gradient">Top</vs-button>
    </vx-tooltip>
    <vx-tooltip text="Tooltip position Bottom" position="bottom" >
      <vs-button type="gradient">Bottom</vs-button>
    </vx-tooltip>
    <vx-tooltip text="Tooltip position Right" position="right" >
      <vs-button type="gradient">Right</vs-button>
    </vx-tooltip>
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Delay

You can change the delay in appearing the tooltip with the property `delay`.

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Delay />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vx-tooltip text="Tooltip default delay">
      <vs-button>Delay default</vs-button>
    </vx-tooltip>
    <vx-tooltip delay=".5s" text="Tooltip delay 0.5s">
      <vs-button>Delay 0.5s</vs-button>
    </vx-tooltip>
    <vx-tooltip delay="2s" text="Tooltip delay 2s">
      <vs-button>Delay 2s</vs-button>
    </vx-tooltip>
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Color

To change the color of the tooltip, use the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vx-tooltip text="Tooltip default delay">
      <vs-button type="gradient">Default Color</vs-button>
    </vx-tooltip>
    <vx-tooltip color="primary" text="Tooltip default delay">
      <vs-button type="border">Color primary</vs-button>
    </vx-tooltip>
    <vx-tooltip color="success" text="Tooltip default delay">
      <vs-button color="success" type="border">Color success</vs-button>
    </vx-tooltip>
    <vx-tooltip color="danger" text="Tooltip default delay">
      <vs-button color="danger" type="border">Color danger</vs-button>
    </vx-tooltip>
    <vx-tooltip color="warning" text="Tooltip default delay">
      <vs-button color="warning" type="border">Color warning</vs-button>
    </vx-tooltip>
    <vx-tooltip color="dark" text="Tooltip default delay">
      <vs-button color="dark" type="border">Color dark</vs-button>
    </vx-tooltip>
    <vx-tooltip color="rgb(42, 207, 133)" text="Tooltip default delay">
      <vs-button color="rgb(42, 207, 133)" type="border">Color RGB</vs-button>
    </vx-tooltip>
    <vx-tooltip color="#4a0d6b" text="Tooltip default delay">
      <vs-button color="#4a0d6b" type="border">Color HEX</vs-button>
    </vx-tooltip>
  </div>
</template>
```

</div>
</vuecode>
</box>

<box>

## Title

If necessary, you can add a title to the tooltip with the property `title`

<vuecode md>
<div slot="demo">
  <Demos-Tooltip-Title />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vx-tooltip
      title="Are you sure?"
      color="warning"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet.">
       <vs-button color="warning" type="flat">Title Tooltip</vs-button>
    </vx-tooltip>
  </div>
</template>
```

</div>
</vuecode>
</box>

