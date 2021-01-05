
module.exports = {
  base: '/demo/vuexy-vuejs-admin-dashboard-template/documentation/',

  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Open+Sans&display=swap` }],
    ['link', { rel: 'stylesheet', href: `https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css` }],
    // ['script',{},`(function(h,o,t,j,a,r){
    //         h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    //         h._hjSettings={hjid:816179,hjsv:6};
    //         a=o.getElementsByTagName('head')[0];
    //         r=o.createElement('script');r.async=1;
    //         r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    //         a.appendChild(r);
    //     })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`]
  ],
  docsDir: 'docs',
  host:'localhost',
  port: 7070,
  title: 'Vuexy Admin Documentation',
  description: 'Vuexy Admin Dashboard Template Documentation',
  vueThemes:{
    linksHome:[],
    footer:[
      {
        title:'Social',
        items:[
          {
            text:'GitHub',
            link:'https://github.com/pixinvent'
          },
          {
            text:'Uplabs',
            link:'https://www.uplabs.com/pixinvent'
          },
          {
            text:'Twitter',
            link:'https://twitter.com/pixinvents'
          },
          {
            text:'Facebook',
            link:'https://www.facebook.com/pixinvents'
          },
        ]
      },
      {
        title:'Help',
        items:[
          {
            text:'Support',
            link:'http://support.pixinvent.com/'
          },
          {
            text:'Faq',
            link:'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/landing/#faq'
          },
          {
            text:'Knowledge Base',
            link:'https://pixinvent.ticksy.com/'
          },
        ]
      },
      {
        title:'More',
        items:[
          {
            text:'Gitlab Access',
            link:'https://pixinvent.com/gitlab-access-provider-for-envato/'
          },
          {
            text:'Portfolio',
            link:'https://1.envato.market/vuexy_admin'
          },
          {
            text:'Pixinvent',
            link:'https://pixinvent.com/'
          },
          {
            text:'Vuexy Admin',
            link:'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/landing/'
          },
        ]
      }
    ]
  },
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    // repo: 'lusaxweb/vuesax',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    // docsRepo: 'lusaxweb/vuesax',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    // docsBranch: 'master',
    // defaults to true, set to false to disable
    // editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    logo:'/vuexy-admin-vertical.png',
    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          '/',
          '/gettingStarted/',
          '/gettingStarted/prerequisites',
         ]
      },
      {
        title: 'Development',
        collapsable: false,
        children: [
          '/development/installation',
          '/development/folderStructure',
          '/development/themeConfigurations',
          '/development/routing',
          '/development/appLoader',
          '/development/localization',
          '/development/deployment',
          '/development/laravelIntegration',
          '/development/algoliaIntegration',
         ]
      },
      {
        title: 'FAQ',
        collapsable: false,
        children: [
          '/faq/firebase',
          '/faq/auth0',
          '/faq/jwt',
          '/faq/authentication',
          '/faq/rtl',
          '/faq/other',
         ]
      },
      {
        title: 'Migrations',
        collapsable: false,
        children: [
          '/migrations/version-4',
          '/migrations/laravel-6.x-to-7.x',
         ]
      },
      {
        title: 'Auth & ACL',
        collapsable: false,
        children: [
          '/auth-and-acl/auth0Integration',
          '/auth-and-acl/firebaseIntegration',
          '/auth-and-acl/permissionControl',
         ]
      },
      {
        title: 'Customization',
        collapsable: false,
        children: [
          '/customization/',
          '/customization/customNavbar',
          '/customization/tailwindColors',
          '/customization/customClasses',
         ]
      },
      // {
      //   title: 'Structure & Routing',
      //   collapsable: false,
      //   children: [
      //     '/structure-routing/',
      //    ]
      // },
      {
        title: 'Layout',
        collapsable: false,
        children: [
          '/layout/',
         ]
      },
      {
        title: 'Theme',
        collapsable: false,
        children: [
          '/theme/',
          '/theme/icon'
         ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/',
          // '/components/selects',
          '/components/notifications',
          '/components/switch',
          '/components/checkbox',
          '/components/radio',
          '/components/input',
          '/components/dialog',
          '/components/tabs',
          '/components/slider',
          '/components/number',
          '/components/tooltip',
          '/components/upload',
          '/components/loading',
          '/components/popup',
          '/components/avatar',
          '/components/breadcrumb',
          '/components/alert',
          '/components/chip',
          '/components/divider',
          '/components/progress',
          '/components/card',
          '/components/list',
          '/components/pagination',
          '/components/navbar',
          '/components/sideBar',
          '/components/dropDown',
          '/components/table',
          '/components/textarea',
          '/components/collapse',
          '/components/images'
          // '/components/timePicker',
          /*New Component*/
        ]
      },
      {
        title: 'Custom Components',
        collapsable: false,
        children: [
          '/customComponents/',
          '/customComponents/card',
          '/customComponents/list',
          '/customComponents/autoSuggest',
          '/customComponents/statisticsCardLine',
          '/customComponents/changeTimeDuration',
          '/customComponents/vxInputGroup',
          '/customComponents/buttonGroup',
          '/customComponents/horizontalNavMenu',
          '/customComponents/horizontalNavMenuGroup',
          '/customComponents/horizontalNavMenuItem',
         ]
      },
      {
        title: 'Extended Components',
        collapsable: false,
        children: [
          '/extendedComponents/',
          '/extendedComponents/sidebarGroup',
          '/extendedComponents/sidebarItem',
          '/extendedComponents/tooltip',
         ]
      },
      ['/thirdPartyPlugins', 'Third-Party Plugins'],
    ]
  }
}
