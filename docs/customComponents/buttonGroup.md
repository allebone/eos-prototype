---
API:
 - name: prependClasses
   type: String
   parameters: class name
   description: Provide custom class to parent of prepend slot
   default:
 - name: appendClasses
   type: String
   parameters: class name
   description: Provide custom class to parent of append slot
   default:
 - name: prepend
   type: Slot
   parameters: 
   description: Slot for prepending content
   default:
 - name: append
   type: slot
   parameters: 
   description: Slot for prepending content
   default:
 - name: default
   type: slot
   parameters: 
   description: Default slot for input type
   default: 
---


# Button Group

<box header>
  
Vuexy Admin now support form inptut groups.

</box>


<box>
  
## Overview
  
**Use case:** Create button groups

</box>

<box>

## Basic Button Group

Add `btn-group` class to wrapper to make all contained button acts as grouped buttons.

<vuecode md>
<div slot="demo">
  <div class="btn-group">
    <vs-button>Left</vs-button>
    <vs-button>Middle</vs-button>
    <vs-button>Right</vs-button>
  </div>
</div>
<div slot="code">

```html
<div class="btn-group">
  <vs-button>Left</vs-button>
  <vs-button>Middle</vs-button>
  <vs-button>Right</vs-button>
</div>
```

</div>
</vuecode>
</box>


<box>

## Toolbar

Use flex container on button groups to create button toolbar.

<vuecode md>
<div slot="demo">
  <div class="flex flex-wrap">
    <div class="btn-group">
      <vs-button>1</vs-button>
      <vs-button>2</vs-button>
      <vs-button>3</vs-button>
      <vs-button>4</vs-button>
    </div>
    <div class="btn-group ml-4">
      <vs-button>5</vs-button>
      <vs-button>6</vs-button>
      <vs-button>7</vs-button>
    </div>
    <div class="btn-group ml-4">
      <vs-button>8</vs-button>
    </div>
  </div>
</div>
<div slot="code">

```html
<div class="flex flex-wrap">
  <div class="btn-group">
    <vs-button>1</vs-button>
    <vs-button>2</vs-button>
    <vs-button>3</vs-button>
    <vs-button>4</vs-button>
  </div>

  <div class="btn-group ml-4">
    <vs-button>5</vs-button>
    <vs-button>6</vs-button>
    <vs-button>7</vs-button>
  </div>

  <div class="btn-group ml-4">
    <vs-button>8</vs-button>
  </div>
</div>
```

</div>
</vuecode>
</box>


<box>

## Sizing

You can use `size` prop of button component to change the size of button group.

<vuecode md>
<div slot="demo">
  <div class="flex flex-col">
    <div class="btn-group">
      <vs-button size="large">Left</vs-button>
      <vs-button size="large">Middle</vs-button>
      <vs-button size="large">Right</vs-button>
    </div>
    <div class="btn-group my-4">
      <vs-button>Left</vs-button>
      <vs-button>Middle</vs-button>
      <vs-button>Right</vs-button>
    </div>
    <div class="btn-group">
      <vs-button size="small">Left</vs-button>
      <vs-button size="small">Middle</vs-button>
      <vs-button size="small">Right</vs-button>
    </div>
  </div>
</div>
<div slot="code">

```html
<div class="btn-group">
  <vs-button size="large">Left</vs-button>
  <vs-button size="large">Middle</vs-button>
  <vs-button size="large">Right</vs-button>
</div>

<div class="btn-group my-4">
  <vs-button>Left</vs-button>
  <vs-button>Middle</vs-button>
  <vs-button>Right</vs-button>
</div>

<div class="btn-group">
  <vs-button size="small">Left</vs-button>
  <vs-button size="small">Middle</vs-button>
  <vs-button size="small">Right</vs-button>
</div>
```

</div>
</vuecode>
</box>


<box>

## Vertical Veriant

You can create vertical variant of button group using `btn-group-vertical` class

<vuecode md>
<div slot="demo">
<div class="btn-group-vertical">
  <vs-button>Left</vs-button>
  <vs-button>Middle</vs-button>
  <vs-button>Right</vs-button>
</div>
</div>
<div slot="code">

```html
<div class="btn-group-vertical">
  <vs-button>Left</vs-button>
  <vs-button>Middle</vs-button>
  <vs-button>Right</vs-button>
</div>
```

</div>
</vuecode>
</box>
