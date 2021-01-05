
# Card

<box header>
  
Vuexy Admin have custom card component to enhance viewing experience and UX.

</box>

<box>
  
## Overview

**Component Name:** vx-card
  
**Use case:** Create advanced cards

**Path:** src/components/vx-card/VxCard.vue

**Is Globally Registered**: true

`vx-card` component have is built with simplicity & flexibility in mind. It is really easy to work with and provides you enough customization to make card however you like.

`vx-card` have such nice transitions to make your cards collapsible and to be removed.

<br>

`vx-card` supports **_three actions_**:

* **Collapse:** Collapse content for more space
* **Refresh:** Refresh card content for requesting data from API
* **Remove:** Remove card

<br>

`vx-card` component comes with **_5 slots_** to give flexibility in creating card however you like.

Changing the style of card is also made easy with just passing **_props_**. This props are listed below:

* **no-shadow:** Remove card shadow
* **no-radius:** Remove card radius
* **card-border:** create bordered cards instead of shadow. Gives ability to use card inside of card.

</box>


<box>
  
## Default

You can create simple card by wrapping your content around `vx-card` tag.

<vuecode md>
<div slot="demo">
  <Demos-extra-card-Default></Demos-extra-card-Default>
</div>
<div slot="code">

```html
<template>
  <vx-card>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </vx-card>
</template>
```

</div>
</vuecode>


</box>


<box>
  
## Title

You can card with title using `title` prop. If you want to add subtitle you can also add that using `subtitle` prop.

<vuecode md>
<div slot="demo">
  <Demos-extra-card-Title></Demos-extra-card-Title>
</div>
<div slot="code">

```html
<template>
  <vx-card title="Card title" subtitle="I am subtitle">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </vx-card>
</template>
```

</div>
</vuecode>


</box>


<box>
  
## With Action Buttons

Creating card with actions like `collapse`, `refresh/reload` & `remove` made easy with this custom card component. You just have to pass prop `actionButtons`.

<vuecode md>
<div slot="demo">
  <Demos-extra-card-ActionButtons></Demos-extra-card-ActionButtons>
</div>
<div slot="code">

```html
<template>
  <vx-card title="Card title" actionButtons>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </vx-card>
</template>
```

</div>
</vuecode>

</box>


<box>
  
## With Single/Multiple Actions

You can also add single/multiple actions as per your requirements. To add actions you have to add them using props. Prop for each action is listed below:

1. collapseAction
2. refreshContentAction
3. removeCardAction

Let's take an example of how you can create card with only collapse action.

<vuecode md>
<div slot="demo">
  <Demos-extra-card-SingleAction></Demos-extra-card-SingleAction>
</div>
<div slot="code">

```html
<template>
  <vx-card title="Card title" collapseAction>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </vx-card>
</template>
```

</div>
</vuecode>


To add another prop, just pass prop for that action. e.g.

```
<vx-card title="Card Title" collapseAction removeCardAction>
```

</box>


<box>
  
## Customizing Card

`vx-card` have various to customize the look and feel of card component. You can remove shadow, add border etc. to bend it to your needs. Such options can be applied by passing them as prop:

1. **noShadow:** Remove shadow from card
2. **noRadius:** Remove border radius from card
2. **cardBorder:** Add card border

In this exmaple we will create card which will have card border but no shadow.

<vuecode md>
<div slot="demo">
  <Demos-extra-card-Customize></Demos-extra-card-Customize>
</div>
<div slot="code">

```html
<template>
  <vx-card title="Card title" noShadow cardBorder>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </vx-card>
</template>
```

</div>
</vuecode>

</box>


<box>
  
## Code Toggler

Vuexy Admin uses custom card's `code-toggler` feature to show you code along side of demo. Which you already seen in demo. To implement this `code-toggler` feature you just have to add `code-toggler` prop to your card & some code in **HTML entites** inside of `codeContainer` slot.

If above explanation seems confusing lets look at example.

<vuecode md>
<div slot="demo">
  <Demos-extra-card-Code></Demos-extra-card-Code>
</div>
<div slot="code">

```html
<template>
  <vx-card title="Card Title" code-toggler>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <template slot="codeContainer">
      &lt;h1&gt;Hello Vuexy&lt;/h1&gt;
    </template>
  </vx-card>
</template>
```

</div>
</vuecode>

:::warning
Style may look different due to some issues. But you can always check [Vuexy Admin demo](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/components/alert) for proper style of how everything will look in your app.
:::

</box>


<box>
  
## Actions Slot

If you also add your custom content instead of card actions. Like remaining time or time elapsed or whatever you like using `actions` slot.

Let's see how you can add elapsed time to your card using `actions` slot.

