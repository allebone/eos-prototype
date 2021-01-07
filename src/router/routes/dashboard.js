export default [
  {
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: () => import('@/views/dashboard/analytics/Analytics.vue'),
  },
  {
    path: '/dashboard/ecommerce',
    name: 'dashboard-ecommerce',
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
  },
{
    path: '/dashboard/readiness',
    name: 'dashboard-readiness',
    component: () => import('@/views/dashboard/readiness/Readiness.vue'),
  },
]
