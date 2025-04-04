const routes = [
  // Public routes (EmptyLayout)
  {
    path: '/',
    redirect: '/admin-login'
  },
  {
    path: '/admin-login',
    component: () => import('layouts/EmptyLayout.vue'),
    meta: {
      guestOnly: false,
      title: 'Admin Login',
      layout: 'empty'
    },
    children: [
      { 
        path: '', 
        component: () => import('src/pages/admin/AdminLoginPage.vue'),
        name: 'AdminLogin'
      }
    ]
  },
  {
    path: '/user-login',
    component: () => import('layouts/EmptyLayout.vue'),
    meta: {
      guestOnly: false,
      title: 'User Login',
      layout: 'empty'
    },
    children: [
      { 
        path: '', 
        component: () => import('src/pages/users/UserLoginPage.vue'),
        name: 'UserLogin'
      }
    ]
  },

  // Authenticated routes (MainLayout)
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: false,
      layout: 'main'
    },
    children: [
      { 
        path: 'dashboard', 
        component: () => import('src/pages/admin/DashboardPage.vue'),
        meta: {
          title: 'Dashboard',
          requiresAdmin: false // Added explicit admin requirement
        },
        name: 'AdminDashboard'
      },
      {
        path: 'users',
        meta: { 
          requiresAdmin: false,
          title: 'User Management'
        },
        children: [
          { 
            path: 'pending', 
            component: () => import('src/pages/admin/UserControlPendingPage.vue'),
            meta: {
              title: 'Pending Users'
            },
            name: 'PendingUsers'
          },
          { 
            path: 'accepted', 
            component: () => import('src/pages/admin/UserControlAcceptedPage.vue'),
            meta: {
              title: 'Approved Users'
            },
            name: 'ApprovedUsers'
          }
        ]
      },
      { 
        path: 'access', 
        component: () => import('src/pages/admin/UserAccessPage.vue'),
        meta: {
          requiresAdmin: false,
          title: 'Access Control'
        },
        name: 'AccessControl'
      },
      { 
        path: 'logs', 
        component: () => import('src/pages/admin/LogsPage.vue'),
        meta: {
          requiresAdmin: false,
          title: 'System Logs'
        },
        name: 'SystemLogs'
      },
      // Admin section catch-all
      {
        path: ':catchAll(.*)*',
        component: () => import('pages/admin/ErrorNotFound.vue'),
        meta: {
          title: 'Not Found'
        }
      }
    ]
  },
  // Global catch-all
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/admin/ErrorNotFound.vue'),
    meta: {
      title: 'Not Found'
    }
  }
]

export default routes