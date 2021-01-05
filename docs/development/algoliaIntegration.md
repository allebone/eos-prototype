
# Algolia Integration

<box header>

Vuexy Admin uses **Algolia search engine** to provide blazing fast search functionality.

</box>

<box>

## Vue InstantSearch

Vuexy Admin uses Vue InstantSearch to interact with Algolia’s API.
  
InstantSearch is a family of open-source, production-ready UI libraries that eases the usage and installation of the Algolia search engine.
  
It provides high-level UI widgets that interact with Algolia’s API, to easily build instant-search applications, where you focus on building your UI instead of needing to understand every detail of the Algolia search engine right away.

Vuexy Admin **customizes the UI** provided by Vue InstantSearch to fit in theme. You can find detailed guide [here](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/vue/)

</box>


<box>

## How to add your dataset?

In `src/apps/eCommerce/ECommerceShop.vue` you will find `ais-instant-search` component, where you can add your `searchClient` and `index-name`.

```html
<ais-instant-search
        :search-client="searchClient"
        index-name="instant_search">
```

You can find detailed guide [here](https://www.algolia.com/doc/guides/building-search-ui/getting-started/vue/?language=swift#learn-how-we-configured-our-dataset) to configure dataset.

</box>
