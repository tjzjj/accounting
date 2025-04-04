const routes = [
  // Public routes (EmptyLayout)
  {
    path: '/',
    redirect: '/admin-login' // Redirect root to admin login
  },
  {
    path: '/admin-login',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/admin/AdminLoginPage.vue') }
    ]
  },
  {
    path: '/user-login',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/users/UserLoginPage.vue') }
    ]
  },

  // Authenticated routes (MainLayout)
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('src/pages/admin/DashboardPage.vue') },
      {
        path: 'users', // Removed leading "/"
        children: [
          { path: 'pending', component: () => import('src/pages/admin/UserControlPendingPage.vue') },
          { path: 'accepted', component: () => import('src/pages/admin/UserControlAcceptedPage.vue') }
        ]
      },
      { path: 'access', component: () => import('src/pages/admin/UserAccessPage.vue') },
      { path: 'logs', component: () => import('src/pages/admin/LogsPage.vue') }
    ]
  }
];

export default routes;
