
# Localization

<box header>

Translating app in other language made easy with Vuexy Admin.

</box>

<box>

## Adding New Locale
	
Vuexy Admin comes with pre-configured i18n. Vuexy Admin uses [vue-i18n](https://kazupon.github.io/vue-i18n/) library to translate the app in other languages. Vuexy Admin has added some locales which includes: `en`, `de`, `fr` and `pt`. Currently i18n is only implemented in main sidebar.

To add more locale you want to reach out to the `i18nData.js` file which is located in `src/i18n/`. `i18nData.js` file exports object which is imported in `src/i18n/i18n.js`. This object is registered with `en` as default locale in `src/main.js`.

:::tip
You can change default locale of Vuexy Admin from `src/main.js` file.
:::

To add new locale other than provided by Vuexy Admin, just create new `property` in **main object**. This `property name` will be your **locale** and as value, you have to pass `object` having `property` as `i18n key` and value as `i18n value`.

```js
export default {
	en: { ... },
	de: { ... },
	fr: { ... },
	pt: { ... },

	// new locale
	ru: {
		Dashboard: 'Приборная доска',
	}
}
```

</box>

<box>
	
## Removing i18n from sidebar

As for now i18n is only implemented in main sidebar you can remove that implementation by just removing `i18n` property from all groups and item `object` in `src/layouts/components/vx-sidebar/sidebarItems.js` file. By removing all i18n key sidebar will fall back to `name property` for displaying group and item name.

</box>

<box>
	
## Remove i18n Completely

To remove i18n completely first you have to remove `i18n` key from sidebar as described above. Now open `src/main.js` file and there you will find i18n import as:
```js
// i18n
import i18n from './i18n/i18n'
```
remove this lines and also remove i18n from Vue instance like below:
```js
new Vue ({
    router,
    store,
    // i18n, 		<- remove or comment like this
    render: h => h(App)
}).$mount('#app')
```

And finally remove i18n folder from `/src` and package from `package.json` by running command `npm uninstall vue-i18n`.

There you go. You successfully removed i18n completely from your app. Cheers.

</box>
