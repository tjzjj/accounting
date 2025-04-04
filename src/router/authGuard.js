export default (router) => {
  router.beforeEach((to) => {
    const token = localStorage.getItem('auth_token')
    const user = JSON.parse(localStorage.getItem('user')) // Assuming user data is stored
    const isAuthenticated = !!token
    const isAdmin = user?.role === 'admin'

    // Redirect unauthenticated users
    if (to.meta.requiresAuth && !isAuthenticated) {
      return { name: 'AdminLogin' }
    }

    // Block non-admins from admin routes
    if (to.meta.requiresAdmin && !isAdmin) {
      return { name: 'Unauthorized' } // Ensure this route exists
    }

    // Redirect authenticated users away from login pages
    if (to.meta.guestOnly && isAuthenticated) {
      return { 
        name: isAdmin ? 'AdminDashboard' : 'UserDashboard' 
      }
    }
  })
}
