
# Folder Structure

<box header>

Understand the Vuexy Admin folder structure

</box>

<box>

## Documentation

After downloading the zip file from themeforest unzip that file and Open `documentation.html` file to read documentation of Vuexy Admin, opening this file will redirect you to online documentation of Vuexy Admin.

</box>

<box>

## Project Folder

Once you unzip the file downloaded from themeforest, you will find `vuexy-vx.x` folder which contains actual files and folders required to run Vuexy Admin.

```
vuexy-vx.x/
│
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   ├── loader.css                          -> Initial Loader CSS
│   └── index.html                          -> Main HTML
│
├── src/
│   ├── acl/                                -> Aceess Control
│   │                             
│   ├── assets/
│   |    ├── css/                           -> Tailwind, Feather & Loader CSS
│   |    ├── fonts/                         -> Feather Font Icons
│   |    ├── images/
│   |    ├── scss/							-> Template SCSS files, check folder structure below
│   |    └── utils/							-> utilities folder
│   │
│   ├── auth/                               -> Auth0 Service
│   ├── components/                         -> Vuexy Admin custom components
│   ├── fake-db/         				    -> Fake Database for mocking axios requests (Fake API Calls)
│   ├── filters/                            -> VueJS filters
│   ├── firebase/                           -> firebase config
│   ├── http/                               -> Axios Mock Adapter Requests
│   ├── i18n/         					    -> I18n
│   │
│   ├── layouts/            				
│   │    │
│   |    ├── components/					-> Layout components
│   |    |    ├── customizer/				-> Customizer component
│   |    |    ├── horizontal-nav-menu/      -> Nav-Menu Component for Horizontal layout
│   |    |    ├── Navbar/		            -> Navbar Components for Vertical & Horizontal Layout + Fuzzy Search Items
│   |    |    ├── vertical-nav-menu/        -> Nav-Menu Component for Vertical layout (Previously VxSidebar)
│   |    |    ├── vx-tooltip/               -> Extended Tooltip Component (vx-tooltip)
│   |    |    ├── Logo.vue				    -> Logo Component For Dynamic Color
│   |    |    ├── TheFooter.vue             -> Footer Component
│   |    |    └── VxBreadcrumb.vue			-> Breadcrumb Component
│   │    │
│   |    ├── full-page/						-> Full page layout for pages like login
│   |    └── main/							-> Main layout
│   │
│   ├── plugins/         					-> theme plugins (auth0 currently)
│   ├── store/                              -> Vuex Store
│   ├── vendor/              				-> Vendor files
│   ├── views/              				-> View files for all pages
│   ├── App.vue                             -> Application main vue file
│   ├── axios.js             				-> axios (configuration) file
│   ├── globalComponents.js 				-> Gloablly registered components
│   ├── main.js            					-> Application main js file
│   └── router.js   						-> router file
│
├── .browserlistrc                          -> Browser support
├── .editorconfig			                -> Editor configuration file
├── .eslintrc.js                            -> ESLint Configuration
├── .gitignore  			                -> gitignore
├── auth_config.json	               		-> Auth0 credentials
├── babel.config.js                         -> Babel configuration
├── package.json                            -> Package json
├── postcss.config.js		                -> postcss configuration
├── README.md                               -> Readme
├── tailwind-v0.js			                -> v0.x Tailwind configuration
├── tailwind.config.js                      -> Tailwind configuration
├── themeConfig.js			                -> Vuexy Admin configuration
└── vue.config.js			                -> VueJS configuration
```

</box>

<box>

## SCSS Strucutre

Under the `vuexy-vx.x/src/assets/scss` you will find the following folder structure.

