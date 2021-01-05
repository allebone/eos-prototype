---
API:
 - name: placeholder
   type: String
   parameters: 
   description: Placeholder for input
   default: search..
 - name: data
   type: Object
   parameters: 
   description: Object from which component will render data
   default:
 - name: initialData
   type: Boolean
   parameters: true, false
   description: render data when nothing is searched. Useful for pinned items
   default: false
 - name: inputClasses
   type: String, Object, Array
   parameters: 
   description: Add classes to search input
   default:
 - name: autoFocus
   type: Boolean
   parameters: true, false
   description: Should input get auto focus when component is rendered
   default: false
 - name: hideGroupTitle
   type: Boolean
   parameters: true, false
   description: hide group title in suggestion list
   default: false
 - name: searchLimit
   type: Number
   parameters: 
   description: Limit the number of suggestions shown in suggestion list
   default: 4(Max)
---


# Auto Suggest

<box header>
	
Implement search with suggestion feature.

</box>


<box>
	
## Overview

:::tip
This component is rewritten for more features and decoupling.
:::

**Component Name:** vx-auto-suggest
  
**Use case:** Create search with suggestion

**Path:** src/layouts/components/vx-auto-suggest/VxAutoSuggest.vue

**Is Globally Registered**: false

</box>


<box style="overflow: visible;">
	
## Using Component

:::warning
Style may look different due to some issues. But you can always check [Vuexy Admin demo](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/) for proper style of how everything will look in your app.
:::

<vuecode md>
<div slot="demo">
  <div style="margin-left: 40px; height: 300px;"> <vx-auto-suggest /></div>
</div>
<div slot="code">

```html
<template>
	<vx-auto-suggest :data="yourData" />
</template>

<script>
import VxAutoSuggest from '@/layouts/components/vx-auto-suggest/VxAutoSuggest.vue';

export default {
	...
	components: {
		...
		VxAutoSuggest,
		...
	}
}
</script>
```

</div>
</vuecode>


</box>

<box>
	
## Passed Data Structure

There is data structure that you have to follow to make `vx-auto-suggest` work. `data` prop accepts `object`. The structure is as followed.

* `key`: Refers to search field. vxAutoSuggest will search in this field and return result.
* `top level properties (Groups)` (e.g. pages & files): These are groups and result will also be returned in group.

```js
export default {
  // Pages Group
  pages: {
    key: "title",
    data: [
      { title: "Analytics Dashboard",
        url: "/dashboard/analytics",
        icon: "HomeIcon",
        is_bookmarked: false
      },
      {...},
      {...},
      {...},
    ]
  },
  // Files Group
  files: {
    key: "file_name",
    data: [
      { file_name: "report.txt",
        from: "No one"
      },
      {...},
      {...},
      {...},
    ]
  },
}

```

:::tip
Still if you have any confusion, check out `src/layouts/components/navbarSearchAndPinList.js` file.
:::

</box>

<box>
	
## Upon Selection

`vx-auto-suggest` fires three events.

* **selected:** 
This event is fired when user select any list item. emitted event have list item's object passed to event. So, you can grab that event and perform whatever actions you like.

* **input:**
This event is emitted when input is changed.


* **closeSearchbar:**
This event is emitted when user presses `esc` key. Common use case of this event is to close search input.


</box>

<box>
  
## Using Slots & Groups

As you already know from data structure of vxAutoSuggest source, top level property is group. e.g. "pages" & "files" are two group in above example. Results have default slot for rendering it self. However, you might need to customize how those returned results should be rendered in your project.

<br>

* **group slot**: Using this slot you can customize how your group label should get rendered.

```html
<vx-auto-suggest ...>
  <template v-slot:group="{ group_name }">
      <p class="font-semibold text-primary">{{ group_name }}</p>
  </template>
</vx-auto-suggest>
```

<br/>

* **No Result Slot**: You can also show custom message if there's no result of search.

```html
<vx-auto-suggest ...>

  <!-- No Items Slot -->
  <template v-slot:noResult="{ group_name }">
    <div class="flex items-center">
      <feather-icon icon="InfoIcon" svgClasses="h-5 w-5" class="mr-4" />
      <span>No results found.</span>
    </div>
  </template>

</vx-auto-suggest>
```

<br/>

* **result slot**: VxAutoSuggest provides dynamic slots so you can pass any number of groups and you can render them as you want. Let take example of above code and render options.

```html
<vx-auto-suggest ...>

  <!-- Pages Suggestion -->
  <template v-slot:pages="{ suggestion }">
    <div class="flex items-end leading-none py-1">
      <feather-icon :icon="suggestion.icon" svgClasses="h-5 w-5" class="mr-4" />
      <span class="mt-1">{{ suggestion.title }}</span>
    </div>
  </template>

  <!-- Or with Images -->

  <!-- Files Suggestion -->
  <template v-slot:files="{ suggestion }">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="img-container w-8 mr-3 flex">
          <img :src="require(`@/assets/images/file-icons/${suggestion.file_ext}.png`)" :alt="suggestion.file_name" class="responsive">
        </div>
        <div class="leading-none mt-1">
          <p class="mb-1">{{ suggestion.file_name }}</p>
          <small>by {{ suggestion.from }}</small>
        </div>
      </div>
      <small>{{ suggestion.size }}</small>
    </div>
  </template>

</vx-auto-suggest>
```

</box>


<box>
	
## Customizing Component

VxAutoSuggest component is now more flexible and it lets you render your suggestion however you want. It also completely decoupled from our layout. So you can also use it in other areas of your app.

vxAutoSuggest component provides dynamic scoped slots for flexibility. All you have to is define template for each group as shown in above example. For more information please check `src/layouts/components/navbar/component/SearchBar.vue`

Here's some feature at glance:

* You can enable showing pinned items using `initialData` prop. Check `src/layouts/components/navbar/component/Bookmarks.vue`
  
* `hideGroupTitle` prop let you hide group title block. This is helpful when you just have one group for filtering.
  
* You can also add classes directly to input of `vx-auto-suggest` using `inputClassses` prop, if you want more control over input of this component.

* You can also add auto focus when search input is rendered using `autoFocus` prop.
  
* Add search limit to suggestions. Maximum value of search limit is 4. You can use `searchLimit` prop to change it.

</box>


<box>
	
## Dependencies

* Feather Icon (Font icon version)

</box>
