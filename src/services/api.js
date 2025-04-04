import { api } from 'boot/axios'

export default {
  adminLogin(credentials) {
    return api.post('/auth/admin/login', {
      ...credentials,
      is_admin: true // Explicitly mark as admin login
    })
  },
  
  // Add other API calls here later
  // getUser() { ... },
  // logout() { ... }
}