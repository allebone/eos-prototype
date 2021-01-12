export default [
  {
    title: 'Home',
    icon: 'HomeIcon',
    tag: '2',
    tagVariant: 'light-warning',
    header: 'Dashboards',
    children: [
      {
        title: 'Mobile Program',
        route: 'dashboard-ecommerce',
        icon: 'TabletIcon',
      },
      {
        title: 'OMNI Analytics',
        route: 'dashboard-analytics',
        icon: 'ActivityIcon',
      },
      {
        title: 'Readiness Assessment',
        route: 'dashboard-readiness',
        icon: 'ActivityIcon',
      },
    ],
  }
]