<vuecode md>
<div slot="demo">
  <Demos-extra-card-SlotActions></Demos-extra-card-SlotActions>
</div>
<div slot="code">

```html
<template>
  <vx-card title="Card Title">

    <template slot="actions">
      <span class="text-grey">1 day ago</span>
    </template>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </vx-card>
</template>
```

</div>
</vuecode>

</box>


<box>
  
## No Body Slot

In some scenarios you may not want padding in card content. For that we have `no-body` slot. Which will let you add content without padding.

Let's try that out as well.

<vuecode md>
<div slot="demo">
  <Demos-extra-card-SlotNoBody></Demos-extra-card-SlotNoBody>
</div>
<div slot="code">

```html
<template>
  <vx-card>

    <img :src="$withBase('/card2.png')" alt="" slot="no-body" class="responsive card-img-top">

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </vx-card>
</template>
```

</div>
</vuecode>

:::tip
To give **rounded corners** on top to img in `vx-card` component, add `card-img-top` class to image as shown in above code.
:::
  
Another use case of this slot can be one we see in our [demo of statistics card](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/ui-elements/card/statistics).

:::tip
If you have `no-body` slot with regular content(with padding) then this slot with be on top of regular content. To create content with no padding below the regular content use `no-body-bottom` slot.
:::

</box>


<box>
  
## Footer Slot

You can also add footer to your card using `footer` slot. Footer of the card can be different for different use cases thats way we create very generic footer slot.

This slot's content is wrapped in `vx-card__footer` class and it will be at the end of all content. Which gives you full control over how you want your footer to look like.

Let's create simple footer with links in it.

<vuecode md>
<div slot="demo">
  <Demos-extra-card-SlotFooter></Demos-extra-card-SlotFooter>
</div>
<div slot="code">

```html
<template>
  <vx-card title="Card Title">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <template slot="footer">
      <div class="flex justify-between">
        <router-link to="/">Link 1</router-link>
        <router-link to="/">Link 2</router-link>
      </div>
    </template>
  </vx-card>
</template>
```


</div>
</vuecode>

:::tip
It does not matter where you define your `footer slot`. it will always get rendered below all content.
:::

</box>


<box>
  
## Overlay Card

With all these customization and functionality things, `vx-card` card always provide fancy way to attract your users using `overlay card`.

You can create overlay image card like below using this component.

<vuecode md>
<div slot="demo">
  <Demos-extra-card-Overlay></Demos-extra-card-Overlay>
</div>
<div slot="code">

```html
<template>
  <vx-card class="overlay-card overflow-hidden w-1/3">
    <template slot="no-body">
      <img :src="$withBase('/cardOverlay.jpg')" alt="user-profile-cover" class="responsive">
      <div class="card-overlay text-white flex flex-col justify-between">
        <h4 class="text-white mb-4">Beautiful Overlay</h4>
        <p>Cake sesame snaps cupcake gingerbread danish I love gingerbread.</p>
      </div>
    </template>
  </vx-card>
</template>
```


</div>
</vuecode>

:::tip
You can find more demo of using card on [Vuexy Admin demo](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/ui-elements/card/basic)
:::

</box>

<box>
  
## Make API call on refresh

As our custom card component provide refresh action. You can use that event for reloading your card content.

```html
<template>
  <vx-card title="Remove Card" remove-card-action @refresh="reloadData">
    <p>{{ someData }}</p>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      someData: 'I am initial Data.',
    }
  },
  methods: {
    reloadData(card) {
      this.$http.get('YOUR_API_URL')
        .then((response) => {
          this.someData = response.data  // update data
          card.removeRefreshAnimation()  // remove refresh animation
        })
        .catch((error) => {
          console.log("Error!");
          card.removeRefreshAnimation()  // remove refresh animation
        });
    }
  }
}
</script>
```

:::warning
You have to close refresh animation after refresh button is clicked, via card's `removeRefreshAnimation` method.
:::

</box>


<box>
  
## Events

Card component emit's 3 events.
1. toggleCollapse
2. refresh
3. remove

**1. toggleCollapse**

This event is emitted when card content is collapsed or expanded. It passes `isContentCollapsed` to event for checking if content is collapsed or expanded.

**2. refresh**

This event is emitted when card is refreshed via refresh/reload action. It passes `card` component to event for removing it's animation after API call finishes.

**3. remove**

This event is emitted when card is remove via close/remove action.


Here's simple demo of using events
```html
<vx-card @toggleCollapse="doSomething" @refresh="makeAPICall" @remove="doSomethingClose">
  Your content.....
</vx-card>
```

Please check how to remove animation when refresh is triggered in above section - `Make API call on refresh`

</box>


<box>
  
## Dependencies

* `vue-prism-component` library
* `feather-icon` component
* Tailwind

</box>
