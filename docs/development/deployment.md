
# Deployment

<box header>

How to deploy Vuexy Admin

</box>

<box>

## Getting Things Ready

Before deploying Vuexy Admin, make sure you have all the required modules/packages installed. Missing modules/packages may result in error during the build process.

Now to create build run command `npm run build`. After successful execution of build command you will get `dist` folder in root of your project. Now Your files are ready to be deployed.

</box>

<box>

## Deploying

Create `zip` file of your dist folder to upload it on server. Login into your server, upload your zip file and decompress it.

::: warning
If you plan to deploy your site under a sub path, e.g. `https://foo.github.io/bar/` then in `vue.config.js` file set `publicPath` property to your sub path. e.g. `publicPath: 'bar/'`
:::

Last step is to add `.htaccess` file to root of your project. Code for `.htaccess` file is as below:

```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

</box>
