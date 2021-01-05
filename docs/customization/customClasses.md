
# Custom Classes

<box header>
  
We created some classes to help you in developing perfect app

</box>


<box>
  
## Button Group

This classes are used for creating button group component. You can check usage [here](/customComponents/buttonGroup.html).

</box>

<box>
  
## Blur Utility

There's blur classes named: `blur-x` where x is 1 to 3. This applies blur in px unit according to class number

```css
.blur-2 {
  filter: blur(2px);
}
```

</box>

<box>
  
## Chip Component

We added `number` class to chip component for making chips complete round. You can see rounded chips in our email app and other. Here's how to use it:

```html
<vs-chip class="number">...</chip>
```

</box>

<box>
  
## Gradient Background For Theme Colors

You can have gradient background for theme colors. List of gradient classes are as below:

* bg-primary-gradient
* bg-success-gradient
* bg-danger-gradient
* bg-warning-gradient
* bg-dark-gradient

</box>


<box>
  
## Custom Dropdown

We created custom dropdown for cart dropdown & notification dropdown. For this class is `.dropdown-custom`. Style of this class is as below:

```scss
.dropdown-custom {
  .vs-dropdown--custom {
    padding: 0 !important;
    border: 0;
    overflow: hidden;
    border-radius: .5rem;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08) !important;
    // @apply shadow-lg;
  }

  .vs-dropdown--menu--after {
    background: rgba(var(--vs-primary), 1) !important;
    right: 1.6rem !important;
  }
}
```

</box>

<box>
  
## Grid System

Our template's entire grid system is based on this grid classes. This classes follows tailwindCSS's grid system utility classes.

* **.vx-row**: For creating Row
* **.vx-col**: For creating Column
* **.vx-row.no-gutter**: For creating row without spaces

</box>

<box>
  
## Input

There was some style needs in input component and we also created classes for that which also helps you in using same style of input in more than one places.

* **.vs-input-no-border**: Create `vs-input` component without border
* **.vs-input-no-shdow-focus**: Omit shadow on focus of input component
* **.vs-input-shadow-drop**: Custom shadow for input component
* **.vs-select-no-border**: This removes border from `vs-select` component. e.g. E-Commerce App Filtering

</box>

<box>
  
## Vertical Navigation Menu

As you explored vuexy admin you might have noticed we used `vs-sidebar` component more than just for demo. e.g. We used it in our apps.

* **.sidebar-spacer**: This is used for creating sidebar in apps or any layout. e.g. ToDo App Sidebar
* **.sidebar-spacer-with-margin**: This is same as above just gives you some room for whitespace around your sidebar. e.g. E-Commerce App Sidebar
* **.sidebar-spacer--wide**: This is another variant of `.sidebar-spacer`. Difference is it has more width than normal sidebar. e.g. Chat App Sidebar
* **.background-absolute**: This used for giving `vs-sidebar` component's background `position` absolute. This is not super useful but you might need them in case. e.g. E-Commerce App Sidebar Background
* **.items-no-padding**: This is used for removing padding added to `.vs-sidebar--items`. We have used this class in almost all apps as we didn't want padding to sidebar items container.
* **.full-vs-sidebar**: This classes is useful when you want to use sidebar component along with `.sidebar-spacer`. This class will create full width sidebar for you(`100% - $(.sidebar-spacer)`). You can check example of this in our Email App, open any mail and you will see large sidebar slides from right to left. That is full width sidebar which uses `.full-vs-sidebar` class. **Note:** it also uses media query in which, from screen less than `992px` sidebar will take full width(`100%`).

</box>

<box>
  
## Tabs Component

Tabs component is really helpful but using it also require some style changes when you want to build perfect UI. Here's some classes we used for tweaking the component.

* **.tabs-shadow-none**: This remove shadow from tabs list. e.g. User Settings Page
* **.tab-action-btn-fill-conatiner**: This is useful in case where you want to give extra padding at bottom of tab-content area. This is super useful when you have content which have shadow and that content is placed last ni tab content. We used this class in user edit page because of action button at bottom of tab content. Without this classes shadow of action button gets cut.

</box>

<box>
  
## Dark Theme

Applying style for same thing over and over for dark mode is inefficient. That's we created some classes which have different style for both themes.

::: tip
Note: "dark"(var: `$theme-dark-bg`) background refers to background which is given to card component & "dark-light"(var: `$theme-dark-light-bg`) background refers to background given to body
:::

* **.d-theme-dark-bg**: Gives dark background in dark theme and white background in light theme.
* **.d-theme-dark-light-bg**: Gives dark-light background in dark theme and white background in light theme.
* **.d-theme-dark-border**: Gives white border in light mode and dark border(var: `$theme-dark-border-color`) for dark mode.
* **.d-theme-border-grey-light**: Gives light grey(`#dae1e7`) border in light mode and dark border(var: `$theme-dark-border-color`) for dark mode.
* **.d-theme-input-dark-bg**: Gives dark background in dark mode.
* **.d-theme-text-inverse**: Gives default color in light mode and gives normal text color in dark mode. Suitable for light background. (This might get removed in future versions. Used in 404, 500, Maintenance, Not Authorized Pages)
* **.d-theme-heading-color**: Gives default color in light mode and gives normal text color in dark mode. Suitable for light background. (This might get removed in future versions. Used in 404, 500, Maintenance, Not Authorized Pages)
* **.table-dark-inverted**: Used to give dark background to table rows. e.g. Analytics Dashboard table. (This might get removed in future versions. Used in 404, 500, Maintenance, Not Authorized Pages)

</box>

<box>
  
## Typography

There's always need for some text utility classes

* **truncate**: truncate the text
* **text-bg**: Gives larger text which is not defined in tailwind and don't need variants
* **text-color-base**: Gives base color(var: `$content-color`)


</box>


<box>
  
## Avatar + List

This is modern design and displaying avatar side by side with some margin is our of fashion. Check our Analytics dashboard table and there you will find list of avatars.

* **.user-list**: Gives avatar list with pleasant hover effect

</box>

<box>
  
## Uncategorized

Here's list of some more classes

* **.responsive**: For creating responsive images
* **.bordered-items**: Gives border bottom to list items except last item(var: `$grey-light`)
* **.enable-rtl-x-scroll**: This will let you enable x scroll in rtl for perfectScrollBar as it is disabled in RTL

</box>

<box>
  
## Dynamic Custom Class

Sometimes you may need to add class to Vue App(`#app` div) for specific page and apply style to only that page. e.g. Invoice Page. You can run below code in mounted hook of your route component to add class to root Vue app for your own customization.

```js
this.$emit("setAppClasses", "invoice-page")
```

</box>
