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


# Input Group

<box header>
	
Vuexy Admin now support form inptut groups.

</box>


<box>
	
## Overview

**Component Name:** vx-input-group
  
**Use case:** Create form input groups

**Path:** src/components/vx-input-group/VxInputGroup.vue

**Is Globally Registered**: true

</box>

<box>

## Basic Input Group

`vx-input-group` have three slots to create form input group.
* prepend
* default
* append

Use `.prepend-text` class for prepend content wrapper and `.append-text` for append content wrapper.

<vuecode md>
<div slot="demo">
  <Demos-extra-vxinputgroup-Basic />
</div>
<div slot="code">

```html
<template>
  <div>
    <!-- TITLE -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>@</span>
        </div>
      </template>

      <vs-input v-model="title" placeholder="Email" />
    </vx-input-group>
    <!-- /TITLE -->

    <!-- URL -->
    <vx-input-group class="mb-6">
      <vs-input v-model="username" placeholder="Username" />

      <template slot="append">
        <div class="append-text bg-primary">
          <span>@url.com</span>
        </div>
      </template>
    </vx-input-group>
    <!-- /URL -->

    <!-- USERNAME -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>https://pixinvent.com/users/</span>
        </div>
      </template>

      <vs-input v-model="siteUsername" />
    </vx-input-group>
    <!-- /USERNAME -->

    <!-- currency -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>$</span>
        </div>
      </template>

      <vs-input v-model="amount" />

      <template slot="append">
        <div class="append-text bg-primary">
          <span>.00</span>
        </div>
      </template>
    </vx-input-group>
    <!-- /currency -->

    <!-- Textarea -->
    <vx-input-group>
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Description</span>
        </div>
      </template>

      <vs-textarea v-model="textarea" />
    </vx-input-group>
    <!-- /Textarea -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: '',
      username: '',
      siteUsername: '',
      amount: '',
      textarea: '',
    }
  }
}
</script>

```

</div>
</vuecode>
</box>


<box>

## Sizing

You can also change size of input group using `size` prop of `vs-input` component.

<vuecode md>
<div slot="demo">
  <Demos-extra-vxinputgroup-Sizing />
</div>
<div slot="code">

```html
<template>
  <div>
    <!-- SMALL -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Small</span>
        </div>
      </template>

      <vs-input v-model="input1" size="small" />
    </vx-input-group>
    <!-- /SMALL -->

    <!-- DEFAULT -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Default</span>
        </div>
      </template>

      <vs-input v-model="input2" />
    </vx-input-group>
    <!-- /DEFAULT -->

    <!-- LARGE -->
    <vx-input-group>
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Large</span>
        </div>
      </template>

      <vs-input v-model="input3" size="large" />
    </vx-input-group>
    <!-- /LARGE -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: ''
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Form Elements

You can also add form elements to prepend/append slot. Using **tailwind css**, you can tune appearance as you like.

<vuecode md>
<div slot="demo">
  <Demos-extra-vxinputgroup-FormElements />
</div>
<div slot="code">

```html
<template>
  <div>
    <!-- CHECKBOX -->
    <vx-input-group class="mb-base" prependClasses="border border-solid border-grey border-r-0">
      <template slot="prepend">
        <div class="prepend-text">
          <vs-checkbox v-model="checkbox1"></vs-checkbox>
        </div>
      </template>

      <vs-input v-model="input1" />
    </vx-input-group>
    <!-- /CHECKBOX -->

    <!-- RADIO -->
    <vx-input-group class="mb-base" prependClasses="border border-solid border-grey border-r-0">
      <template slot="prepend">
        <div class="prepend-text">
          <vs-radio v-model="radios1" vs-value="radio1"></vs-radio>
        </div>
      </template>

      <vs-input v-model="input2" />
    </vx-input-group>
    <!-- /RADIO -->

    <!-- SWITCH -->
    <vx-input-group class="mb-base" prependClasses="border border-solid border-grey border-r-0">
      <template slot="prepend">
        <div class="prepend-text">
          <vs-switch v-model="switch1" />
        </div>
      </template>

      <vs-input v-model="input3" />
    </vx-input-group>
    <!-- /SWITCH -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox1: false,
      radios1: null,
      switch1: false,
      input1: '',
      input2: '',
      input3: ''
    }
  }
}
</script>

```

</div>
</vuecode>
</box>


<box>

## Multiple Addons

`vx-input-group` component provides various options to create desired form input group. Add multiple addons in prepend/append slot as you like.

<vuecode md>
<div slot="demo">
  <Demos-extra-vxinputgroup-MultipleAddons />
</div>
<div slot="code">

```html
<template>
  <div>
    <!-- ADDONS PREPEND -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>$</span>
        </div>
        <div class="prepend-text bg-primary">
          <span>0.00</span>
        </div>
      </template>

      <vs-input v-model="title1" />
    </vx-input-group>
    <!-- /ADDONS PREPEND -->

    <!-- ADDONS APPEND -->
    <vx-input-group class="mb-base">
      <template slot="append">
        <div class="append-text bg-primary">
          <span>$</span>
        </div>
        <div class="append-text bg-primary">
          <span>0.00</span>
        </div>
      </template>

      <vs-input v-model="title2" />
    </vx-input-group>
    <!-- /ADDONS APPEND -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title1: '',
      title2: '',
    }
  }
}
</script>

```

</div>
</vuecode>
</box>


<box>

## Button Addons

Sometimes buttons are required in form input group. Vuexy also let you add button as addons to your input group.

<vuecode md>
<div slot="demo">
  <Demos-extra-vxinputgroup-Buttons />
</div>
<div slot="code">

```html
<template>
  <div>
    <!-- Basic -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text btn-addon">
          <vs-button color="primary">Button</vs-button>
        </div>
      </template>

      <vs-input v-model="input1" />
    </vx-input-group>
    <!-- /Basic -->

    <!-- Append Button -->
    <vx-input-group class="mb-base">
      <vs-input v-model="input2" />

      <template slot="append">
        <div class="append-text btn-addon">
          <vs-button color="primary">Button</vs-button>
        </div>
      </template>
    </vx-input-group>
    <!-- /Append Button -->

    <!-- Prepend Two Buttons -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text btn-addon">
          <vs-button color="primary" type="border">Button1</vs-button>
          <vs-button color="primary" type="border">Button2</vs-button>
        </div>
      </template>

      <vs-input v-model="input3" />
    </vx-input-group>
    <!-- /Prepend Two Buttons -->

    <!-- Append Two Buttons -->
    <vx-input-group class="mb-base">
      <vs-input v-model="input4" />

      <template slot="append">
        <div class="append-text btn-addon">
          <vs-button color="primary" type="border">Button1</vs-button>
          <vs-button color="primary" type="border">Button2</vs-button>
        </div>
      </template>
    </vx-input-group>
    <!-- /Append Two Buttons -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>
```

</div>
</vuecode>
</box>