```
scss/  
├── main.scss               		-> main scss file
└── vuexy/                			-> Vuexy scss
    |
    ├── apps/						-> Apps scss
    ├── components/					-> Components scss
    ├── extraComponents/			-> Extra components scss
    ├── layout/						-> Layout specific scss
    ├── pages/                      -> Pages/Views scss
    ├── rtl/                        -> RTL style files
    ├── themes/						-> theme scss - Dark & semi-dark
    ├── _customClasses.scss 		-> Vuexy Admin Custom classes
    ├── _extraComponents.scss       -> Style of third party components/packages
    ├── _fixesVuesax.scss 			-> Vuesax style fixes/enhancements
    ├── _layout.scss
    ├── _misc.scss                  -> Miscellaneous scss
    ├── _rtl.scss                   -> RTL scss
    ├── _tailwindFix.scss           -> Tailwind fixes scss
    ├── _themes.scss                -> themes partial import
    ├── _transitions.scss  			-> VueJS Transitions
    ├── _typography.scss            -> Typography Styles
    └── _variables.scss             -> Vuexy Admin SCSS variables
```

</box>


<box>

## Vuex Store Structure

Under the `vuexy-vx.x/src/store/` you will find the following folder structure.

```
store/  
├── auth/                           -> auth module
├── calendar/                       -> calendar module         (Dynamic Import)
├── chat/                           -> chat module             (Dynamic Import)
├── data-list/                      -> Data-List module        (Dynamic Import)
├── eCommerce/                      -> e-commerce Store module (Dynamic Import)
├── email/                          -> email module            (Dynamic Import)
├── todo/                           -> todo module             (Dynamic Import)
├── user-management/                -> USer Management module  (Dynamic Import)
├── actions.js                      -> theme/component actions
├── getters.js                      -> theme/component getters
├── mutations.js                    -> theme/component mutations
├── state.js                        -> theme/component state
└── store.js                        -> main store
```

</box>


<box>

## Starter Kit

Folder structure of Vuexy Admin starter kit is as follow:

```
vuexy-vx.x/
│
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   ├── loader.css                          -> Initial Loader CSS
│   └── index.html                          -> Main HTML
│
├── src/
│   │                             
│   ├── assets/
│   |    ├── css/                           -> Tailwind, Feather & Loader CSS
│   |    ├── fonts/                         -> Feather Font Icons
│   |    ├── images/
│   |    ├── scss/                          -> Template SCSS files, check folder structure below
│   |    └── utils/                         -> utilities folder
│   │
│   ├── components/                         -> Vuexy Admin custom components
│   │
│   ├── layouts/                            
│   │    │
│   |    ├── components/                    -> Layout components
│   |    |    ├── customizer/               -> Customizer component
│   |    |    ├── horizontal-nav-menu/      -> Nav-Menu Component for Horizontal layout
│   |    |    ├── Navbar/                   -> Navbar Components for Vertical & Horizontal Layout + Fuzzy Search Items
│   |    |    ├── vertical-nav-menu/        -> Nav-Menu Component for Vertical layout (Previously VxSidebar)
│   |    |    ├── vx-tooltip/               -> Extended Tooltip Component (vx-tooltip)
│   |    |    ├── Logo.vue                  -> Logo Component For Dynamic Color
│   |    |    ├── TheFooter.vue             -> Footer Component
│   |    |    └── VxBreadcrumb.vue          -> Breadcrumb Component
│   │    │
│   |    ├── full-page/                     -> Full page layout for pages like login
│   |    └── main/                          -> Main layout
│   │
│   ├── store/                              -> Vuex Store
│   ├── views/                              -> View files for all pages
│   ├── App.vue                             -> Application main vue file
│   ├── globalComponents.js                 -> Gloablly registered components
│   ├── main.js                             -> Application main js file
│   └── router.js                           -> router file
│
├── .browserlistrc                          -> Browser support
├── .editorconfig                           -> Editor configuration file
├── .eslintrc.js                            -> ESLint Configuration
├── .gitignore                              -> gitignore
├── babel.config.js                         -> Babel configuration
├── package.json                            -> Package json
├── postcss.config.js                       -> postcss configuration
├── README.md                               -> Readme
├── tailwind-v0.js                          -> v0.x Tailwind configuration
├── tailwind.config.js                      -> Tailwind configuration
├── themeConfig.js                          -> Vuexy Admin configuration
└── vue.config.js                           -> VueJS configuration
```

</box>
