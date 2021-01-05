
# Laravel Integration

<box header>

Vuexy provide laravel starter-kit to speed up your laravel development with Vuexy Admin.

</box>

<box>

## Folder Structure
  
Once you download the template from ThemeForest, you will find the below folder structure in `vuexy-vX.X/vuexy-vuejs-laravel-template/`. This folder contains full version of laravel using Vuexy Vuejs Admin.

```
vuexy-vuejs-laravel-template/
├── app                      # Controllers and Models 
├── bootstrap                # Contains cache and app.php
├── config                   # Application's configuration files
├── database                 # Migrations, model factories, & seeds
├── public                   # index.php ,static folder & Build 
├── resources                # Views, Layouts, store and vue.js components
│   │
│   ├── assets/
│   │   ├── css/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── utils/
│   │
│   ├── js                   # All JS Files
│   │   │
│   │   ├── src
│   │   │   │
│   │   │   ├── acl/                                # Vuejs Access Control
│   │   │   ├── auth/                               # Auth0 Service
│   │   │   ├── components/                         # Vuexy Admin custom components
│   │   │   ├── fake-db/                            # Fake Database for mocking API calls
│   │   │   ├── filters/                            # VueJS filters
│   │   │   ├── firebase/                           # Firebase Configuration
│   │   │   ├── http/                               # Fake Requests
│   │   │   ├── i18n/                               # Internationalization
│   │   │   │
│   │   │   ├── layouts/                            
│   │   │   │    ├── components/                    # Layout components
│   │   │   │    │    ├── customizer/               # Customizer components
│   │   │   │    │    ├── horizontal-nav-menu/      # Horizontal Navigation Menu Component
│   │   │   │    │    ├── navbar/                   # Navbar for Horizontal & Vertical Layout
│   │   │   │    │    ├── vertical-nav-menu/        # Vertical Navigation Menu Component
│   │   │   │    │    ├── vx-tooltip/               # Extended Tooltip component
│   │   │   │    │    ├── TheFooter.vue             # Footer Component
│   │   │   │    │    └── VxBreadcrumb.vue          # Breadcrumb Component
│   │   │   │    │
│   │   │   │    ├── full-page/                     # Full page layout for pages like login
│   │   │   │    └── main/                          # Main layout
│   │   │   │  
│   │   │   ├── palugins/                           # Vuejs Plugins
│   │   │   ├── store/                              # Vuex Store
│   │   │   ├── vendor/                             # Vendor Files
│   │   │   ├── views/                              # View files for all pages
│   │   │   ├── App.vue                             # Application main vue file
│   │   │   ├── globalComponents.js                 # Gloablly registered components
│   │   │   ├── main.js                             # Application main js file
│   │   │   ├── router.js                           # router file
│   │   │   │
│   │   ├── app.js                # Entry point
│   │   ├── auth_config.js        # Auth0 Configurations/Credentials
│   │   ├── themeConfig.js        # Theme Configuration File
│   │   └── vue.config.js         # Optional
│   │
│   ├── lang/                  # Include Languages 
│   ├── sass/                  # Include scss files
│   └── views/                 # Contain Blade templates
│
├── routes/                  # Include Routes Web.php 
├── storage/                 # Contains compile blade templates
├── tests/                   # For testing
├── .babelrc                 # Babel File
├── .editorconfig            # Related with your editor
├── .env.example             # Include Database credentials
├── .gitattributes           # Give attributes to pathnames
├── .gitignore               # Files and Directories to ignore
├── .styleci.yml             
├── artisan                  # Include artisans commands
├── composer.json            # Dependencies used by composer
├── package.json             # Dependencies used by node
├── phpunit.xml              # Related With testing
├── server.php               # For php's internal web server
├── tailwind.js              # Tailwind Configuration File
├── vue.config.js            # VueJS Configuration File
└── webpack.mix.js           # Laravel's webpack file
```

</box>

<box>

## Installation
  
Given below are the steps you need to follow, to install the vuexy-laravel-starter on your system:
  
<br>

**Step 1:** Open the terminal in your root directory(vuexy-laravel-starter) & to install the composer packages run the following command:

```
composer install
```

<br>

**Step 2:** In the root directory, you will find a file named **`.env.example` rename the given file name to `.env`** and run the following command to generate the key (and you can also edit your data base credentials here)

```
php artisan key:generate
```
<br>

**Step 3:** By running the following command, you will be able to get all the dependencies in your node_modules folder:

```
npm install
```
<br>

**Step 4:** To run the project you need to run following command in the project directory. It will compile the vue files & all the other project files. If you are making any changes in any of the .vue file then you need to run the given command again.

```
npm run dev
```
<br>

**Step 5:** To serve the application you need to run the following command in the project directory. (This will give you an address with port number 8000)
  
Now navigate to the given address you will see your application is running.

```
php artisan serve
```

To change the port address, run the following command:

```
php artisan serve --port=8080    // For port 8080
sudo php artisan serve --port=80 // If you want to run it on port 80, you probably need to sudo.
```

<br>

**Watching for changes:**
Running `npm run dev` every time you make changes to file is inefficient. Hopefully there's command so your changes can be watched and get reflected accordingly.

```
npm run watch
```
<br>

**Building for Production:**
If you want to run the project and make the build in the production mode then run the following command in the root directory, otherwise the project will continue to run in the development mode.
```
npm run prod
```

<br>

**Required Permissions**

If you are facing any issues regarding the permissions, then you need to run the following command in your project directory:

```
sudo chmod -R o+rw bootstrap/cache
sudo chmod -R o+rw storage
```

</box>

<box>

## Customization
  
**How to add a New Page:**

To add a new page follow the instructions given below:

**Step 1:** Create a file with the extension .vue under the `resources->js->src->views` directory. You can also create your file under the `your-page-name` directory. Let's create a TestPage for an example with filename TestPage.vue and placing the below code in that file.

```
<template>
    <div class="">
        <h4>Test Page Content</h4>
    </div>
</template>
```

**Step 2:** After creating file you need to declare its route where it can be served on the browser, suppose you want created page to be serve on the route `http://localhost:8080/test-page` . To access this page define its routes in the `resources -> js -> src -> router.js` file.

```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =========================================================================
                // Theme Routes
                // =========================================================================
                ...,
                {
                    path: '/test-page',
                    name: 'testPage',
                    component: () => import('./views/TestPage.vue'),
                },
            ],
        },
    ]
})

```

After defining the route you need to add a new menu in the sidebar navigation. To add the menu go to the `resources->js->src->layouts->components->vxsidebar` directory and open `sidebarItems.js` file.

```
export default [
    ...,
    {
        url: "/test-page",
        name: "Test Page",
        slug: "testPage",
        icon: "MailIcon",
    },
```

After completing these above steps you need to run the command `npm run dev` or `npm run watch` command in the project directory. After running this process you need to run the command `php artisan serve` . It will serve your app on the localhost.

</box>
