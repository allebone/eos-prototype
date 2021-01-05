
# App Loader

<box header>
	
Vuexy Admin loader for inital page load

</box>

<box>

## Why App Loader?
	
If user visits your app and your app is too large then it takes some time to load whole app, during this time users sees blank white screen. This shows poor UX. That's why Vuexy Admin have app-loader to show loading/initialization of app when user visits your app.


</box>


<box>

## Where It's Placed?
	
You can find app-loader in `public/` folder of your project. `index.html` file in that folder imports `loader.css` and `logo.png` for showing app-loader to users.

:::tip
Vuexy Admin uses loader made from pure css. It is not from Vuesax Component Framework.
:::


</box>

<box>
	
## How to remove app-loader?

You can remove app-loader by removing following lines from `index.html`

```html
...
<link rel="stylesheet" type="text/css" href="/loader.css">
....
....

<div id="loading-bg">
  <div class="loading-logo">
    <img src="<%= BASE_URL %>logo.png" alt="Logo">
  </div>
  <div class="loading">
    <div class="effect-1 effects"></div>
    <div class="effect-2 effects"></div>
    <div class="effect-3 effects"></div>
  </div>
</div>
...
```

Now, you have successfully removed app loader from `index.html`, but to completely wipe out app-loader from your app, go to `router.js` file and remove these lines:
```js
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
	if (appLoading) {
		appLoading.style.display = "none";
	}
})
```


</box>
